const router = require('express').Router();

const Home = require('../views/Home');
const Reg  = require('../views/Reg');

router.get('/', async (req, res) => {
  res.renderComponent(Home, { title:'Home page' });
});

module.exports = router;
