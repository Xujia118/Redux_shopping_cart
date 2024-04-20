export const cats = {
  "Persian Cats": {
    name: "Persian Cats",
    price: 0.99,
    image: "cat_in_snow.jpg",
    detail: "A cat in snow",
  },
  "Siamese Cats": {
    name: "Siamese Cats",
    price: 3.14,
    image: "cat_on_book.jpg",
    detail: "public/A cat on a book",
  },
  "Ragdoll Cats": {
    name: "Ragdoll Cats",
    price: 2.73,
    image: "four_cats.jpg",
    detail: "public/Four kittens sitting together",
  },
};

const cart = {};

export function getCatInfo(catName) {
  return cats[catName];
}

export function addToCart(catName, quantity) {
  cart[catName] = quantity;
}

export function getSubQuantity(cart, catName) {
  return cart[catName];
}

export function getTotalQuantity(cart) {
  let totalQuantity = 0;

  for (const cat in cart) {
    totalQuantity += cart[cat];
  }

  return totalQuantity;
}

export function calculateSubtotal(cart, catName) {
  let subTotal = 0;
  const price = cats[catName].price;
  const quantity = cart[catName];
  subTotal += price * quantity;
  return subTotal.toFixed(2);
}

export function calculateTotal(cart) {
  let total = 0;

  for (const cat in cart) {
    const price = cats[cat].price;
    const quantity = cart[cat];
    total += price * quantity;
  }

  return total.toFixed(2);
}
