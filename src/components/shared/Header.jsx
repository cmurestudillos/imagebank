import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
        <header className="fixed-top">
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">Sobre la aplicacion</h4>
                    <p className="text-muted">
                        Im&aacute;genes gratis para descargar. Millones de
                        im&aacute;genes libres y  compartidas por una gran comunidad, a tu disposici&oacute;n. 
                    </p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Sigueme en:</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/cmur_85/" className="text-white" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="skype:carlos.mur.estudillos?chat" className="text-white">Skype</a></li>
                            <li><a href="https://www.linkedin.com/in/carlos-mur-estudillos-89671346/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a></li>
                            <li><a href="mailto:cmurestudillos@gmail.com?Subject=Interesado%20en%20tu%20experiencia" className="text-white">Email</a></li>
                            <li>
                                <span className="text-white float-left mr-2">Donaciones:</span>
                                {/* PayPal */}
                                <form action="https://www.paypal.com/donate" method="post" target="_blank" rel="noopener noreferrer" className="float-left">
                                    <input type="hidden" name="hosted_button_id" value="KL6A2DZXPKL4U" />
                                    <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
                <img src="assets/img/logo.png" width="64" height="64" alt="Image Bank" />
                <strong>Image Bank</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
        </div>
        </header>   
    </Fragment>
  );
};

export default Header;
