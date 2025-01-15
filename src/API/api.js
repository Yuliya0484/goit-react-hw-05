import axios from "axios";

const API_KEY = "8aba4e3419a44727b7eb66f35fce4fa2";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
};
