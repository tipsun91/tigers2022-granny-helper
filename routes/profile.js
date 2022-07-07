const router = require('express').Router();

const Profile = require('../views/Profile');

router.get('/', async (req, res) => {
  if (!res.locals.user) {
    res.redirect('/');
    return;
  }

  res.renderComponent(Profile, { user:res.locals.user });
});

router.get('/exit', async (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_COOKIE);
  res.redirect('/');
});

module.exports = router;
