import React, { useState, useEffect } from 'react';
import ChatWidget, {
  deleteMessages,
  addResponseMessage,
  addUserMessage,
  setBadgeCount,
} from '../../common/ChatWidget';
import { useEvaluator } from '../context/EvaluatorContext';

const Chat = ({ onOpen, isOpen, socket }) => {
  const {
    selectedPlayer,
    storyId,
    playersLog,
    pushNotification,
    updatePlayerLog,
  } = useEvaluator();
  const { name, id, avatar } = selectedPlayer || {};
  const [conversations, setConversations] = useState({});

  useEffect(() => {
    const savedChats = {};
    playersLog.forEach(player => {
      const { id, chatLog } = player;
      savedChats[id] = chatLog;
    });
    setConversations(savedChats);
  }, [playersLog]);

  useEffect(() => {
    deleteMessages();
    if (conversations[id]) {
      conversations[id].forEach(msg => {
        const { sender, content } = msg;
        sender === `evaluator${storyId}`
          ? addUserMessage(content)
          : addResponseMessage(content);
      });
    }
    setBadgeCount(selectedPlayer.unreadMessages);
  }, [conversations, selectedPlayer, storyId, id]);

  const sendHandler = msg => {
    // Saves the new message in the storage
    const toSave = { sender: `evaluator${storyId}`, content: msg };
    const currentChat = conversations[id];
    conversations[id] = currentChat !== undefined ? [...currentChat, toSave] : [toSave];

    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: `evaluator${storyId}`,
      receiverId: id,
      msg,
    });

    setConversations({ ...conversations });
  };

  useEffect(() => {
    socket.on('chat-msg-recv', payload => {
      const { story, senderId, receiverId, msg } = payload;
      if (story === storyId && receiverId === `evaluator${storyId}`) {
        // Saves the new message in the storage
        const toSave = { sender: senderId, content: msg };
        const currentChat = conversations[senderId];
        conversations[senderId] =
          currentChat !== undefined ? [...currentChat, toSave] : [toSave];
        const sender = playersLog.find(player => player.id === senderId);
        sender.unreadMessages++;
        updatePlayerLog(senderId, { unreadMessages: sender.unreadMessages });
        pushNotification(`New message from ${sender.name || sender.id}`);
        setConversations({ ...conversations });
      }
    });
    return () => socket.removeListener('chat-msg-recv');
  }, [socket, conversations, storyId, playersLog, updatePlayerLog, pushNotification]);

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
