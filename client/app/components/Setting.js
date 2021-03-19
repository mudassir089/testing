import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  FlatList,
  PlatformColor,
} from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput,
  DefaultTheme,
  DarkTheme,
} from "react-native-paper";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Search, SecondHeader } from "./TopBar";
import color from "../config/color";
import { connect } from "react-redux";

function Setting({ navigation, profile }) {
  // const [image, setImage] = useState(false);
  const [input, setInput] = useState({
    // id: "",
    user: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });
  const [data, setData] = useState([
    {
      name: profile.userName,
    },
  ]);
  // react-native paper
  const [visible, setVisible] = useState(false);
  const [imageUri, setImageUri] = useState();

  const showModal = () => {
    setVisible(true);
  };
  const containerStyle = {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  };
  const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: color.newgreen,
      placeholder: "#A1A1A1",
      background: color.white,
      surface: "white",
    },
  };

  //////////////////////////////////////////
  // const selectImage = () => {
  //   setImage(true);
  //   console.log("image");
  // };

  const handleSubmit = () => {
    if (input !== "") {
      setData([{ ...input, setData }]);
      setVisible(false);
    }
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const image = await ImagePicker.launchImageLibraryAsync();
      if (!image.cancelled) {
        setImageUri(image.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <View style={styles.container}>
      <SecondHeader name="Settings" onPress={() => navigation.goBack()} />
      <Search />
      <View style={styles.ProfileNameCon}>
        <View style={styles.profileNameWrapper}>
          <Text style={styles.profileName}>{profile.userName}</Text>
          <Text style={styles.profileEmail}>mudassir0900@gmail.com</Text>
        </View>
        <TouchableWithoutFeedback onPress={selectImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.profileImage} />
          ) : (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color="#ADADAD"
              size={59}
            />
          )}
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.profileSettingCon}>
        <View style={styles.ProfileSettingHeading}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#8C8C8C"
            size={32}
          />
          <Text
            style={[
              styles.profileSettingDetailsKey,
              {
                color: color.newdarkgreen1,
                fontSize: 18,
                fontWeight: "bold",
              },
            ]}
          >
            Profile Settings
          </Text>
          <TouchableWithoutFeedback onPress={showModal}>
            <Text
              style={[
                styles.profileSettingDetailsKey,
                { color: color.newgreen, fontSize: 20 },
              ]}
            >
              Edit
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.profileSettingkeyCon}>
            <Text style={styles.profileSettingDetailsKey}>Full name</Text>

            <Text style={styles.profileSettingDetailsKey}>Email</Text>

            <Text style={styles.profileSettingDetailsKey}>Phone</Text>

            <Text style={styles.profileSettingDetailsKey}>Address</Text>

            <Text style={styles.profileSettingDetailsKey}>About</Text>
          </View>

          {data.map((item, index) => {
            return (
              <View key={index} style={styles.profileSettingDetailsPropertyCon}>
                <Text style={styles.profileSettingDetailsProperty}>
                  {item.name}
                </Text>
                <Text style={styles.profileSettingDetailsProperty}>
                  {item.email}
                </Text>
                <Text style={styles.profileSettingDetailsProperty}>
                  {item.phone}
                </Text>
                <Text style={styles.profileSettingDetailsProperty}>
                  {item.address}
                </Text>
                <Text style={styles.profileSettingDetailsProperty}>
                  {item.about}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.profileSettingCon}>
        <View style={styles.ProfileSettingHeading}>
          <MaterialCommunityIcons
            name="credit-card"
            color="#8C8C8C"
            size={32}
          />
          <Text
            style={[
              styles.profileSettingDetailsKey,
              { color: color.newdarkgreen1, fontSize: 18, fontWeight: "bold" },
            ]}
          >
            Payments Settings
          </Text>
          <TouchableWithoutFeedback onPress={() => console.log("edit")}>
            <Text
              style={[
                styles.profileSettingDetailsKey,
                { color: color.newgreen, fontSize: 20 },
              ]}
            >
              Edit
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Provider theme={theme}>
        <Portal>
          <Modal
            dismissable={false}
            visible={visible}
            contentContainerStyle={containerStyle}
            // onDismiss={handleSubmit}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
                marginLeft: 20,
              }}
            >
              <AntDesign name="profile" color={color.newgreen} size={40} />
              <Text style={styles.categoryName}>Profile Details</Text>
            </View>
            <View style={{ margin: 20 }}>
              <TextInput
                mode="outlined"
                value={input.user}
                onChangeText={(value) => {
                  setInput({ ...input, username: value });
                }}
                label="Fullname"
              />
              <TextInput
                style={{
                  paddingTop: 5,
                }}
                mode="outlined"
                value={input.email}
                keyboardType="email-address"
                onChangeText={(value) => {
                  setInput({ ...input, email: value });
                }}
                label="Email"
              />
              <TextInput
                style={{
                  paddingTop: 5,
                }}
                mode="outlined"
                value={input.phone}
                keyboardType="phone-pad"
                onChangeText={(value) => {
                  setInput({ ...input, phone: value });
                }}
                label="Phone"
              />
              <TextInput
                style={{
                  paddingTop: 5,
                }}
                mode="outlined"
                value={input.address}
                onChangeText={(value) => {
                  setInput({ ...input, address: value });
                }}
                label="Address"
              />
              <TextInput
                style={{
                  paddingVertical: 5,
                }}
                require={true}
                mode="outlined"
                value={input.about}
                onChangeText={(value) => {
                  setInput({ ...input, about: value });
                }}
                label="About"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <TouchableWithoutFeedback
                  mode="contained"
                  onPress={handleSubmit}
                >
                  <Text style={{ color: color.newgreen, fontSize: 18 }}>
                    Save
                  </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  mode="contained"
                  onPress={handleCancel}
                >
                  <Text style={{ color: color.newgreen, fontSize: 18 }}>
                    Cancel
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : StatusBar.currentHeight,
  },
  // profileNameCon

  ProfileNameCon: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center",
  },
  profileNameWrapper: {
    alignItems: "flex-start",
  },
  profileName: {
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "bold",
    color: color.newdarkgreen1,
  },
  profileEmail: {
    fontSize: 12,
    color: "#A0A1A6",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  //profile Setting Name container

  profileSettingCon: {
    backgroundColor: color.white,
    margin: 10,
    marginHorizontal: 25,
    overflow: "hidden",
    borderRadius: 10,
    paddingVertical: 10,
  },
  ProfileSettingHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    marginHorizontal: 20,
  },

  profileSettingkeyCon: {
    margin: 10,
  },
  profileSettingDetailsKey: {
    padding: 10,
    color: color.black,
    fontSize: 15,
  },
  profileSettingDetailsPropertyCon: {
    alignItems: "flex-end",
    margin: 10,
  },
  profileSettingDetailsProperty: {
    padding: 10,
    color: "#A4A5A7",
  },
  categoryName: {
    fontSize: 24,
    color: color.gray,
    marginLeft: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Setting);
