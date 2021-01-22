const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const shortid = require('shortid');

const router = express.Router();
const basePath = path.resolve(__dirname, '../../dynamic/templates');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]');

// Returns all templates added so far
router.get('/', async (_, res) => {
  try {
    let fileNames = await fs.readdir(basePath);
    fileNames = fileNames.filter(story => story.includes('.json'));
    const templates = await Promise.all(
      fileNames.map(fileName =>
        fs.readFile(path.join(basePath, fileName)).then(result => JSON.parse(result))
      )
    );
    res.status(200).send({ templates });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.status(500).send({ message: `Something went wrong while retrieving templates.` });
  }
});

router.post('/', async (req, res) => {
  const template = req.body;
  const fileName = `${template.name}-${shortid.generate()}.json`;
  const filePath = path.join(basePath, fileName);

  try {
    const data = JSON.stringify(template, null, 2);
    // WARNING: if templates folder is deleted, writeFile would failed
    // with a `No such file or directory`, so be careful!!
    await fs.writeFile(filePath, data);
    res.status(200).send({ message: `Template ${template.name} successfully added.` });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res
      .status(500)
      .send({ message: `Something went wrong while saving ${template.name} template.` });
  }
});

module.exports = router;
