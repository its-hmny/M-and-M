import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import io from 'socket.io-client';

import 'react-chat-widget/lib/styles.css';
import './customstyle.css';

const socket = io('http://localhost:8000');

const Chat = () => {
  const sendHandler = msg => socket.emit('chat-msg-send', { senderId: 1, receiverId: 0, msg });

  socket.on('chat-msg-recv', payload => {
    const { senderId, receiverId, msg } = payload;
    console.log(senderId, receiverId, msg);
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
