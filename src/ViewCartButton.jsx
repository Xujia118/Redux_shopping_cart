import { getTotalQuantity } from "./data";

function ViewCartButton({
  cart,
  viewCartButton,
  toggleViewCartButton
}) {

  const totalQuantity = getTotalQuantity(cart)
  
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
