import React, {useState} from 'react';
// Componentes
import Error from './shared/Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        // validar
        if(termino.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // enviar el termino de búsqueda hacia el componente principal
        guardarBusqueda(termino);
    }

    return ( 
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="col-md-8 mt-2">
                    <label htmlFor="buscador" className="lead"><i>Buscar imagenes</i></label>
                    <input id="buscador" name="buscador" type="text" className="form-control form-control-lg" placeholder="Busca una imagen, ejemplo: futbol o café" onChange={ e => guardarTermino(e.target.value)} />
                </div>
                <div className="col-md-4 mt-5">
                    <button type="submit" className="btn btn-outline-dark btn-lg btn-block" >Buscar </button>
                </div>
            </div>

            { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
     );
}
 
export default Formulario;