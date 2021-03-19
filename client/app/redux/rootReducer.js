import { combineReducers } from "redux";
import shopReducer from "./GroceryRedux/shopping-reducer";
import authReducer from "./GroceryRedux/authReducer";
import cartReducer from "./GroceryRedux/cartReducer";

import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cart: cartReducer,
});

export default rootReducer;
