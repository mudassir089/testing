import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  rootReducer,
  // persistedReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))
  )
);

// let persistor = persistStore(store);
// export { store, persistor };
export { store };
