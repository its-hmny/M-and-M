const express = require('express');
const shortid = require('shortid');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const basePath = './dynamic/stories/';
// Allowed characters for resource uuid generation
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');

router.get('/', (_, res) => {
  fs.readdir(basePath, (err, dir_content) => {
    if (err) {
      res.statusCode = 500;
      res.send({ status: false, message: 'Could not open stories directory' });
    } else {
      const stories_list = dir_content.map(filename => {
        const story_object = JSON.parse(fs.readFileSync(`${basePath}${filename}`, 'utf8'));
        const story_uuid = path.basename(filename, '.json');
        return { uuid: story_uuid, story: story_object };
      });
      res.statusCode = 200;
      res.send({ status: true, message: 'Stories list returned', payload: stories_list });
    }
  });
});

router.get('/:uuid', (req, res) => {
  const story_uuid = req.params.uuid;
  fs.readFile(`${basePath}${story_uuid}.json`, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send({ status: false, message: 'Story JSON not found' });
    } else {
      res.statusCode = 200;
      res.send({ status: true, message: 'Story JSON found', payload: JSON.parse(data) });
    }
  });
});

router.put('/', (req, res) => {
  if (!req.body) {
    res.statusCode = 400;
    res.send({ status: false, message: 'A JSON of the story object must be provided' });
  } else {
    const newstory_uuid = shortid.generate();
    fs.writeFile(`${basePath}${newstory_uuid}.json`, JSON.stringify(req.body), { encoding: 'utf8' }, err => {
      if (err) {
        res.statusCode = 500;
        res.send({ status: false, message: 'Could not write JSON file on server' });
      } else {
        res.statusCode = 200;
        res.send({ status: true, message: 'Story JSON written successfully', uuid: newstory_uuid });
      }
    });
  }
});

router.delete('/:uuid', (req, res) => {
  const story_uuid = req.params.uuid;
  fs.unlink(`${basePath}${story_uuid}.json`, err => {
    if (err) {
      res.statusCode = 404;
      res.send({ status: false, message: 'Could not delete the story' });
    } else {
      res.statusCode = 200;
      res.send({ status: true, message: 'Story deleted successfully' });
    }
  });
});

router.patch('/:uuid', (req, res) => {
  const story_uuid = req.params.uuid;
  if (!req.body || !story_uuid) {
    res.statusCode = 400;
    res.send({ status: false, message: 'A JSON of the story object and the story UUID must be provided' });
  } else {
    fs.writeFile(`${basePath}${story_uuid}.json`, JSON.stringify(req.body), { encoding: 'utf8' }, err => {
      if (err) {
        res.statusCode = 500;
        res.send({ status: false, message: 'Could not overwrite the JSON file on server' });
      } else {
        res.statusCode = 200;
        res.send({ status: true, message: 'Story JSON overwritten successfully', uuid: story_uuid });
      }
    });
  }
});

module.exports = router;
