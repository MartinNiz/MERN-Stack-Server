const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/mern-stack')

const db = mongoose.connection

db.on('connected', () => {
  console.log('conected')
})
db.on('error', () => {
  console.log('error')
})

module.exports = mongoose