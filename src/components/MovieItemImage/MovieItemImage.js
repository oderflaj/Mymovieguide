import React from "react";
import { View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { preloading } from "../../../assets/images/Images";
import { Api } from "../../services/api/APIServices";

export default ({ id, image, width, height }) => {
  const preview = {
    uri: preloading,
  };
  const uri = `${Api.image}${image}`;

  return (
    <View>
      <Image
        style={{ height: 250, width: width / 2, resizeMode: "cover" }}
        {...{ preview, uri }}
        transitionDuration="500"
        tint="light"
      />
    </View>
  );
};
