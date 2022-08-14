import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Test from "./components/test";

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
          drawerActiveBackgroundColor: "blue",
          drawerActiveTintColor: "white",
          // drawerLabelStyle: {marginLeft: -20}
        }}
      >
        {/* <Test/> */}
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
