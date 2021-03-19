import * as actionTypes from "./shopping-type";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const addToCart = (itemID) => {
  return (dispatch, getState, { getFirebase }) => {
    //make async call to database
    const firestore = getFirebase().firestore();
    firestore
      .collection("data")
      .add({
        ...itemID,
        date: new Date(),
      })
      .then(() => {
        dispatch({
          type: actionTypes.ADD_TO_CART,
          payload: {
            id: itemID,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, err });
      });
    // AsyncStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const increaseQty = (itemID) => {
  return {
    type: actionTypes.INCREASE_QTY,
    payload: {
      id: itemID,
    },
  };
};
export const decreaseQty = (itemID) => {
  return {
    type: actionTypes.DECREASE_QTY,
    payload: {
      id: itemID,
    },
  };
};
export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const createProject = (project) => {
  // console.log([{ ...project }]);
  return (dispatch, getState, { getFirebase }) => {
    //make async call to database
    const firestore = getFirebase().firestore();
    firestore
      .collection("products")
      .add({
        ...project,
        // firstName: "abid",
        // lastName: "shaka",
        // age: 60,
        // work: "aala cake he",
        // createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: actionTypes.CREATE_PROJECT, project });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.CREATE_ERROR, err });
      });
  };
};

export const itemDetails = (itemDetail) => {
  // console.log([{ ...project }]);
  return (dispatch, getState, { getFirebase }) => {
    //make async call to database
    const firestore = getFirebase().firestore();
    firestore
      .collection("itemDetails")
      .add({
        ...itemDetail,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: actionTypes.ITEM_DETAILS, project });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.ITEM_DETAILS_ERROR, err });
      });
  };
};
