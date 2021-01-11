import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Movies from "./src/scenes/Movies/Movies";
import Loading from "./src/components/Loading/Loading";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Loading />
    </View>
  );
}
