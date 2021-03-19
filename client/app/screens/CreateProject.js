import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { createProject } from "../redux/GroceryRedux/shopping-actions";

const CreateProject = ({ createProject }) => {
  const [input, setInput] = useState({
    // id: "",
    label: "",
    price: "",
    discription: "",
    qty: "",
  });

  const handleSubmit = () => {
    Keyboard.dismiss();
    createProject(input);
  };

  return (
    <View style={styles.container}>
      <Text>ADD DATA</Text>

      {/* <TextInput
        placeholderTextColor="grey"
        placeholder="id"
        style={styles.headerSearch}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => {
          setInput({ ...input, id: value });
        }}
      /> */}
      <TextInput
        placeholderTextColor="grey"
        style={styles.headerSearch}
        placeholder="label"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => {
          setInput({ ...input, label: value });
        }}
      />
      <TextInput
        placeholderTextColor="grey"
        style={styles.headerSearch}
        placeholder="price"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        onChangeText={(value) => {
          setInput({ ...input, price: value });
        }}
      />
      <TextInput
        placeholderTextColor="grey"
        style={styles.headerSearch}
        placeholder="discription"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => {
          setInput({ ...input, discription: value });
        }}
      />
      <TextInput
        placeholderTextColor="grey"
        style={styles.headerSearch}
        placeholder="Qty"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        onChangeText={(value) => {
          setInput({ ...input, qty: value });
        }}
      />
      <TouchableOpacity
        onPress={() => {
          handleSubmit();
        }}
        style={{ backgroundColor: "grey", margin: 20, padding: 30 }}
      >
        <Text>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ margin: 20, padding: 30 }}>
        <Text>upload image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerSearch: {
    width: "80%",
    fontSize: 18,
    color: "black",
    fontWeight: "normal",
    alignSelf: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    marginRight: 30,
    margin: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(null, mapDispatchToProps)(CreateProject);
