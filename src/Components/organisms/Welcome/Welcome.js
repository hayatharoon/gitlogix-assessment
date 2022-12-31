import React from 'react';
import SearchBox from '../../molecules/SearchBox/SearchBox';
import Language from '../../molecules/Language/Language';
import AddImage from '../../molecules/AddImage/AddImage';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <Language />
      <SearchBox />
      <AddImage />
    </div>
  );
};

export default Welcome;
