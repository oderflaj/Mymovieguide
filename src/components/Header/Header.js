import React, { useContext, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "./Style";
import { IMLocalized } from "../../services/localization/IMLocalized";
import { FontAwesome } from "@expo/vector-icons";
import SortMovies from "./components/SortMovies";

export default (props) => {
  let titleScreen = "";

  switch (props.children) {
    case "Movie":
      titleScreen = IMLocalized("movieTitle");
      break;
    case "Detail":
      titleScreen = IMLocalized("movieDetailTitle");
      break;
    default:
      title = IMLocalized("movieTitle");
      break;
  }

  const childRef = useRef();
  return (
    <View style={Style.content}>
      <Text style={Style.titleText}>{titleScreen}</Text>
      {props.children === "Movie" && (
        <>
          <TouchableOpacity
            style={Style.ellipseButton}
            onPress={() => childRef.current.showModal()}
          >
            <FontAwesome name="ellipsis-v" size={24} color="#fff" />
          </TouchableOpacity>
          <SortMovies ref={childRef} />
        </>
      )}
    </View>
  );
};
