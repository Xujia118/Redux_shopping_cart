import React from "react";

function ViewCartButton({
  showCart,
  setShowCart,
  viewCartButton,
  setViewCartButton,
  totalQuantity,
}) {
  function handleShowCartButton() {
    setShowCart(!showCart);
    setViewCartButton(!viewCartButton);
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
