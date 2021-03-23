import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../globalStates/actions/cartActions";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import color from "../config/color";
import Loader from "./Loader";

function Cart({ navigation, route }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, loading } = cart;

  return (
    <View style={styles.container}>
      <View style={styles.cartHeaderCon}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={color.newdarkgreen1}
            size={40}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.cartHeaderText}>My Cart</Text>
      </View>
      <View style={styles.borderLine}></View>

      <FlatList
        data={cartItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.product.toString()}
        renderItem={({ item }) => {
          return (
            <>
              <View style={styles.cartListCon}>
                <View style={styles.cartListwrap}>
                  <Image
                    resizeMode="cover"
                    source={{ uri: item.image }}
                    style={styles.cartImg}
                  />
                  <View style={styles.cartIconCon}>
                    <Text numberOfLines={2} style={styles.cartLabel}>
                      {item.name}
                    </Text>
                    <View style={styles.productDetailsIcon}>
                      <TouchableWithoutFeedback
                        onPress={() => console.log("add")}
                      >
                        <AntDesign
                          name="minus"
                          color={color.newdarkgreen1}
                          size={28}
                        />
                      </TouchableWithoutFeedback>
                      <Text style={styles.productDetailsIconText}>
                        {item.qty}
                      </Text>
                      <TouchableWithoutFeedback
                        onPress={() => console.log("minus")}
                      >
                        <AntDesign
                          name="plus"
                          color={color.newgreen}
                          size={28}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  <View style={styles.cartLastCon}>
                    <TouchableWithoutFeedback
                      onPress={() => console.log("delete")}
                    >
                      <MaterialCommunityIcons
                        name="delete-sweep"
                        color="#F89A9A"
                        size={28}
                      />
                    </TouchableWithoutFeedback>
                    <Text style={styles.cartPrice}>Rs.{item.price}.95</Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      />

      <View style={styles.borderLine}></View>
      <View style={styles.cartDeleveryCon}>
        <Text style={styles.cartDeleveryText}>Delevery</Text>
        <Text style={styles.cartDeleveryPrice}>Rs.50.00</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log("cart")}
        style={styles.addToCartCon}
      >
        <Text style={styles.addToCartQty}>(2)</Text>
        <Text style={styles.addToCartText}>Go To Checkout</Text>
        <Text style={styles.addToCartTotal}>Rs.250</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : StatusBar.currentHeight,
  },
  //cartTop
  cartHeaderCon: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  cartHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    color: color.newdarkgreen1,
    paddingLeft: 100,
  },
  //cartList
  cartListCon: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  cartListwrap: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",
    elevation: 3,
  },

  cartImg: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  cartIconCon: {
    margin: 13,
    justifyContent: "space-between",
    flex: 0.7,
  },
  cartLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: color.newdarkgreen1,
  },
  productDetailsIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  productDetailsIconText: {
    marginHorizontal: 10,
    textAlign: "center",
    padding: 8,
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    color: color.newdarkgreen1,
  },
  cartLastCon: {
    flex: 0.5,
    justifyContent: "space-between",
    margin: 10,
    alignItems: "flex-end",
  },
  cartPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#365D57",
  },
  borderLine: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    marginHorizontal: 20,
  },
  //add to cart button

  addToCartCon: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: color.orange,
    width: "90%",
    height: 70,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  addToCartQty: {
    color: "#F8DAD2",
    fontSize: 15,
    fontWeight: "bold",
  },
  addToCartText: {
    color: color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  addToCartTotal: {
    color: "#F8DAD2",
    fontSize: 15,
    fontWeight: "bold",
  },
  cartDeleveryCon: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 20,
    marginHorizontal: 25,
  },
  cartDeleveryText: {
    fontWeight: "bold",
    fontSize: 18,
    color: color.newdarkgreen1,
  },

  cartDeleveryPrice: {
    fontWeight: "bold",
    fontSize: 17,
    color: color.newgreen,
  },
});

export default Cart;
