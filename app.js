require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT ?? 3000;
const app = require('express')();
require('./config/configApp')(app);
const { sequelize } = require('./db/models');
app.listen(SERVER_PORT, async () => {
  console.log(`Server started at port: ${SERVER_PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
