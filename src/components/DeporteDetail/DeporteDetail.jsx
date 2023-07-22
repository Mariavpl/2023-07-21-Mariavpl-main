/* 8️⃣ ***COMPONENTE DeporteDetail*** 8️⃣

Implementar el componente DeporteDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del deporte.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del deporte cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del deporte correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import './deporteDetail.css';
import React, { useState, useEffect } from 'react';


const DeporteDetail = (props) => {
   return <div className='detail'></div>;
};

export default DeporteDetail;
