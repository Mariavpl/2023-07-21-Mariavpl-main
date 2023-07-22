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

import React, {useState} from 'react';
import * as action from "../../redux/actions/index"
import { useDispatch } from "react-redux";


function validate(input) {
  let errors = {};
  if (input.nombre.length > 30) {
      errors.nombre = 'Nombre demasiado largo';
      }else if (!input.description) {
          errors.description = 'Description debe ser completada';
      }
      if (input.difficulty >5) {
          errors.difficulty= 'La difficulty debe estar en el rago de 1 al 5';
                  }else if(input.duration >48){
                      errors.duration= 'La difficulty debe ser menor a 48 dias';  
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
  const [nombreError, setNombreError] = React.useState('');
  const [descripcionError, setDescripcionError] = React.useState('');
  const [reglasError, setReglasError] = React.useState('');

  var handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
  }));
console.log(input)
}
   
    

  var dispatch = useDispatch();

  var handleOnSubmit = (event) => {
    event.preventDefault();

    if (nombreError || descripcionError || reglasError) {
      // Si hay errores, no despachamos la acción
      return;
    }

    dispatch(action.createDeporte(input));
    setInput(initialState);
  };

  return (
    <div>
      <form onSubmit={(event) => handleOnSubmit(event)}>
      <label>Nombre: <input name="nombre" onChange={(e) => handleOnChange(e)} /></label>
      {errors.nombre && (<p>{errors.nombre}</p>)}
        <label>Descripción: <textarea name="descripcion" onChange={(e) => handleOnChange(e)} value={input.descripcion} />
        </label>
        {descripcionError && <p>{descripcionError}</p>}
        <label>Reglas: <input name="reglas" onChange={(e) => handleOnChange(e)} /></label>
        {reglasError && <p>{reglasError}</p>}
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
