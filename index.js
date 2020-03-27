var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = 17;
 var itemObject = { itemName: `${item}`, price: `${price}`};
 cart.push(itemObject);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var message = "In your cart, you have"
    for (var i = 0; i < (cart.length - 1); i++) {
      var newMessage = `${message} ${getCart()[i].itemName} at $${getCart()[i].price},`;
      var message = newMessage;
    }
  }
  return `${message} ${getCart()[i].itemName} at $${getCart()[i].price}.`
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var sum = sum + cart[i].price
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      delete cart.[i];
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
