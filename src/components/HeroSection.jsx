import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import './css/HeroSection.css';
// <video id="videoBG" className="vid1" src='/videos/video-3.mp4' autoPlay loop muted />
      
function HeroSection(props) {
  const handleClickNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth"})
  }
  return (
    <div className='hero-container'>
      
      <div className='topRow'>
        <div  className='topLeft'>
          <header className='topHeader'>
            <h1 className='headline'>{props.data ? props.data.title : "Loading"}</h1>
            <p className='topParagraph'>{props.data ? props.data.paragraph : "Loading"}</p>
            <div className='hero-btns'>          
              <Button color="success"
                  onClick={() => handleClickNav("carousela")}
                >
                  {props.data ? props.data.button1 : "Loading"}
                </Button>
              <Button color="dark">
                {props.data ? props.data.button2 : "Loading"} <i className='far fa-play-circle' />
              </Button>
            </div>
          
          </header>
          
        </div>
        <div className='topRight'>
          <img className='topImage' src={props.data ? props.data.homeImage : ""} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
