// var request = require('request');
var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://mnp:azerty22@ds225308.mlab.com:25308/masternodepooldatabase',
   options,
   function(err) {
    console.log(err);
   }
);

var AdSchema = mongoose.Schema({
  coinname: String,
  title: String,
  NbSeat: Number,
  message: String
});
var AdModel = mongoose.model('annonce', AdSchema);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
   // GET Signup page

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});
 // Get new ad page

 router.get('/ad', function(req, res, next) {
   res.render('ads');
 });

// add new add

router.post('/ad', function(req, res, next) {
       body = JSON.parse(body);
     var newAd = new AdModel ({
       coinname: body.coinname,
       title: body.title,
       NbSeat: body.NbSeat,
       message: body.message
       });
     newville.save(
       function (error) {
          AdModel.find(
              function (err, users) {

         res.render('index');
   }
)

     });
  });


module.exports = router;
