import { useEffect, useReducer} from "react";

import { initialCart } from "./data";
import reducer, { initialState } from "./reducer";
import { ACTIONS } from "./constants";

import ViewCartButton from "./ViewCartButton";
import Product from "./Product";
import Cart from "./Cart";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleViewCartButton() {
    dispatch({ type: ACTIONS.TOGGLE_VIEW_CART_BUTTON })
  }


  useEffect(() => {
    function calculateTotalQuantity() {
      return Object.values(state.cart).reduce((acc, cur) => acc + cur, 0);
    }

    dispatch({
      type: ACTIONS.UPDATE_TOTAL_QUANTITY,
      payload: calculateTotalQuantity(),
    });
  }, [state.cart]);


  return (
    <>
      <header> 
        <h1>Catland</h1>
        <ViewCartButton
          viewCartButton={state.viewCartButton}
          totalQuantity={state.totalQuantity}
          toggleViewCartButton={toggleViewCartButton}
        />
      </header>
      <main>
        <Product
          dispatch={dispatch}
        />
        <Cart
          cart={state.cart}
          setCart={() => dispatch({ type: ACTIONS.UPDATE_CART })}
          initialCart={initialCart}
          showCart={state.showCart}
          setShowCart={() => dispatch({ type: ACTIONS.TOGGLE_CART })}
          viewCartButton={state.viewCartButton}
          setViewCartButton={() =>
            dispatch({ type: ACTIONS.TOGGLE_VIEW_CART_BUTTON })
          }
          totalQuantity={state.totalQuantity}
        />
      </main>
    </>
  );
}

export default App;
