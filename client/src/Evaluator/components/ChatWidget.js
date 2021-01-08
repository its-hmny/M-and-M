import React, { useEffect } from 'react';
import ChatWidget from '../../common/ChatWidget';
import {
  deleteMessages,
  addResponseMessage,
  addUserMessage,
  setBadgeCount,
} from 'react-chat-widget';
import { useEvaluator } from '../context/EvaluatorContext';

const Chat = ({ onOpen, isOpen }) => {
  const { selectedPlayer, storyId, updatePlayerLog, socket } = useEvaluator();
  const { name, id, avatar, chatLog, unreadMessages } = selectedPlayer || {};

  useEffect(() => {
    deleteMessages();
    if (chatLog) {
      chatLog.forEach(msg => {
        const { sender, content } = msg;
        sender === `evaluator${storyId}`
          ? addUserMessage(content)
          : addResponseMessage(content);
      });
    }
    setBadgeCount(unreadMessages);
  }, [chatLog, unreadMessages, storyId]);

  const sendHandler = msg => {
    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: `evaluator${storyId}`,
      receiverId: id,
      msg,
    });
  };

  return (
    <ChatWidget
      automaticToggle={false}
      setOpen={() => {
        updatePlayerLog(selectedPlayer.id, { unreadMessages: 0 });
        onOpen();
      }}
      isOpen={isOpen}
      title={name || id}
      subtitle="Respond to the player's request"
      handleNewUserMessage={sendHandler}
      profileAvatar={avatar || undefined}
    />
  );
};

export default Chat;
