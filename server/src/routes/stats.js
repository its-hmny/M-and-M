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
  chatLog: [],
  currentQuestion: {
    currentNodeId: undefined,
    patchs: [],
  },
  stats: {
    timeAtStart: undefined,
    timeAtLastResponse: 0,
    nQuestionDone: 0,
    // And so on...
  },
};

// Realtime update with socket
io.on('connection', socket => {
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
    const { story, senderId, payload } = data;
    const playerLog = (database[story] || []).find(player => player.id === senderId);
    if (playerLog) {
      // The player changed node in the story so removes all the data from the previous one
      delete playerLog.currentQuestion;
      playerLog.currentQuestion = { ...payload, patchs: [] };
      io.emit('update:position', data);
    }
  });

  // Saves on the server the player responses and changes to the story's components
  socket.on('update:stats', data => {
    const { story, senderId, payload } = data;
    const playerLog = (database[story] || []).find(player => player.id === senderId);
    if (playerLog) {
      const { id, data } = payload;
      let componentToPatch = playerLog.currentQuestion.patchs.find(
        patch => patch.componentId === id
      );
      if (componentToPatch) {
        componentToPatch = { componentId: id, value: data };
      } else {
        playerLog.currentQuestion.patchs.push({ componentId: id, value: data });
      }
      io.emit('update:stats', data);
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
});

// Get the updated stats for every player currently in the story
router.get('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;
  database[story_uuid] = database[story_uuid] || [];
  if (database[story_uuid]) {
    // Filters the remaining online players
    const payload = database[story_uuid].filter(player => !player.hasFinished);
    res.statusCode = 200;
    res.send({ status: true, message: 'Updated stats sent!', payload });
  } else {
    res.statusCode = 404;
    res.send({ status: false, message: 'Stats fot the given StoryId not found' });
  }
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

// Connect return <player_id, evaluator_id> tuple to the player that beginned a story
router.put('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;
  const requested_uuid = shortid.generate();
  database[story_uuid] = database[story_uuid] || [];
  // Collision handling
  while (database[story_uuid].find(player => player.id === requested_uuid)) {
    requested_uuid = shortid.generate();
  }
  // Keep track of the new player in the DB
  const newEntry = { ...initialPlayerLog, ...req.body, id: requested_uuid };
  newEntry.stats.timeAtStart = new Date();
  database[story_uuid].push(newEntry);
  // Packetize player uuid and evaluator uuid for the story
  const data = { player: requested_uuid, evaluator: `evaluator${story_uuid}` };
  res.statusCode = 200;
  res.send({ status: true, message: 'UUID allocated successfully', payload: data });
});

// Used by the player to submit its disconnection from the game
router.delete('/:story_uuid/:player_uuid', (req, res) => {
  const { story_uuid, player_uuid } = req.params;
  // Set that the current player has finished
  const player = database[story_uuid].find(player => player.id === player_uuid);
  if (player) {
    player.hasFinished = true;
    res.statusCode = 200;
    res.send({ status: true, message: 'Disconnected successfully' });
  } else {
    res.statusCode = 404;
    res.send({ status: true, message: 'Player not found in the database' });
  }
});

// Used by the evaluator to retrieve a complete log of the match
router.delete('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;
  if (database[story_uuid]) {
    res.statusCode = 404;
    res.send({ status: false, message: 'StoryId not found in database' });
    return;
  }
  // Only if all the player have finished a complete log is returned
  const stillPlaying = database[story_uuid].filter(player => !player.hasFinished);
  if (stillPlaying.length !== 0) {
    res.statusCode = 409;
    res.send({ status: false, message: 'Some player are still active' });
  } else {
    // Saves locally the log for the given story then deallocates the memory
    const payload = { ...database[story_uuid] };
    delete database[story_uuid];
    res.statusCode = 200;
    res.send({
      status: true,
      message: 'Stats dump created successfully!',
      payload,
    });
  }
});

module.exports = router;
