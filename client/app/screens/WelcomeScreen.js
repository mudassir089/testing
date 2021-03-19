import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import Button from "../components/Button";
import color from "../config/color";
// import firebase from "../config/fbConfig";
function WelcomeScreen({ navigation }) {
  //AuthStateChanged

  // const authListener = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user !== null) {
  //       navigation.replace("home");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="alpha-m-circle"
          size={220}
          color="#FFFFFF"
        />
      </View>
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>
          Welcome to{"\n"}
          <Text style={{ fontWeight: "bold", fontSize: 40 }}> Grocery </Text>
          shopping
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="SIGN IN"
          backgroundColor="#FFFFFF"
          color={color.newdarkgreen}
          width={200}
          marginVertical={15}
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="SIGN UP"
          color="#FFFFFF"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      {/* <StatusBar style="light" /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: color.newdarkgreen,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  taglineContainer: {
    flex: 0.5,
  },
  tagline: {
    fontSize: 35,
    textAlign: "center",
    color: "#fff",
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
