import React from 'react';
import {useEffect} from "react";
import Aos from "aos";

import './App.css';

import {Header} from './components/Header/Header.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import {Hero} from "./components/UI/Hero";
import {Service} from "./components/UI/Service";
import {Portfolio} from "./components/UI/Portfolio";


function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
      <div>
        <Header/>
        <main>
          <Hero></Hero>
          <Service></Service>
          <Portfolio></Portfolio>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
