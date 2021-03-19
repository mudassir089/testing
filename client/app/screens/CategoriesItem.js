import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar as Bar } from "expo-status-bar";

function CategoriesItem({ navigation, route }) {
  const { cat } = route.params;

  const CategoriesNames = [
    { id: 1, label: "Oil", price: 30, image: require("../../assets/mosh.jpg") },
    {
      id: 2,
      label: "Moong",
      price: 46,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 3,
      label: "Rice",
      price: 60,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 4,
      label: "Soup",
      price: 10,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 5,
      label: "Almond",
      price: 370,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 6,
      label: "Cooking Oil",
      price: 360,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 7,
      label: "Surf",
      price: 344,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 8,
      label: "Sugar",
      price: 360,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 9,
      label: "Salt",
      price: 304,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 10,
      label: "Milk",
      price: 310,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 11,
      label: "Oil",
      price: 1130,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 12,
      label: "Moong",
      price: 330,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 13,
      label: "Rice",
      price: 550,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 14,
      label: "Soup",
      price: 530,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 15,
      label: "Almond",
      price: 310,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 16,
      label: "Cooking Oil",
      price: 3110,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 17,
      label: "Surf",
      price: 330,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 18,
      label: "Sugar",
      price: 3130,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 19,
      label: "Salt",
      price: 112,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 20,
      label: "Milk",
      price: 324,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 21,
      label: "Oil",
      price: 430,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 22,
      label: "Moong",
      price: 234,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 23,
      label: "Rice",
      price: 330,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 24,
      label: "Soup",
      price: 30,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 25,
      label: "Almond",
      price: 523,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 26,
      label: "Cooking Oil",
      price: 230,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 27,
      label: "Surf",
      price: 310,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 28,
      label: "Sugar",
      price: 301,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 29,
      label: "Salt",
      price: 320,
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 30,
      label: "Milk",
      price: 380,
      image: require("../../assets/mosh.jpg"),
    },
  ];
  return (
    <ImageBackground
      style={styles.main}
      source={require("../../assets/Grocery.jpg")}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            style={{ marginLeft: 10 }}
            name="chevron-left"
            size={40}
            color="white"
          />
        </TouchableWithoutFeedback>
        <Text numberOfLines={1} style={styles.catText}>
          {cat.label}
        </Text>
      </View>
      <View style={styles.settingWrapper}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          data={CategoriesNames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate("items", { categories: item })
                  }
                >
                  <View>
                    <View style={styles.settingDetailsWrapper}>
                      <Text style={styles.settingText}>{item.label}</Text>
                      <View style={styles.settingSideIcon}>
                        <MaterialCommunityIcons
                          name="chevron-right"
                          size={30}
                          color="lightgrey"
                        />
                      </View>
                    </View>
                    <View style={styles.settingBorderWidth}></View>
                  </View>
                </TouchableWithoutFeedback>
              </>
            );
          }}
        />
      </View>
      <Bar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    height: "30%",
    paddingTop: Platform.OS === "android" ? 50 : StatusBar.currentHeight,
  },

  container: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  catText: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  settingWrapper: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
    marginTop: 50,
  },
  settingDetailsWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },

  settingBorderWidth: {
    borderBottomColor: "#F5F5F7",
    borderBottomWidth: 2,
    marginHorizontal: 20,
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
  },

  //   catItemWrap: {
  //     flex: 1,
  //     width: "80%",
  //     backgroundColor: "gold",
  //     margin: 50,
  //     marginVertical: 60,
  //     borderRadius: 10,
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //   },
  //   catItem: {
  //     fontSize: 18,
  //     fontWeight: "bold",
  //     marginLeft: 10,
  //     marginVertical: 20,
  //   },
  //   catIcon: {
  //     marginRight: 10,
  //     marginVertical: 20,
  //   },
  //   catBorderWidth: {
  //     flexDirection: "column",
  //     borderBottomColor: "black",
  //     borderBottomWidth: 3,
  //   },
});

export default CategoriesItem;
