var products = [
    {
        name: 'cucumber',
        type: 'vegetable',
        quantity: 3,
        price: 2.50
    },
    {
        name: "banana",
        type: 'fruit',
        quantity: 23,
        price: 1.00
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 34,
        price: 2.22
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 33,
        price: 88.03
    }
];

var list = [];
// need to return something
products.filter(function (product) {
    return product.type === 'fruit' && product.price > 1.00
});
var post = {id: 3, title: "Happy new year"};
var comments = [
    {
        postId: 3,
        comment: 'this is great'
    },
    {
        postId: 4,
        comment: 'i do not like food'
    },
    {
        postId: 34,
        comment: 'hello world'
    },
    {
        postId: 2,
        comment: 'lorem ipsum'
    }
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId == post.id;
    })
}

console.log(commentsForPost(post,comments));

var numbers = [22,33,44,55,77,66,88,99];

var longNubmers = numbers.filter(function (number) {
    return number >= 50;
});

console.log('i am a long number', longNubmers);