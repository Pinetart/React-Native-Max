import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import AppLoading from "expo-app-loading";
// import { useEffect, useState } from "react";

const Drawer = createDrawerNavigator();

export default function App() {
  // Splash screen code duration
  // let [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   let timeout = setTimeout(() => setIsLoaded(true), 3000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  // if (!isLoaded) {
  //   return <AppLoading />;
  // }

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
