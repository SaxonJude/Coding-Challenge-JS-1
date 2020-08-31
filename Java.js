  class Park {
    constructor(name, buildYear, trees, area) {
        this.name = name;
        this.buildYear = buildYear;
        this.trees = trees;
        this.area = area;
    }
    calcDensity() {
        let density = this.trees / this.area;
        return density;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }
};

class Streets {
    constructor(name, buildYear, length, size) {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
        this.size = size;
    }
}

// Parks
var Green = new Park('Green', 1830, 600, 15);
var National = new Park('National', 1950, 700, 20);
var Oak = new Park('Oak', 1878, 2000, 35);

var allParks = [Green, National, Oak];
var parkDensity = [Green.calcDensity(), National.calcDensity(), Oak.calcDensity()];
var ages = [Green.calcAge(), National.calcAge(), Oak.calcAge()];

var totalAge = 0;
function sum(arr) {
    for(var i = 0; i < arr.length; i++) {
        totalAge += arr[i];
    }
    return totalAge;
};

sum(ages);
var averageAge = totalAge / 3;

function logDensity(parks){
    parks.forEach((cur) => {
        console.log(`${cur.name} has a tree density of ${cur.calcDensity()} trees per km.`);
    });
};

var sizes = function size(parks) {
    parks.forEach((cur) => {
        if(cur.trees > 1000) {
            console.log(`${cur.name} has more than 1000 trees`);
        }
    })
};

// Streets
var ocean = new Streets('Ocean Street', 1980, 1, 'Small')
var evergreen = new Streets('Evergreen Avenue', 1990, 3, 'Normal')
var brooke = new Streets('Brooke Street', 2000, 7, 'Big')
var coochie = new Streets('Coochie Drive', 2005, 10, 'Huge')
var streets = [ocean, evergreen, brooke, coochie];
var streetsTotal = [ocean.length, evergreen.length, brooke.length, coochie.length];
var totalLength = 0;

function street(arr){
    for(var i = 0; i < arr.length; i++) {
        totalLength += arr[i];
    }
    return totalLength;
};

street(streetsTotal);
var totalAverage = totalLength / 4;

function logStreet(streets) {
    streets.forEach((cur) => {
        console.log(`${cur.name}, built in ${cur.buildYear}, is a ${cur.size} street.`)
    })
};

// Log to console
console.log('----PARKS REPORT----');
console.log(`Our 3 parks have an average age of ${averageAge} years.`);
logDensity(allParks);
sizes(allParks);
console.log('----STREETS REPORT----');
console.log(`Our 4 streets have a total length of ${totalLength} km, with an average of ${totalAverage} km.`);
logStreet(streets);
