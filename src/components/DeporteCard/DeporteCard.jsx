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
import * as action from "../../redux/actions/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const DeporteCard = (props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(action.deleteDeporte(props.id)); 
  };

  return (
    <div className='card'>
      <button onClick={handleDelete}>x</button>
      <Link to={`/deportes/${props.id}`}>
        <h3>{props.nombre}</h3>
      </Link>
      <img src={props.imagen} alt={props.nombre} />
      <p>Origen: {props.lugar_de_origen}</p>
    </div>
  );
};

export default DeporteCard;