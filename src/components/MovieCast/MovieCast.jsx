import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../API/api";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
//import Loading from "../Loading/Loading";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const casts = await fetchMovieCast(movieId);
      setCasts(casts);
    };
    getData();
  }, [movieId]);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <div className={s.cast_container}>
      {casts.length > 0 ? (
        <ul className={s.list}>
          {casts.map((item) => (
            <li key={item.id} className={s.item}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt={item.name}
                  className={s.image}
                />
                <p className={s.name}>{item.name}</p>
                <p className={s.character}>Character: {item.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </div>
  );
};

export default MovieCast;
