/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect, useMemo, useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import shortid from 'shortid';

import axios, { useQuery } from '../common/shared';
import { SERVER_URL } from '../common/constants';

import * as Elements from '../common/Elements';
import Chat from './components/Chat';
import PlayerLobby from './components/PlayerLobby';
import { addResponseMessage } from '../common/ChatWidget';
import * as ROUTES from '../routes';

import io from 'socket.io-client';

// `Story` param is an object that stores properties needed for computing
// storyProps for this specific component
const createStoryProps = (component, storyRuntime) => {
  const { id, name, story: storyProps } = component;

  switch (name) {
    case 'Button':
    case 'ButtonImage':
      // Button and ButtonImage have 1 story related prop: onClick
      return {
        onClick: () => storyRuntime.moveTo(storyProps.nextNode),
      };
    case 'SingleAnsChoices':
    case 'MultiAnsChoices':
    case 'SingleAnsChoicesImages':
    case 'MultiAnsChoicesImages':
      // if more than one answer, we sum all point values
      return {
        onSubmit: (isCorrect, selectedAnswers) => {
          const nextNode = storyProps.nextNode[isCorrect];
          storyRuntime.moveTo(nextNode);
          storyRuntime.updateStats({ id, name, data: selectedAnswers });
          storyRuntime.updateScore(
            selectedAnswers.reduce(
              (points, answer) => points + (Number(answer.points) || 0),
              0
            )
          );
        },
      };
    case 'Camera':
      return {
        onSendPhoto: pic => {
          storyRuntime.moveTo(storyProps.nextNode);
          storyRuntime.updateStats({ id, name, data: pic });
        },
      };
    case 'Input':
    case 'TextArea':
      return {
        onSubmit: answer => {
          storyRuntime.moveTo(storyProps.nextNode);
          storyRuntime.updateStats({ id, name, data: answer });
        },
      };
    case 'Points':
      return {
        points: storyRuntime.score,
      };
    default:
      throw new Error(
        `Cannot compute story props for ${name} because this component does not exist.`
      );
  }
};

// create component tree
const buildViewContent = (components, storyRuntime) =>
  components.map(component => {
    const { story, children, ...rest } = component;
    const storyProps = story ? createStoryProps(component, storyRuntime) : {};
    // compound components must keep their "atoms" in children prop, or we can't
    // know what to load (i.e. what is a prop and what is a renderable component)
    const props = {
      ...storyProps,
      ...rest,
      children: children && buildViewContent(children, storyRuntime),
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

  const [forceUpdate, setForceUpdate] = useState(shortid.generate());

  const socket = useMemo(() => {
    const tmp = io(SERVER_URL, { query: { type: 'player', storyId } });
    // Once the connection is established the socket id became the player id
    tmp.on('connect', () => setIds({ player: tmp.id, evaluator: `evaluator${storyId}` }));
    return tmp;
  }, [storyId]);

  /* =========================== SOCKET STUFF ======================== */
  useEffect(() => {
    socket.on('chat-msg-recv', payload => {
      const { player, evaluator } = ids;
      const { story, senderId, receiverId, msg } = payload;
      if (story === storyId && senderId === evaluator && receiverId === player)
        addResponseMessage(msg);
    });

    return () => socket.removeListener('chat-msg-recv');
  }, [socket, storyId, ids]);

  useEffect(() => {
    const onEvalPts = payload => {
      const { story, senderId, receiverId, points } = payload;
      if (story === storyId && senderId === ids.evaluator && receiverId === ids.player) {
        setScore(score => score + points);
      }
    };

    socket.on('eval-pts', onEvalPts);
    return () => socket.removeListener('eval-pts', onEvalPts);
  }, [socket, storyId, ids]);

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
        document.title = newStory.title || document.title;
        setStory(newStory);
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
      score,
      // Whenever position changes evaluator is updated
      moveTo: node => {
        //If the node is final the player is marked as completed
        if (
          story !== null &&
          story.nodes.find(iter => iter.id === node && iter.isFinal)
        ) {
          socket.emit('update:eval', {
            story: storyId,
            playerId: ids.player,
            patch: { hasFinished: true },
          });
        }

        socket.emit('update:position', {
          story: storyId,
          senderId: ids.player,
          receiverId: ids.evaluator,
          payload: { activityNodeId: currentNodeId },
        });
        setCurrentNodeId(node);
        setForceUpdate(shortid.generate());
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
        socket.emit('update:eval', {
          story: storyId,
          playerId: ids.player,
          patch: { score: score + points },
        });
        setScore(score + points);
      },
    }),
    [socket, currentNodeId, ids, score, storyId, story]
  );

  // load components for this position whenever position changes
  useEffect(() => {
    if (currentNodeId != null) {
      const { components } = story.nodes.find(node => node.id === currentNodeId);
      const content = buildViewContent(components, storyRuntime);
      setViewContent(content);
    }
  }, [currentNodeId, story, storyRuntime]);

  if (status === 'LOADING') {
    const saveChanges = patch =>
      socket.emit('update:eval', { story: storyId, playerId: ids.player, patch });

    return (
      <PlayerLobby
        story={story}
        onStart={node => {
          setStatus('SUCCESS');
          setCurrentNodeId(node.id);
        }}
        saveChanges={saveChanges}
      />
    );
  }

  if (status === 'FAILURE') {
    return <Redirect to={ROUTES.NOTFOUND} />;
  }

  return (
    <Fragment>
      <div
        key={forceUpdate}
        css={css`
          width: 100vw;
          height: 100vh;
          overflow-y: auto;
          padding: 10px;
          animation-name: fade;
          animation-duration: 2200ms;

          @keyframes fade {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      >
        {viewContent}
      </div>
      <Chat onSend={handleSend} socket={socket} />
    </Fragment>
  );
};

export default Player;
