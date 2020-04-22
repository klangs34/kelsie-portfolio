import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Technologies from './Components/Technologies/technologies';
import Contact from './Components/Contact/contact';
import NoMatch from "./Components/NoMatch";
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
