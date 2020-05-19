'use strict';

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookiePerHour = [];
var cusPerHour = [];
var Sales = [];
var cities = [];
var tot = [];

function City(cityName, MinCus, MaxCus, AvgCookie) {
    this.cityName = cityName;
    this.MinCus = MinCus;
    this.MaxCus = MaxCus;
    this.AvgCookie = AvgCookie;
    this.total = 0;
    cities.push(this);
}
City.prototype.GetCusPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
        cusPerHour[i] = Math.floor(perday);
    }
    // console.log('perday', perday);
}
City.prototype.getCookiePerHour = function () {
    // var total = 0;
    for (var i = 0; i < hours.length; i++) {
        cookiePerHour[i] = Math.ceil(cusPerHour[i] * this.AvgCookie);
        this.total = this.total + cookiePerHour[i];
        Sales[i] = hours[i] + " : " + cookiePerHour[i];
    }
    Sales[14] = this.total;
}

City.prototype.render = function () {
    var container = document.getElementById('tableOne');
    var tableEl = document.createElement('tr');
    container.appendChild(tableEl);

    var tableData23 = document.createElement('td');
    tableEl.appendChild(tableData23);
    tableData23.textContent = (this.cityName);


    for (var i = 0; i < hours.length; i++) {
        var tableHours = document.createElement('td');
        tableEl.appendChild(tableHours);
        tableHours.textContent = cookiePerHour[i];
    }

    var tableData2 = document.createElement('td');
    tableEl.appendChild(tableData2);
    tableData2.textContent = (this.total);

}

var headertag = function () {
    var container = document.getElementById('results');
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    tableEl.setAttribute('id', 'tableOne');

    var headerRow = document.createElement('tr');
    tableEl.appendChild(headerRow);

    var tableData33 = document.createElement('th');
    headerRow.appendChild(tableData33);
    tableData33.textContent = " ";

    for (var i = 0; i < hours.length; i++) {
        var tableHours = document.createElement('th');
        headerRow.appendChild(tableHours);
        tableHours.textContent = hours[i];
    }
    var tableData1 = document.createElement('th');
    headerRow.appendChild(tableData1);
    tableData1.textContent = 'Daily Location Total';

}

headertag();


// var tablefooter = function () {
//     var footRow = document.createElement('tr');
//     tableEl.appendChild(footRow);
//     // tablefooter.textContent= 'helo;

//     for (var i = 0; i < hours.length; i++) {

//         for (var j = 0; j < cities.length; j++) {
//             var colum = hours[j] + cities[0]

//         }
//     }
    
// }
// console.log(tablefooter);
// tablefooter();

var Seattle = new City('seattle', 23, 65, 6.3);
var tokyo = new City('tokyo', 3, 24, 1.2);
var dubai = new City('dubai', 11, 38, 3.7);
var paris = new City('paris', 20, 38, 2.5);
var lima = new City('lima', 2, 16, 4.6);

console.log(cities);
console.log(tokyo);

for (var i = 0; i < cities.length; i++) {
    cities[i].GetCusPerHour();
    cities[i].getCookiePerHour();
    cities[i].render();
}