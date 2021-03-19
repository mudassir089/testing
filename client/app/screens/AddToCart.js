import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";
import { connect } from "react-redux";
import { addToCart } from "../redux/GroceryRedux/shopping-actions";

function AddToCart({ route, navigation, currentItem, addToCart, cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <>
      <View style={styles.main}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              style={{ marginLeft: 20 }}
              name="chevron-left"
              size={40}
              color="#ffffff"
            />
          </TouchableWithoutFeedback>

          <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <Text
              style={{
                textAlign: "center",
                color: color.greenspecial,
                fontWeight: "bold",
                marginRight: 40,
              }}
            >
              {cartCount}
            </Text>
            <MaterialCommunityIcons
              style={{ marginRight: 40 }}
              name="cart"
              size={40}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {/* <Image style={styles.image} source={currentItem.image} /> */}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.mainLabel}>{currentItem.label} </Text>
          <Text style={styles.quantity}>1/Dzn</Text>
          <Text style={{ fontSize: 18, margin: 5, marginLeft: 20 }}>
            ⭐ ⭐ ⭐ ⭐ ⭐
          </Text>

          <Text style={styles.productDetailsCon}>Product Detail</Text>
          <Text
            numberOfLines={4}
            // minimumFontScale={20}
            style={styles.productDetails}
          >
            {currentItem.discription}
          </Text>
          <View style={styles.line}></View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                margin: 25,
              }}
            >
              Rs. {currentItem.price}.00
            </Text>

            <View style={styles.addToCart}>
              <MaterialCommunityIcons
                onPress={() => addToCart(currentItem.id)}
                style={{
                  padding: 12,
                  borderRadius: 10,
                  backgroundColor: color.primary,
                }}
                name="cart"
                size={40}
                color="white"
              />

              <TouchableWithoutFeedback>
                <Text
                  style={{
                    backgroundColor: color.gldark,
                    width: "72%",
                    textAlign: "center",
                    padding: 12,

                    borderRadius: 10,
                    color: "white",
                    fontSize: 25,
                  }}
                >
                  CheckOut
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.lightyellow,
    paddingTop: 50,
  },
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    margin: 15,
    borderRadius: 25,
    elevation: 5,
    overflow: "hidden",
  },
  // label: {
  //   color: "black",
  //   fontSize: 18,
  //   margin: 10,
  //   marginTop: 10,
  //   fontWeight: "bold",
  // },
  mainLabel: {
    fontSize: 40,
    color: "black",
    margin: 5,
    marginLeft: 20,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  productDetailsCon: {
    color: "black",
    margin: 5,
    marginLeft: 20,
    fontWeight: "bold",
    opacity: 0.6,
    fontSize: 25,
  },
  quantity: {
    color: "black",
    fontWeight: "bold",
    margin: 5,
    marginLeft: 20,
    fontSize: 18,
    color: color.green,
  },
  productDetails: {
    color: "black",
    margin: 5,
    marginLeft: 20,
    fontWeight: "bold",
    lineHeight: 27,
    opacity: 0.3,
  },

  line: {
    borderWidth: 1,
    borderColor: "lightgrey",
    opacity: 0.4,
  },
  addToCart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
