import React from 'react';
import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icon/Icon';

import { data } from '../../../assets/data/data';

import './SearchWord.css';

const SearchWord = () => {
  const MostSearchWord = data.MostSearchWords;
  return (
    <>
      <div className='title'>
        <Text priority='2' align='left'>
          Most Common Words:
        </Text>
        <Text size='1'>
          {'<'} {'>'}
        </Text>
      </div>
      <div className='SearchWord'>
        {MostSearchWord &&
          MostSearchWord.map((item, key) => {
            return (
              <div className='word' key={key}>
                <Icon type='cross' width='10px' heigh='10px' color='#000' />
                <Text align='left' size='0.8'>
                  {item.eng}
                </Text>
                <Text align='right' size='0.8'>
                  {item.urdu}
                </Text>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchWord;
