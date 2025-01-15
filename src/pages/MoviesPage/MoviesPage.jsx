import { useState } from "react";
import { fetchMoviesByQuery } from "../../API/api";
//import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  //const [searchParams, setSearchParams] = useSearchParams();
  //const location = useLocation();
  //console.log(location);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    try {
      const results = await fetchMoviesByQuery(query);
      setMovies(results);
      setError(null);
    } catch (err) {
      setError("Something went wrong, please try again!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {error && <p className={s.error_text}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
