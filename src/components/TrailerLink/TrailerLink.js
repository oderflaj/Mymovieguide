import React, { useCallback } from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import styles from "./Style";
import { FontAwesome } from "@expo/vector-icons";
import { GLOBAL_STYLE } from "../../GlobalStyle";
import { Api } from "../../services/api/APIServices";

export default ({ video, name, line, lastLine }) => {
  const url = `${Api.youtube}${video}`;
  const styleLine =
    line === lastLine - 1
      ? {}
      : { borderBottomWidth: 1, borderBottomColor: GLOBAL_STYLE.COLOR_FONT };

  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, styleLine]}>
        <View style={styles.containerIcon}>
          <FontAwesome
            name="youtube-play"
            size={44}
            color={GLOBAL_STYLE.COLOR_FONT}
          />
        </View>
        <View style={[styles.containerInfo, { flexDirection: "row" }]}>
          <Text style={[styles.textInfo]}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
