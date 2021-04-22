import React from 'react';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Error = () => {
    return ( 
        <div className="my-3 p-4 text-center alert alert-danger rounded">
            <h1><FontAwesomeIcon icon="exclamation-circle" /></h1>
            <h2>Introduzca un termino a buscar.</h2>
        </div>
     );
}
 
export default Error;