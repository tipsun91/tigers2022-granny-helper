const router = require('express').Router();
const Tesseract = require('tesseract.js');
const path = require('path');
const { text } = require('express');
const Home = require('../views/Home');

router.get('/', async (req, res) => {
  const file = path.resolve('public/blins.png');

  Tesseract.recognize(
    file,
    'eng+rus',
    { logger: (m) => console.log(m) },
  ).then(({ data: { text } }) => {
    console.log(text);
  });
  res.send(text);
});

module.exports = router;
