var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://mnp:azerty22@ds225308.mlab.com:25308/masternodepooldatabase',
    options,
    function(err) {
     console.log(err);
    }
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/postAds', function(req, res, next) {
  res.render('postAds', { title: 'Express' });
});


module.exports = router;
