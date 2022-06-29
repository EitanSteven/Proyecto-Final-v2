var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET contact page. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});


/* GET histories. */
router.get('/history/nearDeath', function(req, res, next) {
  res.render('nearDeath');
});
router.get('/history/oldest_ruins', function(req, res, next) {
  res.render('oldestRuins');
});



module.exports = router;
