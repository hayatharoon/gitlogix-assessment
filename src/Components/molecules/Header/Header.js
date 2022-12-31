import React from 'react';
import Box from '../../atoms/Box/Box';
import Text from '../../atoms/Text/Text';
import Img from '../../atoms/Img/Img';
import Link from '../../atoms/Link/Link';
import List from '../../atoms/List/List';
import ListItem from '../../atoms/ListItem/ListItem';

import { data } from '../../../assets/data/data';

import styles from './Header.module.css';

const Header = () => {
  const siteLogo = data.siteLogo;
  const links = data.navbar.links;

  return (
    <div className={styles.Header}>
      <Box>
        <Img src={siteLogo} alt='site logo' height='40px' width='150px' />
      </Box>
      <Box>
        {links && (
          <List>
            {links.map(({ label, path }, i) => {
              return (
                <ListItem margin='0px 25px'>
                  <Link to={path}>
                    <Text color='#fff' weight='medium'>
                      {label}
                    </Text>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    </div>
  );
};

export default Header;
