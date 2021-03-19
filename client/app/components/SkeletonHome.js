import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
function SkeletonHome(props) {
  return (
    <ScrollView
      style={{ paddingTop: 160, flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <SkeletonPlaceholder>
        <View
          style={{
            width: 350,
            height: 200,
            alignSelf: "center",
            borderRadius: 10,
          }}
        />
      </SkeletonPlaceholder>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ paddingTop: 150 }}
      >
        <SkeletonPlaceholder>
          <View
            style={{
              borderRadius: 15,
              width: 200,
              height: 200,
              margin: 20,
            }}
          />
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View
            style={{
              borderRadius: 15,
              width: 200,
              height: 200,
              margin: 20,
            }}
          />
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View
            style={{
              borderRadius: 15,
              width: 200,
              height: 200,
              margin: 20,
            }}
          />
        </SkeletonPlaceholder>
      </ScrollView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ paddingBottom: 150 }}
      >
        <SkeletonPlaceholder>
          <View
            style={{
              borderRadius: 15,
              width: 200,
              height: 200,
              margin: 20,
            }}
          />
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View
            style={{
              borderRadius: 15,
              width: 200,
              height: 200,
              margin: 20,
            }}
          />
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View
            style={{
              borderRadius: 15,
              width: 200,
              height: 200,
              margin: 20,
            }}
          />
        </SkeletonPlaceholder>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 160,
    flex: 1,
  },
});

export default SkeletonHome;
