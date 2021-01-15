import axios from "axios";
import { Alert } from "react-native";

const API_KEY = "9ddd86c03e9f15f4f9f001cedbe9202b";

export const Api = {
  image: "https://image.tmdb.org/t/p/w185/",
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language={language}&page={page}`,
  audience: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language={language}&page={page}`,
  detail: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language={language}`,
  video: `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${API_KEY}&language={language}`,
  youtube: "https://www.youtube.com/watch?v=",
};

export const GetListMovies = async (sortBy, language, page = 1) => {
  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    let url = sortBy === "audience" ? Api.audience : Api.popular;

    url = url
      .replace("{language}", language.includes("es") ? "es-ES" : language)
      .replace("{page}", page);

    const list = axios.get(url, { cancelToken: source.token }).then((list) => {
      return list.data;
    });

    return list;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      console.log(error);
      throw error;
    }
  }
};

export const GetMovieDetail = async (id, language) => {
  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const URL = Api.detail
      .replace("{language}", language.includes("es") ? "es-ES" : language)
      .replace("{movie_id}", id);

    const detail = axios
      .get(URL, { cancelToken: source.token })
      .then((dataDetail) => {
        return dataDetail.data;
      });

    return detail;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      console.log(error);
      throw error;
    }
  }
};

export const GetMovieTrailers = async (id, language) => {
  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const URL = Api.video
      .replace("{language}", language.includes("es") ? "es-ES" : language)
      .replace("{movie_id}", id);

    const detail = axios
      .get(URL, { cancelToken: source.token })
      .then((dataDetail) => {
        return dataDetail.data;
      });

    return detail;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("cancelled");
    } else {
      console.log(error);
      throw error;
    }
  }
};
