import { StyleSheet } from "react-native";
import { GLOBAL_STYLE } from "../../GlobalStyle";

export default new StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerInfo: {
    margin: 5,
  },
  containerIcon: {
    marginRight: 5,
  },
  textInfo: {
    flexWrap: "wrap",
    fontFamily: "BarlowSemiCondensed-Regular",
    fontSize: 20,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
});
