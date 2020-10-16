const express = require('express');
const shortid = require('shortid');
const fs = require('fs');

const router = express.Router();
const basePath = './dynamic/resources/';
// Allowed characters for resource uuid generation
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');

// Get the resource uuid and return its content, else 404 Not Found
router.get('/:uuid', (req, res) => {
  const res_uuid = req.params.uuid;
  fs.readFile(`${basePath}${res_uuid}`, (err, _) => {
    if (err) {
      res.statusCode = 404;
      res.send({ status: false, message: 'Could not locate the file requested' });
    } else {
      res.statusCode = 200;
      res.sendFile(res_uuid, { root: basePath });
    }
  });
});

// If a file is provided in the request saves it and returns its uuid, else 400 Bad Request
router.put('/', (req, res) => {
  if (!req.files) {
    res.statusCode = 400;
    res.send({ status: false, message: 'A file to upload is not provided' });
  } else {
    const uploadFile = req.files.file;
    const res_uuid = shortid.generate();

    // res_uuid collision handling, another uuid will be generated
    while (fs.existsSync(`${basePath}${res_uuid}`)) {
      res_uuid = shortid.generate();
    }

    uploadFile.mv(`${basePath}${res_uuid}`);

    res.statusCode = 200;
    res.send({ status: true, message: 'File uploaded successfully', uuid: res_uuid });
  }
});

// Removes the resource from server, else 404 Not Found
router.delete('/:uuid', (req, res) => {
  const res_uuid = req.params.uuid;
  fs.unlink(`${basePath}${res_uuid}`, err => {
    if (err) {
      res.statusCode = 404;
      res.send({ status: false, message: 'Could not delete the resource' });
    } else {
      res.statusCode = 200;
      res.send({ status: true, message: 'Resource deleted successfully' });
    }
  });
});

module.exports = router;
