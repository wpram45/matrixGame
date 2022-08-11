import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const ItemSeparator = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 2,
    backgroundColor: "#bf0000",
    marginTop: 5,
  },
});

export default ItemSeparator;
