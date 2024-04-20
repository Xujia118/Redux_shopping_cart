import {
  cats,
  calculateSubtotal,
  calculateTotal,
  getSubQuantity,
  getTotalQuantity,
} from "./data";

import { ACTIONS } from "./constants";

function Product({ cart, updateCart }) {
  function handleClick(catName) {
    updateCart(ACTIONS.INCREMENT, catName);
    calculateTotal(cart);
  }

  return (
    <ul className="cats">
      {Object.keys(cats).map((catName) => {
        const cat = cats[catName];
        return (
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
        );
      })}
    </ul>
  );
}

export default Product;
