import React from 'react';
// Componente
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return ( 
        <div className="card-columns">
            {imagenes.map(imagen => (
                <Imagen key={imagen.id} imagen={imagen} />
            ))}
        </div>        

     );
}
 
export default ListadoImagenes;