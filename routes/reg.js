const router = require('express').Router();

// const Reg  = require('../views/Reg');

router.get('/', async (req, res) => {
  res.renderComponent(Reg);
});

router.post('/', async (req, res) => {
  res.json(req.body).end();
});

module.exports = router;
