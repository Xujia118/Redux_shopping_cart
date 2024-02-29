import React, { useEffect, useState } from "react";

import { cart } from "./data";

import ViewCartButton from "./ViewCartButton";
import Product from "./Product";
import Cart from "./Cart";

import "./App.css";

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    function calculateTotalQuantity() {
      Object.values(cart).reduce((acc, cur) => acc + cur, 0);
    }
    setTotalQuantity(calculateTotalQuantity());
  }, []);

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header>
        <h1>Catland</h1>
        <ViewCartButton
          totalQuantity={totalQuantity}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </header>
      <main>
        <Product
          setTotalQuantity={setTotalQuantity}
          showCart={showCart}
          setShowCart={setShowCart}
        />
        <Cart showCart={showCart} setShowCart={setShowCart} />
      </main>
    </>
  );
}

export default App;
