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
    <div className='container'>
      <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
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
      <table>
        <thead>
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
              <td className='description'>{item.descricao}</td>
              <td> R$ {item.valor}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='foot'>
            <td className='foot'>Total</td>
            <td className='foot'> Seus gastos totais</td>
            <td className='foot'>R$ {calcularFinal()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;