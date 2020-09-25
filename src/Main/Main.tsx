import React, { Component, useState } from 'react';
import LoadData from '../LoadData/LoadData';
import List from '../List/List';
import Debounce from '../Debounce/Debounce';

type User = {
    name: string;
    username: string;
  }

const Main: React.FC = () => {
    const [UserName, SetSearchUser] = useState("");
    const [filteredUser, setFilteredUsers] = useState<User[]>([]);
    return (
        <div>
            <Debounce onchange={SetSearchUser}/>
            <LoadData searching={UserName} filtered={setFilteredUsers}/>
            <List filtered={filteredUser}/>
        </div>
    );
}


export default Main;
