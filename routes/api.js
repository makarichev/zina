var moment = require('moment');
var express = require('express');
var router = express.Router();

var settings = require('../app.settings.json')
var rooms = require('../data/rooms.json')


router.get('/commands', function (req, res) {
  res.send([
    { 'command': 'comand1' },
    { 'command': 'comand2' },
    { 'command': 'comand3' },
    { 'command': 'comand4' }, 
    { 'command': 'comand4' },
    { 'command': 'comand4' },
    { 'command': 'comand4' },
    { 'command': 'comand4' },
    { 'command': 'comand4' },
    { 'command': 'comand4' }
  ]);
});


router.get('/test', function (req, res) {
  setTimeout(function () {
    res.send(moment().format('DD.MM.YYYY'));
  }, 4000)
});

router.get('/settings', function (req, res) {
  res.send(settings);
});

router.get('/rooms', function (req, res) {
  res.send(rooms);
});



module.exports = router;