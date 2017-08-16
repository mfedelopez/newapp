var express = require('express');
var router = express.Router();

var User = require('../models/user')

 // GET home page.
router.get('/', function(req, res, next) {
  res.render("register");
});

router.post('/', function(req, res, nex){
  User.register(new User({username: req.body.username}, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret");
    })
  }))
});

module.exports = router;
