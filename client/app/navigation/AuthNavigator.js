import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AppNavigator from "./AppNavigator";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoriesItem from "../screens/CategoriesItem";
import AddToCart from "../screens/AddToCart";
import Items from "../screens/Items";
import CartScreen from "../screens/CartScreen";
import FirstScreen from "../screens/FirstScreen";

// import FIrebaseAuth from "../config/FIrebaseAuth";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    // initialRouteName=""
    screenOptions={{
      headerBackTitle: "",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Register" component={SignUpScreen} />
    <Stack.Screen name="Login" component={SignInScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
