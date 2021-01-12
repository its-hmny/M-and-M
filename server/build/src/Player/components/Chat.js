import React from '../../../web_modules/react.js';
import ChatWidget from '../../common/ChatWidget/index.js';

const Chat = ({ onSend }) => {
    return React.createElement(ChatWidget, {
        title: 'Evaluator',
        subtitle: 'The evaluator will help you in case you have any problem',
        handleNewUserMessage: onSend,
    });
};

export default Chat;
