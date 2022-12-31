import React from 'react';
import './Text.css';

const Text = ({
  priority,
  tag = 'p',
  htmlFor,
  children,
  customStyle,
  textDecoration,
  size,
  weight,
  color,
  opacity,
  align,
  shadow,
  border,
  ...props
}) => {
  let CustomTag = priority ? `h${priority}` : tag;
  return (
    <CustomTag
      htmlFor={htmlFor}
      className='TextPrimary'
      style={{
        fontSize: `${size}rem`,
        opacity: opacity || 1,
        textShadow: shadow || '',
        border: border || '',
        textAlign: align || 'center',
        color: color || '#000',
        ...props.styles,
      }}>
      {children}
    </CustomTag>
  );
};

export default Text;
