var request = require('request');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var options = {
  server: {
    socketOptions: {
      connectTimeoutMS: 5000
    }
  }
};
mongoose.connect('mongodb://mnp:azerty22@ds225308.mlab.com:25308/masternodepooldatabase',
  options,
  function(err) {
    console.log(err);
  }
);

   // user base de donnée
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});
var UserModel = mongoose.model('users', userSchema);

// ad formulaire
var AdSchema = mongoose.Schema({
  coinname: String,
  title: String,
  NbSeat: Number,
  message: String
});
var AdModel = mongoose.model('annonce', AdSchema);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});




// add new ad

// router.post('/ad', function(req, res, next) {
//   body = JSON.parse(body);
//   var newAd = new AdModel({
//     coinname: body.coinname,
//     title: body.title,
//     NbSeat: body.NbSeat,
//     message: body.message
//   });
//   newville.save(
//     function(error) {
//       AdModel.find(
//         function(err, users) {
//
//           res.render('index');
//         }
//       )
//
//     });
// });


// GET Signup page
router.get('/signUp', function(req, res, next) {
  res.render('signUp', {
    title: 'Express'
  });
});


router.post('/index', function(req, res, next) {

  UserModel.find({
      email: req.body.email
    },
    function(err, users) {
      if (users.length == 0) {

        var newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        newUser.save(
          function(error, user) {
            req.session.user = user;
            UserModel.find({
                user_id: req.session.user._id
              },
              function(error) {
                res.render('index', {
                  user: req.session.user
                });
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


// Get new ad page
router.get('/postAds', function(req, res, next) {
  res.render('postAds', {
    title: 'Express'
  });
});


module.exports = router;
