import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route path='/projects/:name' component={ProjectDetails}/>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
