import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWidget, {
  deleteMessages,
  addResponseMessage,
  addUserMessage,
  setBadgeCount,
} from '../../common/ChatWidget';
import { useEvaluator } from '../context/EvaluatorContext';

const socket = io('http://localhost:8000');

const Chat = ({ onOpen }) => {
  const { selectedPlayer, storyId } = useEvaluator();
  // ToDo change with the conversation saved in the server here under
  const [conversations, setConversations] = useState({});

  const { name, id, avatar } = selectedPlayer;

  const sendHandler = msg => {
    // Saves the new message in the storage
    const toSave = { senderId: `evaluator${storyId}`, content: msg };
    const currentChat = conversations[selectedPlayer.id];
    conversations[selectedPlayer.id] =
      currentChat !== undefined ? [...currentChat, toSave] : [toSave];

    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: `evaluator${storyId}`,
      receiverId: selectedPlayer.id,
      msg,
    });

    setConversations({ ...conversations });
  };

  useEffect(() => {
    deleteMessages();
    if (!selectedPlayer.chatLog) return;

    selectedPlayer.chatLog.forEach(msg => {
      const { senderId, content } = msg;
      senderId === `evaluator${storyId}`
        ? addUserMessage(content)
        : addResponseMessage(content);
    });
    setBadgeCount(0);
  }, [conversations, selectedPlayer, storyId]);

  useEffect(() => {
    socket.on('chat-msg-recv', payload => {
      const { story, senderId, receiverId, msg } = payload;
      if (story === storyId && receiverId === `evaluator${storyId}`) {
        // Saves the new message in the storage
        const toSave = { senderId, content: msg };
        const currentChat = conversations[senderId];
        conversations[senderId] =
          currentChat !== undefined ? [...currentChat, toSave] : [toSave];
        setConversations({ ...conversations });
      }
    });
    return () => socket.removeListener('chat-msg-recv');
  }, [conversations, storyId]);

  return (
    <ChatWidget
      automaticToggle={false}
      setOpen={onOpen}
      title={name || id}
      subtitle="Respond to the player's request"
      handleNewUserMessage={sendHandler}
      profileAvatar={avatar || undefined}
    />
  );
};

export default Chat;
