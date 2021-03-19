const INITIAL_STATE = {
  cartItems: [],
};

export default cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART////":
      const isAlreadyAdded = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (!isAlreadyAdded) action.payload.qty = 1;

      return {
        ...state,
        cartItems: !isAlreadyAdded
          ? [action.payload, ...state.cartItems]
          : state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: ++item.qty }
                : item
            ),
      };

    case "ADD_TO_CART_ERROR":
      console.log("dd", action.error);
    // return state;

    case "INCREASE_QTY":
      console.log("increase quantity");
      return state;

    case "DECREASE_QTY":
      console.log("decrease quantity");
      return state;

    case "LOAD_CURRENT_ITEM":
      console.log("load current item");
      return state;

    default:
      return state;
  }
};
