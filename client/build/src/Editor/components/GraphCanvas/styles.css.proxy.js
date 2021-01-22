// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code =
    '.vis-network {\n  z-index: 0;\n\n  border: none;\n  background-color: #3d3d3d;\n\n  margin: 0px 0px 0px 0px;\n  padding: 0px 0px 0px 0px;\n  overflow: hidden;\n\n  height: 100vh;\n  width: 100vw; \n}\n\n#graphcanvas-container {\n  margin: 0px 0px 0px 0px;\n  padding: 0px 0px 0px 0px;\n  overflow: hidden;\n\n  height: 100vh;\n  width: 100vw;\n}\n';

  const styleEl = document.createElement('style');

  const codeEl = document.createTextNode(code);

  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
