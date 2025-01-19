import { useState, useEffect } from "react";
import { fetchMoviesByQuery } from "../../API/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { FcSearch } from "react-icons/fc";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const getData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await fetchMoviesByQuery(query);
        setMovies(results || []);
      } catch (err) {
        setError("Failed. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);

  const onSubmit = ({ query }, actions) => {
    actions.resetForm();
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: trimmedQuery });
  };

  return (
    <div className="container">
      <Formik initialValues={{ query }} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            placeholder="Enter your request"
          />
          <button type="submit" className={s.button}>
            Search
            <FcSearch size="12" />
          </button>
        </Form>
      </Formik>
      {isLoading && <p>Loading...</p>}
      {error && <p className={s.error}>{error}</p>}
      {query && !isLoading && movies.length === 0 && (
        <p>Your request is undefined.</p>
      )}
      {query && movies.length > 0 && !isLoading && (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
