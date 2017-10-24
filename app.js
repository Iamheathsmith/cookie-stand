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
    return Math.floor(Math.random() * (max - min) + min); //this code creates the number
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndCookies = []; //array that is gets filled by the hoursAndCookies.push
    var totalCookies = 0; //the starting at 0 and gets added by each sale to create total hour
    for (var i = 0; i < this.time.length; i++) {
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgCookiesPerSale); // use to shorten code
      hoursAndCookies.push([this.time[i],cookiesPerHour]); //use to push hoursAndCookies to the empty array
      totalCookies = totalCookies + cookiesPerHour; //this defines the var totalCookies in this function.
    }
    this.totalCookies = totalCookies; // this defines the object totalCookies
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
      hoursAndCookies.push([this.time[i],cookiesPerHour]);
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
      hoursAndCookies.push([this.time[i],cookiesPerHour]);
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
      hoursAndCookies.push([this.time[i],cookiesPerHour]);
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
      hoursAndCookies.push([this.time[i],cookiesPerHour]);
      totalCookies = totalCookies + cookiesPerHour;
    }
    this.totalCookies = totalCookies;
    return hoursAndCookies;
  }
};

var shops = [firstAndPike,seaTacAirport,seattleCenter,capitolHill,alki]; //creating a array of all the stores from above
for (var j = 0; j < shops.length; j++) {
  //creating a for loop to add <p> and <ul> and <l> to each page. we use the var shop from above to title it
  var pEl = document.createElement('p'); //creating in in the cloud/memory
  pEl.innerHTML = shops[j].location; //giving pEl content in memory/cloud from line 143.
  document.body.appendChild(pEl); //we put the pEl on the HTML page itself
  var el = document.createElement('ul'); //create a <ul> tage in the cloud/memory.
  var shopData = shops[j].cookiesSoldPerHour(); //getting a method of a item from the array[j]
  var shopLi = ''; //creating a long list of <li> which we fill will line 152
  for( var i = 0; i < shopData.length; i++) { //for loop that makes a <li> and adds line 153 and joins it together with strings to make a sentence.
    var lineItem = '<li>' + shopData[i].join(': ') + ' cookeies</li>'; // we created a var for the string for readablity which we use on the next line and we create our <li> here
    shopLi = shopLi + lineItem; // we define shopLi
  };
  var totalLi = '<li>Total:' + shops[j].totalCookies + ' cookies</li>';// we created a var for the string for readablity
  el.innerHTML = shopLi + totalLi; // adding it to the bottom of the shopLi <li>
  document.body.appendChild(el); // add this to the HTML.
};

//seaTacAirport,SeattleCenter,CapitolHill,Alki


//and dont use i as your counter or you will mess it up use j
