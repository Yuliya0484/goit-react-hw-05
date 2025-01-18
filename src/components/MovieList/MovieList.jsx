import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.movies_list}>
      {movies.map((item) => (
        <li className={s.movies_item} key={item.id}>
          <Link
            className={s.movies_link}
            to={`/movies/${item.id}`}
            state={location}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
