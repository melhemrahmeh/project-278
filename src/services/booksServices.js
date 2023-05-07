import { useQuery } from "react-query";
import axios from "axios";
const onError = (error) => {
  console.log(error);
};

const fetchBooks = () => {
  return axios.get("https://google-play-store.onrender.com/api/books");
};

export const getBooks = () => {
  return useQuery("books", fetchBooks, {
    onError,
    select: (response) => {
      return response.data;
    },
  });
};
