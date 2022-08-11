import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

import { Feather, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Button = ({ buttonText, onPress, disabled, level }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>{buttonText}</Text>

      {disabled ? (
        <Feather
          name="lock"
          color="#c27dff"
          size={19}
          style={{ alignSelf: "center", marginTop: 3 }}
        />
      ) : null}
      {level === 1 ? (
        <Ionicons
          name="heart-sharp"
          size={24}
          color="#ff242f"
          style={{ alignSelf: "center", marginTop: 3 }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#020204",
    width: width / 1.2,
    alignSelf: "center",
    borderRadius: 7,
    justifyContent: "center",
    height: height / 11,
    borderWidth: 1,
    borderColor: "#22b455",
  },
  touchableOpacity: {
    paddingHorizontal: 7,
    justifyContent: "center",
    borderRadius: 4,
    alignItems: "center",

    height: height / 11,
  },
  text: {
    alignSelf: "center",
    letterSpacing: 1,
    fontSize: 17,
    color: "#92e5a1",
    paddingHorizontal: 7,
  },
});

export default Button;
