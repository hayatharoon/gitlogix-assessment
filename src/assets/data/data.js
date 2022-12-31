import siteLogo from '../images/urduban.png';
import addImage from '../images/Ads.png';
import android from '../images/android.png';
import apple from '../images/apple.png';
import mailImg from '../images/Rectangle.png';

export const data = {
  siteLogo: siteLogo,
  navbar: {
    links: [
      {
        label: 'Thesaurus',
        path: '/',
      },
      {
        label: 'Dictionary',
        path: '/',
      },
      {
        label: 'Antonyms',
        path: '/',
      },
      {
        label: 'Word Of Day',
        path: '/',
      },
      {
        label: 'Word Game',
        path: '/',
      },
    ],
  },
  welcome: {
    lang: ['English', 'Urdu', 'Spanish', 'Russian', 'German', 'French', 'Turkish'],
    addImage: addImage,
  },
  searchWord: {
    word: [
      {
        word: 'Verb: welcome',
        engMeaning: 'greet, salute, receive, meet, embrace, fete, usher in, greet, salute, receive, meet, embrace, fete, usher in',
        urduMeaning:
          'سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، آگہی کرنا، سلام کرنا، سلام کرنا، وصول کرنا، ملنا، گلے لگانا، گلے لگانا، گلے لگانا، اندر داخل ہونا۔',
      },
      {
        word: 'Adjective: welcome',
        engMeaning: 'wanted, appreciated, popular, desireable, accepted, acceptable, pleasing, agreeable, gratifying, heartening, promising',
        urduMeaning: 'چاہتا تھا، تعریف کی، مقبول، خواہش مند، قابل قبول، قابل قبول، خوشگوار، راضی، اطمینان بخش، حوصلہ افزائی، وعدہ',
      },
      {
        word: 'Noun: welcome',
        engMeaning: 'greetings, salutation, hail, welcoming, reception, warm reception, favourable reception, acceptance, hospitality, red carpet, ',
        urduMeaning: 'سلام، سلام، اولے، استقبال، استقبال، استقبال، گرم استقبال، سازگار استقبال، قبولیت، مہمان نوازی، سرخ قالین، ',
      },
    ],
  },
  aside: {
    apple: apple,
    android: android,
    mail: {
      mailPicture: mailImg,
      mailText: 'Want to automate your emails?',
      buttonText: 'TRY IT FOR FREE',
    },
  },
  otherWords: {
    words: [
      'Welcoming',
      'Well',
      'Wellness',
      'Welcomes',
      'Welcomed',
      'Welcome mat',
      'Welcoming',
      'Well',
      'Wellness',
      'Welcomes',
      'Welcomed',
      'Welcome mat',
    ],
  },
};
