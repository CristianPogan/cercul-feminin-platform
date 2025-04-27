import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

// Sample product data (in a real app, this would come from an API)
const sampleProducts = [
  {
    id: 1,
    name: "Covor tradițional din lână",
    description: "Covor țesut manual din lână naturală, cu motive tradiționale din zona Bistrița-Năsăud. Fiecare covor este unic și reflectă tradițiile locale transmise din generație în generație. Lâna folosită este de cea mai bună calitate, iar culorile sunt obținute folosind vopsele naturale.",
    price: 450,
    category: "Covoare și țesături",
    artisan: {
      id: 1,
      name: "Maria Popescu",
      location: "Bistrița-Năsăud",
      description: "Artizană cu peste 30 de ani de experiență în țesutul covoarelor tradiționale.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    isNearViaTransilvanica: true,
    materials: ["Lână naturală", "Vopsele naturale"],
    dimensions: "150 x 200 cm",
    weight: "3.5 kg",
    creationTime: "Aproximativ 2 săptămâni",
    story: "Acest covor a fost creat folosind tehnici tradiționale transmise din generație în generație în familia mea. Motivele reprezintă elemente din natura și viața rurală din zona Bistrița-Năsăud."
  },
  {
    id: 2,
    name: "Coș împletit din nuiele",
    description: "Coș tradițional împletit manual din nuiele, perfect pentru depozitarea fructelor sau ca element decorativ. Fiecare coș este realizat cu atenție la detalii și durabilitate.",
    price: 120,
    category: "Coșuri împletite",
    artisan: {
      id: 2,
      name: "Elena Munteanu",
      location: "Vatra Dornei",
      description: "Specializată în împletitul nuielelor, continuând tradiția familiei de peste 3 generații.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1595864866924-5f0f7515a22d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595864866924-5f0f7515a22d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595864866924-5f0f7515a22d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    isNearViaTransilvanica: true,
    materials: ["Nuiele de răchită", "Lemn natural"],
    dimensions: "30 x 20 x 15 cm",
    weight: "0.8 kg",
    creationTime: "Aproximativ 3 zile",
    story: "Împletitul coșurilor este o tradiție în familia mea de peste 100 de ani. Învăț această artă de la bunica mea și acum o transmit fiicei mele."
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  // Fetch product data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProduct = () => {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const foundProduct = sampleProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.images[0]);
        }
        setLoading(false);
      }, 500);
    };
    
    fetchProduct();
  }, [id]);
  
  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  // Change main image
  const changeMainImage = (image) => {
    setMainImage(image);
  };
  
  if (loading) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Se încarcă detaliile produsului...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Produsul nu a fost găsit</h2>
            <p>Ne pare rău, dar produsul pe care îl cauți nu există.</p>
            <Link to="/products" className="btn btn-primary">
              Înapoi la Produse
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="product-details-page">
      <div className="container">
        <div className="breadcrumb-nav">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Acasă</Link></li>
              <li className="breadcrumb-item"><Link to="/products">Produse</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>
        </div>
        
        <div className="product-main">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="product-images">
                <div className="main-image-container">
                  <img src={mainImage} alt={product.name} className="main-image" />
                  {product.isNearViaTransilvanica && (
                    <div className="via-transilvanica-badge">
                      Via Transilvanica
                    </div>
                  )}
                </div>
                <div className="thumbnail-images">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail-container ${mainImage === image ? 'active' : ''}`}
                      onClick={() => changeMainImage(image)}
                    >
                      <img src={image} alt={`${product.name} - imagine ${index + 1}`} className="thumbnail-image" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="col-lg-6">
              <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                
                <div className="artisan-info">
                  <Link to={`/artisan/${product.artisan.id}`} className="artisan-link">
                    <div className="artisan-image-container">
                      <img src={product.artisan.image} alt={product.artisan.name} className="artisan-image" />
                    </div>
                    <div className="artisan-details">
                      <p className="artisan-name">Creat de {product.artisan.name}</p>
                      <p className="artisan-location">{product.artisan.location}</p>
                    </div>
                  </Link>
                </div>
                
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price} RON</p>
                
                <div className="product-description">
                  <h5>Descriere</h5>
                  <p>{product.description}</p>
                </div>
                
                <div className="product-actions">
                  <div className="quantity-selector">
                    <label htmlFor="quantity">Cantitate:</label>
                    <input
                      type="number"
                      id="quantity"
                      className="form-control"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                    />
                  </div>
                  
                  <button className="btn btn-primary btn-lg w-100 mt-3">
                    Adaugă în Coș
                  </button>
                  
                  <button className="btn btn-outline-primary btn-lg w-100 mt-2">
                    Contactează Artizana
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="product-details-tabs mt-5">
          <ul className="nav nav-tabs" id="productTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link active" 
                id="details-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#details" 
                type="button" 
                role="tab" 
                aria-controls="details" 
                aria-selected="true"
              >
                Detalii
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link" 
                id="story-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#story" 
                type="button" 
                role="tab" 
                aria-controls="story" 
                aria-selected="false"
              >
                Povestea Produsului
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link" 
                id="artisan-tab" 
                data-bs-toggle="tab" 
                data-bs-target="#artisan" 
                type="button" 
                role="tab" 
                aria-controls="artisan" 
                aria-selected="false"
              >
                Despre Artizană
              </button>
            </li>
          </ul>
          <div className="tab-content" id="productTabsContent">
            <div 
              className="tab-pane fade show active" 
              id="details" 
              role="tabpanel" 
              aria-labelledby="details-tab"
            >
              <div className="product-specifications">
                <h5>Specificații</h5>
                <div className="specifications-list">
                  <div className="specification-item">
                    <span className="specification-label">Materiale:</span>
                    <span className="specification-value">
                      {product.materials.join(', ')}
                    </span>
                  </div>
                  <div className="specification-item">
                    <span className="specification-label">Dimensiuni:</span>
                    <span className="specification-value">{product.dimensions}</span>
                  </div>
                  <div className="specification-item">
                    <span className="specification-label">Greutate:</span>
                    <span className="specification-value">{product.weight}</span>
                  </div>
                  <div className="specification-item">
                    <span className="specification-label">Timp de creație:</span>
                    <span className="specification-value">{product.creationTime}</span>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="tab-pane fade" 
              id="story" 
              role="tabpanel" 
              aria-labelledby="story-tab"
            >
              <div className="product-story">
                <h5>Povestea din Spatele Produsului</h5>
                <p>{product.story}</p>
              </div>
            </div>
            <div 
              className="tab-pane fade" 
              id="artisan" 
              role="tabpanel" 
              aria-labelledby="artisan-tab"
            >
              <div className="artisan-profile">
                <div className="artisan-header">
                  <div className="artisan-image-container-large">
                    <img src={product.artisan.image} alt={product.artisan.name} className="artisan-image-large" />
                  </div>
                  <div className="artisan-header-info">
                    <h5>{product.artisan.name}</h5>
                    <p className="artisan-location-large">{product.artisan.location}</p>
                  </div>
                </div>
                <div className="artisan-description">
                  <p>{product.artisan.description}</p>
                </div>
                <Link to={`/artisan/${product.artisan.id}`} className="btn btn-outline-primary">
                  Vezi Profilul Complet
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="related-products mt-5">
          <h3 className="section-title">Produse Similare</h3>
          <div className="row">
            {sampleProducts.filter(p => p.id !== product.id).map(relatedProduct => (
              <div className="col-md-4 mb-4" key={relatedProduct.id}>
                <div className="product-card">
                  <Link to={`/product/${relatedProduct.id}`} className="product-link">
                    <div className="product-image-container">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name} 
                        className="product-image"
                      />
                      {relatedProduct.isNearViaTransilvanica && (
                        <div className="via-transilvanica-badge">
                          Via Transilvanica
                        </div>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{relatedProduct.name}</h3>
                      <p className="product-artisan">
                        De la {relatedProduct.artisan.name}, {relatedProduct.artisan.location}
                      </p>
                      <p className="product-category">{relatedProduct.category}</p>
                      <p className="product-price">{relatedProduct.price} RON</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
