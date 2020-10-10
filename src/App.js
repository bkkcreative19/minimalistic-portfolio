import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
