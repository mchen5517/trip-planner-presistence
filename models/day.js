/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: Sequelize.INTEGER
}, {
  getterMethods: {
    type: function () {
      return 'day';
    }
  },
  hooks: {
    beforeValidate: function(){
      Day.max('number')
      .then(function(maxNum){
        console.log("MAXNUM ", maxNum);
        this.setDataValue("number", (maxNum + 1) || 1);
      })
    }
  }
});

module.exports = Day;
