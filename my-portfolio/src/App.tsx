import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//page wrappers
import Header from './components/Header'
import Footer from './components/Footer'

//Routes
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'



//this cool thing
const App:React.FC = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<About />} />
          <Route path = "/portfolio" element = {<Portfolio />} />
          <Route path = "/resume" element = {<Resume />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
        <Footer/>
      </Router>

  );
};

export default App;
