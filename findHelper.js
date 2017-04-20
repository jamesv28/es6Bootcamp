// find gets the first value of an array with your criteria
//  this is great for when you have a unique object or value

var numbers = [22,33,44,55,66,77];

var findNumber = numbers.find(function (number) {
    return number > 55;
});

console.log(findNumber);


function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Focus'),
    new Car('Lincoln')
];

cars.find(function (car) {
    return car.model == "Lincoln";
});

var posts = [
    {
        id: 2,
        title: 'new post'
    },
    {
        id: 3,
        title: 'old post'
    }
];

var comment = { id: 2, comment: 'good post'};

function postForcomment(posts, comment) {
   return posts.find( function (post) {
       return post.id == comment.id;
   } )
}