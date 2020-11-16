import React, { useState, useEffect } from 'react';
import axios, { useQuery } from '../../../common/shared';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './styles.css';

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
  }, [ids]);

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
