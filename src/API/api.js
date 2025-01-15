import axios from "axios";

const API_KEY = "8aba4e3419a44727b7eb66f35fce4fa2";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common.Authorization = `Bearer ${API_KEY}`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};
export async function fetchMoviesByQuery(query) {
  const response = await axios.get(`${API_BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      language: "en-US",
      include_adult: false,
    },
  });
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`${API_BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
}

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`${API_BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
}
