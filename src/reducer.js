import { ACTIONS } from "./constants";

export const initialState = {
  cart: {},
  showCart: false,
  viewCartButton: true,
};

function reducer(state, action) {
  const { catName } = action.payload || {};

  switch (action.type) {
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

    case ACTIONS.DECREMENT:
      return {
        ...state,
        cart: {
          ...state.cart,
          [catName]: (state.cart[catName] || 0) - 1,
        },
      };

    case ACTIONS.INCREMENT:
      return {
        ...state,
        cart: {
          ...state.cart,
          [catName]: (state.cart[catName] || 0) + 1,
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
