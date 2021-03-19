import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function TabbarButton(props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="cart-outline"
          size={40}
          color={color.greenspecial}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white,
    borderColor: "#3dab85",
    borderRadius: 50,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    width: 80,
  },
});

export default TabbarButton;
