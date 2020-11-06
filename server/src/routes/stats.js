const express = require('express');
const shortid = require('shortid');

const router = express.Router();
const database = {};
// Allowed characters for resource uuid generation
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');

// Get the updated stats for every player currently in the story
router.get('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;

  if (database[story_uuid]) {
    const payload = database[story_uuid];
    res.statusCode = 200;
    res.send({ status: true, message: 'Updated stats sent!', payload });
  } else {
    res.statusCode = 404;
    res.send({ status: false, message: 'Stats fot the given StoryId not found' });
  }
});

// Used by a player to provide updated stats about himself
router.patch('/:story_uuid/:player_uuid', (req, res) => {
  const { story_uuid, player_uuid } = req.params;
  // Should never enter here, is only to be especially sure
  if (story_uuid && player_uuid && !req.body) {
    res.statusCode = 400;
    res.send({ status: false, message: 'Stats fot the given StoryId not found' });
    return;
  }
  // Update the entry in the DB
  const patch = req.body;
  const toUpdate = database[story_uuid][player_uuid];
  database[story_uuid][player_uuid] = { ...toUpdate, ...patch };
  res.statusCode = 200;
  res.send({
    status: true,
    message: 'Updated stats sent!',
    payload: database[story_uuid][player_uuid],
  });
});

// Connect return <player_id, evaluator_id> tuple to the player that beginned a story
router.connect('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;
  const requested_uuid = shortid.generate();
  if (database[story_uuid]) {
    // Collision handling
    while (database[story_uuid].find(id => id === requested_uuid)) {
      requested_uuid = shortid.generate();
    }
    // Packetize player uuid and evaluator uuid for the story
    const data = { player: requested_uuid, evaluator: `evaluator${story_uuid}` };
    // Keep track of the story in the DB
    database[story_uuid][requested_uuid] = {};
    res.statusCode = 200;
    res.send({ status: true, message: 'UUID allocated successfully', payload: data });
  } else {
    // Packetize player uuid and evaluator uuid for the story
    const data = { player: requested_uuid, evaluator: `evaluator${story_uuid}` };
    // Keep track of the story in the DB
    database[story_uuid] = {};
    database[story_uuid][requested_uuid] = {};
    // Send the payload to the client
    res.statusCode = 200;
    res.send({ status: true, message: 'UUID allocated successfully', payload: data });
  }
});

// Used by the player to submit its disconnection from the game
router.delete('/:story_uuid/:player_uuid', (req, res) => {
  const { story_uuid, player_uuid } = req.params;
  // Should never enter here, is only to be especially sure
  if (story_uuid && player_uuid) {
    res.statusCode = 400;
    res.send({ status: false, message: 'Missing required arguments' });
    return;
  }
  // Set that the current player has finished
  database[story_uuid][player_uuid].hasFinished = true;
  res.statusCode = 200;
  res.send({ status: true, message: 'Disconnected successfully' });
});

// Used by the evaluator to retrieve a complete log of the match
router.delete('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;
  if (database[story_uuid]) {
    res.statusCode = 400;
    res.send({ status: false, message: 'Missing required arguments' });
    return;
  }
  // Only if all the player have finished a complete log is returned
  const stillPlaying = Object.values(database[story_uuid]).map(
    player_info => player_info.hasFinished
  );
  if (stillPlaying.length === 0) {
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
