import React from 'react';
import './Debounce.css';
import {DebounceInput} from 'react-debounce-input';

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
                minLenght={2}
                debounceTimeout={300}
                className="inputfield"
                placeholder="Search by user name..."
            />
        </div>
    );
}

export default Debounce;
