import React, { useEffect, useState } from "react";

import { initialCart } from "./data";

import ViewCartButton from "./ViewCartButton";
import Product from "./Product";
import Cart from "./Cart";

import "./App.css";

function App() {
  // Cart state
  const [cart, setCart] = useState(initialCart);

  // Button states
  const [showCart, setShowCart] = useState(false);
  const [viewCartButton, setViewCartButton] = useState(true);

  // Get total quantity, needed to render cart view button
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    function calculateTotalQuantity() {
      return Object.values(cart).reduce((acc, cur) => acc + cur, 0);
    }

    setTotalQuantity(calculateTotalQuantity());
  }, [cart]);

  return (
    <>
      <header>
        <h1>Catland</h1>
        <ViewCartButton
          showCart={showCart}
          setShowCart={setShowCart}
          viewCartButton={viewCartButton}
          setViewCartButton={setViewCartButton}
          totalQuantity={totalQuantity}
        />
      </header>
      <main>
        <Product
          setCart={setCart}
          setTotalQuantity={setTotalQuantity}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          initialCart={initialCart}
          showCart={showCart}
          setShowCart={setShowCart}
          viewCartButton={viewCartButton}
          setViewCartButton={setViewCartButton}
          totalQuantity={totalQuantity}
        />
      </main>
    </>
  );
}

export default App;
