import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import Button from "../components/Button";
import firebase from "../config/fbConfig";
import color from "../config/color";

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const clearValidationError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignIn = () => {
    clearValidationError();
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then(() => navigation.replace("poka", { screen: "Home" }))
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            setIsLoading(false);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            setIsLoading(false);
            break;
        }
        setIsLoading(false);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity>
            <Text
              style={{
                color: color.newgreen,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{ color: "#6E7989", fontSize: 20, fontWeight: "bold" }}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.welcomeText}>Sign in to Grocery App</Text>
          <Text style={styles.simpleText}>
            Enter email & password to continue
          </Text>
        </View>
        <TextInput
          placeholderTextColor="#D8DBE1"
          style={styles.emailInput}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Text>{emailError}</Text>

        <TextInput
          placeholderTextColor="#D8DBE1"
          style={styles.emailInput}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <Text>{passwordError}</Text>

        <View style={styles.textButtonWrapper}>
          <Text style={styles.text}>Forgot password?</Text>
          {isLoading ? (
            <ActivityIndicator animating={true} size="small" color="black" />
          ) : (
            <Button
              title="SIGN IN"
              backgroundColor={color.newdarkgreen}
              color={color.white}
              width={110}
              onPress={handleSignIn}
            />
          )}
        </View>
      </View>
      {/* <StatusBar style="dark" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 40,
    paddingVertical: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
      },
    }),
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  welcomeText: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 20,
    color: color.newdarkgreen,
  },
  simpleText: {
    fontSize: 18,
    color: "grey",
    marginTop: 10,
  },
  emailInput: {
    marginTop: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontSize: 18,
  },
  textButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6E7989",
    marginTop: 10,
  },
});

export default SignInScreen;
