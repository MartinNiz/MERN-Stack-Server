
const express = require('express');
const app = express()

//Import DB
const db = require('./database');

// Import router files and models
const RouteUser = require('./routes/user');

//Import body-parser
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}))


app.use('/api/users', RouteUser);

app.get('/', (req, res) => {
  res.end('Welcome to the server')
})

//Server
app.listen(5000, function () {
  console.log('Server on port: 5000');
});