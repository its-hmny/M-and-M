import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './styles.css';

const useStyles = makeStyles({
  wrapper: {
    '& > .rcw-widget-container': {
      width: props => !props.isOpen && 'unset',
    },
  },
});

const ChatWidget = ({ automaticToggle, isOpen, setOpen, ...forwardProps }) => {
  const classes = useStyles({ isOpen });
  const baseComponent = (
    <Widget
      senderPlaceHolder="Type here your message"
      showCloseButton={true}
      fullScreenMode={false}
      autofocus={true}
      showTimeStamp={true}
      launcherOpenLabel="Close Chat"
      launcherCloseLabel="Open Chat"
      sendButtonAlt="Send"
      {...forwardProps}
    />
  );

  return (
    <>
      {automaticToggle ? (
        baseComponent
      ) : (
        <div onClick={setOpen} className={classes.wrapper}>
          {baseComponent}
        </div>
      )}
    </>
  );
};

export {
  deleteMessages,
  addResponseMessage,
  addUserMessage,
  setBadgeCount,
} from 'react-chat-widget';

export default ChatWidget;
