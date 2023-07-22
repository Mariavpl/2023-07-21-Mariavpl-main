/* 3️⃣ ***ACTIONS*** 3️⃣ */

// 📢 Puedes utilizar axios si lo deseas, solo debes importarlo 📢
// 📢 Recuerda RETORNAR las peticiones que hagan tus action-creators 📢
// Ej: return fetch(...) o return axios(...)

export const GET_ALL_DEPORTES = "GET_ALL_DEPORTES";
export const GET_DEPORTE_DETAIL = "GET_DEPORTE_DETAIL";
export const CREATE_DEPORTE = "CREATE_DEPORTE";
export const DELETE_DEPORTE = "DELETE_DEPORTE";

// 🟢 getAllDeportes:
// Esta función debe realizar una petición al Back-End. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/deportes'.

export const getAllDeportes = () => {
        return function(dispatch) {
         return fetch("http://localhost:3001/deportes")
           .then(response => response.json())
           .then(json => dispatch({ type: GET_ALL_DEPORTES, payload: json }))
       };
     };


// 🟢 getDeporteDetail:
// Esta función debe hacer una petición al Back-End. Ten en cuenta que tiene que recibir la variable "id" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/deportes/:id'.
export const getDeporteDetail = (id) => {
    return function(dispatch) {
        return fetch(`http://localhost:3001/deportes/${id}`)
      .then((response) => response.json())
      .then(json => dispatch({ type: GET_DEPORTE_DETAIL, payload: json }))
      };
};

// 🟢 createDeporte:
// Esta función debe recibir una variable "deportes" por parámetro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable deportes, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual a la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites.
 let id = 1;
export const createDeporte = (deportes) => {
    (deportes.id = id++)
    return {
        type: CREATE_DEPORTE,
        payload: deportes,
    }
};

// 🟢 deleteDeporte:
// Esta función debe retornar una action. En su propiedad "payload" guardarás el ID recibido por parámetro.
export const deleteDeporte = (id) => {
    return{
        type: "DELETE_DEPORTE",
        payload: id
            };
};
