import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ItemPicker({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          style={{
            padding: 30,
            backgroundColor: "#EBFBEF",
            borderRadius: 20,
          }}
          name={item.icon}
          color={item.color}
          size={40}
        />
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,

    marginVertical: 15,
    marginLeft: 16,
  },
});

export default ItemPicker;
