import React from 'react';

const ListItem = ({ styleType, children, margin, padding, ...props }) => {
  let ListStyleType = styleType ? styleType : 'none';
  let boxMargin = margin ? margin : '';
  let boxPadding = padding ? padding : '';
  return (
    <li style={{ listStyle: ListStyleType, padding: boxPadding, margin: boxMargin,  }} {...props}>
      {children}
    </li>
  );
};

export default ListItem;
