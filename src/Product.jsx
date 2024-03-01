import React from "react";
import { cats } from "./data";

function Product({ setCart, setTotalQuantity }) {
  function handleClick(catName) {
    // Add 1 to the quantity of the specific cat
    setCart((prevCart) => ({
      ...prevCart,
      [catName]: prevCart[catName] ? prevCart[catName] + 1 : 1,
    }));

    // Update total quantity
    setTotalQuantity((prevTotal) => prevTotal + 1);
  }

  return (
    <ul className="cats">
      {cats.map((cat) => (
        <li className="cat-product" key={cat.name}>
          <h2 className="cat-name">{cat.name}</h2>
          <img src={cat.image} alt={cat.detail} />
          <button
            className="button-add-to-cart"
            type="button"
            onClick={() => handleClick(cat.name)}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Product;
