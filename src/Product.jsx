import { cats } from "./data";
import { ACTIONS } from "./constants";

function Product({ dispatch }) {
  function handleClick(catName) {
    dispatch({
      type: ACTIONS.UPDATE_CART,
      payload: { ...state.cats, [catName]: cats[catName] + 1 },
    });

    dispatch({ type: ACTIONS.UPDATE_TOTAL_QUANTITY });
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
