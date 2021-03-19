import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Random from "../screens/Random";
import CategoriesItem from "../screens/CategoriesItem";
import CatData from "../screens/CatData";
import Items from "../screens/Items";
import CartScreen from "../screens/CartScreen";
import AddToCart from "../screens/AddToCart";
import AuthNavigator from "./AuthNavigator";
import SignInScreen from "../screens/SignInScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FirstScreen from "../screens/FirstScreen";
import Home from "../components/Home";
import Setting from "../components/Setting";
import Main from "../components/Main";
import Cart from "../components/Cart";
import Category from "../components/Category";
import { SecondHeader } from "../components/TopBar";
import Products from "../components/Products";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerBackTitle: "",
          headerShown: false,
        }}
        name="home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="category"
        component={Category}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="products"
        component={Products}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="cart"
        component={Cart}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="display"
        component={Main}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="topbar"
        component={SecondHeader}
      />

      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="setting"
        component={Setting}
      />

      {/* <Stack.Screen
        options={{
          headerBackTitle: "",
          headerShown: false,
        }}
        name="catdata"
        component={CatData}
      />
      <Stack.Screen
        options={{
          headerBackTitle: "",
          headerShown: false,
        }}
        name="categories"
        component={CategoriesItem}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="items"
        component={Items}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="cart"
        component={CartScreen}
      />
      <Stack.Screen
        options={{ headerBackTitle: "", headerShown: false }}
        name="addtocart"
        component={AddToCart}
      /> */}
    </Stack.Navigator>
  );
};

export default FeedNavigator;
