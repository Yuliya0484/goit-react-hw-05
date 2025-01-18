import { Link, NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies) {
    return <p>Loading...</p>;
  }
  return (
    <ul className={s.movies_list}>
      {movies
        .filter((item) => item.poster_path)
        .map((item) => (
          <li className={s.movies_item} key={item.id}>
            <NavLink
              className={s.movies_link}
              to={`/movies/${item.id}`}
              state={location}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </NavLink>
            <h3>{item.title}</h3>
            <p>
              Release:{" "}
              {item.release_date ? item.release_date : "Unknown release date"}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
