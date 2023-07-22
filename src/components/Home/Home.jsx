/*5️⃣ *COMPONENTE Home** 5️⃣

Implementar el componente Home. Este deberá renderizar todos los Deportes (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.
🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.
🟢 Tendrás que mapear tu estado global para luego renderizar su información utilizando el componente <deporteCard />.

IMPORTANTE
❗Este componente debe ser de CLASE.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
 [Ej]: import * as actions from "./../../redux/actions/index";

*/

import './home.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import DeporteCard from '../DeporteCard/DeporteCard';
import mainImage from '../../img-cp2/main-image-cp2.jpg';

export class Home extends Component {
  componentDidMount() {
    this.props.getAllDeportes();
  }

  render() {
    const { deportes } = this.props;

    return (
      <div className='home'>
        <h1>Deportes</h1>
        <img src={mainImage} alt='deporte-logo' />
        <h3>Deportes:</h3>
        <h4>Checkpoint M2</h4>
        {deportes && deportes.map((deporte) => (
          <DeporteCard
            key={deporte.id}
            id={deporte.id}
            nombre={deporte.nombre}
            imagen={deporte.imagen}
            lugar_de_origen={deporte.lugar_de_origen}
          />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    deportes: state.deportes,
  };
};

export const mapDispatchToProps = actions; // Utilizamos todas las acciones disponibles como props

export default connect(mapStateToProps, mapDispatchToProps)(Home);