/* eslint-disable react/prop-types */

import MainContent from './components/MainContent';


const Home = (props) => {
 
  return (
    <>
      <MainContent addToCart={props.addToCart} />
    </>
  );
};

export default Home;
