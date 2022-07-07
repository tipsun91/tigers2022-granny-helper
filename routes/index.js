const router = require('express').Router();

// const Home = require('../views/Home');
// // const Reg = require('../views/Reg');

// router.get('/', async (req, res) => {
//   res.renderComponent(Home, { title: 'Home' });
// });

const StartPage = require('../views/StartPage');
// const Reg = require('../views/Reg');

router.get('/', async (req, res) => {
  res.renderComponent(StartPage, { title: 'StartPage' });
});


module.exports = router;
