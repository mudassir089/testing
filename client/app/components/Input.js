import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

function Input() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#D8DBE1"
        style={styles.emailInput}
        placeholder="Username"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emailInput: {
    marginTop: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontSize: 18,
  },
});

export default Input;
