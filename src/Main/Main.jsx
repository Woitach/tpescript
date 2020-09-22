import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Search from '../Searching/Search.jsx'

const Main = () => {
    const SearchingUserName = useState("");
    return (
        <div>
            <Search SearchingUserName />
        </div>
    );
}

export default Main;
