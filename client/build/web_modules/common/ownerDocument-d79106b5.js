function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

export { ownerDocument as o };
