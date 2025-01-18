import { useState, useEffect } from "react";
import fetchMoviesByQuery from "../../API/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Loader from "../../components/Loading/Loading";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data) || [];
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            placeholder="Enter your request"
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
      {query && !isLoading && (
        <>
          {query.length > 0 ? (
            <MovieList movies={movies} isLoading={isLoading} />
          ) : (
            <p>Any movies found for {query}!</p>
          )}
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default MoviesPage;
