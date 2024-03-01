import React from "react";
import { cats, initialCart } from "./data";

function Cart({ showCart, setShowCart, viewCartButton, setViewCartButton }) {
  function handleHideButton() {
    setShowCart(!showCart);
    setViewCartButton(!viewCartButton);
  }

  function calculateSubquantity(catName, index) {
    const subquantity = cart[catName];
    const price = cats[index].price;
    return (subquantity * price).toFixed(2);
  }

  function calculateTotalPrice() {
    let total = 0;
    cats.forEach((cat, index) => {
      total += cart[cat.name] * cat.price;
    });
    return total.toFixed(2);
  }

  function handleCheckOutButton() {
    setShowCart(!showCart);
    setViewCartButton(!viewCartButton);
    // TODO: clear the cart and ready the bill
  }

  return (
    <div className={`cart-container ${showCart ? "visible" : ""}`}>
      <div className="cart-top">
        <button
          className="button-hide-cart"
          data-target="product"
          onClick={handleHideButton}
        >
          Hide Cart
        </button>
      </div>
      <hr></hr>

      <ul className="cart">
        {cats.map((cat, index) => (
          <li className="item" key={cat.name}>
            <img className="item-image" src={cat.image} alt={cat.detail} />
            <span>{cat.name}</span>
            <span className="item-price">{cat.price}</span>
            <span className="quantity-control">
              <button className="button-decrease">-</button>
              <span>{cart[cat.name]}</span>
              <button className="button-increase">+</button>
              {calculateSubquantity(cat.name, index)}
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <div className="cart-bottom">
        <span className="total">Total: {calculateTotalPrice()}</span>
        <button
          className="button-checkout"
          data-target="product"
          onClick={handleCheckOutButton}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
