import { Component } from 'react';

export default class ListaNotas extends Component {
  render() {
    return (
      <div className="lista-notas">
        <ul>
          {this.props.notas.map((nota, index) => (
            <li
              key={index}
              className={nota.nota >= 6 ? 'nota-alta' : 'nota-baja'}
            >
              <span>{nota.asignatura}: </span>
              <input
                type="number"
                value={nota.nota}
                onChange={(e) => this.props.actualizarNota(index, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
