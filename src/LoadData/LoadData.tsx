import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './LoadData.css';
import { Informations } from '../Context/Context';


type Props = {
  searching:string;
  filtered: Function;
}
type User = {
  name: string;
  username: string;
}
const LoadData: React.FC<Props> = ({searching,filtered}) => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState<User[]>([]);
  Informations.UserName = searching;
  Informations.filteredUser = filteredUser;
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
