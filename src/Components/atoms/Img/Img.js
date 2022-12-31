import React from 'react';

const Img = ({ src, altText, width, height }) => {
  return <img src={src} alt={altText} style={{ width: width ? width : '', height: height ? height : '' }} />;
};

export default Img;
