/* 6️⃣ *** COMPONENTE CreateDeporte *** 6️⃣

Implementar el componente CreateDeporte. Este consistirá en un formulario controlado con estados de React.
📢¡Sigue las instrucciones de los TEST!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗A fines practicos el input de ligas destacadas será solo un string y será nombra liga destacada.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React, { useState } from 'react';
import * as action from "../../redux/actions/index";
import { useDispatch } from "react-redux";

function validate(input) {
  let errors = {};
  if (input.nombre.length > 30) {
    errors.nombre = 'Nombre demasiado largo';
  }
  if (input.descripcion.length < 100) {
    errors.descripcion = 'Descripción demasiada corta';
  }
  if (input.reglas.length < 50) {
    errors.reglas = 'El texto de las reglas deben ser más largas';
  }
  if (input.difficulty > 5) {
    errors.difficulty = 'La dificultad debe estar en el rango de 1 al 5';
  }
  if (input.duration > 48) {
    errors.duration = 'La duración debe ser menor a 48 días';
  }
  return errors;
};

const CreateDeporte = () => {
  const [errors, setErrors] = useState({});
  const initialState = {
    nombre: '',
    descripcion: '',
    imagen: '',
    reglas: '',
    equipamiento: '',
    lugar_de_origen: '',
    liga_destacada: '',
  };

  const [input, setInput] = React.useState(initialState);

  var handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(validate({
      ...input,
      [name]: value
    }));
  }

  var dispatch = useDispatch();

  var handleOnSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length !== 0) {
      // Si hay errores, no despachamos la acción
      return;
    }

    dispatch(action.createDeporte(input));
    setInput(initialState);
  };

  return (
    <div>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Nombre: </label>
        <input
          type="text"
          value={input.nombre}
          name="nombre"
          onChange={(e) => handleOnChange(e)}
        />
        {errors.nombre && (
          <p>{errors.nombre}</p>
        )}
        <label>Descripción: </label>
        <textarea
          value={input.descripcion}
          name="descripcion"
          onChange={(e) => handleOnChange(e)}
        />
        {errors.descripcion && (
          <p>{errors.descripcion}</p>
        )}

        <label>Reglas: </label>
        <input
          value={input.reglas}
          name="reglas"
          onChange={(e) => handleOnChange(e)}
        />
        {errors.reglas && (
          <p>{errors.reglas}</p>
        )}

        <label>Imagen: <input name="imagen" onChange={(e) => handleOnChange(e)} /></label>
        <label>Equipamiento: <input name="equipamiento" onChange={(e) => handleOnChange(e)} /></label>
        <label>Lugar de origen: <input name="lugar_de_origen" onChange={(e) => handleOnChange(e)} /></label>
        <label>Liga destacada: <input name="liga_destacada" onChange={(e) => handleOnChange(e)} /></label>
        <button type="submit">Crear deporte</button>
      </form>
    </div>
  );
};

export default CreateDeporte;
