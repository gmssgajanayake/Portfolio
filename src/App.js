import React, {useEffect} from 'react';
import Aos from "aos";

import './App.css';

import {Header} from './components/Header/Header.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import {Hero} from "./components/UI/Hero";
import {Service} from "./components/UI/Service";
import {Portfolio} from "./components/UI/Portfolio";
import {Contact} from "./components/UI/Contact";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBbf9ebC2PhZm8391x0PrZWTro-5Q_Ad-I",
    authDomain: "my-portfolio-8903d.firebaseapp.com",
    projectId: "my-portfolio-8903d",
    storageBucket: "my-portfolio-8903d.firebasestorage.app",
    messagingSenderId: "741484081440",
    appId: "1:741484081440:web:d71083d47f902e1ddb6745",
    measurementId: "G-FKTEPDX7BT"
};


function App() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <Header/>
            <main>
                <Hero/>
                <Service/>
                <Portfolio/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default App;
