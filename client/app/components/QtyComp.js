import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import CartScreen from "../screens/CartScreen";

function QtyComp({ cart }) {
  console.log(cart);
  return (
    <View style={styles.container}>
      <Text>poka</Text>
      {/* {cart.map((item) => {
        <CartScreen itemData={item} />;
      })} */}
      <CartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(QtyComp);
