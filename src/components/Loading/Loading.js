import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Style from "./Style";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { IMLocalized } from "../../services/localization/IMLocalized";

export default () => {
  //init();
  const size = 54;
  useEffect(() => {}, []);
  return (
    <View style={Style.container}>
      <View style={Style.containerEx}>
        <MaterialCommunityIcons name="movie-roll" size={size} color="grey" />
      </View>
      <View style={Style.containerMiddle}>
        <MaterialCommunityIcons
          name="movie-open-outline"
          size={size}
          color="grey"
        />
        <MaterialIcons name="local-movies" size={size} color="grey" />
      </View>
      <View style={Style.containerEx}>
        <MaterialIcons name="movie-filter" size={size} color="grey" />
      </View>

      <Text style={Style.label}>{IMLocalized("loading")}</Text>
    </View>
  );
};
