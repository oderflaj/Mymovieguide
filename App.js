import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MoviesScreen from "./src/scenes/Movies/Movies";
import DetailsScreen from "./src/scenes/Details/Details";
import Loading from "./src/components/Loading/Loading";
import Header from "./src/components/Header/Header";
import { IMLocalized, init } from "./src/services/localization/IMLocalized";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { HeaderContext } from "./src/context/AppContext";

const Stack = createStackNavigator();

export default function App() {
  init();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(IMLocalized("movieTitle"));

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Anton-Regular": require("./assets/fonts/Anton/Anton-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  const Container = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "rgb(28, 23, 83)",
            },
            headerTitle: (props) => <Header {...props} />,
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Movie" component={MoviesScreen} />
          <Stack.Screen name="Detail" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return fontsLoaded ? (
    <>
      <StatusBar style="light" />
      <HeaderContext.Provider
        value={{
          titleScreen: currentTitle,
          updateTitleScreen: setCurrentTitle,
        }}
      >
        <Container />
      </HeaderContext.Provider>
    </>
  ) : (
    <Loading />
  );
}
