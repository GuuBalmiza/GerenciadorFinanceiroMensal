
import './App.css';
import Formulario from './components/Form'
import Table from './components/table'
import Header from './components/header';
import React, { useState } from 'react';

function App() {

  const data = [
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },
    { nome: 'Luz', descricao: '', valor: 250 },
    { nome: 'Gas', descricao: '', valor: 55 },
    { nome: 'Agua', descricao: '', valor: 100 },
    { nome: 'Internet', descricao: '', valor: 110 },
    { nome: 'Passeio', descricao: 'Parque Ibirapuera', valor: 35 },
    { nome: 'Combustivel', descricao: 'Alcool', valor: 35 },
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },

  ];

  return (
    <>
      <Header />
      <div className="App">
        <div className='container-page'>
        <Formulario />
        <Table data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
