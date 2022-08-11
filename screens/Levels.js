import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import MatrixBackground from "../animations/MatrixBackground";
import levels from "../data/levels";
import LevelButton from "../components/LevelButton";
import ItemSeparator from "../components/ItemSeparator";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Levels = ({ navigation }) => {
  const [levelStatus, setLevelStatus] = useState("");

  useEffect(() => {
    readLevelStatus();
  }, []);

  const readLevelStatus = async () => {
    //console.log("read level status worked");
    try {
      const value = await AsyncStorage.getItem("levels");
      //  console.log("value", value);
      if (value !== null) {
        // value previously stored
        //  console.log("we got data", value);
        setLevelStatus(JSON.parse(value));
      }
    } catch (e) {
      console.log("error while reading levels data", e);
    }
    // return false;
  };

  return (
    <View style={styles.container}>
      <MatrixBackground />
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        data={levels}
        keyExtractor={(item) => item.level}
        renderItem={({ item }) => {
          return (
            <LevelButton
              buttonText={"Level " + item.level + " | " + item.name}
              level={item.level}
              locked={!levelStatus[item.level]}
              onPress={() =>
                navigation.navigate("Question", {
                  level: item.level,
                  question: item.questionText,
                  answer: item.answer,
                  hint: item.hint,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default Levels;
