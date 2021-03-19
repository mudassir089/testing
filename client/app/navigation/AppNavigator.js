import React, { useState } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Body,
  Button,
} from "native-base";
import { StyleSheet, Text, View, Platform } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "../config/fire";

const AppNavigator = ({ navigation, route }) => {
  const handleLogout = () => {
    firebase.auth().signOut();
    navigation.navigate("Welcome");
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <Container>
          <Header
            style={{
              flex: 1,
              backgroundColor: "#24AD61",
              padding: 60,
              paddingTop: 50,
            }}
          >
            <Body
              style={{
                flexDirection: "row",
                flex: 1,
                paddingTop: 30,
              }}
            >
              <Button transparent>
                <MaterialCommunityIcons
                  style={{
                    marginRight: 50,
                    paddingLeft: 20,
                    paddingBottom: 5,
                  }}
                  name="menu"
                  size={35}
                  color="white"
                />
              </Button>
              <Text
                style={{
                  ...Platform.select({
                    android: {
                      color: "white",
                      fontSize: 25,
                      fontWeight: "bold",
                      letterSpacing: 1,
                    },
                    ios: {
                      color: "white",
                      fontSize: 45,
                      position: "absolute",
                      left: "39%",
                    },
                  }),
                }}
              >
                Grocery Store
              </Text>
            </Body>
          </Header>
          <Tabs
            tabBarUnderlineStyle={{ height: 3, backgroundColor: "#fff" }}
            initialPage={0}
            tabContainerStyle={{ elevation: 0 }}
          >
            <Tab
              style={{ backgroundColor: "#F3F4F6" }}
              heading={
                <TabHeading
                  style={{ backgroundColor: "#24AD61", paddingBottom: 10 }}
                >
                  <MaterialCommunityIcons
                    name="storefront-outline"
                    size={30}
                    color="white"
                  />
                </TabHeading>
              }
            >
              <HomeScreen
                onPress={(item) =>
                  navigation.navigate("categories", { id: item.label })
                }
              />
            </Tab>
            <Tab
              style={{ backgroundColor: "#F4F7FA" }}
              heading={
                <TabHeading
                  style={{ backgroundColor: "#24AD61", paddingBottom: 10 }}
                >
                  <MaterialCommunityIcons
                    name="basket"
                    size={30}
                    color="white"
                  />
                </TabHeading>
              }
            >
              <CartScreen />
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{ backgroundColor: "#24AD61", paddingBottom: 10 }}
                >
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={30}
                    color="white"
                  />
                </TabHeading>
              }
            ></Tab>

            <Tab
              style={{ backgroundColor: "#F4F7FA" }}
              heading={
                <TabHeading
                  style={{ backgroundColor: "#24AD61", paddingBottom: 10 }}
                >
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={30}
                    color="white"
                  />
                </TabHeading>
              }
            >
              <ProfileScreen handleLogout={handleLogout} />
            </Tab>
          </Tabs>
        </Container>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  shaka: {
    backgroundColor: "red",
    marginRight: 10,
  },
  main: {
    backgroundColor: "#29C17E",
    padding: 25,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  headerText: {
    paddingTop: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
export default AppNavigator;
