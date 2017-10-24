'use strict';

//store #
var firstAndPike = {
  minSale: 23,
  maxSale: 65,
  avgSale: 6.3,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates
    var min = Math.ceil(this.maxSale);
    var max = Math.floor(this.minSale);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  cookiesSoldPerHour: function() {
    return (this.randomCustomer() * this.avgSale);
    console.log(this.randomCustomer() * this.avgSale);
  }
};

for(var i = 0; i < firstAndPike.time.length; i++) {
  console.log('at ' + firstAndPike.time[i] + ' There was ' + firstAndPike.randomCustomer() + ' sales');
}

console.log(firstAndPike.randomCustomer());

// //store 2
// var seaTacAirport = {
//   minSale: 3,
//   maxSale: 24,
//   avgSale: 1.2,
//   time: [
//     '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
//   ],
//   avgCustomer: function() {
//     var min = Math.ceil(this.maxSale);
//     var max = Math.floor(this.minSale);
//     var randomSales = Math.floor(Math.random() * (max - min)) + min;
//     return randomSales;
//   }
// };
//
// for(var i = 0; i < seaTacAirport.time.length; i++) {
//   console.log('at ' + seaTacAirport.time[i] + ' There was ' + seaTacAirport.avgCustomer() + ' sales');
// }
//
// console.log(seaTacAirport.avgCustomer());
//
// //store #3
// var seattleCenter = {
//   minSale: 11,
//   maxSale: 38,
//   avgSale: 3.7,
//   time: [
//     '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
//   ],
//   avgCustomer: function() {
//     var min = Math.ceil(this.maxSale);
//     var max = Math.floor(this.minSale);
//     var randomSales = Math.floor(Math.random() * (max - min)) + min;
//     return randomSales;
//   }
// };
//
// for(var i = 0; i < seattleCenter.time.length; i++) {
//   console.log('at ' + seattleCenter.time[i] + ' There was ' + seattleCenter.avgCustomer() + ' sales');
//
// }
//
// console.log(seattleCenter.avgCustomer());
//
// //store #4
// var capitolHill = {
//   minSale: 20,
//   maxSale: 38,
//   avgSale: 2.3,
//   time: [
//     '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
//   ],
//   avgCustomer: function() {
//     var min = Math.ceil(this.maxSale);
//     var max = Math.floor(this.minSale);
//     var randomSales = Math.floor(Math.random() * (max - min)) + min;
//     return randomSales;
//   }
// };
//
// for(var i = 0; i < capitolHill.time.length; i++) {
//   console.log('at ' + capitolHill.time[i] + ' There was ' + capitolHill.avgCustomer() + ' sales');
// }
//
// console.log(capitolHill.avgCustomer());
//
// //store #5
// var Alki = {
//   minSale: 2,
//   maxSale: 16,
//   avgSale: 4.6,
//   time: [
//     '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
//   ],
//   avgCustomer: function() {
//     var min = Math.ceil(this.maxSale);
//     var max = Math.floor(this.minSale);
//     var randomSales = Math.floor(Math.random() * (max - min)) + min;
//     return randomSales;
//   }
// };
//
// for(var i = 0; i < Alki.time.length; i++) {
//   console.log('at ' + Alki.time[i] + ' There was ' + Alki.avgCustomer() + ' sales');
// }
//
// console.log(Alki.avgCustomer());
