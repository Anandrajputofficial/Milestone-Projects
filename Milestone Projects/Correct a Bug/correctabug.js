function doubleCartItems(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }

  let cart = [1, 2, 3, 4, 5];
cart = doubleCartItems(cart);
console.log(cart); // Output: [2, 4, 6, 8, 10]
