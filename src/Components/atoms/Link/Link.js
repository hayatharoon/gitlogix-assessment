import React from 'react';
import './Link.css';

const Link = ({ children, textDecoration, color, to, size, opacity, shadow, border, ...props }) => {
  let linkDecoration = textDecoration ? textDecoration : 'none';
  return (
    <a
      href={to}
      className='Link'
      style={{
        textDecoration: linkDecoration,
        fontSize: `${size}rem`,
        opacity: opacity || 1,
        textShadow: shadow || '',
        border: border || '',
        color: color || '#000',
        ...props.styles,
      }}>
      {children}
    </a>
  );
};

export default Link;
