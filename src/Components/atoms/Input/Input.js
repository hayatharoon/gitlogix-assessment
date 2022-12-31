import React from 'react';
import './Input.css';

const Input = (props) => {
  return <input className='input' name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} width={props.width} />;
};

export default Input;
