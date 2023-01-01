import React from 'react';
import Box from '../../atoms/Box/Box';
import Img from '../../atoms/Img/Img';
import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icon/Icon';
import Link from '../../atoms/Link/Link';

import { data } from '../../../assets/data/data';

import './Footer.css';

const Footer = () => {
  const footer = data.footer;
  const { img, copyright, allRight, socialLogos, navLinks, moreInfo, mobileDownloads } = footer;
  return (
    <footer className='footer'>
      <div className='flex-item'>
        <Img src={img} alt='site logo' height='40px' width='150px' />
        <Text color='#fff' align='left'>
          {copyright}
        </Text>
        <Text color='#fff' align='left'>
          {allRight}
        </Text>
        <div className='social-icon'>
          {socialLogos &&
            socialLogos.map((item, index) => {
              return <Icon type={item} width='28px' height='28px' key={index} />;
            })}
        </div>
      </div>
      <Box >
        <div className='flex-item'>
          {socialLogos &&
            navLinks.map((item, index) => {
              return (
                <Link>
                  <Text key={index} color='#fff' align='left'>
                    {item}
                  </Text>
                </Link>
              );
            })}
        </div>
      </Box>
      <Box>
        <div className='flex-item'>
          {socialLogos &&
            moreInfo.map((item, index) => {
              return (
                <Link>
                  <Text key={index} color='#fff' align='left'>
                    {item}
                  </Text>
                </Link>
              );
            })}
          <Text priority={4} color='#fff' align='left'>
            {mobileDownloads.title}
          </Text>
          <div className='social-app'>
            {socialLogos &&
              mobileDownloads.app.map((item, index) => {
                return <Icon type={item} width='28px' height='28px' margin='0px 5px' key={index} />;
              })}
          </div>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
