const router = require('express').Router();

const Auth  = require('../views/Auth');
router.get('/', async (req, res) => {
  res.renderComponent(Auth);
});

const { User } = require('../db/models');
const bcrypt = require('bcrypt');
router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.isExists(name);

    if(!user) {
      res.redirect('/reg');
      return;
    }

    if(! await bcrypt.compare(password, user.password)){
      res.redirect('/auth');
      return;
    }

    req.session.user = user;
    res.redirect('/profile');
    return;
  } catch(error){
    res.status(500).json(error);
  }
});

module.exports = router;
