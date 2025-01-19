import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzFjM2U2YWUwMDA0ZTA3MjJiN2VhNTM0MWI1OGRkMSIsIm5iZiI6MTczNjY5NjU5My40ODQsInN1YiI6IjY3ODNlMzExOGMyMzA5Y2VhZmJiMjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcZQjpQYeTUo789A0LK2cdTVDW_fvLF0YysFy4HpZwU";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "aplication/json",
  },
};

export default async function fetchTrendingMovies() {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return data.results;
}

export async function fetchMoviesByQuery(query) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );

  return data.results;
}

export async function fetchMovieDetails(moviesId) {
  const { data } = await axios.get(`${BASE_URL}/movie/${moviesId}`, options);

  return data;
}

export async function fetchMovieCast(moviesId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${moviesId}/credits?language=en-US`,
    options
  );

  return data.cast;
}

export async function fetchMovieReviews(moviesId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${moviesId}/reviews?language=en-US&page=1`,
    options
  );

  return data.results;
}
