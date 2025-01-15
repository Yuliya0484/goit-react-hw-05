import s from "./MovieDetailsPage.module.css";
import { fetchMovieDetails } from "../../API/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError("Failed to load movie detaols");
      }
    }
    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || "/movies");
  };
  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleGoBack}>
        Go back
      </button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={s.poster}
        />
        <div className={s.info}>
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className={s.additional}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
