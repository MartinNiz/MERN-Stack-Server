const express = require('express');
const app = express()

//Import DB
const db = require('./database') 

app.get('/', (req, res) => {
  res.end('Welcome to the server')
})

//Server
app.listen(5000, function () {
  console.log('Server on port: 5000');
});