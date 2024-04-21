import { useReducer } from "react";

import reducer, { initialState } from "./reducer";
import { ACTIONS } from "./constants";

import ViewCartButton from "./ViewCartButton";
import Product from "./Product";
import Cart from "./Cart";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleViewCartButton() {
    dispatch({ type: ACTIONS.TOGGLE_VIEW_CART_BUTTON });
  }

  function updateCart(actionType, catName) {
    dispatch({ type: actionType, payload: { catName } });
  }

  function onHideButton() {
    dispatch({ type: ACTIONS.TOGGLE_HIDE });
  }

  function checkout() {
    dispatch({ type: ACTIONS.CHECKOUT });
  }

  return (
    <>
      <header>
        <h1>Catland</h1>
        <ViewCartButton
          cart={state.cart}
          viewCartButton={state.viewCartButton}
          toggleViewCartButton={toggleViewCartButton}
        />
      </header>
      <main>
        <Product cart={state.cart} updateCart={updateCart} />
        <Cart
          cart={state.cart}
          showCart={state.showCart}
          viewCartButton={state.viewCartButton}
          updateCart={updateCart}
          hideButton={onHideButton}
          checkout={checkout}
        />
      </main>
    </>
  );
}

export default App;
