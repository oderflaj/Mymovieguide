import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { IMLocalized } from "../../services/localization/IMLocalized";
import { AppContext } from "../../context/AppContext";
import { GetListMovies } from "../../services/api/APIServices";
import * as Localization from "expo-localization";
import MovieItemImage from "../../components/MovieItemImage/MovieItemImage";
import Style from "./Styles";

const screen = Dimensions.get("screen");

export default (props) => {
  const [indexListMovies, setIndexListMovies] = useState(1);
  const [listMovies, setListMovies] = useState(null);
  const { updateTitleScreen, orderBy } = useContext(AppContext);

  useEffect(() => {
    try {
      GetListMovies(orderBy, Localization.locale, indexListMovies).then(
        (list) => {
          setListMovies(list.results);
        }
      );
    } catch (error) {
      setListMovies({ page: 0, results: [] });
      console.error(error);
    }

    updateTitleScreen(IMLocalized("movieTitle"));
  }, [0]);

  const handleLoadMoreMovies = async () => {
    GetListMovies(orderBy, Localization.locale, indexListMovies + 1).then(
      (list) => {
        setIndexListMovies(indexListMovies + 1);
        let temporalList = listMovies;
        temporalList = temporalList.concat(list.results);
        console.log(temporalList);
        setListMovies(temporalList);
      }
    );
  };
  const renderItem = ({ item }) => {
    return (
      <MovieItemImage
        id={item.id}
        image={item.poster_path}
        width={screen.width}
        height={screen.height}
      />
    );
  };

  return (
    <View style={Style.container}>
      <FlatList
        data={listMovies}
        contentContainerStyle={Style.contentContainerStyle}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={Style.flatListContainer}
        onScrollEndDrag={() => handleLoadMoreMovies()}
        onEndReachedThreshold={50}
        ListFooterComponent={() => (
          <>
            <Text>{IMLocalized("searching")}</Text>
          </>
        )}
        ListEmptyComponent={() => (
          <>
            <Text>{IMLocalized("searching")}</Text>
          </>
        )}
      />
    </View>
  );
};
