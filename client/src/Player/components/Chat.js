import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './customstyle.css';

const Chat = () => {
  const sendHandler = msg => alert(msg);

  return (
    <Widget 
      title="Evaluator" 
      subtitle="The evaluator will help you in case you have any problem"
      senderPlaceHolder="Type here your message"
      showCloseButton={true} fullScreenMode={false} autofocus={true}
      showTimeStamp={true} handleNewUserMessage={sendHandler}
      launcherOpenLabel="Chat opened"
      launcherClosedLabel="Chat closed"
      sendButtonAlt="Send"
    />
  );
};


export default Chat;
