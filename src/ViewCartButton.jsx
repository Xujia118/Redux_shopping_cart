import React from "react";

function ViewCartButton({
  totalQuantity,
  showCart,
  setShowCart,
  viewCartButton,
  setViewCartButton,
}) {
  function handleShowCartButton() {
    setShowCart(!showCart);
    setViewCartButton(!ViewCartButton);
  }
  return (
    <div className="view-cart-button-container">
      <button
        className={`button-view-cart ${viewCartButton ? "" : "invisible"} `}
        onClick={handleShowCartButton}
      >
        View Cart {totalQuantity || 0}
      </button>
    </div>
  );
}

export default ViewCartButton;
