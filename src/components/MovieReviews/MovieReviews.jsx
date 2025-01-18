import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../API/api";
import s from "./MovieReviews.module.css";
//import Loading from "../Loading/Loading";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const reviews = await fetchMovieReviews(movieId);
      setReviews(reviews);
    };
    getData();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className={s.message}>No reviews found for this movie.</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map((item) => (
            <li key={item.id} className={s.item}>
              <h4 className={s.author}>Author: {item.author}</h4>
              <p className={s.content}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>This movie has no reviews!!!</p>
      )}
    </>
  );
};

export default MovieReviews;
