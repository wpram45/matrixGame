import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Levels from "./screens/Levels";
import Question from "./screens/Question";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Levels" component={Levels} />
        <Stack.Screen name="Question" component={Question} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
