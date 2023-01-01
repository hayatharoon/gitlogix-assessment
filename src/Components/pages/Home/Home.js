import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import Welcome from '../../organisms/Welcome/Welcome';
import Main from '../../organisms/Main/Main';
import SearchWord from '../../organisms/MostSearchWord/SearchWord';
import Footer from '../../organisms/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Main />
      <SearchWord />
      <Footer />
    </>
  );
};

export default Home;
