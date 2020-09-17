import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Search.css';

function Data() {
  const [searchuser, SetsearchUser] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState([]);
  const link = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchuser.toLowerCase())
      )
    )
  }, [searchuser, users]);
  useEffect(() => {
    axios
      .get(link)
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      }).catch((err) => {
        console.log(err);
      })
  });
  return (
    <div>
      <input
        placeholder="Kogo Szukasz?"
        onChange={(e) => SetsearchUser(e.target.value)}>
      </input>
      {filteredUser.map((user) => (
        <li key={user.name}>
            {" "}
            {user.name} @{user.username}{" "}
        </li>
      ))}
    </div>
  );
}

export default Data;
