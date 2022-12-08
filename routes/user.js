
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



//Get Users
router.get('/getusers', (req,res) => {
  ModelUser.find({}, function (docs, err) {
    if (!err) {
      res.send(docs)
    }else{
      res.send(err)
    }
  })
})


//Add User
router.post('/adduser', (req, res) => {
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



//Get User
router.post('/getuser', (req,res) => {
  ModelUser.find({user_id:req.body.user_id}, function (docs, err) {
    if (!err) {
      res.send(docs)
    }else{
      res.send(err)
    }
  })
})

//Get User
router.post('/edituser', (req,res) => {
  ModelUser.findOneAndUpdate({user_id: req.body.user_id}, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  }, (err) => {
    if (!err) {
      res.send('usuario actualizado')
    }else{
      res.send(err)
    }
  })
})

//Get User
router.post('/deleteuser', (req,res) => {
  ModelUser.findOneAndDelete({user_id: req.body.user_id}, (err) => {
    if (!err) {
      res.send('usuario borrado')
    }else{
      res.send(err)
    }
  })
})