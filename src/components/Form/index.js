
import './style.css'
import React, { Component } from 'react';
import Button from '../buttons'
import { useState } from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      descricao: '',
      valor: '',
    };
  }

  handleNomeChange = (e) => {
    this.setState({ nome: e.target.value });
  };

  handleValorChange = (e) => {
        this.setState({ valor: e.target.value });
      };
  handleDescricaoChange = (e) => {
        this.setState({ descricao: e.target.value });
      };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.nome  === '' || this.state.valor === '' ){
      alert('Preencha todos os campos')
    }

    console.log('Nome inserido:', this.state.nome);
  };
  

  render() {
    return (

      <form onSubmit={this.handleSubmit} className='FormStyle'>
        <label>
          Nome:
          <input
            type="text"
            value={this.state.nome}
            onChange={this.handleNomeChange}
          />
        </label>
        <label>
          Descricao:
          <input
            type="text"
            value={this.state.descricao}
            onChange={this.handleDescricaoChange}
          />
        </label>
        <label>
          Valor:
          <input
            type="number"
            value={this.state.valor}
            onChange={this.handleValorChange}
          />
        </label>
        <Button />
      </form>
    );
  }
}

export default Formulario;