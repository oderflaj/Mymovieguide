import { StyleSheet } from "react-native";
import { GLOBAL_STYLE } from "../../GlobalStyle";

export default new StyleSheet.create({
  flatListContainer: {
    backgroundColor: GLOBAL_STYLE.BACKGROUNDCOLOR,
  },
  contentBottom: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  textBottom: {
    fontSize: 30,
    color: GLOBAL_STYLE.COLOR_FONT,
    fontFamily: "BarlowSemiCondensed-Medium",
  },
});
