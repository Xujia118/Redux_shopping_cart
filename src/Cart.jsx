import React from "react";

import {
  cats,
  calculateSubtotal,
  calculateTotal,
  getTotalQuantity,
} from "./data";

import { ACTIONS } from "./constants";

function Cart({ cart, showCart, hideButton, updateCart, checkout }) {
  const totalQuantity = getTotalQuantity(cart);
  const totalPrice = calculateTotal(cart);

  return (
    <div className={`cart-container ${showCart ? "visible" : ""}`}>
      <div className="cart-top">
        <button
          className="button-hide-cart"
          data-target="product"
          onClick={hideButton}
        >
          Hide Cart
        </button>
      </div>
      <hr></hr>

      {totalQuantity ? (
        <>
          <ul className="cart">
            {Object.keys(cats).map((catName) =>
              cart[catName] ? (
                <li className="item" key={catName}>
                  <img
                    className="item-image"
                    src={cats[catName].image}
                    alt={cats[catName].detail}
                  />
                  <span>{cats[catName].name}</span>
                  <span className="item-price">{cats[catName].price}</span>
                  <span className="quantity-control">
                    <button
                      className="button-decrease"
                      onClick={() => updateCart(ACTIONS.DECREMENT, catName)}
                    >
                      -
                    </button>
                    <span>{cart[catName]}</span>
                    <button
                      className="button-increase"
                      onClick={() => updateCart(ACTIONS.INCREMENT, catName)}
                    >
                      +
                    </button>
                  </span>
                  <span className="subtotal">
                    {calculateSubtotal(cart, catName)}
                  </span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <hr />
          <div className="cart-bottom">
            <span className="total">Total: {totalPrice}</span>
            <button
              className="button-checkout"
              data-target="product"
              onClick={checkout}
            >
              Check Out
            </button>
          </div>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
