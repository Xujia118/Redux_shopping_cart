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
      Object.values(cart).reduce((acc, curr) => acc + curr, 0);
    }
    setTotalQuantity(calculateTotalQuantity());
  }, []);

  return (
    <>
      <header>
        <h1>Catland</h1>
        <ViewCartButton totalQuantity={totalQuantity} />
      </header>
      <main>
        <Product
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
        />
        <Cart />
      </main>
    </>
  );
}

export default App;
