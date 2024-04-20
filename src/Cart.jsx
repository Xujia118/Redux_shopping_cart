import React from "react";
import { cats } from "./data";

import { ACTIONS } from "./constants";

function Cart({
  cart,
  showCart,
  totalQuantity,
  hideButton,
  updateCart,
  checkout,
}) {

  function calculateSubquantity(catName, index) {
    const subquantity = cart[catName];
    const price = cats[index].price;
    return (subquantity * price).toFixed(2);
  }

  function calculateTotalPrice() {
    let total = 0;
    cats.forEach((cat) => {
      total += cart[cat.name] * cat.price;
    });
    return total.toFixed(2);
  }

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
            {cats.map((cat, index) =>
              cart[cat.name] ? (
                <li className="item" key={cat.name}>
                  <img
                    className="item-image"
                    src={cat.image}
                    alt={cat.detail}
                  />
                  <span>{cat.name}</span>
                  <span className="item-price">{cat.price}</span>
                  <span className="quantity-control">
                    <button
                      className="button-decrease"
                      onClick={() =>
                        updateCart(ACTIONS.DECREMENT, cat.name)
                      }
                    >
                      -
                    </button>
                    <span>{cart[cat.name]}</span>
                    <button
                      className="button-increase"
                      onClick={() =>
                        updateCart(ACTIONS.INCREMENT, cat.name)
                      }
                    >
                      +
                    </button>
                    {calculateSubquantity(cat.name, index)}
                  </span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <hr />
          <div className="cart-bottom">
            <span className="total">Total: {calculateTotalPrice()}</span>
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
