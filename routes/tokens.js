var express = require('express');
var router = express.Router();
var request = require('request');

const bodyParser = require('body-parser')

const middlewares = [
  bodyParser.urlencoded()
]

/* GET token pages. */
router.get('/available', function(req, res, next) {
  request('https://api.bancor.network/0.1/currencies/convertiblePairs', (error, response, body) => {

    tokens = JSON.parse(response.body);
    res.render('tokens/available', {title: 'Available Tokens', tokens: tokens.data});
  })
});


router.get('/prices', function(req, res, next) {
  request('https://api.bancor.network/0.1/currencies/BNT/ticker?fromCurrencyCode=ETH', (error, response, body) => {

    prices = JSON.parse(response.body);
    res.render('tokens/prices', {title: 'Token Prices', prices: prices.data});
  })
});


router.get('/convert', function(req, res, next) {
  res.render('tokens/convert', { title: 'Token Conversion Data', output: {}, toblock: {} })
});

router.post('/convert', (req, res) => {
  res.render('tokens/convert', {
    title: 'Token Conversion Data:',
    output: JSON.stringify(req.body),
    toblock: {}
  })
});

router.post('/convert/submit', (req, res) => {
  res.render('tokens/convert', {
    title: 'Token Conversion Data:',
    output: JSON.stringify(req.body),

    request.post({url:'https://api.bancor.network/0.1/currencies/convert', form: output}, function optionalCallback(err, httpResponse, body) {
      datastring: JSON.parse(body);
    });

  })
});


module.exports = router;
