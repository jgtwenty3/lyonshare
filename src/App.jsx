import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FoodandDrinks from './components/FoodandDrinks';
import Footer from './components/Footer';
import About from './pages/About';
import Menu from './pages/Menu';
import Hours from './pages/Hours';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';
import './index.css'
import Events from './pages/Events';
import OurTeam from './pages/OurTeam';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <main >
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              {/* <WordFlash/> */}
              <FoodandDrinks/>
              <Intro />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path ="/our-team" element = {<OurTeam/>}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/hours" element={<Hours />} />
          <Route path = "/gallery" element = {<Gallery/>}/>
          <Route path ="/events" element = {<Events/>}/>
          <Route path ="/shop" element = {<Shop/>}/>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
