import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
