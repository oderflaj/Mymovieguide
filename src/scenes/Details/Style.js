import { StyleSheet } from "react-native";
import { GLOBAL_STYLE } from "../../GlobalStyle";

export default new StyleSheet.create({
  container: {
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: GLOBAL_STYLE.BACKGROUNDCOLOR,
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
  contentAverage: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "space-around",
    width: 85,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "rgb(10, 173, 214)",
    borderColor: "rgb(10, 173, 214)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  textYear: {
    fontFamily: "BarlowSemiCondensed-Medium",
    fontSize: 46,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
  textTime: {
    marginTop: 8,
    fontFamily: "BarlowSemiCondensed-SemiBoldItalic",
    fontSize: 26,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
  textAverage: {
    fontFamily: "BarlowSemiCondensed-Regular",
    fontSize: 20,
    color: "white",
  },
  textNormal: {
    fontFamily: "BarlowSemiCondensed-Regular",
    fontSize: 20,
    color: GLOBAL_STYLE.COLOR_FONT,
  },
});
