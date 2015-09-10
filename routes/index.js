var express = require('express');
var tables = require('../tables');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resistor Calculator', bandTable: tables.get3BandTable(), year : new Date().getFullYear() });
});

module.exports = router;
