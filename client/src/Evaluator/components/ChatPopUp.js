import React, { useState, useEffect } from 'react';
import {
  Widget,
  deleteMessages,
  addResponseMessage,
  addUserMessage,
} from 'react-chat-widget';
import { useEvaluator } from '../context/EvaluatorContext';
import io from 'socket.io-client';

import 'react-chat-widget/lib/styles.css';

const socket = io('http://localhost:8000');

const ChatPopUp = () => {
  // To "force" open or close widget toggleWidget();
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
    //setConversations({ ...conversations });
  };

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

  return (
    <Widget
      title={playerName || selectedPlayer}
      subtitle="Respond to the player's request"
      senderPlaceHolder="Type here your message"
      showCloseButton={true}
      fullScreenMode={false}
      autofocus={true}
      showTimeStamp={true}
      handleNewUserMessage={sendHandler}
      launcherOpenLabel="Player chat opened"
      launcherClosedLabel="Player chat closed"
      sendButtonAlt="Send"
      profileAvatar={playerAvatar || undefined}
    />
  );
};

export default ChatPopUp;
