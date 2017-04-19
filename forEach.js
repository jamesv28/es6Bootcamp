var colors = ['red', 'blue','green', 'yellow'];
var numbers = [3,5,7,888,74,33];

var sum = 0;

//  array helper method forEach
colors.forEach(function(color) {
    console.log(color);
});

numbers.forEach(function (number) {
    sum += number;
    console.log(sum);
});

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width);
});

console.log(areas);

console.log('this is me', 54 * 32);