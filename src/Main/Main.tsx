import React, { useState } from 'react';
import LoadData from '../LoadData/LoadData';
import List from '../List/List';
import Debounce from '../Debounce/Debounce';
import { Informations } from '../Context/Context';

type User = {
    name: string;
    username: string;
  }

const Main: React.FC = () => {
    const [UserName, SetSearchUser] = useState("");
    Informations.UserName = UserName;
    const [filteredUser, setFilteredUsers] = useState<User[]>([]);
    Informations.filteredUser = filteredUser;
    return (
        <div>
            <Debounce onchange={SetSearchUser}/>
            <LoadData searching={Informations.UserName} filtered={setFilteredUsers}/>
            <List filtered={Informations.filteredUser}/>
        </div>
    );
}

export default Main;
