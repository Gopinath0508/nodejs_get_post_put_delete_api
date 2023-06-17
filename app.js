const express = require('express');
const bodyparser=require('body-parser')
const app = express();
const route = require('./src/routes/router');
const database = require('./src/config/database')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended:true
}))
app.use(route);
console.log("testing..")
database.on('open', () => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  });
database.on('error', (error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
