import React, { useState } from "react";
import color from "../config/color";
import { StatusBar as Bar } from "expo-status-bar";
import { mainCategories } from "../components/Data";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
function Random({ navigation }) {
  const [addItem, setAddItem] = useState(0);

  const addToCart = () => {
    setAddItem(addItem + 1);
  };
  const categories = [
    {
      id: 1,
      label: "Vegetables",
      price: 40,
      image: require("../../assets/vegitable.png"),
      backgroundColor: "#E6F4EB",
      color: "#FE6F4D",
      icon: "cable-data",
    },
    {
      id: 2,
      label: "Fruits",
      price: 30,
      image: require("../../assets/fruit.png"),
      backgroundColor: "#FFE9E4",
      color: "#FE6F4D",
      icon: "food-apple",
    },
    {
      id: 3,
      label: "Milk & Egg",
      price: 46,
      image: require("../../assets/milk.png"),
      backgroundColor: "#FFF6E4",
      icon: "food",
      color: "orange",
    },
    {
      id: 4,
      label: "stroberry",
      price: 32,
      image: require("../../assets/stro.png"),
      backgroundColor: "#F1EDFC",
      icon: "pharmacy",
      color: "darkblue",
    },
    {
      id: 5,
      label: "Drink",
      price: 42,
      image: require("../../assets/drink.png"),
      backgroundColor: "#DDF5F4",
      icon: "nutrition",
      color: "darkgreen",
    },
    {
      id: 6,
      label: "Sea Food",
      price: 52,
      image: require("../../assets/sea.png"),
      backgroundColor: "#FFDFD7",
      icon: "food-steak",
      color: "darkred",
    },
    {
      id: 7,
      label: "Cake",
      price: 80,
      image: require("../../assets/bakery.png"),
      icon: "google-home",
      color: "grey",
      backgroundColor: "#FFF6E4",
    },
    {
      id: 8,
      label: "meat",
      price: 75,
      image: require("../../assets/meat.png"),
      backgroundColor: "#FBEDE9",
      icon: "oil",
      color: "grey",
    },
    // {
    //   id: 9,
    //   label: "grocery",
    //   price: 65,
    //   image: require("../../assets/grocery.png"),
    //   // backgroundColor: "#E7F8E3",
    // },
    // {
    //   id: 10,
    //   label: "Icecream",
    //   price: 65,
    //   image: require("../../assets/cone.png"),
    //   // backgroundColor: "#FFC0CB",
    // },
    // {
    //   id: 11,
    //   label: "chicken",
    //   price: 65,
    //   image: require("../../assets/chicken.png"),
    //   // backgroundColor: "#FFA500",
    // },
    // {
    //   id: 12,
    //   label: "bakery",
    //   price: 65,
    //   image: require("../../assets/bakery.png"),
    //   // backgroundColor: "#EEE8AA",
    // },
    // {
    //   id: 13,
    //   label: "Vegetables",
    //   price: 40,
    //   image: require("../../assets/vegitable.png"),
    //   // backgroundColor: "#DDF7EB",
    // },
    // {
    //   id: 14,
    //   label: "Fruits",
    //   price: 30,
    //   image: require("../../assets/fruit.png"),
    //   // backgroundColor: "#FDE6E6",
    // },
    // {
    //   id: 15,
    //   label: "Milk & Egg",
    //   price: 46,
    //   image: require("../../assets/milk.png"),

    //   // backgroundColor: "#AFEEEE",
    // },
    // {
    //   id: 16,
    //   label: "stroberry",
    //   price: 32,
    //   image: require("../../assets/stro.png"),
    //   // backgroundColor: "#FFC0CB",
    // },
    // {
    //   id: 17,
    //   label: "Drink",
    //   price: 42,
    //   image: require("../../assets/drink.png"),
    //   // backgroundColor: "#CD5C5C",
    // },
    // {
    //   id: 18,
    //   label: "Sea Food",
    //   price: 52,
    //   image: require("../../assets/sea.png"),
    //   // backgroundColor: "#F5FFFA",
    // },
    // {
    //   id: 19,
    //   label: "Cake",
    //   price: 80,
    //   image: require("../../assets/bakery.png"),
    //   // backgroundColor: "#DEB887",
    // },
    // {
    //   id: 20,
    //   label: "meat",
    //   price: 75,
    //   image: require("../../assets/meat.png"),
    //   // backgroundColor: "#FBEDE9",
    // },
    // {
    //   id: 21,
    //   label: "grocery",
    //   price: 65,
    //   image: require("../../assets/grocery.png"),
    //   // backgroundColor: "#E7F8E3",
    // },
    // {
    //   id: 22,
    //   label: "Icecream",
    //   price: 65,
    //   image: require("../../assets/cone.png"),
    //   // backgroundColor: "#FFC0CB",
    // },
    // {
    //   id: 23,
    //   label: "chicken",
    //   price: 65,
    //   image: require("../../assets/chicken.png"),
    //   // backgroundColor: "#FFA500",
    // },
    // {
    //   id: 24,
    //   label: "bakery",
    //   price: 65,
    //   image: require("../../assets/bakery.png"),
    //   // backgroundColor: "#EEE8AA",
    // },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={{ margin: 7 }}>
          <MaterialCommunityIcons name="menu" size={40} color="black" />
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTime}>TUESDAY,24,OCTOBER</Text>
          <Text style={styles.headerMessage}>Good morning</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#54B175",
            borderRadius: 100,
            width: 50,
            height: 50,
            alignSelf: "center",
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            {addItem}
          </Text>
          <MaterialCommunityIcons
            style={{ textAlign: "center" }}
            name="cart"
            size={25}
            color="white"
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
        <Feather name="search" size={25} color="grey" />
      </View>

      <View style={{ borderWidth: 0.2, borderColor: "lightgrey" }}></View>

      <ScrollView style={styles.catergoriesWrapper}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Categories
          </Text>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("catdata")}
          >
            <Text
              style={{ color: "#3dab85", fontWeight: "bold", fontSize: 20 }}
            >
              See All
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  // onPress={() => navigation.navigate("catdata")}
                  style={[
                    styles.categoriesMain,
                    {
                      backgroundColor: item.backgroundColor,

                      // backgroundColor: "#E6F4EB",
                    },
                  ]}
                >
                  {/* <Text numberOfLines={1} style={styles.categoriesText}>
                  {item.label}
                </Text> */}
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={40}
                    color={item.color}
                  />
                </TouchableOpacity>
              </>
            );
          }}
        />

        <View style={styles.borderMain}>
          <View style={styles.recommandWrapper}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
              Recommand
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={35}
              color="#3dab85"
            />
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={mainCategories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableWithoutFeedback onPress={addToCart}>
                  <View style={styles.recommandMain}>
                    <Image style={styles.recommandImage} source={item.image} />
                    <Text numberOfLines={1} style={styles.recommandText}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
        <View style={styles.borderMain}>
          <View style={styles.recommandWrapper}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
              Popular
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={35}
              color="#3dab85"
            />
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={mainCategories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={styles.recommandMain}>
                    <Image style={styles.recommandImage} source={item.image} />
                    <Text numberOfLines={1} style={styles.recommandText}>
                      {item.label}
                    </Text>
                  </View>
                </>
              );
            }}
          />
        </View>
        <View style={styles.borderMain}>
          <View style={styles.recommandWrapper}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
              New Product
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={35}
              color="#3dab85"
            />
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={mainCategories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={styles.recommandMain}>
                    <Image style={styles.recommandImage} source={item.image} />
                    <Text numberOfLines={1} style={styles.recommandText}>
                      {item.label}
                    </Text>
                  </View>
                </>
              );
            }}
          />
        </View>
      </ScrollView>
      <Bar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? 40 : StatusBar.currentHeight,
  },
  headerWrapper: {},
  headerTime: {
    fontSize: 15,
    color: color.black,
  },
  headerMessage: {
    paddingTop: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: "#3A4145",
  },
  headerIcon: {
    flexDirection: "row",
    margin: 20,
    marginTop: 10,
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
  // catergoriesWrapper: {
  //   backgroundColor: color.white,
  //   borderTopRightRadius: 30,
  //   borderTopLeftRadius: 30,
  // },
  categoriesMain: {
    marginTop: 15,
    margin: 10,
    marginLeft: 10,
    backgroundColor: color.white,
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesText: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.black,
    padding: 10,
  },
  borderMain: {
    backgroundColor: "#F7F7F8",
    // borderWidth: 2,
    // borderColor: "#3dab85",
    // backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  recommandWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center",
  },
  recommandMain: {
    backgroundColor: "#ffffff",
    margin: 5,
    width: 150,
    height: 180,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  recommandImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  recommandText: {
    fontSize: 16,
    padding: 5,
    fontWeight: "bold",
    color: "#6F7275",
    marginRight: 10,
  },
});

export default Random;
