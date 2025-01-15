import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.movies_list}>
      {movies.map((movie) => (
        <li className={s.movie_item} key={movie.id}>
          <Link
            className={s.movie_link}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
