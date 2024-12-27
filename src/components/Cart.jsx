import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  checkout,
  toggleCart,
} from "./cartSlice";
import {
  cats,
  calculateSubtotal,
  calculateTotal,
  getTotalQuantity,
} from "../data";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const showCart = useSelector(state => state.cart.showCart);
  const dispatch = useDispatch();

  const totalQuantity = getTotalQuantity(cart);
  const totalPrice = calculateTotal(cart);

  return (
    <div className={`cart-container ${showCart ? "visible" : ""}`}>
      <div className="cart-top">
        <button
          className="button-hide-cart"
          data-target="product"
          onClick={() => dispatch(toggleCart())}
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
                      onClick={() => dispatch(decrement(cats[catName].name))}
                    >
                      -
                    </button>
                    <span>{cart[catName]}</span>
                    <button
                      className="button-increase"
                      onClick={() => dispatch(increment(cats[catName].name))}
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
              onClick={() => dispatch(checkout())}
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
