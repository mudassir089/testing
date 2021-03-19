import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  FlatList,
  PlatformColor,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Search, SecondHeader } from "./TopBar";
import color from "../config/color";
import { topProducts } from "./Data";
function Category({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <SecondHeader onPress={() => navigation.goBack()} name="Category" />
        <Search />
        <View style={styles.borderLine}></View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={topProducts}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate("products", { categoryName: item })
                    }
                  >
                    <View style={styles.categoryCon}>
                      <View style={styles.categoryWrapper}>
                        <ImageBackground
                          resizeMode="cover"
                          source={item.image}
                          style={styles.categoryImg}
                        >
                          <View style={styles.categoryTextCon}>
                            <Text style={styles.categoryText}>
                              {item.label}
                            </Text>
                          </View>
                        </ImageBackground>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </>
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : StatusBar.currentHeight,
  },
  borderLine: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    marginHorizontal: 20,
  },
  //categories
  categoryCon: {
    margin: 12,
  },
  categoryWrapper: {
    borderRadius: 15,
    overflow: "hidden",
  },
  categoryImg: {
    width: 180,
    height: 100,
  },
  categoryTextCon: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    color: color.white,
    fontSize: 18,
  },
});

export default Category;
