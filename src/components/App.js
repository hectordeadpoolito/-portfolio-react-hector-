import React, { Component } from 'react';
import moment from 'moment';
import{ BrowserRouter as Router,Switch,Route } from "react-router-dom";


import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home"; 
import About from "./pages/about"; 
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import "./App.css";


  export default class App extends Component {
  render(){
    return(
      <div className='app'>
        <Router>
        <div>
        <h1>Hectordeadpoolito</h1>
     <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <NavigationContainer />

          <Switch>
            <Route exact Path="/" component={Home}/>
            <Route Path="/about-me" component={About}/>
            <Route Path="/contact" component={Contact}/>
            <Route Path="/blog" component={Blog}/>
          </Switch>
        </div>
        </Router>
        
    
        </div>
    );
  }
}