import React, { useState } from 'react';
import './Debounce.css';
import {DebounceInput} from 'react-debounce-input';
import LoadData from '../LoadData/LoadData';

type Props = {
    searching: string;
}
type User = {
    name: string;
    username: string;
}

const Debounce: React.FC<Props> = ({searching}) => {
    const [UserName, SetSearchUser] = useState<User["name"]>();
    return (
        <div>
            <p className="Headtext">
                Users list
            </p>
            <DebounceInput
                onChange={(e) => SetSearchUser(e.target.value)}
                element="Input"
                minLenght={2}
                debounceTimeout={300}
                className="inputfield"
                placeholder="Search by user name..."
            />
        </div>
    );
}

export default Debounce;
