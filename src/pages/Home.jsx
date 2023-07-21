import React from 'react';
import '../App.css';
/* import Cards from '../components/Cards'; */
      /*<Cards />*/
import CardLeft from '../components/CardLeft';
import CardRight from '../components/CardRight';
import CardsB from '../components/CardsB';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

import JsonData from "./data/data.home.json";
import { useState } from 'react';
import { useEffect } from 'react';
import CarouselA from '../components/CarouselA';

import EmblaCarousel from '../components/EmblaCarousel/js/EmblaCarousel';
import '../components/EmblaCarousel/css/base.css'
import '../components/EmblaCarousel/css/sandbox.css'
import '../components/EmblaCarousel/css/embla.css'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

/* import coverImage from './images/Home/900-02.png'*/

function Home() {

  const [homeData, setHomeData] = useState({})
  useEffect(() => {
    setHomeData(JsonData);
  }, [])

  return (
    <>
      <HeroSection data={homeData.Header} /* coverImage={coverImage}*/ />
      <CardLeft />
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>      
      <CardRight />
      <CarouselA slide fade />
      <CardsB />
      <Footer />
    </>
  );
}

export default Home;
