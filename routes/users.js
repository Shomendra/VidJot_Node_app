const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const passport = require('passport')
const router = express.Router();

//load user model
require('../models/User');
const User = mongoose.model('users');

//  user login route
router.get('/login', (req,res)=> {
  res.render('users/login');
});

//user Register Route

router.get('/register', (req,res)=> {
  res.render('users/register');
});

// login form POST
router.post('/login', (req,res, next)=>{

   passport.authenticate('local',{
     successRedirect: '/ideas',
     failureRedirect: '/users/login',
     failureFlash: true
   })(req, res, next);

})


// register form post
router.post('/register', (req,res) =>{
  let errors = [];

  if(req.body.password != req.body.password2){
    errors.push({text: 'Passwords do not match'});
  }
  if(req.body.password.length < 4){
    errors.push({text:'Password must be at least 4 characters'});
  }

  if(errors.length > 0){
    res.render('users/register',{
      errors : errors,
      name : req.body.name,
      email: req.body.email,
      password : req.body.password,
      password2 : req.body.password2 
    });   
  } else {
    User.findOne({email: req.body.email})
       .then(user => {
         if(user) {
            req.flash('error_msg', 'Email already registered');
            res.redirect('/users/login');
         }else {
          const newUser = new User({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password
          });
          bycrypt.genSalt(10, (err, salt) => {
            bycrypt.hash(newUser.password, salt, (err,hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                  .then(user => {
                    req.flash('success_msg', 'You are now register and can login');
                    res.redirect('/users/login')
                  })
                  .catch(err=>{
                    console.log(err);
                    return;
      
                  });
            });
      
          });
         }
       })
   
  }
})

//logout User

router.get('/logout', (req,res)=> {
  req.logout();
  req.flash('success_msg', 'You are Logged out');
  res.redirect('/users/login')
});

module.exports = router;