const io = require('../shared')();

// Array of playerLog object (see under) for each story
let database = {};
const humanValuableComponent = ['TextArea', 'Input'];
// Initial values in a newly allocated playerLg object
const initialPlayerLog = {
  name: undefined,
  id: undefined,
  score: 0,
  avatar: undefined,
  hasFinished: false,
  isDisconnected: false,
  pendingEvaluation: [],
  unreadMessages: 0,
  // Log of the chat
  chatLog: [],

  // Hystory of all the activities done by the user (chronologically)
  history: [
    // Template for activity obeject
    // {
    //   activityNodeId: undefined,
    //   patchs: [],
    // },
  ],

  // Stats aout the player performance in the activities and overall story
  stats: {
    timeAtStart: { label: 'Started', value: undefined },
    timeAtLastResponse: { label: 'Time at last response', value: undefined },
    nQuestionDone: { label: 'Question done', value: 0 },
    avgTime4Resp: { label: 'Average time for response', value: undefined },
    // And so on...
  },
};

// Realtime update with socket
io.on('connection', socket => {
  const { type, storyId } = socket.handshake.query;
  const userId = socket.id;
  if (!type || !storyId) socket.disconnect(); // Invalid params

  // The user connected is a player
  if (type === 'player') {
    database[storyId] = database[storyId] || [];
    // Due to reference issue this is the only method to share a template without occuring
    // in reference issues due to object reference handling in JS
    const newEntry = JSON.parse(JSON.stringify({ ...initialPlayerLog, id: userId }));
    newEntry.stats.timeAtStart.impl = new Date();
    newEntry.stats.timeAtStart.value = new Date().toLocaleTimeString();
    // Keep track of the new player in the DB
    database[storyId].push(newEntry);
    socket.send({ player: userId, evaluator: `evaluator${storyId}` });
    // Sends a message to the evaluator
    io.emit('add:player', { story: storyId, payload: newEntry });
  }
  // The user connected is an evaluator
  else if (type === 'evaluator') {
    // Sends the updated story log to the evaluator
    io.emit('get:log', { story: storyId, payload: database[storyId] });
  } else socket.disconnect();

  socket.on('chat-msg-send', data => {
    // Saves on the server the received messages
    const { story, senderId, receiverId, msg } = data;
    const player_id = senderId === `evaluator${story}` ? receiverId : senderId;
    const playerLog = (database[story] || []).find(player => player.id === player_id);
    if (playerLog) {
      const toSave = { sender: senderId, content: msg };
      playerLog.chatLog = [...playerLog.chatLog, toSave];
    }
    // Propagate the message
    io.emit('chat-msg-recv', data);
  });

  // Saves on the server the player position in the story
  socket.on('update:position', data => {
    const { story, senderId, receiverId, payload } = data;
    const playerLog = (database[story] || []).find(player => player.id === senderId);
    if (playerLog) {
      // The player changed node in the story so removes all the data from the previous one
      const { stats, history } = playerLog;
      history.push({ ...payload, patchs: [] });
      stats.nQuestionDone.value++;
      stats.timeAtLastResponse.value = new Date().toLocaleTimeString();
      let deltaTimeSecs =
        (new Date() - stats.timeAtStart.impl) / (stats.nQuestionDone.value * 1000);
      deltaTimeSecs = isNaN(deltaTimeSecs) ? 0 : deltaTimeSecs;
      stats.avgTime4Resp.value = `${Math.round(deltaTimeSecs)} sec/resp.`;
      io.emit('update:position', { story, senderId, receiverId, payload: playerLog });
    }
  });

  // Used bu the evaluator to update/share information with others evaluator on the same story
  socket.on('update:eval', data => {
    const { story, playerId, patch } = data;
    const playerLog = (database[story] || []).find(player => player.id === playerId);
    if (playerLog) Object.keys(patch).forEach(key => (playerLog[key] = patch[key]));
    io.emit('update:eval', { story, playerId, newLog: playerLog });
  });

  // Saves on the server the player responses and changes to the story's components
  socket.on('update:stats', data => {
    const { story, senderId, receiverId, nodeId, payload } = data;
    const playerLog = (database[story] || []).find(player => player.id === senderId);
    const activityToUpdate = (playerLog.history || []).find(
      ({ activityNodeId }) => activityNodeId === nodeId
    );

    if (activityToUpdate) {
      const { id, name, data } = payload;
      // If the patch received is for a human only valuable component
      // a notification is displayed on client
      if (humanValuableComponent.includes(name)) playerLog.pendingEvaluation.push(nodeId);
      let componentToPatch = activityToUpdate.patchs.find(
        ({ componentId }) => componentId === id
      );
      if (componentToPatch) {
        componentToPatch = { componentId: id, componentName: name, value: data };
      } else {
        activityToUpdate.patchs.push({
          componentId: id,
          componentName: name,
          value: data,
        });
      }
      io.emit('update:stats', { story, senderId, receiverId, payload: playerLog });
    }
  });

  // Saves on the server the score assigned by the evaluator on a human-only evaluable question
  socket.on('eval-pts', data => {
    const { story, receiverId, points, nodeId } = data;
    const playerLog = (database[story] || []).find(player => player.id === receiverId);
    if (playerLog) {
      playerLog.score += points;
      playerLog.pendingEvaluation = playerLog.pendingEvaluation.filter(
        item => item !== nodeId
      );
      io.emit('update:eval', { story, playerId: receiverId, newLog: playerLog });
      io.emit('eval-pts', data);
    }
  });

  socket.on('disconnect', () => {
    // The user disconnected is a player
    if (type === 'player') {
      // Remove the entry from the DB, and the story itself if no one is left
      database[storyId] = database[storyId].filter(player => player.id !== userId);
      if (database[storyId].lenght === 0) delete database[storyId];
      // Notify the evaluaor to purge all the log relatives to the player
      io.emit('rm:player', { story: storyId, playerId: userId });
    }
  });
});
