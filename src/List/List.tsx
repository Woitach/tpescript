import React, { useState, useEffect } from 'react';
import './List.css';

type Props = {
  filtered:Array<User>;
}
type User = {
  name: string;
  username: string;
}
const List: React.FC<Props> = ({filtered}) => {
  return (
    <div className="listdiv">
      <ol className="list">
        {filtered.map((user:User) => (
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
