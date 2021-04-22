import { Fragment, useState, useEffect } from "react";
// Componentes
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ListadoImagenes from "./components/ListadoImagenes";
import Formulario from "./components/Formulario";

function App() {
  // state de la app
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(5);
  const [hidden, mostrarBoton] = useState('hidden');

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key = "20470204-c53f8a8ee90591b468254d283";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarImagenes(resultado.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);

      mostrarBoton('')

    };
    consultarApi();
  }, [busqueda, paginaactual]);

  // definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    // Evitar numeros negativos en la paginacion
    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  // definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    // Evitar superar el numero total de paginas e ir mas alla
    if (nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <Fragment>
      {/* Cabecera */}
      <Header />

      {/* Contenido */}
      <main role="main">
        <section className="jumbotron mt-5">
          <div className="container">
            <Formulario guardarBusqueda={guardarBusqueda} />
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <ListadoImagenes imagenes={imagenes} />
            {/* Botones de Paginacion */}
            <div className="row justify-content-center mb-5">
              { (paginaactual === 1) ? null : (
                <button type="button" className="btn btn-outline-dark m-2" onClick={paginaAnterior} >&laquo; Anterior</button>
              ) }

              { (paginaactual === totalpaginas)
                ? null 
                : ( <button type="button" className="btn btn-outline-dark m-2" onClick={paginaSiguiente} hidden={hidden} >Siguiente &raquo;</button> )
              }
          </div> 
          </div>
        </div>
      </main>
      
      {/* Pie de pagina */}
      <Footer />
    </Fragment>
  );
}

export default App;
