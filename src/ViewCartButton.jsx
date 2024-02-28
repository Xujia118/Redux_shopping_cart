import React from "react";

function ViewCartButton({ totalQuantity }) {
  return (
    <div className=".view-cart-button-container">
      <button className="button-view-cart">
        View Cart {totalQuantity || 0}
      </button>
    </div>
  );
}

export default ViewCartButton;
