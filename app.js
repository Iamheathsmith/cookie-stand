'use strict';


var form = document.getElementById('form-for-stores');
var table = document.getElementById('store-table');
var data = [];

function Student (location, minCust, maxCust, avgSale) {
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

function formData(event) { //this whole function just captures data and puss to data []
  event.preventDefault();

  var location = event.target.location.value;
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var avgSale = event.target.avg_sale.value;

  data.push(new Student(location, minCust, maxCust, avgSale));
  createTable();//create our table here
  form.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].location + '</td>' +
    '<td>' + data[i].minCust + '</td>' +
    '<td>' + data[i].maxCust + '</td>' +
    '<td>' + data[i].avgSale + '</td>';
  }
  table.appendChild(row);
}

form.addEventListener('submit', formData);



//old info here

var table = document.getElementById('table_content');
var stores = [];

function Store(location, minSale, maxSale, avgCookiesPerSale) {
  this.location = location;
  this.minSale = minSale;
  this.maxSale = maxSale;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookies = 0;
  this.time = [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ];
  this.cookiesPh = [];
}

Store.prototype.cookiesSoldPerHour = function() {
  var min = this.minSale;
  var max = this.maxSale;
  var hoursAndCookies = [];
  var totalCookies = 0;
  for (var i = 0; i < this.time.length; i++) {
    var ramdonNum = Math.floor(Math.random() * (max - min) + min);
    var cookiesPerHour =  Math.floor(ramdonNum * this.avgCookiesPerSale);
    hoursAndCookies.push([this.time[i],cookiesPerHour]);
    totalCookies = totalCookies + cookiesPerHour;
  }
  this.totalCookies = totalCookies;
  this.cookiesPh = hoursAndCookies;
};



var firstAndPike = new Store('first And Pike', 23, 64, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.7);
var alki = new Store('Alki', 2, 16, 4.6);

console.log('store 1', firstAndPike);

stores.push(firstAndPike);
stores.push(seaTacAirport);
stores.push(seattleCenter);
stores.push(capitolHill);
stores.push(alki);

console.log('array of stores', stores);

//printing to the HTML page
for (var i = 0; i < stores.length; i++) {
  stores[i].cookiesSoldPerHour();
  var hourSales = ['<td>' + stores[i].location + '</td>']; //this adds to the front
  //hourSales.unshift(stores[i].location); //this add it to the front all.
  var newRow = document.createElement('tr'); //creates the row for data to go in from line 60

  console.log(stores[i].cookiesPh);
  for (var k = 0; k < stores[i].time.length; k++) {
    hourSales.push(
      '<td>' + stores[i].cookiesPh[k][1] + '</td>'
    );
  };
  hourSales.push(stores[i].totalCookies); // add the total at the end of the <td>
  newRow.innerHTML = hourSales.join('');
  table.appendChild(newRow);
};
