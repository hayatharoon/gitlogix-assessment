import React from 'react';
import styles from './Box.module.css';

const Box = ({ align, backgroundColor, border, margin, borderRadius, children, padding, width, minWidth, opacity, ...props }) => {
  let boxBorder = border ? border : 'none';
  let boxBorderRadius = borderRadius ? borderRadius : '0px';
  let boxPadding = padding ? padding : '0px';
  let boxOpacity = opacity ? opacity : '1';
  let boxMargin = margin ? margin : '';
  return (
    <div
      className={`${styles.Box} ${styles[align]}`}
      {...props}
      style={{
        width: width,
        borderRadius: boxBorderRadius,
        border: boxBorder,
        padding: boxPadding,
        margin: boxMargin,
        opacity: boxOpacity,
        ...props.styles,
      }}>
      {children}
    </div>
  );
};

export default Box;
