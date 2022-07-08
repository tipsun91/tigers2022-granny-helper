const router = require('express').Router();

const HomeGrandson = require('../views/HomeGrandson');

router.get('/', async (req, res) => {
  res.renderComponent(HomeGrandson, { title: 'HomeGrandson' });
});

module.exports = router;
