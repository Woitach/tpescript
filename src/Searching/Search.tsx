import axios from 'axios';
import React, { useState } from 'react';
import './Search.css';
import Data from "../Data/Data";
import {DebounceInput} from 'react-debounce-input';

const Search = () => {
    const [SearchUser, SetSearchUser] = useState("");
    return (
        <div>
            <p className="Headtext">
                Users list
            </p>
            <DebounceInput
                onChange={(e) => SetSearchUser(e.target.value)}
                element="Input"
                minLenght={1}
                debounceTimeout={300}
                className="inputfield"
                placeholder="Search by user name..."
                />
            <Data SearchingUserName={SearchUser}/>
        </div>
    );
}

export default Search;
