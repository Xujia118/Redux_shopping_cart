import { useDispatch, useSelector } from "react-redux";
import { increment } from "./cartSlice";
import { cats, calculateTotal } from "../data";

function Product() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function handleClick(catName) {
    dispatch(increment(catName));
    calculateTotal(cart);
  }

  return (
    <ul className="cats">
      {Object.keys(cats).map((catName) => {
        // Return inside, so {}. Without return, use ()
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
