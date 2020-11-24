import React from 'react';
import ChatWidget from '../../common/ChatWidget';

const Chat = ({ onSend }) => {
  return (
    <ChatWidget
      title="Evaluator"
      subtitle="The evaluator will help you in case you have any problem"
      handleNewUserMessage={onSend}
    />
  );
};

export default Chat;
