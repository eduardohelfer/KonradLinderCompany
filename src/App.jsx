import React, { useState, useEffect } from 'react';
/*import Navbar from './components/Navbar';*/
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';

import Mantenimiento from './pages/Mantenimiento';
import Reacondicionamiento from './pages/Reacondicionamiento';
import Alquiler from './pages/Alquiler';

/* import Menu from './Menu';*/
import MenuStrap from './components/MenuStrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*import ReactDOM from 'react-dom/client'*/

/*
import EmblaCarousel from './js/EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
*/
/*
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>


const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
*/
function App() {

  const [hideMenu, setHideMenu] = useState(false)

  return (
    <>
      <video id="videoBG" src='/images/App/video/video-3.mp4' autoPlay loop muted />
      
      <Router>
        
        {hideMenu ? '' : <MenuStrap />  }
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />

          <Route path='/mantenimiento' component={Mantenimiento} />
          <Route path='/reacondicionamiento' component={Reacondicionamiento} />
          <Route path='/alquiler' component={Alquiler} />

          <Route path='/products' component={Products} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />

          <Route path="/:id" children={<Child setHideMenu={ setHideMenu } />} />
        </Switch>

      </Router>
    </>
  );


  function Child({ setHideMenu }) {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    
    let param = useParams();

    if (param.id.slice(0, 3) === 'id:'  &&  (param.id.slice(3, param.id.length))>='1' &&  (param.id.slice(3, param.id.length))<='2') {
      useEffect(() => {
        setHideMenu(true);
      }, [])
      switch (param.id.slice(3, param.id.length)) {
        case '1': 
          return(<Alquiler />);
          break;
        case '2': 
          return(<Reacondicionamiento />);
          break;
        default:
          useEffect(() => {
            setHideMenu(false);
          }, [])
      }
        return(<Home />);

    } else {
      useEffect(() => {
        setHideMenu(false)
      }, [])
      return(<Home />);
    }
  }
}
export default App;
