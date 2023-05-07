import { useQuery } from "react-query";
import axios from "axios";
const onError = (error) => {
  console.log(error);
};

const fetchGames = () => {
  return axios.get("https://google-play-store.onrender.com/api/games");
};

export const getGames = () => {
  return useQuery("games", fetchGames, {
    onError,
    select: (response) => {
      return response.data;
    },
  });
};
