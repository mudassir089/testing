import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({
  title,
  color,
  backgroundColor,
  width,
  marginVertical,
  onPress,
}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor, width, marginVertical }]}
        onPress={onPress}
      >
        <Text style={[styles.ButtonText, { color }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#29C17E",
    width: 110,
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
  },
  ButtonText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#D3F2E4",
  },
});

export default Button;
