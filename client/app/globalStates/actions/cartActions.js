import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import AsyncStorage from "@react-native-community/async-storage";

export const addTopCart = (id, qty) => async (dispatch, getstate) => {
  const { data } = await axios.get(
    `http://192.168.10.7:5000/api/products/${id}`
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

  AsyncStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};
