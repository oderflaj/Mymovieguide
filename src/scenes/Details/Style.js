import { StyleSheet } from "react-native";
import { GLOBAL_STYLE } from "../../GlobalStyle";

export default new StyleSheet.create({
  container: {
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: "rgba(226, 231, 232, 0.3)",
  },
  containerTitle: {
    marginBottom: 10,
    backgroundColor: "rgb(10, 173, 214)",
    height: 100,
    padding: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  subcointainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  containerAttributes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  containerImage: {},
  containerOverview: {
    padding: 8,
    marginBottom: 5,
  },
  subcontainerAttributes: {},
  textTitle: {
    fontFamily: "BarlowSemiCondensed-Bold",
    fontSize: 30,
    color: "white",
  },
  contentTrailers: {
    borderTopWidth: 2,
    borderColor: GLOBAL_STYLE.COLOR_FONT,
    marginTop: 5,
    marginBottom: 5,
  },

  textYear: {
    fontFamily: "BarlowSemiCondensed-Medium",
    fontSize: 36,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
  textTime: {
    fontFamily: "BarlowSemiCondensed-SemiBoldItalic",
    fontSize: 26,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
  textNormal: {
    fontFamily: "BarlowSemiCondensed-Regular",
    fontSize: 20,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
});
