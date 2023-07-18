import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CardsB from '../CardsB';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

import JsonData from "../data/data.home.json";
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {

  const [homeData, setHomeData] = useState({})
  useEffect(() => {
    setHomeData(JsonData);
  }, [])

  return (
    <>
      <HeroSection data={homeData.Header}/>
      <Cards />
      <CardsB />
      <Footer />
    </>
  );
}

export default Home;
