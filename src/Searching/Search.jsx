import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Search.css';
import Data from "../Data/Data.jsx";

const Search = () => {
    const [SearchUser, SetSearchUser] = useState("");
    return (
        <div>
            <p className="Headtext">
                Users list
            </p>
            <input
                className="inputfield"
                placeholder="Search by user name..."
                onChange={(e) => SetSearchUser(e.target.value)}>
            </input>
            <Data SearchingUser={SearchUser}/>
        </div>
    );
}

export default Search;
