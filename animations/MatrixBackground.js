import LottieView from "lottie-react-native";

import { Text, View, Button, StyleSheet, Dimensions } from "react-native";

import React, { Component } from "react";

const { width, height } = Dimensions.get("window");
export class MatrixBackground extends Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            height: height,
            width: "100%",
            opacity: 0.57,
            backgroundColor: "#000357",
          }}
          loop={true}
          resizeMode="cover"
          source={require("./matrix.json")}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    // backgroundColor: "red",
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default MatrixBackground;
