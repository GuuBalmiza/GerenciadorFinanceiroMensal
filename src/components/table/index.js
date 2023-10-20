import React, { useState } from 'react';
import './style.css'


function Table({ data }) {
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroDescricao, setFiltroDescricao] = useState('');
    const [filtroValor, setFiltroValor] = useState('');

    
    const calcularFinal = () => {
        let soma = 0;
        data.map(item => {
          soma += item.valor;
        });
        return soma;
      };

      const filtrarDados = () => {
        return data.filter(item => {
            const nomePassaFiltro = item.nome.toLowerCase().includes(filtroNome.toLowerCase());
            const descricaoPassaFiltro = item.descricao.toLowerCase().includes(filtroDescricao.toLowerCase());
            const valorPassaFiltro = filtroValor === '' || item.valor.toString() === filtroValor;
            return nomePassaFiltro && valorPassaFiltro && descricaoPassaFiltro;
          });
      }

      const dadosFiltrados = filtrarDados();

  return (
    <div>
    <table>
      <thead>
      <div style={{display: 'flex'}}>
        <input
          type="text"
          placeholder="Filtrar por Nome"
          value={filtroNome}
          onChange={e => setFiltroNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por Descricao"
          value={filtroDescricao}
          onChange={e => setFiltroDescricao(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por valor"
          value={filtroValor}
          onChange={e => setFiltroValor(e.target.value)}
        />
      </div>
        <tr>
          <th>Nome</th>
          <th>Descricao</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {dadosFiltrados.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.descricao}</td>
            <td> R$ {item.valor}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td> </td>
          <td>R$ {calcularFinal()}</td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}

export default Table;