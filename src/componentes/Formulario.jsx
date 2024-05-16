import { Component } from 'react';
import Boton from './Boton';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materia: '',
      
    };
  }

  render() {
    return (
      <div className='Formulario'>
        <input
          type='text'
          placeholder='Materia'
          value={this.state.nombre}
          onChange={(e) => this.setState({ nombre: e.target.value })}
        />
        <Boton
          accion={() => this.props.guardar(this.state.materia)}
          simbolo='agregar materia'
        />
      </div>
    );
  }
}
