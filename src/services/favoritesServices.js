import { useQuery } from "react-query";
import axios from "axios";
const onError = (error) => {
  console.log(error);
};

const fetchFavorites = (id) => {
  return axios.get(
    `https://google-play-store.onrender.com/api/favorites/${id}`
  );
};

export const getFavorites = (id) => {
  return useQuery(["favorites", id], () => fetchFavorites(id), {
    onError,
    select: (response) => {
      return response.data;
    },
  });
};
