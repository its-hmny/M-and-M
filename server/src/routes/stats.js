const express = require('express');
const shortid = require('shortid');

const router = express.Router();
// Allowed characters for resource uuid generation
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');
// Array of playerLog object (see under)
let database = {};
// Initial values in a newly allocated playerLg object
const initialPlayerLog = {
  name: undefined,
  id: undefined,
  avatar: undefined,
  hasFinished: false,
  chatLog: [],
  currentQuestion: {
    components: [],
  },
  stats: {
    timeAtStart: undefined,
    timeAtLastResponse: 0,
    nQuestionDone: 0,
    // And so on...
  },
};

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
    res.statusCode = 200;
    res.send({
      status: true,
      message: 'Stats dump created successfully!',
      payload: database[story_uuid],
    });
  }
});

module.exports = router;
