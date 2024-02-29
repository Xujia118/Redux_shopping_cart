import React from "react";

function ViewCartButton({ totalQuantity, showCart, setShowCart }) {
  return (
    <div className="view-cart-button-container">
      <button
        className="button-view-cart"
        onClick={() => setShowCart(!showCart)}
      >
        View Cart {totalQuantity || 0}
      </button>
    </div>
  );
}

export default ViewCartButton;
