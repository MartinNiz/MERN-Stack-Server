
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  user_id: String,
})



const ModelUser = mongoose.model('users', UserSchema)
module.exports = router;

//Add User
router.post('addUser', (req, res) => {
  const newUser = new ModelUser({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    user_id: req.body.user_id,
  })
  newUser.save(function(err){
    if (!err) {
      res.send('Added user')
    }else{
      res.send(err)
    }
  });
})