'use strict';

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Seattle = {
    MinCus: 23,
    MaxCus: 65,
    AvgCookie: 6.3,
    cookiePerHour: [],
    cusPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    GetCusPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
            this.cusPerHour[i] = Math.floor(perday);
        }
        console.log('perday', perday);
    },
    Sales: [],
    getCookiePerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiePerHour[i] = Math.ceil(this.cusPerHour[i] * this.AvgCookie);
            total = total + this.cookiePerHour[i];
            this.Sales[i] = this.hours[i] + " : " + this.cookiePerHour[i] + ' cookies ';
        }
        this.Sales[14] = 'total :' + total + ' cookies';
    },
    render: function () {
        console.log(Seattle.Sales);

        var container = document.getElementById('unord');
        var title =document.createElement('h1');
        container.appendChild(title);
        title.textContent = 'Salamon Cookies Sales Page';

        var header = document.createElement('p');
        container.appendChild(header);
        header.textContent = 'Seattle';

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i < this.Sales.length; i++ ){
            var li =document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }

    }
}

Seattle.GetCusPerHour();
Seattle.getCookiePerHour();
console.log('Customers ', Seattle.cusPerHour);
console.log('Cookies  ', Seattle.Sales);
Seattle.render();

// Tokyo

var Tokyo = {
    MinCus: 3,
    MaxCus: 24,
    AvgCookie: 1.2,
    cookiePerHour: [],
    cusPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    GetCusPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
            this.cusPerHour[i] = Math.floor(perday);
        }
        console.log('perday', perday);
    },
    Sales: [],
    getCookiePerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiePerHour[i] = Math.ceil(this.cusPerHour[i] * this.AvgCookie);
            total = total + this.cookiePerHour[i];
            this.Sales[i] = this.hours[i] + " : " + this.cookiePerHour[i] + ' cookies ';
        }
        this.Sales[14] = 'total :' + total + ' cookies';
    },
    render: function () {
        console.log(Tokyo.Sales);
        
        var container = document.getElementById('unord');
        var header = document.createElement('p');
        container.appendChild(header);
        header.textContent = 'Tokyo';

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i < this.Sales.length; i++ ){
            var li =document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
    }
}

Tokyo.GetCusPerHour();
Tokyo.getCookiePerHour();
console.log('Customers ', Tokyo.cusPerHour);
console.log('Cookies  ', Tokyo.Sales);
Tokyo.render();

// Dubai

var Dubai = {
    MinCus: 11,
    MaxCus: 38,
    AvgCookie: 3.7,
    cookiePerHour: [],
    cusPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    GetCusPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
            this.cusPerHour[i] = Math.floor(perday);
        }
        console.log('perday', perday);
    },
    Sales: [],
    getCookiePerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiePerHour[i] = Math.ceil(this.cusPerHour[i] * this.AvgCookie);
            total = total + this.cookiePerHour[i];
            this.Sales[i] = this.hours[i] + " : " + this.cookiePerHour[i] + ' cookies ';
        }
        this.Sales[14] = 'total :' + total + ' cookies';
    },
    render: function () {
        console.log(Dubai.Sales);

        var container = document.getElementById('unord');
        var header = document.createElement('p');
        container.appendChild(header);
        header.textContent = 'Dubai';

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i < this.Sales.length; i++ ){
            var li =document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
    }
}

Dubai.GetCusPerHour();
Dubai.getCookiePerHour();
console.log('Customers ', Dubai.cusPerHour);
console.log('Cookies  ', Dubai.Sales);
Dubai.render();


//paris 

var Paris = {
    MinCus: 20,
    MaxCus: 38,
    AvgCookie: 2.3,
    cookiePerHour: [],
    cusPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    GetCusPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
            this.cusPerHour[i] = Math.floor(perday);
        }
        console.log('perday', perday);
    },
    Sales: [],
    getCookiePerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiePerHour[i] = Math.ceil(this.cusPerHour[i] * this.AvgCookie);
            total = total + this.cookiePerHour[i];
            this.Sales[i] = this.hours[i] + " : " + this.cookiePerHour[i] + ' cookies ';
        }
        this.Sales[14] = 'total :' + total + ' cookies';
    },
    render: function () {
        console.log(Paris.Sales);

        var container = document.getElementById('unord');
        var header = document.createElement('p');
        container.appendChild(header);
        header.textContent = 'Paris';

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i < this.Sales.length; i++ ){
            var li =document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
    }
}

Paris.GetCusPerHour();
Paris.getCookiePerHour();
console.log('Customers ', Paris.cusPerHour);
console.log('Cookies  ', Paris.Sales);
Paris.render();

//Lima	

var Lima = {
    MinCus: 2,
    MaxCus: 16,
    AvgCookie: 4.6,
    cookiePerHour: [],
    cusPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    GetCusPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
            this.cusPerHour[i] = Math.floor(perday);
        }
        console.log('perday', perday);
    },
    Sales: [],
    getCookiePerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiePerHour[i] = Math.ceil(this.cusPerHour[i] * this.AvgCookie);
            total = total + this.cookiePerHour[i];
            this.Sales[i] = this.hours[i] + " : " + this.cookiePerHour[i] + ' cookies ';
        }
        this.Sales[14] = 'total :' + total + ' cookies';
    },
    render: function () {
        console.log(Lima.Sales);

        var container = document.getElementById('unord');
        var header = document.createElement('p');
        container.appendChild(header);
        header.textContent = 'Lima';

        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i < this.Sales.length; i++ ){
            var li =document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
    }
}

Lima.GetCusPerHour();
Lima.getCookiePerHour();
console.log('Customers ', Lima.cusPerHour);
console.log('Cookies  ', Lima.Sales);
Lima.render();
