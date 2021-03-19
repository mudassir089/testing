import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { mainCategories } from "../components/Data";

function CatData({ navigation, route }) {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            style={{ marginLeft: 10 }}
            name="chevron-left"
            size={40}
            color="black"
          />
        </TouchableWithoutFeedback>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 80,
            fontFamily: "sans-serif-light",
          }}
        >
          Categories
        </Text>
      </View>
      <View style={{ borderWidth: 1, borderColor: "lightgrey" }}></View>
      <FlatList
        numColumns={3}
        data={mainCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
                onPress={() => navigation.navigate("categories", { cat: item })}
              >
                <View
                  style={{
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#f3f3f3",
                      margin: 20,
                      borderRadius: 20,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: 70,
                        height: 70,
                        resizeMode: "contain",
                        margin: 20,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                    numberOfLines={1}
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    paddingBottom: 0,
    backgroundColor: "white",
  },
});

export default CatData;
