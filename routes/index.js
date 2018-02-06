
var express = require('express');
var router = express.Router();


// router.post('/', function(req, res, next) {
//  res.render('signup', { title: 'Express' });
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
 res.render('index', { title: 'Express' });
});
module.exports = router;
