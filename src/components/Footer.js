import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="footer-heading">Cercul Feminin</h5>
            <p className="footer-text">
              Conectăm artizanele din mediul rural cu piețele de e-commerce și turiștii de pe Via Transilvanica.
            </p>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="footer-heading">Link-uri Rapide</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Acasă</Link></li>
              <li><Link to="/products">Produse</Link></li>
              <li><Link to="/map-search">Hartă</Link></li>
              <li><Link to="/about">Despre Noi</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="footer-heading">Resurse</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/register">Înregistrare Artizani</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://www.viatransilvanica.com" target="_blank" rel="noopener noreferrer">Via Transilvanica</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="footer-heading">Social Media</h5>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {currentYear} Cercul Feminin. Toate drepturile rezervate.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-decoration-none me-3">Termeni și Condiții</a>
            <a href="#" className="text-decoration-none">Politica de Confidențialitate</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
