const express = require('express');
const router = express.Router();

const { Entry } = require('../db/models');

// Показ всех записей
router.get('/', async (req, res) => {
  const entries = await Entry.findAll();
  res.end(JSON.stringify(entries));
});

// Показ одной, конкретной записи
router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  res.end(JSON.stringify(entry));
});

// Принятие данных формы создания новой записи
router.post('/', async (req, res) => {
  const entry = await Entry.create(req.body.entry);
  try {
    await entry.save();
    // throw Error('You shall not pass');
    res.redirect(`/${entry.id}`);
  } catch (err) {
    res.end(JSON.stringify({ errors: [err] }));
  }
});

// PUT / PATCH
router.patch('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const { singer, songTitle } = req.body;
  entry.singer = singer;
  entry.songTitle = songTitle;
  entry.save();
  res.status(200).end();
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Entry.destroy({ where: { id: req.params.id } });
    res.status(200);
    res.end();
  } catch(error) {
    res.status(500);
    res.end();
  }

});

module.exports = router;
