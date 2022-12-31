import React from 'react';

const Button = ({ children, width, fontWeight, borderRadius, size, color, backgroundColor, padding, ...props }) => {
  return (
    <button
      type='submit'
      style={{
        fontSize: size,
        fontWeight: fontWeight ? fontWeight : 'normal',
        cursor: 'pointer',
        color: color ? color : '#000',
        backgroundColor: backgroundColor ? backgroundColor : '',
        padding: padding ? padding : '0',
        width: width ? width : 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 300ms',
        WebkitAppearance: 'none',
        border: 'none',
        borderRadius: borderRadius,
        ...props.styles,
      }}>
      {children}
    </button>
  );
};

export default Button;
