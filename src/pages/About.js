import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header text-center">
          <h1 className="page-title">Despre Cercul Feminin</h1>
          <p className="page-subtitle">
            Conectăm artizanele din mediul rural cu piețele de e-commerce și turiștii de pe Via Transilvanica
          </p>
        </div>
        
        <div className="about-section">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Artizană lucrând la un covor tradițional" 
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="section-title">Misiunea Noastră</h2>
                <p>
                  Cercul Feminin este o platformă care abordează provocarea accesului limitat la piață și a barierelor logistice cu care se confruntă femeile artizane din mediul rural românesc.
                </p>
                <p>
                  Misiunea noastră este să conectăm aceste talentate creatoare de obiecte tradiționale și reciclate cu platformele naționale de e-commerce precum eMAG, FashionDays și Elefant.ro, precum și cu turiștii care parcurg traseul Via Transilvanica.
                </p>
                <p>
                  Prin facilitarea acestei conexiuni, contribuim la emanciparea economică a acestor femei, la conservarea patrimoniului cultural românesc și la promovarea practicilor durabile în comunitățile rurale.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Traseu Via Transilvanica" 
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="section-title">Via Transilvanica și Cercul Feminin</h2>
                <p>
                  Via Transilvanica este un traseu de drumeții tematice din România, cu o lungime totală de 1.420 km, care începe la Mănăstirea Putna, străbate 10 județe și se termină la Drobeta-Turnu Severin.
                </p>
                <p>
                  Acest traseu reprezintă o oportunitate unică pentru artizanele locale de a-și prezenta creațiile turiștilor care parcurg drumul. Platforma noastră facilitează această conexiune, permițând turiștilor să descopere și să achiziționeze produse autentice direct de la creatoarele lor.
                </p>
                <p>
                  Turiștii care vizitează aceste zone și cumpără produsele artizanelor devin ambasadori ai acestora, împărtășind experiențele și fotografiile lor pe rețelele sociale, ceea ce contribuie la creșterea vizibilității și a vânzărilor.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Platformă de e-commerce" 
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="section-title">Cum Funcționează</h2>
                <p>
                  Cercul Feminin utilizează inteligența artificială pentru a conecta artizanele din mediul rural cu oportunități de vânzare. Algoritmii noștri analizează produsele create de aceste femei și le conectează cu cele mai potrivite opțiuni logistice și platforme de e-commerce.
                </p>
                <p>
                  Platforma noastră oferă o interfață ușor de utilizat, accesibilă chiar și cu o conexiune la internet de bază, permițând artizanelor să își prezinte creațiile. Integrăm servicii de livrare direct în platformă, simplificând procesul de expediere a produselor.
                </p>
                <p>
                  În plus, oferim resurse și suport pentru a îmbunătăți prezența online a artizanelor, inclusiv sfaturi pentru fotografierea produselor, descrieri convingătoare și strategii de preț adaptate pieței românești de e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Echipa Cercul Feminin" 
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="section-title">Echipa Noastră</h2>
                <p>
                  Suntem o echipă dedicată de profesioniști pasionați de tehnologie, sustenabilitate și păstrarea tradițiilor culturale românești. Experiența noastră diversă în domenii precum dezvoltarea de software, e-commerce, logistică și artizanat ne permite să abordăm provocările complexe cu care se confruntă artizanele din mediul rural.
                </p>
                <p>
                  Colaborăm îndeaproape cu comunități locale, organizații non-guvernamentale și platforme de e-commerce pentru a crea un ecosistem sustenabil care să sprijine și să promoveze artizanele și produsele lor.
                </p>
                <p>
                  Credem în puterea tehnologiei de a crea impact social pozitiv și suntem dedicați misiunii de a ajuta femeile din mediul rural să își valorifice talentele și să contribuie la economia locală și națională.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Artizane Înregistrate</div>
                <p className="stat-description">
                  Artizane talentate din mediul rural care își prezintă produsele pe platforma noastră.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="stat-card">
                <div className="stat-number">€150</div>
                <div className="stat-label">Venit Mediu per Artizană</div>
                <p className="stat-description">
                  Venit suplimentar generat în medie per artizană în perioada de testare de 3 luni.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card">
                <div className="stat-number">20%</div>
                <div className="stat-label">Creștere Trafic</div>
                <p className="stat-description">
                  Creșterea traficului către paginile produselor pe platformele de e-commerce partenere.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-section text-center">
          <h2 className="cta-title">Fii Parte din Cercul Feminin</h2>
          <p className="cta-text">
            Fie că ești o artizană din mediul rural care dorește să își vândă produsele, un turist interesat de produse autentice românești sau o companie care dorește să colaboreze cu noi, te invităm să te alături comunității noastre.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary me-3">Înregistrează-te ca Artizană</Link>
            <Link to="/contact" className="btn btn-outline-primary">Contactează-ne</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
