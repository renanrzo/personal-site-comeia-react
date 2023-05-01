import React from 'react';

import api from './api';

import './global.css';




import { Header } from './components/Header/Header.jsx';
import { Curriculum } from './components/Curriculum/Curriculum.jsx';
import { Portfolio } from './components/Portfolio/Portfolio.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';




import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";





export function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPortfolio] = React.useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const experienciaAcademica = await api.get(`/experiencias?tipo=academico`);
      const experienciaProfissional = await api.get(`/experiencias?tipo=profissional`);

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const portfolio = await api.get(`/portfolio`);
      setPortfolio(portfolio.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
    <>
      <Header informacoes={informacoes} />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Curriculum curriculo={curriculo} />} />
          <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}


