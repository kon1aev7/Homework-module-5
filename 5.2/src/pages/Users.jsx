import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar/SearchBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleChangeQuery = (value) => {
    setQuery(value);
  };

  const filterData = users.filter((user) => user.firstName.includes(query));
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <UserList users={filterData} />
    </>
  );
};
export default Users;
