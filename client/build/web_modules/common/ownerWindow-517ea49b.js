import { o as ownerDocument } from './ownerDocument-d79106b5.js';

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc.defaultView || window;
}

export { ownerWindow as o };
