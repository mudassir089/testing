import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogBox, View, StyleSheet, ImageBackground, Text } from "react-native";
// import firebase from "../config/fbConfig";

function FirstScreen({ navigation }) {
  // const [isLoading, setIsLoading] = useState(false);
  // LogBox.ignoreLogs(["Setting a timer"]);

  // useEffect(() => {
  //   // const authListener = () => {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         navigation.replace("home");
  //       } else {
  //         return navigation.replace("main");
  //       }
  //     });
  //   // };
  //   // authListener();
  // }, []);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons
            name="alpha-m-circle"
            size={220}
            color="#FFFFFF"
          />
          {/* {!isLoading ? (
            <ActivityIndicator animating={true} size="large" color="white" />
          ) : (
            false
          )} */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#29C17E",
  },
  logoContainer: {
    top: "20%",
    flex: 1,
    alignItems: "center",
  },
});

export default FirstScreen;
