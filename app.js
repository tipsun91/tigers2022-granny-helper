require('dotenv').config();
const app = require('express')();
const sequelize = require('sequelize');
require('./config/configApp')(app);
app.listen(process.env.PORT ?? 3000, () => {
  console.log(`server started at port: ${app.port}`);
  try {
    await sequelize.authenticate();
    console.log('База данных ОК!')
  } catch (error) {
    console.log(error.message); // new Error('mymessage');
  }
});
