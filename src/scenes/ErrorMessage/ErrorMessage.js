import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./Style";
import { GLOBAL_STYLE } from "../../GlobalStyle";
export default ({ message }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="sad-cry" size={200} color={GLOBAL_STYLE.COLOR_FONT} />
      <Text style={styles.textMessage}>{message}</Text>
    </View>
  );
};
