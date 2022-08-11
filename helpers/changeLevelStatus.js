//first read data from storage than read the new data to storage
import AsyncStorage from "@react-native-async-storage/async-storage";
const readLevelStatus = async () => {
  try {
    const value = await AsyncStorage.getItem("levels");
    if (value !== null) {
      // value previously stored
      //   console.log("we got data", value);
      return value;
    }
  } catch (e) {
    // console.log("error while reading levels data", e);
  }
  return false;
};

const writeNewStatus = async (newStatus) => {
  //if its already saved to storage

  try {
    const jsonValue = JSON.stringify(newStatus);
    // console.log("json value", jsonValue);
    await AsyncStorage.setItem("levels", jsonValue);
  } catch (e) {
    console.log("error while saving levels", e);
    // saving error
  }
};

const changeLevelStatus = async (level) => {
  //level is current level so change next level status to unlocked

  let nextLevel = level + 1;

  let data = await readLevelStatus();

  let dataJson = JSON.parse(data);

  //unlock the next level
  dataJson[nextLevel] = true;

  writeNewStatus(dataJson);
};

export default changeLevelStatus;
