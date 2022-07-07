const router = require('express').Router();

const StartPage = require('../views/StartPage');
// const Reg = require('../views/Reg');

router.get('/', async (req, res) => {
  res.renderComponent(StartPage, { title: 'StartPage' });
});

module.exports = router;
