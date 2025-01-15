import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../API/api";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (err) {
        setError("Failed to load cast data.");
      }
    }
    getMovieCast();
  }, [movieId]);
  if (error) return <p className={s.error}>{error}</p>;

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={s.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : "https://via.placeholder.com/200x300"
              }
              alt={name}
              className={s.image}
            />
            <p className={s.name}>{name}</p>
            <p className={s.character}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
