import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Contact from './components/contact/contact'
import About from './components/about/about'
import Lol from './components/Lol/lol'

import {Home} from './components/header'
import {Content} from './components/content'
import {Footer} from './components/footer'


const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/contact" exact>
            <Contact/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/lol" exact>
              <Lol/>
            </Route>
        </Switch>
      </Router>



      <Home/>
      <Content/>
      <Footer/>
    </div>
    
  );
}

export default App;
