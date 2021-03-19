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

function SignUpScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearValidationError = () => {
    setEmailError("");
    setPasswordError("");
  };

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  // const showData = () => {
  //   firebase
  //     .firestore()
  //     .collection("newID")
  //     .onSnapshot((snapshot) => {
  //       setUser(snapshot.docs.map((doc) => doc.data()));
  //     });
  // };

  const handleRegister = () => {
    clearValidationError();
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        return firebase.firestore().collection("users").doc(resp.user.uid).set({
          userName: user,
        });
      })
      // .then(() => navigation.replace("home"))

      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            setIsLoading(false);
            break;
          case "auth/weak-password":
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
              style={{ color: "#6E7989", fontSize: 20, fontWeight: "bold" }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: color.newgreen,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome to Grocery App</Text>
          <Text style={styles.simpleText}>Let's get started</Text>
        </View>
        <TextInput
          placeholderTextColor="#D8DBE1"
          style={styles.emailInput}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={user}
          onChangeText={setUser}
        />

        <TextInput
          placeholderTextColor="#D8DBE1"
          style={styles.emailInput}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
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
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <Text>{passwordError}</Text>
        <View style={styles.textButtonWrapper}>
          {isLoading ? (
            <ActivityIndicator animating={true} size="small" color="black" />
          ) : (
            <Button
              title="SIGN UP"
              backgroundColor={color.newdarkgreen}
              color={color.white}
              width={110}
              onPress={handleRegister}
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
    justifyContent: "flex-end",
    marginTop: 30,
  },
});

export default SignUpScreen;
