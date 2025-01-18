import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import fetchTrendingMovies from "../../API/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
