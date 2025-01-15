import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import Spiner from "../../components/Spiner/Spiner";
import s from "./HomePage.module.css";

const API_URL = "https://api.themoviedb.org/3/trending/movie/day";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(API_URL, {
          headers: { Authorization: "8aba4e3419a44727b7eb66f35fce4fa2" },
        });
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={s.container}>
      {loading && <Spiner />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
