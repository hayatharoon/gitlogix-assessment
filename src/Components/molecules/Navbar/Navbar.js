import React, { useState } from 'react';
import Img from '../../atoms/Img/Img';
import Icon from '../../atoms/Icon/Icon';

import { data } from '../../../assets/data/data';
import Bars from '../../../assets/icon/Bars/Bars';
import Box from '../../atoms/Box/Box';
import List from '../../atoms/List/List';
import './Navbar.css';
import Text from '../../atoms/Text/Text';
import ListItem from '../../atoms/ListItem/ListItem';
import Link from '../../atoms/Link/Link';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const links = data.navbar.links;
  const siteLogo = data.siteLogo;
  return (
    <nav className='NavbarItem'>
      <Text className='navbar-logo' priority='1'>
        <Img src={siteLogo} className='react-logo' alt='site logo' height='40px' width='150px' />
      </Text>
      <div className='menu-icon' onClick={handleClick}>
        {click ? <Icon type='cross' height='30px' width='30px' /> : <Icon type='bars' height='30px' color='#fff' width='30px' />}
      </div>
      <List className={click ? 'nav-menu active' : 'nav-menu'}>
        {links &&
          links.map(({ label, path }, i) => {
            return (
              <ListItem key={i} margin='0px 20px'>
                <Link to={path}>
                  <Text color='#fff' weight='medium'>
                    {label}
                  </Text>
                </Link>
              </ListItem>
            );
          })}
      </List>
    </nav>
  );
};

export default Header;
