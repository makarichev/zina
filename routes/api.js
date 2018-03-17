var moment = require('moment');
var express = require('express');
var router = express.Router();

var settings = require('../app.settings.json')
var rooms = require('../data/rooms.json')
var request = require('request')


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

router.get('/nearest', function(req, res) {
  var options = {
    url: 'https://api.rasp.yandex.net/v3.0/nearest_stations/',
    method: 'GET',
    qs: {
      apikey: 'dce68fd2-ece7-4e26-b1c9-1d950c2fcf13',
      lat: 55.973457,
      lng: 37.160758,
      distance: 1,
      lang: 'ru_RU',
      station_types: 'bus_stop',
      transport_types: 'bus'
    }
  }
//s9808198
  request(options, function(err, response, body) {
    res.send(JSON.parse(response.body));
  })
})



router.get('/shedule?code', function(req, res) {
  var options = {
    url: 'https://api.rasp.yandex.net/v3.0/schedule/',
    method: 'GET',
    qs: {
      apikey: 'dce68fd2-ece7-4e26-b1c9-1d950c2fcf13',
      station: 's9808198'
    }
  }
  console.log(req)
  request(options, function(err, response, body) {
    res.send(JSON.parse(response.body));
  })
})

module.exports = router;