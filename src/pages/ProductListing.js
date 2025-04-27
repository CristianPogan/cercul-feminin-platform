import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductListing.css';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Covor tradițional din lână",
    description: "Covor țesut manual din lână naturală, cu motive tradiționale din zona Bistrița-Năsăud.",
    price: 450,
    category: "Covoare și țesături",
    artisan: {
      id: 1,
      name: "Maria Popescu",
      location: "Bistrița-Năsăud"
    },
    images: ["https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 2,
    name: "Coș împletit din nuiele",
    description: "Coș tradițional împletit manual din nuiele, perfect pentru depozitarea fructelor sau ca element decorativ.",
    price: 120,
    category: "Coșuri împletite",
    artisan: {
      id: 2,
      name: "Elena Munteanu",
      location: "Vatra Dornei"
    },
    images: ["https://images.unsplash.com/photo-1595864866924-5f0f7515a22d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 3,
    name: "Vază din ceramică pictată",
    description: "Vază din ceramică pictată manual cu motive tradiționale bucovinene.",
    price: 180,
    category: "Ceramică",
    artisan: {
      id: 3,
      name: "Ana Ionescu",
      location: "Sucevița"
    },
    images: ["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 4,
    name: "Ie tradițională brodată",
    description: "Ie tradițională românească brodată manual cu motive florale.",
    price: 350,
    category: "Îmbrăcăminte tradițională",
    artisan: {
      id: 4,
      name: "Ioana Dumitrescu",
      location: "Sighișoara"
    },
    images: ["https://images.unsplash.com/photo-1603251579711-3e9c81d6ec26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 5,
    name: "Cutie din lemn sculptată",
    description: "Cutie din lemn de tei sculptată manual, ideală pentru păstrarea bijuteriilor sau a amintirilor prețioase.",
    price: 200,
    category: "Obiecte din lemn",
    artisan: {
      id: 5,
      name: "Gabriela Popa",
      location: "Alba Iulia"
    },
    images: ["https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 6,
    name: "Față de masă brodată",
    description: "Față de masă din in, brodată manual cu motive tradiționale.",
    price: 280,
    category: "Covoare și țesături",
    artisan: {
      id: 1,
      name: "Maria Popescu",
      location: "Bistrița-Năsăud"
    },
    images: ["https://images.unsplash.com/photo-1577083552431-6e5fd01988d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 7,
    name: "Coș pentru pâine",
    description: "Coș pentru pâine împletit manual din nuiele și căptușit cu material textil.",
    price: 90,
    category: "Coșuri împletite",
    artisan: {
      id: 2,
      name: "Elena Munteanu",
      location: "Vatra Dornei"
    },
    images: ["https://images.unsplash.com/photo-1551877370-95b5a9273524?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  },
  {
    id: 8,
    name: "Set de farfurii pictate",
    description: "Set de 4 farfurii din ceramică pictate manual cu motive tradiționale.",
    price: 320,
    category: "Ceramică",
    artisan: {
      id: 3,
      name: "Ana Ionescu",
      location: "Sucevița"
    },
    images: ["https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
    isNearViaTransilvanica: true
  }
];

const ProductListing = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [viaTransilvanicaOnly, setViaTransilvanicaOnly] = useState(false);
  const [sortOption, setSortOption] = useState('default');

  // Extract unique categories and locations
  const categories = ['all', ...new Set(products.map(product => product.category))];
  const locations = ['all', ...new Set(products.map(product => product.artisan.location))];

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply search term filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply location filter
    if (selectedLocation !== 'all') {
      result = result.filter(product => product.artisan.location === selectedLocation);
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Apply Via Transilvanica filter
    if (viaTransilvanicaOnly) {
      result = result.filter(product => product.isNearViaTransilvanica);
    }
    
    // Apply sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory, selectedLocation, priceRange, viaTransilvanicaOnly, sortOption]);

  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  return (
    <div className="product-listing-page">
      <div className="container">
        <h1 className="page-title">Produse Tradiționale și Reciclate</h1>
        <p className="page-description">
          Descoperă produse autentice create de femei artizane din mediul rural românesc.
        </p>
        
        <div className="row">
          {/* Filters Sidebar */}
          <div className="col-lg-3">
            <div className="filters-sidebar">
              <div className="search-box mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Caută produse..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="filter-section">
                <h5 className="filter-title">Categorii</h5>
                <div className="filter-options">
                  {categories.map((category, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id={`category-${index}`}
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                      />
                      <label className="form-check-label" htmlFor={`category-${index}`}>
                        {category === 'all' ? 'Toate categoriile' : category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="filter-section">
                <h5 className="filter-title">Locație</h5>
                <div className="filter-options">
                  {locations.map((location, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="location"
                        id={`location-${index}`}
                        checked={selectedLocation === location}
                        onChange={() => setSelectedLocation(location)}
                      />
                      <label className="form-check-label" htmlFor={`location-${index}`}>
                        {location === 'all' ? 'Toate locațiile' : location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="filter-section">
                <h5 className="filter-title">Preț (RON)</h5>
                <div className="price-range">
                  <div className="price-inputs">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Min"
                      name="min"
                      value={priceRange.min}
                      onChange={handlePriceChange}
                      min="0"
                    />
                    <span className="price-separator">-</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max"
                      name="max"
                      value={priceRange.max}
                      onChange={handlePriceChange}
                      min="0"
                    />
                  </div>
                </div>
              </div>
              
              <div className="filter-section">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="viaTransilvanica"
                    checked={viaTransilvanicaOnly}
                    onChange={() => setViaTransilvanicaOnly(!viaTransilvanicaOnly)}
                  />
                  <label className="form-check-label" htmlFor="viaTransilvanica">
                    Doar produse de pe Via Transilvanica
                  </label>
                </div>
              </div>
              
              <button 
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                  setPriceRange({ min: 0, max: 500 });
                  setViaTransilvanicaOnly(false);
                  setSortOption('default');
                }}
              >
                Resetează filtrele
              </button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="col-lg-9">
            <div className="products-header">
              <div className="results-count">
                {filteredProducts.length} produse găsite
              </div>
              <div className="sort-options">
                <select 
                  className="form-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Sortare implicită</option>
                  <option value="price-asc">Preț: Crescător</option>
                  <option value="price-desc">Preț: Descrescător</option>
                  <option value="name-asc">Nume: A-Z</option>
                  <option value="name-desc">Nume: Z-A</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="no-products">
                <p>Nu s-au găsit produse care să corespundă criteriilor selectate.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedLocation('all');
                    setPriceRange({ min: 0, max: 500 });
                    setViaTransilvanicaOnly(false);
                  }}
                >
                  Resetează filtrele
                </button>
              </div>
            ) : (
              <div className="row products-grid">
                {filteredProducts.map(product => (
                  <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                    <div className="product-card">
                      <Link to={`/product/${product.id}`} className="product-link">
                        <div className="product-image-container">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="product-image"
                          />
                          {product.isNearViaTransilvanica && (
                            <div className="via-transilvanica-badge">
                              Via Transilvanica
                            </div>
                          )}
                        </div>
                        <div className="product-info">
                          <h3 className="product-name">{product.name}</h3>
                          <p className="product-artisan">
                            De la {product.artisan.name}, {product.artisan.location}
                          </p>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
