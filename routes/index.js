var request = require('request');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//
// <<<<<<< HEAD
//
// =======
// >>>>>>> 19516d90fe3753c97ca40259c0fe2e95a5d96b87
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://mnp:azerty22@ds225308.mlab.com:25308/masternodepooldatabase',
    options,
    function(err) {
     console.log(err);
    }
);
// <<<<<<< HEAD

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
var UserModel = mongoose.model('users', userSchema);
// =======
// >>>>>>> 19516d90fe3753c97ca40259c0fe2e95a5d96b87

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// <<<<<<< HEAD
router.get('/signUp', function(req, res, next) {
  res.render('signUp', { title: 'Express' });
});


router.post('/index', function(req, res, next) {

  UserModel.find(
      { email: req.body.email} ,
      function (err, users) {
        if(users.length == 0) {

        var newUser = new UserModel ({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
        });
        newUser.save(
          function (error, user) {
            req.session.user = user;
            UserModel.find(
                 {user_id: req.session.user._id},
                 function (error) {
                   res.render('index', { user : req.session.user });
                 }
             )
          }
        );
      } else {
        res.render('index');
      }
    }
  );
});




// =======
router.get('/postAds', function(req, res, next) {
  res.render('postAds', { title: 'Express' });
});


// >>>>>>> 19516d90fe3753c97ca40259c0fe2e95a5d96b87
module.exports = router;
