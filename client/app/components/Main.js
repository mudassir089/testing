import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../globalStates/actions/productActions";
import Loader from "./Loader";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import color from "../config/color";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ReadMore from "react-native-read-more-text";

function Main({ navigation, route }) {
  const [qty, setQty] = useState(1);

  const { data } = route.params;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [colors, setColors] = useState(false);
  const handleColorChange = () => {
    setColors(!colors);
  };
  useEffect(() => {
    dispatch(listProductDetails(data._id));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}/</Text>
      ) : (
        <ScrollView>
          <View style={styles.sliderContainer}>
            <Swiper
              showsButtons={true}
              nextButton={
                <MaterialCommunityIcons
                  style={{ marginRight: 20 }}
                  name="chevron-right"
                  color={color.newgreen}
                  size={40}
                />
              }
              prevButton={
                <MaterialCommunityIcons
                  style={{ marginLeft: 20 }}
                  name="chevron-left"
                  color={color.newgreen}
                  size={40}
                />
              }
              activeDotColor={color.newgreen}
              activeDotStyle={{ width: 20 }}
              showsPagination={true}
            >
              <View style={styles.slide}>
                <Image
                  style={styles.slideImage}
                  source={{
                    uri: product.image,
                  }}
                  resizeMde="cover"
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.slideImage}
                  source={require("../../assets/banner2.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.slideImage}
                  source={require("../../assets/banner3.jpg")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.slideImage}
                  source={require("../../assets/banner4.jpg")}
                  resizeMode="cover"
                />
              </View>
            </Swiper>
          </View>

          <View style={styles.productDetailsContainer}>
            <View style={{ alignItems: "flex-end", marginRight: 20 }}>
              <Text
                style={
                  product.countInStock > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                {product.countInStock > 0 ? " (In Stock)" : "(Out Of Stock)"}
              </Text>
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productDetailsLabel}>{product.name}</Text>
              <Text style={styles.productDetailsNamePrice}>
                Rs.{product.price}
              </Text>
            </View>
            <View style={styles.productDetails1}>
              <Text style={styles.productDetailsWaight}>{product.brand}</Text>

              <View style={styles.productDetailsIcon}>
                <TouchableOpacity
                  disabled={product.countInStock === qty}
                  onPress={() => setQty(qty + 1)}
                >
                  <AntDesign
                    name="plus"
                    color={color.newdarkgreen1}
                    size={32}
                  />
                </TouchableOpacity>
                <Text style={styles.productDetailsIconText}>{qty}</Text>
                <TouchableOpacity
                  disabled={qty === 1}
                  onPress={() => setQty(qty - 1)}
                >
                  <AntDesign
                    name="minus"
                    color={color.newdarkgreen1}
                    size={32}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.borderLine}></View>
            <View style={styles.productDetailsDisCon}>
              <Text style={styles.productDetailsDisHead}>Product Details</Text>

              <ReadMore numberOfLines={2}>
                <Text style={styles.productDetailsDiscription}>
                  {product.description}
                </Text>
              </ReadMore>
            </View>
            <View style={styles.borderLine}></View>
            <View style={styles.addToCartCon}>
              <TouchableWithoutFeedback onPress={() => handleColorChange()}>
                <FontAwesome
                  name={colors ? "heart" : "heart-o"}
                  color="#DB0201"
                  size={40}
                />
              </TouchableWithoutFeedback>
              <TouchableOpacity
                onPress={() => navigation.navigate("cart", { qty })}
                style={styles.addToCartButton}
              >
                <Text style={styles.addToCartText}>View Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Banner Section
  sliderContainer: {
    height: 400,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  slideImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  //product details
  productDetailsContainer: {
    marginTop: 10,
    flex: 1,
  },
  productDetails: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productDetailsLabel: {
    color: color.newdarkgreen1,
    fontSize: 23,
    fontWeight: "bold",
  },
  productDetailsNamePrice: {
    color: color.newgreen,
    fontSize: 22,
    fontWeight: "bold",
  },
  productDetails1: {
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productDetailsWaight: {
    color: "#B7B7B7",
    fontSize: 18,
  },
  productDetailsIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  productDetailsIconText: {
    marginHorizontal: 15,
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    color: color.newdarkgreen1,
  },
  borderLine: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    marginHorizontal: 30,
  },
  productDetailsDisCon: {
    margin: 20,
  },
  productDetailsDisHead: {
    fontSize: 23,
    fontWeight: "bold",
    color: color.newdarkgreen1,
    paddingVertical: 10,
  },
  productDetailsDiscription: {
    fontSize: 15,
    color: "#B7B7B7",
    lineHeight: 22,
  },
  addToCartCon: {
    flex: 1,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  addToCartButton: {
    width: "80%",
    height: 60,
    backgroundColor: color.newgreen,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    fontSize: 20,
    color: color.white,
    fontWeight: "bold",
  },
});

export default Main;
