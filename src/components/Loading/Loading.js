import React from "react";
import { View, Text } from "react-native";
import Style from "./Style";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { IMLocalized, init } from "../../services/localization/IMLocalized";

export default () => {
  init();
  return (
    <View style={Style.container}>
      <MaterialCommunityIcons name="movie-roll" size={24} color="black" />
      <MaterialCommunityIcons
        name="movie-open-outline"
        size={24}
        color="black"
      />
      <MaterialIcons name="local-movies" size={24} color="black" />
      <Text>{IMLocalized("loading")}</Text>
    </View>
  );
};
