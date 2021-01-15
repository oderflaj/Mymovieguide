import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MoviesScreen from "./src/scenes/Movies/Movies";
import DetailsScreen from "./src/scenes/Details/Details";
import Loading from "./src/components/Loading/Loading";
import Header from "./src/components/Header/Header";
import { IMLocalized, init } from "./src/services/localization/IMLocalized";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppContext } from "./src/context/AppContext";
import * as ScreenOrientation from "expo-screen-orientation";
//import NetworkProvider from "./src/services/NetworkProvider";

const Stack = createStackNavigator();

export default function App() {
  init();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(IMLocalized("movieTitle"));
  const [currentOrderBy, setCurrentOrderBy] = useState("popular");

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Anton-Regular": require("./assets/fonts/Anton/Anton-Regular.ttf"),
      "BarlowSemiCondensed-Regular": require("./assets/fonts/Barlow/BarlowSemiCondensed-Regular.ttf"),
      "BarlowSemiCondensed-Bold": require("./assets/fonts/Barlow/BarlowSemiCondensed-Bold.ttf"),
      "BarlowSemiCondensed-SemiBoldItalic": require("./assets/fonts/Barlow/BarlowSemiCondensed-SemiBoldItalic.ttf"),
      "BarlowSemiCondensed-Medium": require("./assets/fonts/Barlow/BarlowSemiCondensed-Medium.ttf"),
    });
    setFontsLoaded(true);
  };

  const Container = () => {
    const { titleScreen } = useContext(AppContext);
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "rgb(28, 23, 83)",
              height: 125,
            },
            headerTitle: (props) => (
              <Header {...props} titleScreen={titleScreen} />
            ),
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
      <AppContext.Provider
        value={{
          titleScreen: currentTitle,
          orderBy: currentOrderBy,
          updateOrderBy: setCurrentOrderBy,
        }}
      >
        <StatusBar style="light" />
        <Container />
      </AppContext.Provider>
    </>
  ) : (
    <Loading />
  );
}
