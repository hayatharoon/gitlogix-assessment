import React from 'react';
import Img from '../../atoms/Img/Img';
import { data } from '../../../assets/data/data';

import './AddImage.css';

const AddImage = () => {
  const addImage = data.welcome.addImage;
  return (
    <div className='AddImage'>
      <Img src={addImage}  altTe="Ads image" width="100%" height='100%'/>
    </div>
  );
};

export default AddImage;
