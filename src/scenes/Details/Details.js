import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { IMLocalized } from "../../services/localization/IMLocalized";
import { GetMovieDetail } from "../../services/api/APIServices";
import styles from "./Style";
import { Image } from "react-native-expo-image-cache";

export default ({ route }) => {
  const { id, language } = { ...route.params };
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    GetMovieDetail(id, language).then((detail) => {
      //console.log(detail);
      setMovie(detail);
    });
  }, [0]);

  return movie ? (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>{movie.title}</Text>
      </View>
      <View>
        <Text>
          Año:{movie.release_date} Tiempo:{movie.runtime} Calif
          {movie.vote_average}
        </Text>
      </View>
      <View>
        <Text>{movie.overview}</Text>
      </View>
      <View>
        <Text>Trailers</Text>
      </View>
    </ScrollView>
  ) : (
    <View></View>
  );
};
