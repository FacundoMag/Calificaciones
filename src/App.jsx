import { Component } from 'react';
import Formulario from './componentes/Formulario';
import MostrarPromedio from '../../calificaciones/src/componentes/MostrarPromedio';
import ListaNotas from '../../calificaciones/src/componentes/ListaNotas';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: []
    };
  }

  agregarNota = (asignatura, nota) => {
    this.setState(prevState => ({
      notas: [...prevState.notas, { asignatura, nota: parseFloat(nota) }]
    }));
  };

  actualizarNota = (index, nuevaNota) => {
    const nuevasNotas = [...this.state.notas];
    nuevasNotas[index].nota = parseFloat(nuevaNota);
    this.setState({ notas: nuevasNotas });
  };

  eliminarNotas = () => {
    this.setState({ notas: [] });
  };

  calcularPromedio = () => {
    const { notas } = this.state;
    if (notas.length === 0) return 0;
    const suma = notas.reduce((acc, nota) => acc + nota.nota, 0);
    return (suma / notas.length).toFixed(2);
  };

  render() {
    return (
      <div className="App">
        <Formulario agregarNota={this.agregarNota} eliminarNotas={this.eliminarNotas} />
        <MostrarPromedio promedio={this.calcularPromedio()} />
        <ListaNotas notas={this.state.notas} actualizarNota={this.actualizarNota} />
      </div>
    );
  }
}

