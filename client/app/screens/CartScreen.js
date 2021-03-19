import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import color from "../config/color";
import { StatusBar as Bar } from "expo-status-bar";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  itemDetails,
} from "../redux/GroceryRedux/shopping-actions";

function CartScreen({
  itemDetails,
  cart,
  navigation,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [delveryCharges, setDelveryCharges] = useState(0);
  useEffect(() => {
    let price = 0;
    let items = 0;
    let delevery = 0;
    cart.forEach((item) => {
      delevery = 50;
      items += item.qty;
      price += item.qty * item.id.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
    setDelveryCharges(delevery);
  }, [
    cart,
    totalPrice,
    setTotalPrice,
    totalItems,
    setTotalItems,
    delveryCharges,
    setDelveryCharges,
  ]);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            elevation: 5,
            alignItems: "center",
            backgroundColor: color.white,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingBottom: 20,
            paddingTop:
              Platform.OS === "android" ? 60 : StatusBar.currentHeight,
          }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={40}
              color="black"
            />
          </TouchableWithoutFeedback>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "sans-serif-light",
              color: "black",
            }}
          >
            My Cart
          </Text>
          <Text style={{ fontSize: 16 }}>total Items ({totalItems})</Text>
        </View>
        {/* <View
            style={{
              borderWidth: 2,
              borderColor: "#F8F8F8",
            }}
          ></View> */}
        {/* <View style={{ borderWidth: 5, borderColor: "lightgrey" }}></View> */}

        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/banana.png")}
                    style={styles.image}
                  />
                  {/* <Text style={styles.imageText}>{item.price}</Text> */}
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{item.id.label}</Text>
                  <Text style={styles.subTitle}> {item.id.price}</Text>
                  {/* <Text style={styles.subTitle}>
                      subtotal: {item.product.price * item.quantity}
                    </Text> */}
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => increaseQty(item.id)}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: 20,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="plus"
                      size={30}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginBottom: 5,
                      marginHorizontal: 15,
                    }}
                  >
                    {item.qty}
                  </Text>

                  <TouchableOpacity
                    onPress={() => decreaseQty(item.id)}
                    style={{ backgroundColor: "#ffffff", borderRadius: 20 }}
                  >
                    <MaterialCommunityIcons
                      // style={styles.icon}
                      name="minus"
                      size={30}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    style={{
                      marginRight: 10,
                    }}
                  >
                    <FontAwesome name="remove" size={25} color="#F8A3A3" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* <View
                  style={{
                    borderWidth: 2,
                    borderColor: "#F2F2F2",
                  }}
                ></View> */}
            </View>
          )}
        />

        <View
          style={{
            borderWidth: 2,
            borderColor: "#F2F2F2",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            paddingHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "#888A8F", fontWeight: "bold" }}>
            Delvery:
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#22252F",
              fontWeight: "bold",
            }}
          >
            Rs.{delveryCharges}.00
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            paddingHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "#888A8F", fontWeight: "bold" }}>
            Total:
          </Text>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "#22252F",
                fontWeight: "bold",
                color: "green",
              }}
            >
              {/* Rs.{50 + total}.00 */}
              Rs.{totalPrice + delveryCharges}.00
            </Text>
          </View>
        </View>

        <View style={styles.checkOutButton}>
          <Button
            onPress={() => itemDetails(cart)}
            title="Go to Checkout"
            backgroundColor="orange"
            color="#fff"
            width={300}
          />
        </View>
      </View>
      <Bar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  card: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    resizeMode: "contain",
    marginLeft: 10,
  },
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  detailsContainer: {
    flex: 2,
    marginLeft: 50,
    marginTop: 10,
    overflow: "hidden",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 17,
    padding: 8,
    color: "#585A62",
    fontFamily: "sans-serif-light",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "lightgrey",
    padding: 5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingRight: 40,
    paddingBottom: 10,
  },

  checkOutButton: {
    paddingVertical: 20,
    alignItems: "center",
    overflow: "hidden",
    paddingBottom: 10,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increaseQty: (id) => dispatch(increaseQty(id)),
    decreaseQty: (id) => dispatch(decreaseQty(id)),
    itemDetails: (itemDetail) => dispatch(itemDetails(itemDetail)),
  };
};
const mapStateToProps = (state) => {
  // const id = ownProps.route.params.id.payload.id;
  // const products = state.firestore.data.products;
  // const cartProducts = products ? products[id] : null;
  return {
    // data: state.firestore.ordered.data,
    itemDetails: state.firestore.ordered.itemDetails,
    cart: state.shop.cart,
    currentItem: state.shop.currentItem,
    // project: cartProducts,
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "itemDetails" }])
)(CartScreen);
