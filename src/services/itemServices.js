import { useQuery } from "react-query";
import axios from "axios";
const onError = (error) => {
  console.log(error);
};

const fetchItem = (id, type) => {
  return axios.get(`https://google-play-store.onrender.com/api/${type}s/${id}`);
};

export const getItem = (id, type) => {
  return useQuery(["items", id, type], () => fetchItem(id, type), {
    onError,
    select: (response) => {
      return response.data;
    },
  });
};
