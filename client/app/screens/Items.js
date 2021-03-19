import React, { useState, useEffect } from "react";
import { StatusBar as Bar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import color from "../config/color";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {
  addToCart,
  loadCurrentItem,
} from "../redux/GroceryRedux/shopping-actions";

// import { cartState, addToCart, ProductState } from "../recoil/RecoilProduct";
// import { useRecoilState, useRecoilValue } from "recoil";

function Items({
  navigation,
  route,
  products,
  cart,
  addToCart,
  loadCurrentItem,
}) {
  const { categories } = route.params;
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(parseInt(count));
  }, [cart, cartCount]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.label}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              style={{}}
              name="chevron-left"
              size={40}
              color="#ffffff"
            />
          </TouchableWithoutFeedback>
          <Text style={styles.catText}>{categories.label}</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("cart")}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: color.greenspecial,
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </Text>

            <MaterialCommunityIcons
              style={{ textAlign: "center" }}
              name="cart"
              size={25}
              color={color.greenspecial}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerIcon}>
          <TextInput
            placeholderTextColor="grey"
            style={styles.headerSearch}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Feather name="search" size={25} color="white" />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#f4f7fa",
          margin: 10,
          overflow: "hidden",
        }}
      >
        {products ? (
          <FlatList
            data={products}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      padding: 10,
                      margin: 10,
                      backgroundColor: "#ffffff",
                      elevation: 5,
                      borderRadius: 10,
                    }}
                    onPress={() =>
                      navigation.navigate("addtocart", loadCurrentItem(item))
                    }
                  >
                    <View style={{}}>
                      <Image
                        source={require("../../assets/banana.png")}
                        style={{
                          width: 100,
                          height: 100,
                          resizeMode: "contain",
                        }}
                      />
                    </View>

                    <View style={{}}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "grey",
                        }}
                        numberOfLines={1}
                      >
                        {item.label}
                      </Text>
                      <Text style={{ fontWeight: "bold" }} numberOfLines={1}>
                        Rs.{item.price}.00
                      </Text>
                    </View>

                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableWithoutFeedback
                        onPress={() =>
                          // id: addToCart(item.id),
                          // addToCart(item)
                          addToCart(item)
                        }
                      >
                        <MaterialCommunityIcons
                          name="cart-outline"
                          size={40}
                          color="gold"
                        />
                      </TouchableWithoutFeedback>
                    </View>
                  </TouchableOpacity>
                </>
              );
            }}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Loading...</Text>
          </View>
        )}
      </View>
      <Bar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
  container: {
    paddingTop: Platform.OS === "android" ? 40 : StatusBar.currentHeight,
    backgroundColor: color.greenspecial,
  },
  label: {
    alignItems: "center",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  catText: {
    fontSize: 30,
    textTransform: "capitalize",
    color: "#ffffff",
  },
  headerIcon: {
    flexDirection: "row",
    margin: 20,
    marginTop: 0,
    alignItems: "center",
  },
  headerSearch: {
    width: "80%",
    fontSize: 18,
    color: "black",
    fontWeight: "normal",
    alignSelf: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    marginRight: 30,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (itemID) => dispatch(addToCart(itemID)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
const mapStateToProps = (state) => {
  return {
    // products: state.shop.products,
    products: state.firestore.ordered.products,
    cart: state.shop.cart,
    // uid: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(Items);
