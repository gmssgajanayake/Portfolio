import React, {useEffect} from 'react';
import Aos from "aos";

import './App.css';

import {Header} from './components/Header/Header.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import {Hero} from "./components/UI/Hero";
import {Service} from "./components/UI/Service";
import {Portfolio} from "./components/UI/Portfolio";
import {Contact} from "./components/UI/Contact";


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
                <Contact></Contact>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
