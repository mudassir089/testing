import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartScreen from "../screens/CartScreen";
import Random from "../screens/Random";
import ProfileScreen from "../screens/ProfileScreen";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import TabbarButton from "./TabbarButton";
import CatData from "../screens/CatData";
import Items from "../screens/Items";
import CreateProject from "../screens/CreateProject";
import SkeletonHome from "../components/SkeletonHome";
import Products from "../components/Products";
import Main from "../components/Main";
import Cart from "../components/Cart";
import Category from "../components/Category";
import Setting from "../components/Setting";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerType="slide"
    drawerContent={(props) => <DrawerContent {...props} />}
    initialRouteName="poka"
  >
    <Drawer.Screen name="poka" component={FeedNavigator} />

    {/* <Drawer.Screen
      options={{
        // gestureEnabled: false,
        drawerLabel: "Carts",
        drawerIcon: ({ size }) => {
          <MaterialCommunityIcons name="email" size={size} color="black" />;
        },
      }}
      name="cart"
      component={Cart}
    /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
