import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REQUEST,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants";
import AsyncStorage from "@react-native-community/async-storage";

// export const addToCart = (id, qty) => async (dispatch, getState) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const { data } = await axios.get(
//     `http://192.168.10.7:5000/api/products/${id}`,
//     config
//   );

//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty: qty,
//     },
//   });

//   AsyncStorage.setItem("cartItems", getState().cart.cartItems);
// };

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // dispatch({
  //   type: CART_REQUEST,
  // });
  const { data } = await axios.get(
    `http://192.168.10.4:5000/api/products/${id}`
  );

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty,
    },
  });
  await AsyncStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//   });

//   AsyncStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };
