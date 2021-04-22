import React from "react";
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Imagen = ({ imagen }) => {
  // extraer las variables
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
      <div className="card mb-4 shadow p-3 mb-5 bg-white rounded">
        <img className="card-img-top" src={previewURL} alt={tags} />
        <div className="card-body mb-2">
            <p className="card-text badge badge-success float-left">{likes} Me Gusta <FontAwesomeIcon icon="thumbs-up" /></p>
            <p className="card-text badge badge-info float-right">{views} Vistas <FontAwesomeIcon icon="eye" /></p>
        </div>

        <div className="card-footer">
          <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-block">Ver Imagen</a>
        </div>
      </div>
  );
};

export default Imagen;
