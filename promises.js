var promise = new Promise( (resolve, reject) => {
   setTimeout( () => {
       resolve();
   },3000);
});

promise.then( () => console.log('this is a promise') )
    .then( () => console.log('i am doing it again') );


var p1 = new Promise( (resolve, reject) => {
    var cities = [
        {name: 'denver', state: 'colorado' },
        {name: 'boston', state:'massachusetts'},
        {name: 'san diego', state: 'california'}
    ];
    resolve(cities);
} ).then((data) => {
    var list = data.map( (city) => {
       return city.name.toUpperCase();
    });
    console.log(list);
});