import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { IMLocalized, init } from "../../services/localization/IMLocalized";
import { HeaderContext } from "../../context/AppContext";

export default (props) => {
  //init();

  const { titleScreen, updateTitleScreen } = useContext(HeaderContext);

  useEffect(() => {
    updateTitleScreen(IMLocalized("movieTitle"));
  }, [0]);

  return (
    <View>
      <Text>Movies</Text>
    </View>
  );
};
