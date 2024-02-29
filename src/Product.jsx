import React from "react";
import { cats, cart } from "./data";

function Product({ setTotalQuantity, showCart, setShowCart }) {
  function handleClick(catName) {
    // Add 1 to the quantity of the specific cat
    cart[catName] += 1;
    console.log(`${catName}'s quantity is now ${cart[catName]}`);

    // Update total quantity
    const updatedTotalQuantity = Object.values(cart).reduce(
      (acc, curr) => acc + curr,
      0
    );

    setTotalQuantity(updatedTotalQuantity);
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
