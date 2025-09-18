import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Approuter } from "./Approuter";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";



export const App = () => {
  return (
  <Router>

     <Navbar/>
    <Approuter/>
    <Footer/>
  
    
  </Router>
  );
};
