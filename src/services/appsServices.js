import { useQuery } from "react-query";
import axios from "axios";
const onError = (error) => {
  console.log(error);
};

const fetchApps = () => {
  return axios.get("https://google-play-store.onrender.com/api/apps");
};

export const getApps = () => {
  return useQuery("apps", fetchApps, {
    onError,
    select: (response) => {
      return response.data;
    },
  });
};
