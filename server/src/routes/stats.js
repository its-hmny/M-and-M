const express = require('express');
const shortid = require('shortid');
const io = require('../shared')();

const router = express.Router();
// Allowed characters for resource uuid generation
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');
// Array of playerLog object (see under)
let database = {};
// Initial values in a newly allocated playerLg object
const initialPlayerLog = {
  name: undefined,
  id: undefined,
  score: 0,
  avatar: undefined,
  hasFinished: false,
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
      playerLog.history.push({ ...payload, patchs: [] });
      playerLog.stats.nQuestionDone.value++;
      playerLog.stats.timeAtLastResponse.value = new Date().toLocaleTimeString();
      io.emit('update:position', { story, senderId, receiverId, payload: playerLog });
    }
  });

  // Saves on the server the player responses and changes to the story's components
  socket.on('update:stats', data => {
    const { story, senderId, receiverId, nodeId, payload } = data;
    const playerLog = (database[story] || []).find(player => player.id === senderId);
    const activityToUpdate = (playerLog.history || []).find(
      ({ activityNodeId }) => activityNodeId === nodeId
    );

    if (activityToUpdate) {
      const { id, data } = payload;
      let componentToPatch = activityToUpdate.patchs.find(
        ({ componentId }) => componentId === id
      );
      if (componentToPatch) {
        componentToPatch = { componentId: id, value: data };
      } else {
        activityToUpdate.patchs.push({ componentId: id, value: data });
      }
      io.emit('update:stats', { story, senderId, receiverId, payload: playerLog });
    }
  });

  // Saves on the server the score assigned by the evaluator on a human-only evaluable question
  socket.on('eval-pts', data => {
    const { story, receiverId, points } = data;
    const playerLog = (database[story] || []).find(player => player.id === receiverId);
    if (playerLog) {
      playerLog.score += points;
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

// Used by the player or the evaluator to provide update about himself or a player
router.patch('/:story_uuid/:player_uuid', (req, res) => {
  const { story_uuid, player_uuid } = req.params;
  const patch = req.body;
  // Update the entry in the DB
  let toUpdate = database[story_uuid].find(player => player.id === player_uuid);
  if (!toUpdate || !patch) {
    res.statusCode = 400;
    res.send({
      status: false,
      message: 'Stats for the given PlayerId not found or patch not given',
    });
    return;
  }
  // Apply the patch to the given player
  Object.keys(patch).forEach(key => (toUpdate[key] = patch[key]));
  res.statusCode = 200;
  res.send({
    status: true,
    message: 'Updated stats sent!',
    payload: database[story_uuid],
  });
});

module.exports = router;
