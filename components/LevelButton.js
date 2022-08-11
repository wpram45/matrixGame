import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";

const LevelButton = ({ buttonText, onPress, locked, level }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={onPress}
        buttonText={buttonText}
        disabled={locked}
        level={level}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#020204",
    marginTop: 7,
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default LevelButton;
