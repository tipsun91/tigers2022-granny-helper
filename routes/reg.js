const router = require('express').Router();

const Reg  = require('../views/Reg');

router.get('/', async (req, res) => {
  res.renderComponent(Reg);
});

router.post('/', async (req, res) => {
  try{
    const { name, role, password } = req.body;
    const user = await User.findOne({ where: { name } });

    if(user){
      res.json({status: 'notok', errorMessage: 'Пользователь уже зарегистрирован'})
      return;
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    await User.create({ name, role, password: hash });

    res.json({ status: 'ok' });
  } catch(err){
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
