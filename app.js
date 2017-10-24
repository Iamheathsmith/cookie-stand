'use strict';

var table = document.getElementById('table_content');
// var hours = [];
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
  var hoursAndCookies = []; //array that is gets filled by the hoursAndCookies.push
  var totalCookies = 0; //the starting at 0 and gets added by each sale to create total hour
  for (var i = 0; i < this.time.length; i++) {
    var ramdonNum = Math.floor(Math.random() * (max - min) + min);
    var cookiesPerHour =  Math.floor(ramdonNum * this.avgCookiesPerSale); // use to shorten code
    hoursAndCookies.push(this.time[i] + ': ' + cookiesPerHour); //use to push hoursAndCookies to the empty array
    totalCookies = totalCookies + cookiesPerHour; //this defines the var totalCookies in this function.
  }
  this.totalCookies = totalCookies; // this defines the object totalCookies
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

for (var i = 0; i < stores.length; i++) {
  stores[i].cookiesSoldPerHour();
  var hours = [];
  console.log(stores[i].cookiesPh);
  for (var k = 0; k < stores[i].time.length; k++) {
    hours.push(
      '<td>' + stores[i].cookiesPh[k] + '</td>'
    );
  };
};
var newRow;

for (var j = 0; j < stores[0].time.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = hours[j];
  table.appendChild(newRow);
}

//this is the old data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var shops = [firstAndPike,seaTacAirport,seattleCenter,capitolHill,alki]; //creating a array of all the stores from above
// for (var j = 0; j < shops.length; j++) {
//   //creating a for loop to add <p> and <ul> and <l> to each page. we use the var shop from above to title it
//   var pEl = document.createElement('p'); //creating in in the cloud/memory
//   pEl.innerHTML = shops[j].location; //giving pEl content in memory/cloud from line 143.
//   document.body.appendChild(pEl); //we put the pEl on the HTML page itself
//   var el = document.createElement('ul'); //create a <ul> tage in the cloud/memory.
//   var shopData = shops[j].cookiesSoldPerHour(); //getting a method of a item from the array[j]
//   var shopLi = ''; //creating a long list of <li> which we fill will line 152
//   for( var i = 0; i < shopData.length; i++) { //for loop that makes a <li> and adds line 153 and joins it together with strings to make a sentence.
//     var lineItem = '<li>' + shopData[i].join(': ') + ' cookeies</li>'; // we created a var for the string for readablity which we use on the next line and we create our <li> here
//     shopLi = shopLi + lineItem; // we define shopLi
//   };
//   var totalLi = '<li>Total:' + shops[j].totalCookies + ' cookies</li>';// we created a var for the string for readablity
//   el.innerHTML = shopLi + totalLi; // adding it to the bottom of the shopLi <li>
//   document.body.appendChild(el); // add this to the HTML.
// };
