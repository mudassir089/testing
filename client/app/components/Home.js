import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Header, Search } from "./TopBar";
import { category, topProducts } from "./Data";
import Swiper from "react-native-swiper";
import color from "../config/color";

function Home({ navigation }) {
  return (
    <>
      <Header onPress={() => navigation.toggleDrawer()} />
      <Search />
      <View style={{ borderWidth: 0.5, borderColor: "lightgrey" }}></View>

      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay={true}
              autoplayTimeout={10}
              activeDotColor={color.newgreen}
              activeDotStyle={{ width: 20 }}
              height={140}
              loop={true}
            >
              <View style={styles.slide}>
                <Image
                  style={styles.slideImage}
                  source={require("../../assets/banner1.jpg")}
                  resizeMode="cover"
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
                  source={require("../../assets/banner5.jpg")}
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
        </TouchableWithoutFeedback>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeading}>
            <MaterialIcons
              name="category"
              color={color.newdarkgreen}
              size={32}
            />
            <Text style={styles.categoryName}>Product Categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate("category")}>
              <MaterialCommunityIcons
                name="chevron-right"
                color={color.newdarkgreen}
                size={38}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={category}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("products", { categoryName: item })
                    }
                  >
                    <View style={styles.categoryIcon}>
                      <MaterialCommunityIcons
                        name={item.icon}
                        size={38}
                        color={item.color}
                      />
                    </View>
                    <Text style={styles.categoryText}>{item.label}</Text>
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </View>

        <View style={styles.categoryContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
              margin: 5,
            }}
          >
            <MaterialIcons
              name="trending-up"
              color={color.newdarkgreen}
              size={32}
            />
            <Text style={[styles.categoryName, { paddingLeft: 30 }]}>
              Top Products
            </Text>
          </View>
          <FlatList
            data={topProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={styles.topProductContainer}>
                    <View style={styles.topProductImageContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("display", { data: item })
                        }
                      >
                        <Image
                          style={styles.topProductImage}
                          source={item.image}
                        />
                      </TouchableOpacity>
                      <Text style={styles.topProductPrice}>
                        Rs.{item.price}.00
                      </Text>
                      <View style={styles.topProductTextContainer}>
                        <Text style={styles.topProductText}>{item.label}</Text>
                        <TouchableWithoutFeedback
                          onPress={() => console.log("cart")}
                        >
                          <MaterialCommunityIcons
                            name="cart"
                            size={28}
                            color={color.yellow}
                          />
                        </TouchableWithoutFeedback>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </View>

        <View style={styles.categoryContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <MaterialCommunityIcons
              name="storefront"
              color={color.newdarkgreen}
              size={32}
            />
            <Text style={[styles.categoryName, { paddingLeft: 30 }]}>
              New Products
            </Text>
          </View>
          <FlatList
            data={topProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={styles.topProductContainer}>
                    <View style={styles.topProductImageContainer}>
                      <TouchableOpacity onPress={() => console.log("ss")}>
                        <Image
                          style={styles.topProductImage}
                          source={item.image}
                        />
                      </TouchableOpacity>
                      <Text style={styles.topProductPrice}>
                        Rs.{item.price}.00
                      </Text>
                      <View style={styles.topProductTextContainer}>
                        <Text style={styles.topProductText}>{item.label}</Text>
                        <TouchableWithoutFeedback
                          onPress={() => console.log("cart")}
                        >
                          <MaterialCommunityIcons
                            name="cart"
                            size={28}
                            color={color.yellow}
                          />
                        </TouchableWithoutFeedback>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : StatusBar.currentHeight,
  },
  // Banner Section
  sliderContainer: {
    flex: 1,
    height: 140,
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  slideImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
  },
  //Catergory section
  categoryContainer: {
    margin: 10,
    flex: 1,
  },
  categoryHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    marginLeft: 20,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.newdarkgreen,
    paddingRight: 60,
  },
  categoryIcon: {
    margin: 10,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    opacity: 0.9,
  },
  categoryText: {
    fontSize: 11,
    textAlign: "center",
    color: color.newdarkgreen,
    fontWeight: "700",
  },

  //topProducts, NewProducts
  topProductContainer: {
    margin: 10,
  },
  topProductImageContainer: {
    backgroundColor: "#FDFDFD",
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    paddingBottom: 10,
  },
  topProductImage: {
    borderRadius: 15,
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  topProductTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  topProductText: {
    fontSize: 20,
    color: color.newdarkgreen,
    fontWeight: "bold",
  },
  topProductPrice: {
    color: "lightgrey",
    fontSize: 15,
    paddingLeft: 10,
  },
});

export default Home;
