import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Conectăm artizanele din mediul rural cu lumea</h1>
              <p className="hero-subtitle">
                Cercul Feminin este o platformă care ajută femeile artizane din zonele rurale să își vândă produsele tradiționale și reciclate către piețele de e-commerce și turiștii de pe Via Transilvanica.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary me-3">Descoperă Produsele</Link>
                <Link to="/map-search" className="btn btn-outline-primary">Explorează Harta</Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Artizană lucrând la un covor tradițional" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center">Cum funcționează</h2>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3 className="feature-title">Conectăm Artizanele</h3>
                <p className="feature-text">
                  Ajutăm femeile din mediul rural să își prezinte produsele tradiționale și reciclate către o audiență mai largă.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-truck"></i>
                </div>
                <h3 className="feature-title">Soluții Logistice</h3>
                <p className="feature-text">
                  Oferim integrare cu companii de curierat pentru a facilita transportul produselor către clienți.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shop"></i>
                </div>
                <h3 className="feature-title">Acces la Piețe</h3>
                <p className="feature-text">
                  Conectăm artizanele cu platforme de e-commerce precum eMAG, FashionDays și Elefant.ro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Via Transilvanica Section */}
      <section className="via-transilvanica-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="via-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Traseu Via Transilvanica" 
                  className="via-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Descoperă produsele locale pe Via Transilvanica</h2>
              <p className="section-text">
                Turiștii care parcurg traseul Via Transilvanica pot descoperi și cumpăra produse autentice direct de la artizanele locale. Platforma noastră îi ajută să găsească produse tradiționale în apropierea traseului.
              </p>
              <p className="section-text">
                Fiecare achiziție sprijină economia locală și ajută la păstrarea meșteșugurilor tradiționale românești.
              </p>
              <Link to="/map-search" className="btn btn-primary mt-3">Explorează Harta</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center">Ce spun artizanele noastre</h2>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Maria din Bistrița-Năsăud" 
                    className="testimonial-image"
                  />
                </div>
                <h4 className="testimonial-name">Maria din Bistrița-Năsăud</h4>
                <p className="testimonial-text">
                  "Datorită Cercului Feminin, am reușit să îmi vând covoarele tradiționale către clienți din toată țara. Acum am un venit stabil și pot continua să practic meșteșugul pe care l-am învățat de la bunica mea."
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Elena din Harghita" 
                    className="testimonial-image"
                  />
                </div>
                <h4 className="testimonial-name">Elena din Harghita</h4>
                <p className="testimonial-text">
                  "Platforma m-a ajutat să găsesc soluții de transport pentru produsele mele. Acum pot trimite coșurile împletite către clienți din orașe mari, fără să mă deplasez eu însămi."
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Ana din Suceava" 
                    className="testimonial-image"
                  />
                </div>
                <h4 className="testimonial-name">Ana din Suceava</h4>
                <p className="testimonial-text">
                  "Turiștii de pe Via Transilvanica îmi vizitează atelierul și cumpără direct produsele mele. Mulți dintre ei distribuie fotografii pe rețelele sociale, ceea ce mi-a adus și mai mulți clienți."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ești o artizană din mediul rural?</h2>
          <p className="cta-text">
            Înregistrează-te pe platforma noastră și conectează-te cu piețele de e-commerce și turiștii de pe Via Transilvanica.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg mt-3">Înregistrează-te Acum</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
