import React, { useState } from 'react';
import { Grid, List, ListItem, Fab, TextField, Divider, Slide, Paper, makeStyles, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles({
  MsgBubbleStyle: {
    borderRadius: '20%',
    padding: "2%",
    backgroundColor: "pink"
  },
  
  ChatContainer: {
    zIndex: 3,
    position: "absolute",
    width: "100vw",
    height: "100vh"
  },

  MessageArea: {
    overflowY: 'auto',
  },
});

const ChatBubble = props => {
  const { MsgBubbleStyle } = useStyles();
  const { msg, hour, sender, uuid } = props;
  const alignment = sender === 'player' ? 'right' : 'left';

  return (
    <ListItem key={uuid}>
      <div className={MsgBubbleStyle}>{msg}</div>
    </ListItem>
  );
};

const Chat = () => {
  const { MessageArea } = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <List className={MessageArea}>
          <ChatBubble msg="Ciao coglione!" hour="10:30" uuid="0" sender="player" />
          <ChatBubble msg="Ciao pezzo di merda, ancora vivo sei?" hour="10:40" uuid="1" sender="evaluator" />
        </List>

        <Divider />

        <Grid container>
          <Grid item xs={11}>
            <TextField label="Type Something" fullWidth />
          </Grid>
          <Grid xs={1} align="right">
            <Fab color="primary">
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const ChatExpander = () => {
  const [open, setOpen] = useState(true);
  const { ChatContainer } = useStyles();

  return (
    <div>
      <Fab color="primary" onClick={() => setOpen(!open)}>
        <MessageIcon />
      </Fab>
      <Slide direction="right" in={!open}>
        <Paper className={ChatContainer}>
          <Chat />
        </Paper>
      </Slide>
    </div>
  );
};

export default ChatExpander;
