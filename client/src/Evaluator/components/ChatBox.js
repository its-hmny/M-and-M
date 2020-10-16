import React, { useEffect } from 'react';
import { Button, Box, Typography, Collapse, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
  ChatContainer: {
    position: 'absolute',
    color: 'black',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    bottom: 0,
    right: 0,
  },
  ChatButton: {
    width: '20vw',
    height: '4vh',
    backgroundColor: '#f5f5f5',
    borderColor: '#c2c2c2',
    borderWidth: '2px',
    color: '#212121',
  },
  ChatInnerContainer: {
    height: '40vh',
    backgroundColor: '#1b1b1b',
  },
  ChatTextField: {
    width: '20vw',
    height: '4vh',
  },
}));

const ChatBox = () => {
  const [open, setOpen] = React.useState(false);
  const chatRef = React.useRef(null);
  const classes = useStyles();
  const handleChatOpen = () => {
    setOpen(!open);
  };
  //Handle chat close when clicking outside ChatContainer
  useEffect(() => {
    function handleChatClose(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleChatClose);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleChatClose);
    };
  }, [chatRef]);

  var bottomField;

  if (open) {
    bottomField = <TextField className={classes.ChatTextField}></TextField>;
  } else {
    bottomField = (
      <Button className={classes.ChatButton} onClick={handleChatOpen}>
        Chat
      </Button>
    );
  }
  return (
    <div ref={chatRef} className={classes.ChatContainer}>
      <Collapse in={open}>
        <Box className={classes.ChatInnerContainer}>
          <Typography>Placeholder</Typography>
          <MessageBox type={'text'} text={'Ciao io sono user1'} />
          <MessageBox position={'right'} type={'text'} text={'Ciao io sono user2'} />
        </Box>
      </Collapse>
      {bottomField}
    </div>
  );
};

export default ChatBox;
