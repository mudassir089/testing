import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ItemPicker from "../components/ItemPicker";
import color from "../config/color";
import { category } from "../components/Data";
function HomeScreen({ navigation, onPress }) {
  const [model, setModel] = useState(false);

  return (
    <>
      <View style={{ backgroundColor: "#fff", margin: 15, borderRadius: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Categories</Text>
          <TouchableWithoutFeedback onPress={() => setModel(true)}>
            <Text style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
              See all
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={mainCat}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemPicker
                item={item}
                onPress={() => {
                  setModel(false);
                  onPress(item);
                }}
              />
            )}
          />
        </View>

        <Modal visible={model} animationType="fade">
          <View>
            <MaterialCommunityIcons
              onPress={() => setModel(false)}
              name="chevron-down"
              size={70}
              color="lightgrey"
              style={{ textAlign: "center" }}
            />
            <Text
              style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
            >
              Categories
            </Text>
            <FlatList
              data={category}
              numColumns={3}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ItemPicker
                  item={item}
                  onPress={() => {
                    setModel(false);
                    onPress(item);
                  }}
                />
              )}
            />
          </View>
        </Modal>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
