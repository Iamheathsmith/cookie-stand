'use strict';

var firstAndPike = {
  minSale: 23,
  maxSale: 65,
  AvgCustomer: 6.3,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'
  ],
  avgCustomer: function() {
    var min = Math.ceil(this.maxSale);
    var max = Math.floor(this.minSale);
    return Math.floor(Math.random() * (max - min)) + min;

  }
};

console.log(firstAndPike.avgCustomer());
