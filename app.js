'use strict';

//store #
var firstAndPike = {
  location: 'First and Pike',
  minSale: 23,
  maxSale: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndCookies = [];
    var totalCookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgCookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgCookiesPerSale);
      hoursAndCookies.push([this.time[i],cookiesPerHour])
      totalCookies = totalCookies + cookiesPerHour;
    }
    this.totalCookies = totalCookies;
    return hoursAndCookies;
  }
};

var seaTacAirport = {
  location: 'seaTac Airport',
  minSale: 3,
  maxSale: 24,
  avgCookiesPerSale: 1.2,
  totalCookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndCookies = [];
    var totalCookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgCookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgCookiesPerSale);
      hoursAndCookies.push([this.time[i],cookiesPerHour])
      totalCookies = totalCookies + cookiesPerHour;
    }
    this.totalCookies = totalCookies;
    return hoursAndCookies;
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minSale: 11,
  maxSale: 38,
  avgCookiesPerSale: 3.7,
  totalCookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndCookies = [];
    var totalCookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgCookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgCookiesPerSale);
      hoursAndCookies.push([this.time[i],cookiesPerHour])
      totalCookies = totalCookies + cookiesPerHour;
    }
    this.totalCookies = totalCookies;
    return hoursAndCookies;
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minSale: 11,
  maxSale: 38,
  avgCookiesPerSale: 3.7,
  totalCookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndCookies = [];
    var totalCookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgCookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgCookiesPerSale);
      hoursAndCookies.push([this.time[i],cookiesPerHour])
      totalCookies = totalCookies + cookiesPerHour;
    }
    this.totalCookies = totalCookies;
    return hoursAndCookies;
  }
};

var alki = {
  location: 'Capitol Hill',
  minSale: 11,
  maxSale: 38,
  avgCookiesPerSale: 3.7,
  totalCookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndCookies = [];
    var totalCookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgCookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgCookiesPerSale);
      hoursAndCookies.push([this.time[i],cookiesPerHour])
      totalCookies = totalCookies + cookiesPerHour;
    }
    this.totalCookies = totalCookies;
    return hoursAndCookies;
  }
};

var shops = [firstAndPike,seaTacAirport,seattleCenter,capitolHill,alki]; // this goes at the very bottom
for (var j = 0; j < shops.length; j++) {
  var pEl = document.createElement('p');
  pEl.textContent = shops[j].location;
  document.body.appendChild(pEl);
  var el = document.createElement('ul');
  var shopData = shops[j].cookiesSoldPerHour(); //once you have all the shops, replace firstAndPike with shops[i]
  var shopLi = '';
  for( var i = 0; i < shopData.length; i++) {
    var lineItem = '<li>' + shopData[i].join(': ') + ' cookeies</li>';
    shopLi = shopLi + lineItem;
  };
  var totalLi = '<li>Total:' + shops[j].totalCookies + ' cookies</li>';
  el.innerHTML = shopLi + totalLi;
  document.body.appendChild(el);
};

//seaTacAirport,SeattleCenter,CapitolHill,Alki


//and dont use i as your counter or you will mess it up use j
