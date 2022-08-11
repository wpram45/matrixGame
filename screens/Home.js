import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MatrixBackground from "../animations/MatrixBackground";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../components/Button";
import levelStatus from "../data/levelStatus";

//sensororleri kullanarak oyun tasarla
const Home = ({ navigation }) => {
  const _sound = useRef(new Audio.Sound());
  const [soundLoaded, setIsSoundLoaded] = useState(false);

  const readLevelStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("levels");
      if (value !== null) {
        // value previously stored
        //  console.log("we got data", value);
        return value;
      }
    } catch (e) {
      console.log(" error while reading levels data", e);
    }
  };

  const navigateToLevels = () => {
    _sound.current.stopAsync();
    navigation.navigate("Levels");
  };

  const loadLevelStatus = async () => {
    //if its already saved to storage
    const gelen = await readLevelStatus();
    if (gelen) {
      // console.log("gelen", gelen);
      return;
    }

    try {
      const jsonValue = JSON.stringify(levelStatus);
      //  console.log("json value", jsonValue);
      await AsyncStorage.setItem("levels", jsonValue);
    } catch (e) {
      // console.log("error while saving levels", e);
      // saving error
    }
  };

  async function playSound() {
    // console.log("Loading Sound");

    if (!soundLoaded) {
      await _sound.current.loadAsync(require("../sounds/ilkgokturk.mp3"), {
        shouldPlay: true,
        isLooping: false,
      });
      await _sound.current.setPositionAsync(0);
      await _sound.current.playAsync();
    } else {
      //  console.log("sound is already in memory");
    }

    setIsSoundLoaded(true);
  }

  useEffect(() => {
    loadLevelStatus();
    playSound();

    return () => {
      //  console.log("Unloading Sound");
      _sound.current.unloadAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <MatrixBackground />
      <Button
        buttonText="ENTER THE SAQAR [MATRIX]"
        onPress={navigateToLevels}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;
