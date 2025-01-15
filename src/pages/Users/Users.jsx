import { useState, useEffect } from "react";
import { fetchAllUsers } from "../../API/api";
import UserList from "../../components/UserList/UserList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = uselocation();
  console.log(location);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllUsers();
      setUsers(data);
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

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Users from API</h2>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Users;
