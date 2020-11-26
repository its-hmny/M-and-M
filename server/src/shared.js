const socketIO = require('socket.io');

// Static shared instance of socket.io
let io = undefined;

// Setup and/or initialize method, returns undefined if
// the socket hasn't been initialized already
const initSocketIO = httpServer => {
  if (io === undefined) {
    io = socketIO(httpServer);
  }
  return io;
};

module.exports = initSocketIO;
