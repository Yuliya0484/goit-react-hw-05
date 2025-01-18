import { useState, useEffect } from "react";
import fetchMoviesByQuery from "../../API/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesByQuery(query);
      setMovies(data) || [];
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
  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            placeholder="Search movies..."
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
        <MovieList movies={movies} />
      </Formik>
    </div>
  );
};

export default MoviesPage;
