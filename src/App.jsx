import React, { Component, useState } from 'react';
import Formulario from './componentes/Formulario';
import Boton from './componentes/Boton';
import './App.css'; 

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return (
          <div className='Contenedor'>
            <Formulario/>
            <div className='ListaContadores'>
            </div>
          </div>
        );
      }
    }
