import { useState, useEffect } from "react";
import fetchMoviesByQuery from "../../API/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
//import Loader from "../../components/Loading/Loading";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      const data = await fetchMoviesByQuery(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query: "",
  };

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  if (filteredMovies === 0) {
    return <p>Your request is undefined.</p>;
  }
  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Enter your request"
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default MoviesPage;
