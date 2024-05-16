import { Component } from 'react';

export default class Boton extends Component {
  render() {
    return (
      <span className='Boton' onClick={() => this.props.accion()}>
        {this.props.simbolo}
      </span>
    );
  }
}
