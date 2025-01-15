import { useState, useEffect } from "react";
//import { fetchAllUsers } from "../../API/api";
//import UserList from "../../components/MovieList/MovieList";
//import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllMovies();
      setMovies(data);
    };
    getData();
  }, []);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.firstName.toLowerCase().includes(query.toLowerCase()) ||
      movie.lastName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Users from API</h2>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList users={filteredMovies} />
    </div>
  );
};

export default Movies;

// const handleSubmit = (value) => {
//   setSearchParams({ query: value });
// };
