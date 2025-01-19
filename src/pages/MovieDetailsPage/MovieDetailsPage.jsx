import s from "./MovieDetailsPage.module.css";
import { fetchMovieDetails } from "../../API/api";
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LiaHandPointLeft } from "react-icons/lia";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const movie = await fetchMovieDetails(movieId);
      setMovie(movie);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.container}>
      <Link className={s.backbtn} to={goBackRef.current}>
        <LiaHandPointLeft size="16" className={s.backicon} />
        Go Back
      </Link>
      <div className={s.poster_box}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className={s.poster}
        />
        <div className={s.info}>
          <h2>{`${movie.title}(${new Date(movie.release_date).getFullYear()})`}</h2>
          <h3>User Score: {movie.vote_average}</h3>
          <h3>Overview: </h3>
          <p>{movie.overview}</p>
          <h3>Genres: </h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className={s.additional}>
        <h3 className={s.aditional_title}>Additional Information</h3>
        <NavLink className={s.aditional_link} to="cast">
          Cast
        </NavLink>
        <NavLink className={s.aditional_link} to="reviews">
          Reviews
        </NavLink>
      </div>
      <div className={s.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
