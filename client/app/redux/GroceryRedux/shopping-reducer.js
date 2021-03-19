import * as actionTypes from "./shopping-type";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";

// const {products} = props
const INITIAL_STATE = {
  // products: [
  //   {
  //     id: 1,
  //     label: "Lux",
  //     price: 40,
  //     image: require("../../../assets/personal-care.png"),
  //   },
  //   {
  //     id: 2,
  //     label: "LifeBoy",
  //     price: 30,
  //     image: require("../../../assets/bakery.png"),
  //   },
  //   {
  //     id: 3,
  //     label: "Detol",
  //     price: 46,
  //     image: require("../../../assets/banana.png"),
  //   },
  //   {
  //     id: 4,
  //     label: "Capri",
  //     price: 32,
  //     image: require("../../../assets/cone.png"),
  //   },
  //   {
  //     id: 5,
  //     label: "Pamolive",
  //     price: 42,
  //     image: require("../../../assets/fruit.png"),
  //   },
  //   {
  //     id: 6,
  //     label: "SafeGuarf",
  //     price: 52,
  //     image: require("../../../assets/vegitable.png"),
  //   },
  //   {
  //     id: 7,
  //     label: "Dove",
  //     price: 80,
  //     image: require("../../../assets/pharmacy.jpg"),
  //   },
  //   {
  //     id: 8,
  //     label: "Golden",
  //     price: 75,
  //     image: require("../../../assets/baby-kids.jpg"),
  //   },
  //   {
  //     id: 9,
  //     label: "Pure",
  //     price: 65,
  //     image: require("../../../assets/Grocery.jpg"),
  //   },
  // ], // {id,label,price,disc,image}
  cart: [], // {id,label,price,disc,image,qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.ADD_TO_CART:
    //   //   //Get the (item) data from the products array
    //   const item = action.payload;

    //   // Check if item is (inCart) already then only increase quantity
    //   const inCart = state.cart.find((item) =>
    //     item.id === action.payload.id ? true : false
    //   );
    //   return {
    //     ...state,
    //     cart: inCart
    //       ? state.cart.map((item) =>
    //           item.id === action.payload.id
    //             ? { ...item, qty: item.qty + 1 }
    //             : item
    //         )
    //       : [
    //           ...state.cart,
    //           {
    //             ...item,
    //             qty: 1,
    //           },
    //         ],
    //   };
    case actionTypes.ADD_TO_CART:
      const isAlreadyAdded = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!isAlreadyAdded) action.payload.qty = 1;

      return {
        ...state,
        cart: !isAlreadyAdded
          ? [action.payload, ...state.cart]
          : state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: ++item.qty }
                : item
            ),
      };
    case actionTypes.ADD_TO_CART_ERROR:
      console.log("data error", action.err);
      return state;

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? // ? { ...item, qty: action.payload.qty }
              { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case actionTypes.DECREASE_QTY:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? // ? { ...item, qty: action.payload.qty }
                { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.CREATE_PROJECT:
      return state;

    case actionTypes.CREATE_ERROR:
      console.log("project error", action.err);
      return state;

    case actionTypes.ITEM_DETAILS:
      return state;

    case actionTypes.ITEM_DETAILS_ERROR:
      // console.log("items error", action.err);
      return state;

    default:
      return state;
  }
};
export default shopReducer;
