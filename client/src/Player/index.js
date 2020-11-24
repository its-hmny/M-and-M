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
      return {
        onSubmit: (isCorrect, selectedAnswers) => {
          const nextNode = storyProps.nextNode[isCorrect];
          storyContext.moveTo(nextNode);
          storyContext.updateStats({ id, name, data: selectedAnswers });
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

  /* =========================== SOCKET STUFF ======================== */
  useEffect(() => {
    // generate IDs for player and paired evaluator and save them
    const initChat = async () => {
      try {
        const res = await axios.put(`stats/${storyId}`);
        const { player, evaluator } = res.data.payload;
        setIds({ player, evaluator });
        // Update chat when message is received
        socket.on('chat-msg-recv', payload => {
          const { story, senderId, receiverId, msg } = payload;
          if (story === storyId && senderId === evaluator && receiverId === player)
            addResponseMessage(msg);
        });
      } catch (err) {
        console.error(err);
      }
    };

    initChat();

    return () => socket.removeListener('chat-msg-recv');
  }, [storyId]);

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

  // create "context" for accessing stories and story props
  const storyContext = useMemo(
    () => ({
      currentNodeId,
      moveTo: node => {
        setCurrentNodeId(node);
        // whenever position changes evaluator is updated
        socket.emit('update:position', {
          story: storyId,
          senderId: ids.player,
          receiverId: ids.evaluator,
          payload: { currentNode: node },
        });
      },
      updateStats: payload => {
        socket.emit('update:stats', {
          story: storyId,
          senderId: ids.player,
          receiverId: ids.evaluator,
          payload,
        });
      },
    }),
    [currentNodeId]
  );

  // load components for this position whenever position changes
  useEffect(() => {
    // if (currentNodeId) is insufficient because 0 means false -.-
    // Stupid JS! I miss you Option<T>...sigh
    if (currentNodeId != null) {
      const { components } = story.nodes.find(node => node.id === currentNodeId);
      const content = buildViewContent(components, storyContext);
      setViewContent(content);
    }
  }, [currentNodeId, story, storyContext]);

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
