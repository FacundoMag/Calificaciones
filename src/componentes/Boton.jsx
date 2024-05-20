import { Component } from 'react';

export default class Boton extends Component {
  render() {
    return (
      <button type={this.props.tipo} onClick={this.props.onClick}>
        {this.props.texto}
      </button>
    );
  }
}
