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
import { useDispatch } from 'react-redux'; 
import { createDeporte } from '../../redux/actions'; 

const CreateDeporte = () => {
  const [input, setInput] = useState({
    name: '',
    description: '',
    rules: '',
    equipment: '',
    origin: '',
    ligaDestacada: '',
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    if (!input.name) {
      formErrors.name = 'Este campo es requerido';
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      dispatch(createDeporte(input));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default CreateDeporte;
