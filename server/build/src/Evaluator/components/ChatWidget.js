import React, { useEffect } from '../../../web_modules/react.js';
import ChatWidget from '../../common/ChatWidget/index.js';
import {
    deleteMessages,
    addResponseMessage,
    addUserMessage,
    setBadgeCount,
} from '../../../web_modules/react-chat-widget.js';
import { useEvaluator } from '../context/EvaluatorContext.js';

const Chat = ({ onOpen, isOpen }) => {
    const { selectedPlayer, storyId, updatePlayerLog, socket } = useEvaluator();

    const { name, id, avatar, chatLog, unreadMessages } = selectedPlayer || {};

    useEffect(() => {
        deleteMessages();

        if (chatLog) {
            chatLog.forEach((msg) => {
                const { sender, content } = msg;

                sender === `evaluator${storyId}`
                    ? addUserMessage(content)
                    : addResponseMessage(content);
            });
        }

        setBadgeCount(unreadMessages);
    }, [chatLog, unreadMessages, storyId]);

    const sendHandler = (msg) => {
        socket.emit('chat-msg-send', {
            story: storyId,
            senderId: `evaluator${storyId}`,
            receiverId: id,
            msg,
        });
    };

    return React.createElement(ChatWidget, {
        automaticToggle: false,
        setOpen: () => {
            updatePlayerLog(selectedPlayer.id, {
                unreadMessages: 0,
            });
            onOpen();
        },
        isOpen: isOpen,
        title: name || id,
        subtitle: "Respond to the player's request",
        handleNewUserMessage: sendHandler,
        profileAvatar: avatar || undefined,
    });
};

export default Chat;
