import React from 'react';
import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FaqsContainer from '../containers/FaqsContainer';

const Home = () => {
  return (
    <div>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
};

export default Home;
