import { Header } from './components/Header/Header.jsx';
import { Curriculum } from './components/Curriculum/Curriculum.jsx';
import { Portfolio } from './components/Portfolio/Portfolio.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';

import './global.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";





export function App() {
    return (
    <> 
    <Header />
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<Curriculum />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <Footer />
    </> 
  )
}


