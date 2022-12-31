import React from 'react';
import styles from './Icon.module.css';

import Search from '../../../assets/icon/Search/Search';
import RightArrow from '../../../assets/icon/RightArrow/RightArrow';
import Cross from '../../../assets/icon/Cross/Cross';
import Bars from '../../../assets/icon/Bars/Bars';

const Icon = ({ type, color, width, height }) => {
  const typeHandler = (type) => {
    switch (type) {
      case 'search':
        return <Search color={color} />;
      case 'rightArrow':
        return <RightArrow color={color} />;
      case 'cross':
        return <Cross color={color} />;
      case 'bars':
        return <Bars color={color} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: width ? width : '24px', height: height ? height : '24px' }} className={`${styles.icon}`}>
      {typeHandler(type)}
    </div>
  );
};

export default Icon;
