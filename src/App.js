// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header"
import {BrowserRouter as HashRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <body className="container">
      <Route exact path ="/" component={About} />
      <Route exact path="/my-portfolio" component={Portfolio} />
      </body>
      <Footer />
    </HashRouter>
  );
}

export default App;
