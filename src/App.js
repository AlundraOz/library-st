import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHome from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Features from './components/Features/Features';
import Footer from './components/Footer/footer';
import Gallery from './components/Gallery/gallery';


class App extends React.Component {
  render() {
    return(
      <div>
        <NavHome/>
        <Router>
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route path="/location" component= {Location}>
              <Location/>
            </Route>
            <Route path="/features" component= {Features}>
              <Features/>
            </Route>
            <Route path="/gallery" component= {Gallery}>
              <Gallery/>
            </Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default App;
