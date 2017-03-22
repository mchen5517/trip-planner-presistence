var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
    ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.get('/api/attractions', function(req, res, next){
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
    ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.json({
      hotels: dbHotels,
      restaurants: dbRestaurants,
      activities: dbActivities
    });
  })
  .catch(next);
})

router.get('/api/hotels', function(req, res, next){
  Hotel.findAll()
  .then(function(hotels){
    res.json(hotels);
  })
  .catch(next);
});

router.get('/api/restaurants', function(req, res, next){
  Restaurant.findAll()
  .then(function(restaurants){
    res.json(restaurants);
  })
  .catch(next);
});

router.get('/api/activities', function(req, res, next){
  Activity.findAll()
  .then(function(activities){
    res.json(activities);
  })
  .catch(next);
});

router.get('/api/days', function(req, res, next){
  Day.findAll()
  .then(function(days){
    console.log("GOT ALL DAYS");
    res.json(days);
  })
  .catch(next);
})

router.get('/api/days/:number', function(req, res, next){
  Day.findOne({where: {number: req.params.number}})
  .then(function(foundDay){
    console.log("FOUND A DAY");
    res.json(foundDay);
  })
  .catch(next);
})

router.delete('/api/days/:number', function(req, res, next){
  Day.destroy({where: {number: req.params.number}})
  .then(function(){
    console.log("DELETED A DAY");
    res.json({});
  })
  .catch(next);
});

router.post('/api/days/', function(req, res, next){
  Day.create()
  .then(function(createdDay){
    console.log("CREATED A DAY");
    res.json(createdDay);
  })
  .catch(next);
})

module.exports = router;





