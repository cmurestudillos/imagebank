import React, { Fragment } from "react";
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <Fragment>
      <footer className="text-muted bg-dark fixed-bottom">
        <div className="container">
          <p className="float-right">
            <a href="#" className="btn btn-outline-light rounded-circle"><FontAwesomeIcon icon="arrow-up" title="Ir Arriba" /></a>
          </p>
          <p>Copyright &copy; - Designed and Created by:  <a className="text-white" href="https://www.cmurestudillos.es" target="_blank" rel="noopener noreferrer"> <strong>Carlos Mur</strong> </a></p>
        </div>
    </footer>      
    </Fragment>
  );
};

export default Footer;
