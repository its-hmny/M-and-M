import React, { useState, useEffect } from 'react';
import ChatWidget, {
  deleteMessages,
  addResponseMessage,
  addUserMessage,
  setBadgeCount,
} from '../../common/ChatWidget';
import { useEvaluator } from '../context/EvaluatorContext';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const PlayersChat = () => {
  const { playerList, selectedPlayer, storyId } = useEvaluator();
  const [conversations, setConversations] = useState({});

  const { playerName, playerAvatar } =
    playerList.find(item => item.playerId === selectedPlayer) || {};

  useEffect(() => {
    deleteMessages();
    if (conversations[selectedPlayer] !== undefined)
      conversations[selectedPlayer].forEach(item => {
        console.log('Iteration');
        if (item.id === `evaluator${storyId}`) addUserMessage(item.msg);
        else addResponseMessage(item.msg);
      });
    setBadgeCount(0);
  }, [conversations, selectedPlayer, storyId]);

  const sendHandler = msg => {
    if (conversations[selectedPlayer] !== undefined) {
      conversations[selectedPlayer].push({ id: `evaluator${storyId}`, msg });
    } else {
      conversations[selectedPlayer] = [{ id: `evaluator${storyId}`, msg }];
    }
    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: `evaluator${storyId}`,
      receiverId: selectedPlayer,
      msg,
    });
    setConversations({ ...conversations });
  };

  useEffect(() => {
    socket.on('chat-msg-recv', payload => {
      const { story, senderId, receiverId, msg } = payload;
      if (story === storyId && receiverId === `evaluator${storyId}`) {
        if (conversations[senderId] !== undefined) {
          conversations[senderId].push({ id: senderId, msg });
        } else {
          conversations[senderId] = [{ id: senderId, msg }];
        }
        setConversations({ ...conversations });
      }
    });
    return () => socket.removeListener('chat-msg-recv');
  }, [conversations, storyId]);

  return (
    <ChatWidget
      title={playerName || selectedPlayer}
      subtitle="Respond to the player's request"
      handleNewUserMessage={sendHandler}
      profileAvatar={playerAvatar || undefined}
    />
  );
};

export default PlayersChat;
