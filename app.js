'use strict';

var firstAndPike = {
  minSale: 23,
  maxSale: 65,
  avgSale: 6.3,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  avgCustomer: function() {
    var min = Math.ceil(this.maxSale);
    var max = Math.floor(this.minSale);
    var randomSales = Math.floor(Math.random() * (max - min)) + min;
    return randomSales;
  }
};

for(var i = 0; i < firstAndPike.time.length; i++) {
  console.log('at ' + firstAndPike.time[i] + ' There was ' + firstAndPike.avgCustomer() + ' sales');
}

console.log(firstAndPike.avgCustomer());
