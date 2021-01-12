import React, { useContext } from "react";
import { View, Text } from "react-native";
import Style from "./Style";
import { HeaderContext } from "../../context/AppContext";

export default (props) => {
  const { titleScreen } = useContext(HeaderContext);
  return (
    <View>
      <Text style={Style.titleText}>{titleScreen}</Text>
    </View>
  );
};
