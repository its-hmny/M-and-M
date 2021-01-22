// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code =
    "@media only screen and (min-width: 1000px) {\n  .rcw-widget-container {\n    /* Needed for evaluator */\n    width: 90vw !important;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .rcw-widget-container .active {\n    /* Needed for player */\n    width: 100vw !important;\n  }\n}\n\n.rcw-conversation-container {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.rcw-messages-container {\n  background-color: #3d3d3d;\n}\n\n.rcw-launcher,\n.rcw-conversation-container .rcw-close-button,\n.rcw-conversation-container .rcw-close-button,\n.rcw-conversation-container > .rcw-header {\n  background-color: #e91e63;\n}\n\n.rcw-message > .rcw-response > .rcw-message-text {\n  background-color: white;\n  color: black;\n}\n\n.rcw-message > .rcw-client > .rcw-message-text {\n  background-color: #e91e63;\n  color: white;\n}\n\n.rcw-timestamp {\n  color: white;\n}\n\n.rcw-sender,\n.rcw-sender > * {\n  background-color: #3d3d3d;\n  color: white;\n}\n";

  const styleEl = document.createElement('style');

  const codeEl = document.createTextNode(code);

  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
