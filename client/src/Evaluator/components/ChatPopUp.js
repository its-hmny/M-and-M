import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { useEvaluator } from '../context/EvaluatorContext';

import 'react-chat-widget/lib/styles.css';

const ChatPopUp = () => {
  // To "force" open or close widget toggleWidget();
  const { playerList, selectedPlayer, storyId, socket } = useEvaluator();
  const { playerName, playerAvatar } =
    playerList.find(item => item.playerId === selectedPlayer) || {};

  const sendHandler = msg =>
    socket.emit('chat-msg-send', {
      story: storyId,
      senderId: 'evaluatortest',
      receiverID: selectedPlayer,
      msg,
    });

  //addResponseMessage(msg);

  return (
    <Widget
      title={playerName || selectedPlayer}
      subtitle=""
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
