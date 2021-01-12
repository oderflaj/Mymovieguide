import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, Modal, Text, TouchableHighlight } from "react-native";
import styles from "./Style";

const SortMovies = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal() {
      setModalVisible(!modalVisible);
    },
  }));

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
});

export default SortMovies;
