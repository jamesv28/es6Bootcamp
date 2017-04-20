var numbers = [11,22,33,44,55,66];

// reduce we have to put an initial value at the end
//  take in two arguments: first will be the sum and the second will be a number
numbers.reduce(function (sum, number) {
     return sum + number;
},0);
//^ this is the initial value
console.log(numbers);

var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

// get an array of all of the values
// first argument is the iterator and the second will be the value in the object
// don't be surprised to also see prev for previous as well as acc
primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    console.log('primary color', previous);
    return previous;

}, []);

primaryColorsList = primaryColors.map(function (color) {
    return color.color;
});

console.log(primaryColorsList);


