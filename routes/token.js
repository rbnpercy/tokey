var express = require('express');
var router = express.Router();

/* GET token page. */
router.get('/', function(req, res, next) {
  res.render('token', { title: 'Tokey' });
});

module.exports = router;
