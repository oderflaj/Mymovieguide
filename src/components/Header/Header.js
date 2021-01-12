import React, { useContext, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "./Style";
import { HeaderContext } from "../../context/AppContext";
import { FontAwesome } from "@expo/vector-icons";
import SortMovies from "./components/SortMovies";

export default (props) => {
  const { titleScreen } = useContext(HeaderContext);
  const childRef = useRef();
  return (
    <View style={Style.content}>
      <Text style={Style.titleText}>{titleScreen}</Text>
      <TouchableOpacity
        style={Style.ellipseButton}
        onPress={() => childRef.current.showModal()}
      >
        <FontAwesome name="ellipsis-v" size={24} color="#fff" />
      </TouchableOpacity>
      <SortMovies ref={childRef} />
    </View>
  );
};
