import React from 'react';
import styles from './Icon.module.css';

import Search from '../../../assets/icon/Search/Search';
import RightArrow from '../../../assets/icon/RightArrow/RightArrow';
import Cross from '../../../assets/icon/Cross/Cross';
import Bars from '../../../assets/icon/Bars/Bars';
import Facebook from '../../../assets/icon/Facebook/Facebook';
import Instagram from '../../../assets/icon/Instagram/Instagram';
import Twitter from '../../../assets/icon/Twitter/Twitter';
import Youtube from '../../../assets/icon/Youtube/Youtube';
import Android from '../../../assets/icon/Android/Android';
import Apple from '../../../assets/icon/Apple/Apple';

const Icon = ({ type, color, width, height, margin }) => {
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
      case 'facebook':
        return <Facebook color={color} />;
      case 'instagram':
        return <Instagram color={color} />;
      case 'twitter':
        return <Twitter color={color} />;
      case 'youtube':
        return <Youtube color={color} />;
      case 'android':
        return <Android color={color} />;
      case 'apple':
        return <Apple color={color} />;

      default:
        return null;
    }
  };

  return (
    <div style={{ width: width ? width : '24px', height: height ? height : '24px', margin: margin ? margin : '0px' }} className={`${styles.icon}`}>
      {typeHandler(type)}
    </div>
  );
};

export default Icon;
