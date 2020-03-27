var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
 var itemObject = { itemName: `${item}`, price: `${price}`};
 cart.push(itemObject);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var message = "In your cart, you have"
    for (var i = 0; i < (cart.length - 1); i++) {
      var newMessage = `${message} ${getCart()[i].itemName} at $${getCard()[i].price},`;
      var message = newMessage;
    }
  }
  return `${message} ${getCart()[i].itemName} at $${getCard()[i].price}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
