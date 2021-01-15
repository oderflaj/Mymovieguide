import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { IMLocalized } from "../../services/localization/IMLocalized";
import {
  Api,
  GetMovieDetail,
  GetMovieTrailers,
} from "../../services/api/APIServices";
import styles from "./Style";
import { Image } from "react-native-expo-image-cache";
import { preloading } from "../../../assets/images/Images";
import TrailerLink from "../../components/TrailerLink/TrailerLink";
import Error from "../ErrorMessage/ErrorMessage";
import * as Network from "expo-network";

export default ({ route }) => {
  const { id, language } = { ...route.params };
  const [movie, setMovie] = useState(null);
  const [uri, setUri] = useState("");
  const [trailers, setTrailers] = useState(null);
  const [errorApi, setErrorApi] = useState(null);

  useEffect(() => {
    try {
      Network.getNetworkStateAsync().then((net) => {
        if (net.isInternetReachable) {
          GetMovieDetail(id, language).then((detail) => {
            setMovie(detail);
            setUri(`${Api.image}${detail.poster_path}`);
            GetMovieTrailers(id, language).then((trailer) => {
              let youtubeTrailer = trailer.results.filter(
                (item) => item.site === "YouTube"
              );
              setTrailers(youtubeTrailer || []);
            });
          });
        } else {
          setErrorApi(IMLocalized("notInternet"));
        }
      });
    } catch (error) {
      console.log(error);
      setErrorApi(errorApi);
    }
  }, [0]);

  const preview = {
    uri: preloading,
  };

  if (errorApi) {
    return <Error message={errorApi} />;
  }

  return movie && uri !== "" && trailers ? (
    <ScrollView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{movie.title}</Text>
      </View>
      <View style={styles.subcointainer}>
        <View style={styles.containerAttributes}>
          <View style={styles.containerImage}>
            <Image
              style={{
                height: 180,
                width: 130,
                resizeMode: "cover",
                borderRadius: 5,
              }}
              {...{ preview, uri }}
              transitionDuration="500"
              tint="light"
            />
          </View>
          <View style={styles.subcontainerAttributes}>
            <Text style={styles.textYear}>
              {movie.release_date.substring(0, 4)}
            </Text>
            <Text style={styles.textTime}>{movie.runtime}min</Text>
            <Text style={styles.textNormal}>{movie.vote_average} / 10</Text>
          </View>
        </View>
        <View style={styles.containerOverview}>
          <Text style={styles.textNormal}>{movie.overview}</Text>
        </View>
        <View>
          {trailers.length > 0 ? (
            <View style={styles.contentTrailers}>
              <Text style={[styles.textTime, { marginBottom: 5 }]}>
                {IMLocalized("trailers")}
              </Text>
              {trailers.map((trailer, index) => {
                return (
                  <TrailerLink
                    key={trailer.id}
                    video={trailer.key}
                    name={trailer.name}
                    line={index}
                    lastLine={trailers.length}
                  />
                );
              })}
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </ScrollView>
  ) : (
    <View></View>
  );
};
