import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';

import Mantenimiento from './components/pages/Mantenimiento';
import Reacondicionamiento from './components/pages/Reacondicionamiento';
import Alquiler from './components/pages/Alquiler';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />

          <Route path='/mantenimiento' component={Mantenimiento} />
          <Route path='/reacondicionamiento' component={Reacondicionamiento} />
          <Route path='/alquiler' component={Alquiler} />

          <Route path='/products' component={Products} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
