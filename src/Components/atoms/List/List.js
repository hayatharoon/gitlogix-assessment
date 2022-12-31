import React from 'react';
import styles from './List.module.css';

const List = ({  padding, margin, children, ...props }) => {
  
  let boxMargin = margin ? margin : '';
  let boxPadding = padding ? padding : '';
  return (
    <ul
      style={{
        padding: boxPadding,
        margin: boxMargin,
      }}
      className={`${styles.List}`}
      {...props}>
      {children}
    </ul>
  );
};

export default List;
