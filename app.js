require('dotenv').config();
const app = require('express')();
require('./config/configApp')(app);
app.listen(process.env.PORT ?? 3000, () => {
  console.log(`server started at port: ${app.get('port')}`);
});
