import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { AdMobBanner } from "expo-ads-admob";
import changeLevelStatus from "../helpers/changeLevelStatus";

const { width, height } = Dimensions.get("window");

const Question = ({ route, navigation }) => {
  const [input, setInput] = useState();

  const { question, level, hint, answer } = route.params;

  //console.log("gege", route.params);

  const showHint = () => {
    Alert.alert("Here is your hint", " - - -    " + hint + "   - - -");
  };

  const checkAnswer = () => {
    if (input.toLowerCase() === answer.toLowerCase()) {
      // console.log("correct");
      Alert.alert(
        "Congratulations!",
        "Your answer is true we will route you to  the main board.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Home"),
          },
        ]
      );
      changeLevelStatus(level);
    } else {
      Alert.alert("Wrong Answer", "Please check your answer check the hint!");
    }
  };

  return (
    <View style={styles.container}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-5739852459663882/8134302394" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />
      <View style={styles.questionView}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <TouchableOpacity onPress={() => showHint()} style={styles.hint}>
        <Text style={styles.questionText}>Get Hint!</Text>
      </TouchableOpacity>
      <TextInput
        onChangeText={(text) => setInput(text)}
        placeholder="Enter your answer"
        style={styles.input}
        autoCapitalize="none"
      />
      <Button onPress={() => checkAnswer()} buttonText="CHECK ANSWER" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#020204",
    justifyContent: "space-around",
  },
  hint: {
    alignSelf: "center",
    backgroundColor: "#204829",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    width: width / 3,
  },
  questionView: {
    backgroundColor: "#204829",
    height: height / 4,
  },
  questionText: {
    fontSize: 22,
    alignSelf: "center",
    color: "white",
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#92e5a1",
    height: height / 15,
    width: width / 1.2,
    borderRadius: 7,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
  },
});

export default Question;
