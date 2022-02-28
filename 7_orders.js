function orders(product, quantity) {
    let productPrice;
    if (product == 'coffee') {
        productPrice = 1.50;
    } else if (product == 'water') {
        productPrice = 1.00;
    } else if (product == 'coke') {
        productPrice = 1.40;
    } else if (product == 'snacks') {
        productPrice = 2.00;
    }

    let totalPrice = productPrice * quantity;
console.log(totalPrice.toFixed(2));
}
orders('coffee', 2)