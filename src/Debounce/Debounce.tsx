import React from 'react';
import './Debounce.css';
import {DebounceInput} from 'react-debounce-input';
import { Informations } from '../Context/Context';


type Props = {
    onchange: Function;
}
const Debounce: React.FC<Props> = ({onchange}) => {
    return (
        <div>
            <p className="Headtext">
                Users list
            </p>
            <DebounceInput
                onChange={(e) => onchange(e.target.value)}
                element="Input"
                minLenght={1}
                debounceTimeout={10}
                className="inputfield"
                placeholder="Search by user name..."
            />
        </div>
    );
}

export default Debounce;
