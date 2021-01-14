import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { IMLocalized } from "../../../services/localization/IMLocalized";
import { AppContext } from "../../../context/AppContext";
import { FontAwesome } from "@expo/vector-icons";

const SortMovies = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { updateOrderBy, orderBy } = useContext(AppContext);

  useImperativeHandle(ref, () => ({
    showModal() {
      setModalVisible(!modalVisible);
    },
  }));

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.modalText}>{IMLocalized("orderBy")}</Text>

            <TouchableOpacity
              onPress={() => {
                updateOrderBy("popular");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.itemContainer}>
                {orderBy === "popular" ? (
                  <FontAwesome name="check-square-o" size={20} color="white" />
                ) : (
                  <FontAwesome name="square-o" size={20} color="white" />
                )}
                <Text style={styles.textStyle}>
                  {IMLocalized("mostPopular")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateOrderBy("audience");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.itemContainer}>
                {orderBy === "audience" ? (
                  <FontAwesome name="check-square-o" size={20} color="white" />
                ) : (
                  <FontAwesome name="square-o" size={20} color="white" />
                )}
                <Text style={styles.textStyle}>
                  {IMLocalized("higherAudience")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default SortMovies;
