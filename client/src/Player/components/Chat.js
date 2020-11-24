import React, { useState, useEffect } from 'react';
import axios, { useQuery } from '../../common/shared';

import ChatWidget, { addResponseMessage } from '../../common/ChatWidget';

// Socket initialization
import io from 'socket.io-client';
const socket = io('http://localhost:8000');

const Chat = () => {
  const [ids, setIDs] = useState({});
  const storyId = useQuery().storyId;

  const sendHandler = msg =>
    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: ids.player,
      receiverId: ids.evaluator,
      msg,
    });

  useEffect(() => {
    axios.put(`stats/${storyId}`).then(resp => {
      const { player, evaluator } = resp.data.payload;
      setIDs({ player, evaluator });
    });
  }, [storyId]);

  useEffect(() => {
    socket.on('chat-msg-recv', payload => {
      const { story, senderId, receiverId, msg } = payload;
      if (story === storyId && senderId === ids.evaluator && receiverId === ids.player)
        addResponseMessage(msg);
    });

    return () => socket.removeListener('chat-msg-recv');
  }, [storyId, ids]);

  return (
    <ChatWidget
      title="Evaluator"
      subtitle="The evaluator will help you in case you have any problem"
      handleNewUserMessage={sendHandler}
    />
  );
};

export default Chat;
