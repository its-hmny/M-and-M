const express = require('express');
const shortid = require('shortid');

const router = express.Router();
const database = { xxx: ['pVBh17zo7'] };
// Allowed characters for resource uuid generation
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');

router.get('/:story_uuid', (req, res) => {
  const story_uuid = req.params.story_uuid;
  const requested_uuid = shortid.generate();
  if (database[story_uuid]) {
    // Collision handling
    while (database[story_uuid].find(id => id === requested_uuid)) {
      requested_uuid = shortid.generate();
    }
    // Add the new uuid to the database and send the response
    database[story_uuid].push(requested_uuid);
    res.statusCode = 200;
    res.send({ status: true, message: 'UUID allocated successfully', payload: data });
  } else {
    // Packetize player uuid and evaluator uuid for the story
    const data = { player: requested_uuid, evaluator: `evaluator${story_uuid}` };
    // Keep track of the story in the DB
    database[story_uuid] = [requested_uuid];
    // Send the payload to the client
    res.statusCode = 200;
    res.send({ status: true, message: 'UUID allocated successfully', payload: data });
  }
});

module.exports = router;
