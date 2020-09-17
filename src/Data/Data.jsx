import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Data.css';

const Data = ({ SearchingUser }) => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState([]);
  const link = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(SearchingUser.toLowerCase())
      )
    )
  }, [SearchingUser, users]);
  useEffect(() => {
    axios
      .get(link)
      .then((res) => {
        //console.log(res);
        setUsers(res.data);
      }).catch((err) => {
        //console.log(err);
      })
  });
  return (
    <div className="listdiv">
      <ol className="list">
        {filteredUser.map((user) => (
          <li key={user.name}>
            <n class="text">
              {user.name}
            </n>
            <n>
              @{user.username}
            </n>
          </li>
        ))}
      </ol>
    </div>
  );

}

export default Data;
