import React, { useState, useEffect } from 'react';
/*import Navbar from './components/Navbar';*/
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';

import Mantenimiento from './components/pages/Mantenimiento';
import Reacondicionamiento from './components/pages/Reacondicionamiento';
import Alquiler from './components/pages/Alquiler';

/* import Menu from './components/Menu';*/
import MenuStrap from './components/MenuStrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [hideMenu, setHideMenu] = useState(false)

  return (
    <>
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
