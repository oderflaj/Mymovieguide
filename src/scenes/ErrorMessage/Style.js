import { StyleSheet } from "react-native";
import { GLOBAL_STYLE } from "../../GlobalStyle";

export default new StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_STYLE.BACKGROUNDCOLOR,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  textMessage: {
    fontFamily: "BarlowSemiCondensed-Medium",
    fontSize: 38,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
});
