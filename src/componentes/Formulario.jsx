import { Component } from 'react';
import Boton from './Boton';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asignatura: '',
      nota: ''
    };
  }

  manejarCambioAsignatura = (e) => {
    this.setState({ asignatura: e.target.value });
  };

  manejarCambioNota = (e) => {
    this.setState({ nota: e.target.value });
  };

  manejarEnvio = (e) => {
    e.preventDefault();
    const { asignatura, nota } = this.state;
    if (asignatura && nota) {
      this.props.agregarNota(asignatura, nota);
      this.setState({ asignatura: '', nota: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.manejarEnvio} className="formulario">
        <input
          type="text"
          value={this.state.asignatura}
          onChange={this.manejarCambioAsignatura}
          placeholder="Asignatura"
          required
        />
        <input
          type="number"
          value={this.state.nota}
          onChange={this.manejarCambioNota}
          placeholder="Nota"
          required
        />
        <Boton tipo="submit" texto="Agregar Nota" />
        <Boton tipo="button" texto="Eliminar Todas las Notas" onClick={this.props.eliminarNotas} />
      </form>
    );
  }
}
