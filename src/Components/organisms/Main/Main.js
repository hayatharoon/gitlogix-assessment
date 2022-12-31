import React from 'react';
import Text from '../../atoms/Text/Text';
import Img from '../../atoms/Img/Img';
import Button from '../../atoms/Button/Button';
import List from '../../atoms/List/List';
import ListItem from '../../atoms/ListItem/ListItem';

import { data } from '../../../assets/data/data';
import './Main.css';

const Main = () => {
  const word = data.searchWord.word;
  const androidImg = data.aside.android;
  const appleImg = data.aside.apple;
  const mailImg = data.aside.mail.mailPicture;
  const mailText = data.aside.mail.mailText;
  const buttonText = data.aside.mail.buttonText;
  const wordsList = data.otherWords.words;
  return (
    <div className='main-container'>
      <div className='search-word'>
        {word &&
          word.map((ele, i) => {
            return (
              <div className='word-description' key={i}>
                <div className='word-eng'>
                  <Text priority={1} align='left' size='1.4' color='#2269E1'>
                    {ele.word}
                  </Text>
                  <Text align='left' size='0.9'>
                    {ele.engMeaning}
                  </Text>
                </div>
                <div class='word-urdu'>
                  <Text align='right' size='0.9'>
                    {ele.urduMeaning}
                  </Text>
                </div>
              </div>
            );
          })}
      </div>
      <div className='aside'>
        <div className='download-section'>
          <div className='download-text'>
            <Text size='0.8'>Download Our Mobile App!</Text>
          </div>
          <div className='download-image'>
            <Img src={androidImg} width='40%' altText='android image' />
            <Img src={appleImg} width='40%' altText='apple image' />
          </div>
        </div>
        <div>
          <Img src={mailImg} altText='Mail image' width='100%' />
          <Text priority={5}>{mailText}</Text>
          <Button size='1rem' backgroundColor='#F8B318' width='100%' padding='15px 5px' fontWeight='bold'>
            {buttonText}
          </Button>
        </div>
        <div className='other-words'>
          <Text size='0.9' priority={3}>
            Other Words!
          </Text>
          <List>
            {wordsList &&
              wordsList.map((item, index) => {
                return (
                  <ListItem key={index} margin='6px 0px'>
                    {item}
                  </ListItem>
                );
              })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Main;
