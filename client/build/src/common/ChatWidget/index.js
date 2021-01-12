function _extends() {
    _extends =
        Object.assign ||
        function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

    return _extends.apply(this, arguments);
}

import React from '../../../web_modules/react.js';
import { makeStyles } from '../../../web_modules/@material-ui/core.js';
import { Widget } from '../../../web_modules/react-chat-widget.js';
import '../../../web_modules/react-chat-widget/lib/styles.css.proxy.js';
import './styles.css.proxy.js';

const useStyles = makeStyles({
    wrapper: {
        '& > .rcw-widget-container': {
            width: (props) => !props.isOpen && 'unset',
        },
    },
});

const ChatWidget = ({ automaticToggle, isOpen, setOpen, ...forwardProps }) => {
    const classes = useStyles({
        isOpen,
    });

    const baseComponent = React.createElement(
        Widget,
        _extends(
            {
                senderPlaceHolder: 'Type here your message',
                showCloseButton: true,
                fullScreenMode: false,
                autofocus: true,
                showTimeStamp: true,
                launcherOpenLabel: 'Chat opened',
                launcherClosedLabel: 'Chat closed',
                sendButtonAlt: 'Send',
            },
            forwardProps,
        ),
    );

    return React.createElement(
        React.Fragment,
        null,
        automaticToggle
            ? baseComponent
            : React.createElement(
                  'div',
                  {
                      onClick: setOpen,
                      className: classes.wrapper,
                  },
                  baseComponent,
              ),
    );
};

export {
    deleteMessages,
    addResponseMessage,
    addUserMessage,
    setBadgeCount,
} from '../../../web_modules/react-chat-widget.js';
export default ChatWidget;
