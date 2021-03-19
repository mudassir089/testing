import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Header, Search } from "./TopBar";
import { topProducts } from "./Data";
import color from "../config/color";
// import { addToCart } from "../redux/GroceryRedux/cartAction";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../globalStates/actions/productActions";

function Products({ navigation, route, addToCart }) {
  const { categoryName } = route.params;

  // const handleAddToCart = (product) => {
  //   if (!product) return;
  //   addToCart(product);
  //   console.log(addToCart(product));
  // };

  const disptch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    disptch(listProducts());
  }, [disptch]);
  return (
    <>
      <Header onPress={() => navigation.toggleDrawer()} />
      <Search />
      <View style={{ borderWidth: 0.5, borderColor: "lightgrey" }}></View>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.categoryContainer}>
          <View style={styles.container}>
            <FlatList
              data={products}
              ListHeaderComponent={
                <>
                  <View style={styles.categoryHeading}>
                    <MaterialIcons
                      name="category"
                      color={color.newdarkgreen}
                      size={32}
                    />
                    <Text style={styles.categoryName}>
                      {categoryName.label}
                    </Text>
                  </View>
                </>
              }
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (
                  <>
                    <View style={styles.topProductContainer}>
                      <TouchableWithoutFeedback
                        onPress={() =>
                          navigation.navigate("display", { data: item })
                        }
                      >
                        <View style={styles.topProductImageContainer}>
                          <Image
                            resizeMode="contain"
                            source={{
                              uri: item.image,
                            }}
                            style={styles.topProductImage}
                          />

                          <Text style={styles.topProductPrice}>
                            Rs.{item.price}.00
                          </Text>
                          <View style={styles.topProductTextContainer}>
                            <Text
                              numberOfLines={2}
                              style={styles.topProductText}
                            >
                              {item.name}
                            </Text>

                            <TouchableOpacity
                              // style={{ marginLeft: 40 }}
                              onPress={() => console.log.log("poka")}
                            >
                              <MaterialCommunityIcons
                                name="cart"
                                size={32}
                                color={color.yellow}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </>
                );
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //category
  //Catergory section
  categoryContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  categoryHeading: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryName: {
    fontSize: 25,
    fontWeight: "bold",
    color: color.newdarkgreen,
    paddingLeft: 30,
  },

  categoryText: {
    fontSize: 11,
    textAlign: "center",
    color: color.newdarkgreen,
    fontWeight: "700",
  },
  //products
  topProductContainer: {
    margin: 8,
  },
  topProductImageContainer: {
    backgroundColor: "#FDFDFD",
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    paddingBottom: 10,
    flex: 1,
  },
  topProductImage: {
    borderRadius: 15,
    width: 180,
    height: 180,
    resizeMode: "cover",
    marginBottom: 10,
  },
  topProductTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topProductText: {
    fontSize: 15,
    color: color.newdarkgreen,
    fontWeight: "bold",
  },
  topProductPrice: {
    color: "lightgrey",
    fontSize: 15,
    paddingLeft: 10,
  },
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (item) => dispatch(addToCart(item)),
//   };
// };

export default Products;

// connect(null, mapDispatchToProps);
