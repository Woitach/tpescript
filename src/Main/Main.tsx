import React, { Component, useState } from 'react';
import LoadData from '../LoadData/LoadData';
import List from '../List/List';
import Debounce from '../Debounce/Debounce';

type Props = {
    searching: string;
}
const Main: React.FC = () => {
    const [userName,SetUserName] = useState("");
    console.log(userName);
    return (
        <div>
            <Debounce searching={userName}/>
        </div>
    );
}


export default Main;
