var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express & Nodemon By 2017250035_Lee-JongSoo' });
});

module.exports = router;
