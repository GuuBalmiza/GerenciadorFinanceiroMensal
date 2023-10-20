
import './App.css';
import Formulario from './components/Form'
import Table from './components/table'

function App() {

  const data = [
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },
    { nome: 'Luz', descricao: '',valor: 250 },
    { nome: 'Gas', descricao: '',valor: 55 },
    { nome: 'Agua', descricao: '',valor: 100 },
    { nome: 'Internet', descricao: '',valor: 110 },
    { nome: 'Passeio', descricao: 'Parque Ibirapuera',valor: 35 },
    { nome: 'Combustivel', descricao: 'Alcool',valor: 35 },
    { nome: 'Comida', descricao: 'Bomb Burguer', valor: 150 },

  ];
  return (
    <div className="App">
        <Formulario />
        <Table data={data} />
    </div>
  );
}

export default App;
