import React from "react";
import { cats, cart } from "./data";

function Cart({ showCart, setShowCart, viewCartButton, setViewCartButton }) {
  function handleHideButton() {
    setShowCart(!showCart);
    setViewCartButton(!viewCartButton);
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
        {cats.map((cat) => (
          <li className="item" key={cat.name}>
            <img className="item-image" src={cat.image} alt={cat.detail} />
            <span>{cat.name}</span>
            <span className="item-price">{cat.price}</span>
            <span className="quantity-control">
              <button className="button-decrease">-</button>
              {cart[cat]}
              <button className="button-increase">+</button>
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <div className="cart-bottom">
        <span className="total">Total: Fake Num</span>
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
