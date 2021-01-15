import React, { useCallback } from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import styles from "./Style";
import { FontAwesome } from "@expo/vector-icons";
import { GLOBAL_STYLE } from "../../GlobalStyle";
import { Api } from "../../services/api/APIServices";

const x = () => {
  const supportedURL = "https://google.com";

  const unsupportedURL = "slack://open?team=123456";

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };
};

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
