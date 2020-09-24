import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './List.css';

type Searching = {
  SearchingUserName: string;
}
type User = {
  name: string;
  username: string;
}
const List: React.FC<Searching> = ({ SearchingUserName }) => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState([]);
  const link = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    setFilteredUsers(
      users.filter((user: User) =>
        user.name.toLowerCase().includes(SearchingUserName.toLowerCase())
      )
    );
  }, [SearchingUserName, users]);
  useEffect(() => {
    axios
      .get(link)
      .then((res) => {
        setUsers(res.data);
      }).catch((err) => {
      })
  });
  return (
    <div className="listdiv">
      <ol className="list">
        {filteredUser.map((user:User) => (
          <li key={user.name}>
            <div className="text">
              {user.name}
            </div>
            <div>
              @{user.username}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );

}

export default List;
