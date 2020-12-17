import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './styles.css';

const ChatWidget = ({ automaticToggle, setOpen, ...forwardProps }) => {
  const baseComponent = (
    <Widget
      senderPlaceHolder="Type here your message"
      showCloseButton={true}
      fullScreenMode={false}
      autofocus={true}
      showTimeStamp={true}
      launcherOpenLabel="Chat opened"
      launcherClosedLabel="Chat closed"
      sendButtonAlt="Send"
      {...forwardProps}
    />
  );

  return (
    <>{automaticToggle ? baseComponent : <div onClick={setOpen}>{baseComponent}</div>}</>
  );
};

export {
  deleteMessages,
  addResponseMessage,
  addUserMessage,
  setBadgeCount,
} from 'react-chat-widget';

export default ChatWidget;
