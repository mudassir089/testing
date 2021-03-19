import React from "react";
import { StatusBar } from "expo-status-bar";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HeaderNavigation() {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={{ paddingTop: 25, marginRight: 40 }}
              name="menu"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="storefront-outline"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <MaterialCommunityIcons name="basket" size={30} color="white" />
          <MaterialCommunityIcons
            name="heart-outline"
            size={30}
            color="white"
          />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#29C17E",
    padding: 25,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  headerText: {
    paddingTop: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default HeaderNavigation;
