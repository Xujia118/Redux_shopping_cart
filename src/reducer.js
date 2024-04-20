import { initialCart } from "./data";
import { ACTIONS } from "./constants";

export const initialState = {
  cart: initialCart,
  showCart: false,
  viewCartButton: true,
  totalQuantity: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_TOTAL_QUANTITY:
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
      };
    case ACTIONS.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case ACTIONS.TOGGLE_VIEW_CART_BUTTON:
      return {
        ...state,
        showCart: !state.showCart,
        viewCartButton: !state.viewCartButton,
      };
    case ACTIONS.UPDATE_CART:
      const { catName } = action.payload;
      const incrementAmount = action.type === "increment" ? 1 : -1;
      return {
        ...state,
        cart: {
          ...state.cart,
          [catName]: (state.cart[catName] || 0) + incrementAmount,
        },
      };
    case ACTIONS.TOGGLE_HIDE:
      return {
        ...state,
        showCart: !state.showCart,
        viewCartButton: !state.viewCartButton,
      };
    case ACTIONS.CHECKOUT:
      return {
        ...state,
        showCart: !state.showCart,
        viewCartButton: !state.viewCartButton,
        cart: initialCart,
      };
    default:
      return state;
  }
}

export default reducer;
