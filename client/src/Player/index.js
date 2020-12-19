import React, { useEffect, useMemo, useState } from 'react';
import axios, { useQuery } from '../common/shared';

import * as Elements from '../common/Elements';
import Chat from './components/Chat';
import { addResponseMessage } from '../common/ChatWidget';

import io from 'socket.io-client';
const socket = io('http://localhost:8000');

// `Story` param is an object that stores properties needed for computing
// storyProps for this specific component
const createStoryProps = (component, storyContext) => {
  const { id, name, story: storyProps } = component;

  switch (name) {
    case 'Button':
      // Button has 1 story related prop: onClick
      return {
        onClick: () => storyContext.moveTo(storyProps.nextNode),
      };
    case 'SingleAnsChoices':
    case 'MultiAnsChoices':
      // if more than one answer, we sum all point values
      return {
        onSubmit: (isCorrect, selectedAnswers) => {
          const nextNode = storyProps.nextNode[isCorrect];
          storyContext.moveTo(nextNode);
          storyContext.updateStats({ id, name, data: selectedAnswers });
          storyContext.updateScore(
            selectedAnswers.reduce((points, answer) => points + answer.points, 0)
          );
        },
      };
    case 'Input':
    case 'TextArea':
      return {
        onSubmit: answer => {
          storyContext.moveTo(storyProps.nextNode);
          storyContext.updateStats({ id, name, data: answer });
        },
      };
    default:
      throw new Error(
        `Cannot compute story props for ${name} because this component does not exist.`
      );
  }
};

// create component tree
const buildViewContent = (components, storyContext) =>
  components.map(component => {
    const { story, children, ...rest } = component;
    const storyProps = story ? createStoryProps(component, storyContext) : {};
    // compound components must keep their "atoms" in children prop, or we can't
    // know what to load (i.e. what is a prop and what is a renderable component)
    const props = {
      ...storyProps,
      ...rest,
      children: children && buildViewContent(children, storyContext),
    };
    const Element = Elements[component.name];
    return <Element key={component.id} {...props} />;
  });

const Player = () => {
  const { storyId } = useQuery();
  // IDs for who I am (ids.player) and who evaluates me (ids.evaluator)
  const [ids, setIds] = useState({
    player: '',
    evaluator: '',
  });
  const [story, setStory] = useState(null);
  // for waiting for story fetch
  const [status, setStatus] = useState('LOADING');
  // components for this page
  const [viewContent, setViewContent] = useState(null);
  // current position in story
  const [currentNodeId, setCurrentNodeId] = useState(null);
  // point total
  const [score, setScore] = useState(0);

  /* =========================== SOCKET STUFF ======================== */
  useEffect(() => {
    let msgReceivedListener;
    // generate IDs for player and paired evaluator and save them
    const initChat = async () => {
      try {
        const res = await axios.put(`stats/${storyId}`);
        const { player, evaluator } = res.data.payload;
        setIds({ player, evaluator });

        // Update chat when message is received
        msgReceivedListener = payload => {
          const { story, senderId, receiverId, msg } = payload;
          if (story === storyId && senderId === evaluator && receiverId === player)
            addResponseMessage(msg);
        };

        socket.on('chat-msg-recv', msgReceivedListener);
      } catch (err) {
        console.error(err);
      }
    };

    initChat();

    return () => socket.removeListener('chat-msg-recv', msgReceivedListener);
  }, [storyId]);

  useEffect(() => {
    const onEvalPts = payload => {
      const { story, senderId, receiverId, points } = payload;
      if (story === storyId && senderId === ids.evaluator && receiverId === ids.player) {
        setScore(score => score + points);
      }
    };

    socket.on('eval-pts', onEvalPts);
    return () => socket.removeListener('eval-pts', onEvalPts);
  }, [storyId, ids]);

  const handleSend = msg =>
    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: ids.player,
      receiverId: ids.evaluator,
      msg,
    });

  /* ============================ STORY STUFF ========================== */
  // Story fetching when story is set
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`stories/${storyId}`);
        const newStory = res.data.payload;
        setStory(newStory);
        setCurrentNodeId(newStory.nodes[0].id);
        setStatus('SUCCESS');
      } catch (err) {
        console.error(err);
        setStatus('FAILURE');
      }
    };

    fetchStory();
  }, [storyId]);

  // story runtime provides functions and data for accessing stories and story props
  const storyRuntime = useMemo(
    () => ({
      currentNodeId,
      moveTo: node => {
        // whenever position changes evaluator is updated
        socket.emit('update:position', {
          story: storyId,
          senderId: ids.player,
          receiverId: ids.evaluator,
          payload: { activityNodeId: currentNodeId },
        });
        setCurrentNodeId(node);
      },
      updateStats: payload => {
        socket.emit('update:stats', {
          story: storyId,
          nodeId: currentNodeId,
          senderId: ids.player,
          receiverId: ids.evaluator,
          payload,
        });
      },
      updateScore: points => {
        setScore(score => score + points);
        socket.emit('update:score', {
          story: storyId,
          senderId: ids.player,
          receiverId: ids.evaluator,
          payload: { score },
        });
      },
    }),
    [currentNodeId, ids, score, storyId]
  );

  // load components for this position whenever position changes
  useEffect(() => {
    // if (currentNodeId) is insufficient because 0 means false -.-
    // Stupid JS! I miss you Option<T>...sigh
    if (currentNodeId != null) {
      const { components } = story.nodes.find(node => node.id === currentNodeId);
      const content = buildViewContent(components, storyRuntime);
      setViewContent(content);
    }
  }, [currentNodeId, story, storyRuntime]);

  if (status === 'LOADING') {
    return <p>Loading story...</p>;
  }

  if (status === 'FAILURE') {
    return <p>An error occured while loading story. Try refresh page.</p>;
  }

  return (
    <>
      <div>{viewContent}</div>
      <Chat onSend={handleSend} />
    </>
  );
};

export default Player;
