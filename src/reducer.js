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
      return {
        ...state,
        cart: {
          ...state.cart,
          [catName]: state.cart[catName] ? state.cart[catName] + 1 : 1,
        },
      };
    default:
      state;
  }
}

export default reducer;
