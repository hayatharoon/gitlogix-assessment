import React from 'react';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import Icon from '../../atoms/Icon/Icon';
import { data } from '../../../assets/data/data';
import './Language.css';

const Language = ({ ...props }) => {
  const lang = data.welcome.lang;
  return (
    <div className='Language' {...props}>
      <Dropdown arr={lang} />
      <Icon type='rightArrow' width='18px' height='18px' />
      <Dropdown arr={lang} />
    </div>
  );
};

export default Language;
