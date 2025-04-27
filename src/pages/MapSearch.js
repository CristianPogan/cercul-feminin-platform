import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapSearch.css';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample data for Via Transilvanica route points
const viaTransilvanicaPoints = [
  { id: 1, name: "Putna", lat: 47.8728, lng: 25.5944 },
  { id: 2, name: "Sucevița", lat: 47.7778, lng: 25.7111 },
  { id: 3, name: "Vatra Moldoviței", lat: 47.6556, lng: 25.5417 },
  { id: 4, name: "Vatra Dornei", lat: 47.3500, lng: 25.3667 },
  { id: 5, name: "Poiana Stampei", lat: 47.3250, lng: 25.1333 },
  { id: 6, name: "Bistrița", lat: 47.1333, lng: 24.5000 },
  { id: 7, name: "Sighișoara", lat: 46.2197, lng: 24.7964 },
  { id: 8, name: "Alba Iulia", lat: 46.0667, lng: 23.5833 },
  { id: 9, name: "Drobeta-Turnu Severin", lat: 44.6333, lng: 22.6667 }
];

// Sample data for artisans
const sampleArtisans = [
  {
    id: 1,
    name: "Maria Popescu",
    location: "Bistrița-Năsăud",
    lat: 47.1500,
    lng: 24.5200,
    products: ["Covoare tradiționale", "Țesături"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Elena Munteanu",
    location: "Vatra Dornei",
    lat: 47.3600,
    lng: 25.3700,
    products: ["Coșuri împletite", "Obiecte decorative"],
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Ana Ionescu",
    location: "Sucevița",
    lat: 47.7800,
    lng: 25.7200,
    products: ["Ceramică pictată", "Obiecte tradiționale"],
    image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Ioana Dumitrescu",
    location: "Sighișoara",
    lat: 46.2200,
    lng: 24.8000,
    products: ["Broderii", "Costume populare"],
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Gabriela Popa",
    location: "Alba Iulia",
    lat: 46.0700,
    lng: 23.5900,
    products: ["Obiecte din lemn", "Mobilier tradițional"],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const MapSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtisans, setFilteredArtisans] = useState(sampleArtisans);
  const [mapCenter, setMapCenter] = useState([46.7700, 24.5000]); // Center of Romania
  const [mapZoom, setMapZoom] = useState(7);

  // Extract unique product categories
  const allCategories = [...new Set(sampleArtisans.flatMap(artisan => artisan.products))];

  // Filter artisans based on search term and selected category
  useEffect(() => {
    let filtered = sampleArtisans;
    
    if (searchTerm) {
      filtered = filtered.filter(artisan => 
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(artisan => 
        artisan.products.includes(selectedCategory)
      );
    }
    
    setFilteredArtisans(filtered);
  }, [searchTerm, selectedCategory]);

  // Function to center map on a specific artisan
  const focusOnArtisan = (lat, lng) => {
    setMapCenter([lat, lng]);
    setMapZoom(12);
  };

  return (
    <div className="map-search-page">
      <div className="container">
        <h1 className="page-title">Descoperă Artizanele pe Via Transilvanica</h1>
        <p className="page-description">
          Găsește produse tradiționale și reciclate create de femei artizane din zonele rurale de-a lungul traseului Via Transilvanica.
        </p>
        
        <div className="row">
          {/* Filters and Artisan List */}
          <div className="col-md-4">
            <div className="filter-section">
              <div className="search-box mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Caută după nume, locație sau produs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="category-filter mb-4">
                <h5>Filtrează după categorie</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id="all"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  <label className="form-check-label" htmlFor="all">
                    Toate categoriile
                  </label>
                </div>
                {allCategories.map((category, index) => (
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
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="artisans-list">
              <h5>Artizane ({filteredArtisans.length})</h5>
              {filteredArtisans.length === 0 ? (
                <p className="no-results">Nu s-au găsit rezultate pentru criteriile selectate.</p>
              ) : (
                filteredArtisans.map(artisan => (
                  <div className="artisan-card" key={artisan.id} onClick={() => focusOnArtisan(artisan.lat, artisan.lng)}>
                    <div className="artisan-image-container">
                      <img src={artisan.image} alt={artisan.name} className="artisan-image" />
                    </div>
                    <div className="artisan-info">
                      <h6 className="artisan-name">{artisan.name}</h6>
                      <p className="artisan-location">
                        <i className="bi bi-geo-alt-fill"></i> {artisan.location}
                      </p>
                      <div className="artisan-products">
                        {artisan.products.map((product, index) => (
                          <span className="product-tag" key={index}>{product}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Map Container */}
          <div className="col-md-8">
            <div className="map-container">
              <MapContainer 
                center={mapCenter} 
                zoom={mapZoom} 
                style={{ height: '600px', width: '100%' }}
                whenCreated={(map) => {
                  map.on('moveend', () => {
                    setMapCenter(map.getCenter());
                    setMapZoom(map.getZoom());
                  });
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* Via Transilvanica Route Points */}
                {viaTransilvanicaPoints.map(point => (
                  <Marker 
                    key={`route-${point.id}`}
                    position={[point.lat, point.lng]}
                    icon={new L.Icon({
                      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
                      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                      popupAnchor: [1, -34],
                      shadowSize: [41, 41]
                    })}
                  >
                    <Popup>
                      <div>
                        <h6>Via Transilvanica: {point.name}</h6>
                        <p>Punct de reper pe traseul Via Transilvanica</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
                
                {/* Artisan Markers */}
                {filteredArtisans.map(artisan => (
                  <Marker 
                    key={`artisan-${artisan.id}`}
                    position={[artisan.lat, artisan.lng]}
                  >
                    <Popup>
                      <div className="map-popup">
                        <div className="popup-image-container">
                          <img src={artisan.image} alt={artisan.name} className="popup-image" />
                        </div>
                        <h6>{artisan.name}</h6>
                        <p><i className="bi bi-geo-alt-fill"></i> {artisan.location}</p>
                        <p><strong>Produse:</strong></p>
                        <div className="popup-products">
                          {artisan.products.map((product, index) => (
                            <span className="popup-tag" key={index}>{product}</span>
                          ))}
                        </div>
                        <button className="btn btn-sm btn-primary mt-2">Vezi Profil</button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSearch;
