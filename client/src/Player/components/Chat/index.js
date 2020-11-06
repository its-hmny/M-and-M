import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './styles.css';

import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:8000');
const useQuery = () => Object.fromEntries(new URLSearchParams(useLocation().search));

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
    axios.put(`http://localhost:8000/stats/${storyId}`).then(resp => {
      const { player, evaluator } = resp.data.payload;
      setIDs({ player, evaluator });
    });
  }, [storyId]);

  socket.on('chat-msg-recv', payload => {
    const { story, senderId, receiverId, msg } = payload;
    if (story === storyId && senderId === ids.evaluator && receiverId === ids.player)
      addResponseMessage(msg);
  });

  return (
    <Widget
      title="Evaluator"
      subtitle="The evaluator will help you in case you have any problem"
      senderPlaceHolder="Type here your message"
      showCloseButton={true}
      fullScreenMode={false}
      autofocus={true}
      showTimeStamp={true}
      handleNewUserMessage={sendHandler}
      launcherOpenLabel="Chat opened"
      launcherClosedLabel="Chat closed"
      sendButtonAlt="Send"
    />
  );
};

export default Chat;
