const express = require('express');
const fs = require('fs');
const path = require('path');
const shortid = require('shortid');

const router = express.Router();
const basePath = './static/resources/';

router.get('/:uuid', (req, res) => {
  // Get the resource Id and search it through the "resources" directory
  const resId = req.params.uuid;
  fs.readdir(basePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.send({ status: false, message: 'Could not open the resources directory on server'});
      return;
    }

    // Get the file with the requested uuid
    const requestedFile = data.filter(filename => path.parse(filename).name === resId).pop();

    if (requestedFile !== undefined) {
      res.statusCode = 200;
      res.sendFile(requestedFile, { root: basePath });
    } else {
      res.statusCode = 404;
      res.send({ status: false, message: 'Could not locate the file requested' });
    }
  });
});

router.put('/', (req, res) => {
  if (! req.files) {
    res.statusCode = 400;
    res.send({ status: false, message: 'A file to upload is not provided' });
  } else {
    // ToDo set a name and change it to input element client side
    const uploadFile = req.files.file;
    const resId = shortid.generate(); 
    uploadFile.mv(`${basePath}${resId}`);

    res.statusCode = 200;
    res.send({ status: true, message: 'File uploaded successfully', uuid: resId });
  }

});

router.delete('/:uuid', (req, res) => {
  const resId = req.params.uuid;
  fs.readdir(basePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.send({ status: false, message: 'Could not open the resources directory on server' });
      return;
    }

    // Get the file with the requested uuid
    const requestedFile = data.filter(filename => path.parse(filename).name === resId).pop();
    fs.unlink(`${basePath}${requestedFile}`, err => {
      if (err) {
        res.statusCode = 409;
        res.send({ status: false, message: 'Could not delete the resource' });
      } else {
        res.statusCode = 200;
        res.send({ status: true, message: 'Resource deleted successfully' });
      }
    });
  });
});

module.exports = router;
