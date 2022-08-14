import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
// import AppLoading from "expo-app-loading";
// import { useEffect, useState } from "react";

const BottomTab = createBottomTabNavigator();

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
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="User"
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
