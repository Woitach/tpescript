
import { get } from 'https';
import React, { useState } from 'react';
import './Search.css';

function App() {
  const [searchuser, Setsearch] = useState("");
  const [users, setUsers] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  
  async function getISS(){
    const id = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
    console.log(id);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } 
  getISS();
  return (
    <div className="App">
      <form id="list">
        <p className="headtext">Users List</p>
        <p><input
          placeholder="Search by username..."
          type="text"
          value={searchuser}
          onChange={(e) => Setsearch(e.target.value)}>
        </input></p>
        {getISS().id}
        {users.map((post) => (
                    <div>
                    </div>
                ))}
        <p></p>
      </form>
    </div>
  );
}

export default App;
