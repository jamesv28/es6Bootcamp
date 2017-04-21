function createBookShop(inventory) {
    return {
        // if key value pair are the same you don't have to write it twice
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, ind) =>
                total + ind.price, 0
             )
        },
        inventoryTitle(title) {
            return this.inventory.find(book => book.title == title).price;
        }

    }
}

const inventory = [
    {title: 'hello world', price: 22},
    {title: 'harry potter', price: 100}
];

const bookShop = createBookShop(inventory);

function saveFile(url, data) {
    $.ajax(
        {
            url,
            data,
            method: 'POST'
        }
    )
}