import React from 'react';
import './List.css';
import { Informations } from '../Context/Context';


type Props = {
  filtered:Array<User>;
}
type User = {
  name: string;
  username: string;
}
const List: React.FC<Props> = ({filtered}) => {
  filtered = Informations.filteredUser;
  return (
    <div className="listdiv">
      <ol className="list">
        {filtered.map((User) => (
          <li key={User.name}>
            <div className="text">
              {User.name}
            </div>
            <div>
              @{User.username}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );

}

export default List;
