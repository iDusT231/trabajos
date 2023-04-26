// Aquí se importan elementos de la librería de React y se guardan 
// como un elemento el cual tiene dentro de sí funciones y métodos
import React from 'react';
import ReactDOM from 'react-dom';

// Aquí se linkea al CSS
import './index.css';

// Aquí toma el documento "calculadora.jsx" el cuál es una página separada y se mete en un elemento

// Lo mismo que el de arriba pero con una página diferente xd
import reportWebVitals from './reportWebVitals';
import Formulario from './/components/formulario.jsx';
import FiladelatabladepeliculasP from './/components/llenaTablaPersonas.jsx';
import FiladelatabladepersonasP from "./components/llenaOtraTablaPersonas.jsx"
import FormularioPersonas from './components/formularioPersonas.jsx';
import Login from "./components/login.jsx";
import Principal from "./components/principal.jsx";
import Principal2 from "./components/principal2";

// Aquí se toma el ReactDOM y con la función ".render()" (La cual permite compartir código entre
// componentes para que aparezcan como uno solo) se toma el elemento de "Calculadora" y el elemento
// "Counter" y se postran en la misma página
ReactDOM.render(

  // Aquí "<React.StrictMode>" es como un <div> lo permite meterle elementos como se haría en un
  // archivo HTML normal y en este caso dentro de unos <tr> y unos <td> se meten "Calculadora" y "Counter"
  // con el fin de que esten más acomodados 
  <React.StrictMode>
    <table>
      <tr>
      <td>
        <Principal />
      </td>
      <td>
        
      </td>
    </tr>
  </table>
  </React.StrictMode >,
  document.getElementById("root")
);

// Esto es para reportar el rendimiento y los errores que tenga la aplicación
reportWebVitals();
