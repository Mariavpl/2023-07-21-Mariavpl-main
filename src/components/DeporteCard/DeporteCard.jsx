/* 7️⃣ *** COMPONENTE DeporteCard *** 7️⃣

Implementar el componente DeporteCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un deporte específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './deporteCard.css';
import React from 'react';
import { useDispatch } from 'react-redux';
// Importa las acciones necesarias
// import { deleteDeporte } from './redux/actions';

const DeporteCard = (props) => {
  const { deporte } = props;

  // Declara el dispatch para despachar la acción
  const dispatch = useDispatch();

  // Función para despachar la acción que eliminará el deporte específico
  const handleDeleteDeporte = () => {
     dispatch(deleteDeporte(deporte.id)); 
  };

  return (
    <div className='card'>
      <h3>{deporte.nombre}</h3>
      <p>{deporte.descripcion}</p>
      <img src={deporte.imagen} alt={deporte.nombre} />
      <button onClick={handleDeleteDeporte}>x</button>
    </div>
  );
};

export default DeporteCard;
