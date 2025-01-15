import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, name }) => (
        <li className={s.item} key={id}>
          <Link
            className={s.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
