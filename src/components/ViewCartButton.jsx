import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./cartSlice";
import { getTotalQuantity } from "../data";

function ViewCartButton() {
  const cart = useSelector((state) => state.cart.cart);
  const viewCartButton = useSelector((state) => state.cart.viewCartButton);
  const dispatch = useDispatch();

  const totalQuantity = getTotalQuantity(cart);
  
  return (
    <>
      <h1>Catland</h1>
      <div className="view-cart-button-container">
        <button
          className={`button-view-cart ${viewCartButton ? "" : "invisible"} `}
          onClick={() => dispatch(toggleCart())}
        >
          View Cart {totalQuantity || 0}
        </button>
      </div>
    </>
  );
}

export default ViewCartButton;
