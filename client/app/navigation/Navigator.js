import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import firebase from "../config/fbConfig";
import React, { useState, useEffect } from "react";
import {
  LogBox,
  StyleSheet,
  ActivityIndicator,
  View,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";
const Navigator = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  LogBox.ignoreLogs(["Setting a timer"]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons
              name="alpha-m-circle"
              size={220}
              color="#FFFFFF"
            />

            <ActivityIndicator animating={true} size="large" color="white" />
          </View>
        </ImageBackground>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: color.newdarkgreen,
  },
  logoContainer: {
    top: "20%",
    flex: 1,
    alignItems: "center",
  },
});
export default Navigator;
