const router = require('express').Router();

const Auth  = require('../views/Auth');
router.get('/', async (req, res) => {
  res.renderComponent(Auth);
});

const { User } = require('../db/models');
router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });

    if(!user) {
      res.json({status: 'notok', errorMessage: 'Такого пользователя не существует'}).end();
      return;
    }

    if(!bcrypt.compare(password, user.password)){
      res.json({ status: 'notok', errorMessage: 'Неверный пароль!'}).end();
      return;
    }

    req.session.user = user;
    res.status(200).json({ status: 'ok' }).redirect('/').end();
    return;
  } catch(err){
    res.status(500).json({ errorMessage: err.message }).end();
  }
});

module.exports = router;
