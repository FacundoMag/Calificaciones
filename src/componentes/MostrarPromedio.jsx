import { Component } from 'react';

export default class MostrarPromedio extends Component {
  render() {
    return (
      <div className="mostrar-promedio">
        <h2>Promedio: {this.props.promedio}</h2>
      </div>
    );
  }
}
