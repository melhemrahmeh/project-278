import { useQuery } from "react-query";
import axios from "axios";
const onError = (error) => {
  console.log(error);
};

const fetchMovies = () => {
  return axios.get("https://google-play-store.onrender.com/api/movies");
};

export const getMovies = () => {
  return useQuery("movies", fetchMovies, {
    onError,
    select: (response) => {
      return response.data;
    },
  });
};
