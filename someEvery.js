// soem and every helpers

var computers = [
    {
        name: 'Apple',
        ram: 24
    },
    {
        name: 'Compaq',
        ram: 4
    }
];

// get a boolean value to find out if there is a computer has a computing value
var canItCompute = computers.some(function (computer) {
    return computer.ram > 20;
});

console.log(canItCompute);

var ages = [20, 23, 27, 31, 32];

// every goes through an array and determines a boolean based off the vallues in the array
var areWeAllLegal = ages.every(function (age) {
    return age >= 21;
});
function canWeGetIntoTheClbu(ages, entryAge) {
    return ages.every(function (age) {
        return age >= entryAge;
    });
}

console.log('can we all go to the bar ', canWeGetIntoTheClbu(ages,21));

var Field = function (value) {
    this.value = value;
};

Field.prototype.validate = function () {
    return this.value.length > 0;
};

var username = new Field('2 cool');
var passwod = new Field("mighty men");

console.log(username.validate());

