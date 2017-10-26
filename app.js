'use strict';

var form = document.getElementById('form-for-stores');
var table = document.getElementById('store-table');
var newStore = [];

console.log('array of store made', newStore);

function Store (location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalCookies = 0;
  this.time = [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ];
  this.cookiesPh = [];
}

function formData(event) { //this whole function just captures newStore and puss to newStore []
  event.preventDefault();

  var location = event.target.location.value;
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var avgSale = event.target.avg_sale.value;

  newStore.push(new Store(location, minCust, maxCust, avgSale));
  createTable();//create our table here
  form.reset();
}

console.log('array of store made', newStore);

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
    console.log('random number is:' + ramdonNum);
  }
  this.totalCookies = totalCookies;
  this.cookiesPh = hoursAndCookies;

  console.log(totalCookies);
};



function createTable() {
  document.getElementById('store-table').innerHTML = '';
  for (var i = 0; i < newStore.length; i++) {
    if (newStore[i].cookiesPh.length === 0) {
      newStore[i].cookiesSoldPerHour();
    }
    var hourSales = ['<td>' + newStore[i].location + '</td>'];
    var newRow = document.createElement('tr');

    console.log(newStore[i].cookiesPh);

    for (var k = 0; k < newStore[i].time.length; k++) {
      hourSales.push(
        '<td>' + newStore[i].cookiesPh[k][1] + '</td>'
      );
    };
    hourSales.push(newStore[i].totalCookies);
    newRow.innerHTML = hourSales.join('');
    table.appendChild(newRow);
  };

}

form.addEventListener('submit', formData);
