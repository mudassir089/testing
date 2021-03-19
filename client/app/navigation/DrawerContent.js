import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import color from "../config/color";
import firebase from "../config/fbConfig";
import { connect } from "react-redux";

function DrawerContent({ navigation, props, profile }) {
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
  };
  return (
    // <View>
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image source={require("../../assets/mosh.jpg")} size={70} />
            <View>
              <Title style={styles.title}>admin</Title>
              <Caption styles={styles.caption}>shaka123@gmail.com</Caption>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={size}
                  color="#29C17E"
                />
              )}
              label="Home"
              labelStyle={{
                fontSize: 18,
                color: color.newdarkgreen1,
              }}
              onPress={() => navigation.navigate("home")}
            />
            <DrawerItem
              icon={({ size }) => (
                <Ionicons
                  name="notifications-outline"
                  size={size}
                  color="#FFBB4E"
                />
              )}
              label="Notifications"
              labelStyle={{
                fontSize: 18,
                color: color.newdarkgreen1,
              }}
              // onPress={() => navigation.navigate("Home")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={size}
                  color="#7874F7"
                />
              )}
              label="My Orders"
              labelStyle={{
                fontSize: 18,
                color: color.newdarkgreen1,
              }}
              onPress={() => console.log("logout")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialIcons
                  name="favorite-outline"
                  size={size}
                  color={color.newdarkgreen1}
                />
              )}
              label="Favorite Products"
              labelStyle={{
                fontSize: 18,
                color: color.newdarkgreen1,
              }}
              onPress={() => console.log("logout")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={size}
                  color="dodgerblue"
                />
              )}
              label="My Cart"
              labelStyle={{
                fontSize: 18,
                color: color.newdarkgreen1,
              }}
              onPress={() => navigation.navigate("cart")}
            />
          </Drawer.Section>
          <Drawer.Section title="Application Preferences">
            <TouchableRipple>
              <DrawerItem
                icon={({ size }) => (
                  <SimpleLineIcons
                    name="settings"
                    size={size}
                    color={color.red}
                  />
                )}
                label="Settings"
                labelStyle={{
                  fontSize: 18,
                  color: color.newdarkgreen1,
                }}
                onPress={() => navigation.navigate("setting")}
              />
            </TouchableRipple>
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={size}
                  color="#99A0B0"
                />
              )}
              label="Help & Support"
              labelStyle={{
                fontSize: 18,

                color: color.newdarkgreen1,
              }}
              onPress={() => console.log("logout")}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <MaterialCommunityIcons
              name="logout"
              size={size}
              color={color.dark}
            />
          )}
          label="Sign Out"
          labelStyle={{
            fontSize: 18,
            fontWeight: "bold",
            color: color.newdarkgreen1,
          }}
          onPress={handleLogout}
        />
      </Drawer.Section>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    color: color.newgreen,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
export default DrawerContent;
