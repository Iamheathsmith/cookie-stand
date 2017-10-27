'use strict';

var form = document.getElementById('form-for-stores');
var table = document.getElementById('store-table');
var newStores = [];
var totelEachHour = [];

console.log('array of store made', newStores);

function Store (location, minCust, maxCust, avgSale) { // object construtor
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalCookies = 0;
  this.cookiesPh = [];
  this.time = [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ];
}

function formData(event) { //this whole function just captures newStores and push to newStores []
  event.preventDefault();

  var location = event.target.location.value; //values from the HTML page
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var avgSale = event.target.avg_sale.value;

  if (Number(minCust) < Number(maxCust)) { //prevents data to be entered if its wrong
    newStores.push(new Store(location, minCust, maxCust, avgSale));
    createTable();//create our table here
    form.reset();
  } else {
    alert ('Max Customers must be greater then min cumstormers');
  }
}

console.log('array of store made', newStores);

Store.prototype.cookiesSoldPerHour = function() {
  var min = this.minCust;
  var max = this.maxCust;
  var hoursAndCookies = [];
  var totalCookies = 0;
  for (var i = 0; i < this.time.length; i++) {
    var ramdonNum = Math.floor(Math.random() * (max - min) + min);
    var cookiesPerHour =  Math.floor(ramdonNum * this.avgSale);
    hoursAndCookies.push([this.time[i],cookiesPerHour]);
    totalCookies = totalCookies + cookiesPerHour;
    //console.log('random number is:' + ramdonNum);
  }
  this.totalCookies = totalCookies;
  this.cookiesPh = hoursAndCookies;

  console.log(totalCookies);
  console.log(cookiesPerHour);

};
function calHourTotals() {
  var hourlyTotals;
  for (var column = 0; column < newStores[0].time.length; column++) {
    hourlyTotals = 0;
    for (var row = 0; row < newStores.length; row++) {
      hourlyTotals = hourlyTotals + newStores[row].cookiesPh[column][1];
      console.log(hourlyTotals, column);
    }
    totelEachHour.push(hourlyTotals);
    //console.log(totelEachHour);
  }
}


function createTable() {
  //makes table with data from above
  document.getElementById('store-table').innerHTML = ''; //clears the table for new data
  for (var i = 0; i < newStores.length; i++) {
    if (newStores[i].cookiesPh.length === 0) {
      newStores[i].cookiesSoldPerHour();
    }
    var hourSales = ['<td>' + newStores[i].location + '</td>']; //adds stores names at the front
    var newRow = document.createElement('tr');

    //console.log(newStores[i].cookiesPh);
    console.log(newStores[i].cookiesPh[i][1]);


    for (var k = 0; k < newStores[i].time.length; k++) {
      hourSales.push('<td>' + newStores[i].cookiesPh[k][1] + '</td>'); //makes the cookes per hour
    };


    hourSales.push(newStores[i].totalCookies); //adds total to the end
    newRow.innerHTML = hourSales.join('');
    table.appendChild(newRow);
  };
  calHourTotals();
}

form.addEventListener('submit', formData);







//new code for grand total for each hour.

// Store.protoype.cookiesAtAGivenTime = function(time) {
//   for (var i = 0; i < this.hoursAndCookies.length; i++) {
//     if (this.hoursAndCookies[i][0] === time) {
//       return this.hoursAndCookies[i][1];
//     }
//   }
// };
//
// var totalCookiesFromAllStoresAtAGivenTime = function(time) {
//   var total = 0;
//   for (var i = 0; i < newStores.length; i++) {
//     total = total + newStores[i].cookiesAtAGivenTime(time);
//   }
//   return total;
// };

// var makeHourlySums = function() {
//   var hourlySum = '';
//   for (var i = 0; i < this.time.length; i++) {
//     var runningTotal = 0;
//     for (var b = 0; b < newStores.length; b++) {
//       runningTotal = runningTotal + newStores[i].cookiesPerHour;
//     }
//     hourlySum = hourlySum + '<td>' + runningTotal + '</td>';
//   }
//   return hourlySum;
// };
// console.log(makeHourlySums());
//
//
// var makeDailySum = function() {
//   var dailySum = 0;
//   for (var y = 0; y = newStores.length; y++); {
//     dailySum = dailySum + newStores[y].totalCookies;
//   }
//   return '<td>' + dailySum + '</td>';
// };
// console.log(makeDailySum());




// var salesByHour = 0;
// for (var y = 0; y < newStores.length; y++) {
//   salesByHour = salesByHour + salesByHour + cookiesPerHour;
//   console.log('this is the total for each hour', salesByHour);
// }
