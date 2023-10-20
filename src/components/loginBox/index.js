import React from 'react'
import './style.css'
import Formulario from '../Form'
import Table from '../table'

const BoxForm = () => {

   const data = [
      { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },
      { nome: 'Luz', descricao: '',valor: 250 },
      { nome: 'Gas', descricao: '',valor: 55 },
      { nome: 'Agua', descricao: '',valor: 100 },
      { nome: 'Internet', descricao: '',valor: 110 },
      { nome: 'Passeio', descricao: 'Parque Ibirapuera',valor: 35 },
      { nome: 'Combustivel', descricao: 'Alcool',valor: 35 },

    ];

   return(
    <div className="container">
      <Formulario />
      <Table data={data} />
    </div>
   )
}

export default BoxForm