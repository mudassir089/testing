import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import HeaderNavigation from "../components/HeaderNavigation";

function ListingScreen() {
  const listings = [
    {
      id: 1,
      title: "iphone X",
      price: 55000,
      image: require("../../assets/logo.png"),
    },
    {
      id: 2,
      title: "iphone 11",
      price: 222000,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 3,
      title: "iphone 12",
      price: 422000,
      image: require("../../assets/splash.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <HeaderNavigation />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}> {"$" + item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 50,
    backgroundColor: "darkblue",
    width: "100%",
    height: "100%",
  },
  card: {
    margin: 15,
    backgroundColor: "#161730",
    overflow: "hidden",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    color: "#fff",
  },
  subTitle: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default ListingScreen;
