var express = require('express');
var router = express.Router();
var request = require('request');


/* GET token pages. */
router.get('/available', function(req, res, next) {
  request('https://api.bancor.network/0.1/currencies/convertiblePairs', (error, response, body) => {

    tokens = JSON.parse(response.body);
    res.render('tokens/available', {title: 'Available Tokens', tokens: tokens.data});
  })
});


router.get('/prices', function(req, res, next) {
  res.render('tokens/prices', { title: 'Token Pricing', tokens: 'BCR' });
});

router.get('/convert', function(req, res, next) {
  res.render('tokens/convert', { title: 'Token Conversion', tokens: 'BCR' });
});

module.exports = router;
