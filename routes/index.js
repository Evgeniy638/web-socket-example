var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile('../public/index.html');
});

router.get('/messages', function(req, res, next) {
  let jsonMessages = require('../messages.json')

  res.send(jsonMessages)
});

module.exports = router;
