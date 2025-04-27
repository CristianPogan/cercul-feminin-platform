import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArtisanProfile.css';

// Sample artisan data
const sampleArtisans = [
  {
    id: 1,
    firstName: "Maria",
    lastName: "Popescu",
    location: "Bistrița-Năsăud",
    county: "Bistrița-Năsăud",
    description: "Sunt o artizană cu peste 30 de ani de experiență în țesutul covoarelor tradiționale. Am învățat această artă de la bunica mea și continui să folosesc tehnici și modele transmise din generație în generație.",
    craftType: "Covoare și țesături",
    story: "Am crescut văzând-o pe bunica mea țesând covoare tradiționale în satul nostru din Bistrița-Năsăud. La vârsta de 12 ani, am început să învăț și eu această artă. Fiecare covor pe care îl creez are o poveste și un model unic, inspirat din tradițiile locale și din natura înconjurătoare.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isNearViaTransilvanica: true,
    hasTransport: false,
    products: [
      {
        id: 1,
        name: "Covor tradițional din lână",
        price: 450,
        category: "Covoare și țesături",
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 6,
        name: "Față de masă brodată",
        price: 280,
        category: "Covoare și țesături",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    id: 2,
    firstName: "Elena",
    lastName: "Munteanu",
    location: "Vatra Dornei",
    county: "Suceava",
    description: "Sunt specializată în împletitul nuielelor, continuând tradiția familiei de peste 3 generații. Creez coșuri și obiecte decorative folosind tehnici tradiționale și materiale naturale.",
    craftType: "Coșuri împletite",
    story: "Familia mea se ocupă cu împletitul nuielelor de peste 100 de ani. Am învățat această meserie de la tatăl meu, care la rândul lui a învățat-o de la tatăl său. Fiecare coș pe care îl creez este realizat manual, cu atenție la detalii și durabilitate.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isNearViaTransilvanica: true,
    hasTransport: true,
    products: [
      {
        id: 2,
        name: "Coș împletit din nuiele",
        price: 120,
        category: "Coșuri împletite",
        image: "https://images.unsplash.com/photo-1595864866924-5f0f7515a22d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 7,
        name: "Coș pentru pâine",
        price: 90,
        category: "Coșuri împletite",
        image: "https://images.unsplash.com/photo-1551877370-95b5a9273524?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ]
  }
];

const ArtisanProfile = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch artisan data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchArtisan = () => {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const foundArtisan = sampleArtisans.find(a => a.id === parseInt(id));
        if (foundArtisan) {
          setArtisan(foundArtisan);
        }
        setLoading(false);
      }, 500);
    };
    
    fetchArtisan();
  }, [id]);
  
  if (loading) {
    return (
      <div className="artisan-profile-page">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Se încarcă profilul artizanei...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!artisan) {
    return (
      <div className="artisan-profile-page">
        <div className="container">
          <div className="artisan-not-found">
            <h2>Artizana nu a fost găsită</h2>
            <p>Ne pare rău, dar artizana pe care o cauți nu există.</p>
            <Link to="/products" className="btn btn-primary">
              Explorează Produsele
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="artisan-profile-page">
      <div className="container">
        <div className="breadcrumb-nav">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Acasă</Link></li>
              <li className="breadcrumb-item"><Link to="/products">Produse</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{artisan.firstName} {artisan.lastName}</li>
            </ol>
          </nav>
        </div>
        
        <div className="artisan-header">
          <div className="row align-items-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="artisan-image-container">
                <img src={artisan.image} alt={`${artisan.firstName} ${artisan.lastName}`} className="artisan-image" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="artisan-header-info">
                <h1 className="artisan-name">{artisan.firstName} {artisan.lastName}</h1>
                <p className="artisan-location">
                  <i className="bi bi-geo-alt-fill"></i> {artisan.location}, Județul {artisan.county}
                </p>
                <p className="artisan-craft">{artisan.craftType}</p>
                
                <div className="artisan-badges">
                  {artisan.isNearViaTransilvanica && (
                    <span className="badge via-transilvanica-badge">
                      <i className="bi bi-signpost-split-fill"></i> Pe Via Transilvanica
                    </span>
                  )}
                  {artisan.hasTransport && (
                    <span className="badge transport-badge">
                      <i className="bi bi-truck"></i> Oferă transport
                    </span>
                  )}
                </div>
                
                <div className="artisan-actions">
                  <button className="btn btn-primary">
                    <i className="bi bi-envelope"></i> Contactează Artizana
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="artisan-content">
          <div className="row">
            <div className="col-lg-8">
              <div className="artisan-description-section">
                <h2 className="section-title">Despre Artizană</h2>
                <p className="artisan-description">{artisan.description}</p>
              </div>
              
              <div className="artisan-story-section">
                <h2 className="section-title">Povestea Meșteșugului</h2>
                <p className="artisan-story">{artisan.story}</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="artisan-sidebar">
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Informații de Contact</h3>
                  <ul className="contact-list">
                    <li>
                      <i className="bi bi-envelope"></i>
                      <span>Email: <a href={`mailto:${artisan.firstName.toLowerCase()}.${artisan.lastName.toLowerCase()}@example.com`}>
                        {artisan.firstName.toLowerCase()}.{artisan.lastName.toLowerCase()}@example.com
                      </a></span>
                    </li>
                    <li>
                      <i className="bi bi-telephone"></i>
                      <span>Telefon: <a href="tel:+40700000000">+40 700 000 000</a></span>
                    </li>
                  </ul>
                </div>
                
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Locație</h3>
                  <div className="location-info">
                    <p>
                      <i className="bi bi-geo-alt-fill"></i> {artisan.location}, Județul {artisan.county}
                    </p>
                    <div className="location-map">
                      <img 
                        src="https://via.placeholder.com/400x200?text=Hartă+Locație" 
                        alt="Locație pe hartă" 
                        className="location-map-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="artisan-products-section">
          <h2 className="section-title">Produsele Artizanei</h2>
          <div className="row">
            {artisan.products.map(product => (
              <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                <div className="product-card">
                  <Link to={`/product/${product.id}`} className="product-link">
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image"
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-category">{product.category}</p>
                      <p className="product-price">{product.price} RON</p>
                    </div>
                  </Link>
                  <div className="product-actions">
                    <Link to={`/product/${product.id}`} className="btn btn-primary w-100">
                      Vezi detalii
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
