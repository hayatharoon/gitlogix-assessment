import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className='SearchBox'>
      <Input type='input' placeholder='Search for words...' width='100%' name='searchbox' />
      <Button className='button' padding='2px 10px'>
        <Icon type='search' color='#000' width='20px' height='20px' />
      </Button>
    </div>
  );
};

export default SearchBox;
