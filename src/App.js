// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header"
import {BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <body className="container">
      <Route exact path ="/" component={About} />
      <Route exact path="/my-work" component={Work} />
      <Route exact path="/contact" component={Contact} />
      </body>
    </Router>
  );
}

export default App;
