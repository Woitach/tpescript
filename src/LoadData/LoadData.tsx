import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './LoadData.css';
import Debounce from '../Debounce/Debounce';


type Props = {
  searching:string;
  filtered:Array<User>;
}
type User = {
  name: string;
  username: string;
}
const LoadData: React.FC<Props> = ({searching, filtered}) => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState<User[]>([]);
  const link = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    setFilteredUsers(
      users.filter((user: User) =>
        user.name.toLowerCase().includes(searching.toLowerCase())
      )
    );
  }, [searching, users]);
  useEffect(() => {
    axios
      .get(link)
      .then((res) => {
        setUsers(res.data);
      }).catch((err) => {
      })
  });
  console.log(searching);
  return (
    <div>
    </div>
  );

}

export default LoadData;
