import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderNavigation from "../components/HeaderNavigation";
import color from "../config/color";
import firebase from "../config/fbConfig";
import { connect } from "react-redux";
function ProfileScreen({ navigation, profile }) {
  // const handleLogout = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then((res) => {
  //       navigation.push("main");
  //     });
  // };
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: color.lightgrey }}>
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/mosh.jpg")}
        />
        <View style={styles.detailWrapper}>
          <Text style={styles.detailName}>{profile.userName}</Text>
          <Text style={styles.detailEmail}>naka</Text>
          <Text style={styles.detailNumber}>090078601</Text>
        </View>
      </View>

      <View style={styles.settingWrapper}>
        <View style={styles.settingDetailsWrapper}>
          <View style={[styles.settingIcon, { backgroundColor: "dodgerblue" }]}>
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color="#fff"
            />
          </View>
          <Text style={styles.settingText}>Recipient details</Text>
          <View style={styles.settingSideIcon}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="lightgrey"
            />
          </View>
        </View>
        <View style={styles.settingBorderWidth}></View>
        <View style={styles.settingDetailsWrapper}>
          <View style={[styles.settingIcon, { backgroundColor: "#F76B39" }]}>
            <MaterialCommunityIcons
              name="contactless-payment"
              size={30}
              color="#fff"
            />
          </View>
          <Text style={styles.settingText}>Payment Method</Text>
          <View style={styles.settingSideIcon}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="lightgrey"
            />
          </View>
        </View>
        <View style={styles.settingBorderWidth}></View>
        <View style={styles.settingDetailsWrapper}>
          <View style={[styles.settingIcon, { backgroundColor: "#FFBB4E" }]}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={30}
              color="#fff"
            />
          </View>

          <Text style={styles.settingText}>Delivery address</Text>
          <View style={styles.settingSideIcon}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="lightgrey"
            />
          </View>
        </View>
        <View style={styles.settingBorderWidth}></View>

        <View style={styles.settingDetailsWrapper}>
          <View style={[styles.settingIcon, { backgroundColor: "#FF596E" }]}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={30}
              color="#fff"
            />
          </View>
          <Text style={styles.settingText}>Change Password</Text>
          <View style={styles.settingSideIcon}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="lightgrey"
            />
          </View>
        </View>
        <View style={styles.settingBorderWidth}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("catdata", { name: "tata" })}
        >
          <View style={styles.settingDetailsWrapper}>
            <View style={[styles.settingIcon, { backgroundColor: "green" }]}>
              <MaterialCommunityIcons name="logout" size={30} color="#fff" />
            </View>
            <Text style={styles.settingText}>Logout</Text>
            <View style={styles.settingSideIcon}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color="lightgrey"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  profileWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    padding: 20,
    paddingVertical: 20,
    marginBottom: 0,
    borderRadius: 20,
  },
  detailWrapper: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  detailName: {
    fontWeight: "bold",
    fontSize: 27,
  },
  detailEmail: {
    color: "grey",
    fontWeight: "bold",
    marginVertical: 8,
  },
  detailNumber: {
    color: "grey",
    fontWeight: "bold",
  },
  settingWrapper: {
    marginTop: 10,
    padding: 20,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  settingDetailsWrapper: {
    flexDirection: "row",
    marginVertical: 25,
  },
  settingIcon: {
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  settingBorderWidth: {
    borderBottomColor: "#F5F5F7",
    borderBottomWidth: 2,
    marginLeft: 60,
    marginHorizontal: 10,
  },
  settingText: {
    paddingLeft: 20,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  settingSideIcon: {
    position: "absolute",
    right: "0%",
    top: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
