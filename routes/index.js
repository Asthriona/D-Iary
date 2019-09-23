var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'D-Iary' });
});
router.get('/cool', function(req, res, next) {
  res.render('cool', { title: 'D-Iary - LOL :D' });
});

module.exports = router;
