function ViewCartButton({
  viewCartButton,
  totalQuantity,
  toggleViewCartButton
}) {
  
  return (
    <div className="view-cart-button-container">
      <button
        className={`button-view-cart ${viewCartButton ? "" : "invisible"} `}
        onClick={toggleViewCartButton}
      >
        View Cart {totalQuantity || 0}
      </button>
    </div>
  );
}

export default ViewCartButton;
