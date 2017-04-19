// look at the map helper

var numbers = [1,2,3];

var doubledArrays = [];

var doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);

var names = ['always','be', 'collecting'];

// always add a return statement
var acronym = names.map(function (name) {
    return name.charAt(0);
});

console.log(acronym.toString().replace(/,/g, '').toUpperCase());

var cars = [
    {
        model: 'buick',
        price: 'cheap'
    },
    {
        model: 'Rolls Royce',
        price: 'baller status'
    },
    {
        model: 'Ford pickup',
        price: 'small loan'
    }
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);

// distance/time
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});

function plucking(array, property) {
    return array.map(function (obj) {
        return obj[property];
    })
}

