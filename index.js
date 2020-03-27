var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function addToCart(item) {
  function randomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }
  var price = randomInt();
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
  if (cart.length === 0) {
    retrun 0
  } else {
    var subTotal = cart[0].itemPrice;
  for (var i = 0; i < cart.length; i++) {
    var runningTotal = cart[i].itemPrice + subTotal
    var subTotal = runningTotal;
  }
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
