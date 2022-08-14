import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Platform } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          drawerActiveTintColor: "black",
          headerTitleContainerStyle: {
            height: Platform.OS === "ios" ? 35 : null,
          },
          headerLeftContainerStyle: {
            height: Platform.OS === "ios" ? 35 : null,
          },
        }}
      >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
