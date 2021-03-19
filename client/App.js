import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import SignInScreen from "./app/screens/SignInScreen";
// import SignUpScreen from "./app/screens/SignUpScreen";
// import ProfileScreen from "./app/screens/ProfileScreen";
import Navigator from "./app/navigation/Navigator";
import AddToCart from "./app/screens/AddToCart";
import AuthNavigator from "./app/navigation/AuthNavigator";
import HomeScreen from "./app/screens/HomeScreen";
import HeaderNavigation from "./app/components/HeaderNavigation";
import ListingScreen from "./app/screens/ListingScreen";
import { createAppContainer } from "@react-navigation/native";
import CartScreen from "./app/screens/CartScreen";
import TabNavigator from "./app/navigation/MainNavigator";
// import FIrebaseAuth from "./app/config/FIrebaseAuth";
// import Random from "./app/screens/Random";
// import FeedNavigator from "./app/navigation/FeedNavigator";
// import Items from "./app/screens/Items";
import { Provider } from "react-redux";
// import { store, persistor } from "./app/redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { createFirestoreInstance } from "redux-firestore";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store from "./app/globalStates/store";
// import firebase from "./app/config/fbConfig";

export default function App() {
  // const config = {
  //   userProfile: "users",
  //   // attachAuthIsReady: true,
  //   useFirestoreForProfile: true,
  //   // updateProfileOnLogin: false,
  // };
  // const rrrfProps = {
  //   firebase,
  //   config,
  //   dispatch: store.dispatch,
  //   createFirestoreInstance,
  // };

  return (
    <>
      <Provider store={store}>
        {/* <ReactReduxFirebaseProvider {...rrrfProps}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Navigator />
        {/* </PersistGate> */}
        {/* </ReactReduxFirebaseProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
