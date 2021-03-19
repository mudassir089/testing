import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import color from "../config/color";
const Header = ({ navigation, onPress }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.cartNum}>12</Text>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={onPress}>
          <MaterialCommunityIcons
            style={styles.headerIcon}
            name="segment"
            color={color.newdarkgreen}
            size={28}
          />
        </TouchableWithoutFeedback>

        <Text style={styles.headerText}>My Shopping</Text>
        <MaterialCommunityIcons
          style={styles.headerIcon}
          name="cart"
          color={color.newdarkgreen}
          size={28}
        />
      </View>
    </View>
  );
};
const Search = () => {
  const searchGrocery = () => {
    console.log("grocery");
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchText}
          placeholderTextColor="lightgrey"
          placeholder="Search Grocery"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableWithoutFeedback onPress={searchGrocery}>
          <Feather name="search" size={22} color={color.newgreen} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const SecondHeader = ({ name, onPress }) => {
  return (
    <View style={styles.cartHeaderCon}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name="chevron-left"
          color={color.newdarkgreen1}
          size={40}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.cartHeaderText}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // Header
  headerContainer: {
    paddingTop: Platform.OS === "android" ? 30 : StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: color.newgreen,
    fontSize: 18,
    letterSpacing: 1.5,
    fontWeight: "bold",
  },
  headerIcon: {
    paddingHorizontal: 20,
  },
  cartNum: {
    textAlign: "center",
    color: color.newdarkgreen,
    borderRadius: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
    paddingRight: 28,
    fontSize: 12,
  },
  //SearchBar
  searchContainer: {
    marginVertical: 5,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 8,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
    borderRadius: 10,
  },
  searchText: {
    fontSize: 16,
    color: "grey",
  },
  //Header 2
  cartHeaderCon: {
    margin: 15,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  cartHeaderText: {
    fontSize: 22,
    fontWeight: "bold",
    color: color.newgreen,
    paddingLeft: 90,
  },
});
export { Header, Search, SecondHeader };
