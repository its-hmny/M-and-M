import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import 'react-chat-widget/lib/styles.css';
import './customstyle.css';
import axios from 'axios';

const socket = io('http://localhost:8000');
const useQuery = () => Object.fromEntries(new URLSearchParams(useLocation().search));

const Chat = () => {
  let playerID = undefined,
    evaluatorID = undefined;
  const [storyId, _] = useState(useQuery().storyId);
  const sendHandler = msg =>
    socket.emit('chat-msg-send', { senderId: playerID, receiverID: evaluatorID, msg });

  useEffect(() => {
    axios.get(`http://localhost:8000/chats/${storyId}`).then(resp => {
      const { player, evaluator } = resp.data.payload;
      playerID = player;
      evaluatorID = evaluator;
    });
  }, []);

  socket.on('chat-msg-recv', payload => {
    const { senderId, receiverId, msg } = payload;
    if (senderId === evaluatorID && receiverId === playerID) {
      addResponseMessage(msg);
    }
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
