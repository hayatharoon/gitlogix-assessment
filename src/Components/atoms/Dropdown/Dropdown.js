import React from 'react';
import './Dropdown.css';
import Text from '../Text/Text';

const Dropdown = ({ name, arr }) => {
  return (
    <select name={name} className='Dropdown'>
      {arr &&
        arr.map((item, i) => {
          return (
            <option value={item} key={i} className="option">
              <Text size='2'>{item}</Text>
            </option>
          );
        })}
    </select>
  );
};

export default Dropdown;
