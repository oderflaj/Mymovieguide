import { StyleSheet } from "react-native";

export default new StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: "rgb(50, 42, 135)",
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 12,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
  },

  textStyle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 5,
  },
  itemContainer: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
  },
});
