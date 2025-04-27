import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtisanRegistration.css';

const ArtisanRegistration = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    address: '',
    county: '',
    postalCode: '',
    craftType: '',
    otherCraftType: '',
    description: '',
    hasTransport: false,
    needsLogistics: false,
    viaTransilvanicaProximity: false,
    acceptTerms: false,
    profileImage: null,
    productImages: []
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Craft types
  const craftTypes = [
    'Covoare și țesături',
    'Coșuri împletite',
    'Ceramică',
    'Îmbrăcăminte tradițională',
    'Obiecte din lemn',
    'Broderii',
    'Obiecte reciclate',
    'Altele'
  ];
  
  // Counties in Romania
  const romanianCounties = [
    'Alba', 'Arad', 'Argeș', 'Bacău', 'Bihor', 'Bistrița-Năsăud', 'Botoșani', 'Brăila',
    'Brașov', 'București', 'Buzău', 'Călărași', 'Caraș-Severin', 'Cluj', 'Constanța',
    'Covasna', 'Dâmbovița', 'Dolj', 'Galați', 'Giurgiu', 'Gorj', 'Harghita', 'Hunedoara',
    'Ialomița', 'Iași', 'Ilfov', 'Maramureș', 'Mehedinți', 'Mureș', 'Neamț', 'Olt',
    'Prahova', 'Sălaj', 'Satu Mare', 'Sibiu', 'Suceava', 'Teleorman', 'Timiș', 'Tulcea',
    'Vaslui', 'Vâlcea', 'Vrancea'
  ];
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      if (name === 'profileImage') {
        setFormData({
          ...formData,
          profileImage: files[0]
        });
      } else if (name === 'productImages') {
        setFormData({
          ...formData,
          productImages: Array.from(files)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'Prenumele este obligatoriu';
    if (!formData.lastName.trim()) newErrors.lastName = 'Numele este obligatoriu';
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefonul este obligatoriu';
    if (!formData.location.trim()) newErrors.location = 'Localitatea este obligatorie';
    if (!formData.county) newErrors.county = 'Județul este obligatoriu';
    if (!formData.craftType) {
      newErrors.craftType = 'Tipul de meșteșug este obligatoriu';
    } else if (formData.craftType === 'Altele' && !formData.otherCraftType.trim()) {
      newErrors.otherCraftType = 'Vă rugăm să specificați tipul de meșteșug';
    }
    if (!formData.description.trim()) newErrors.description = 'Descrierea este obligatorie';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Trebuie să acceptați termenii și condițiile';
    
    return newErrors;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Scroll to first error
      const firstError = document.querySelector('.is-invalid');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };
  
  if (isSubmitted) {
    return (
      <div className="registration-success">
        <div className="container text-center">
          <div className="success-icon">
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <h2>Înregistrare Reușită!</h2>
          <p>
            Mulțumim pentru înregistrare! Datele tale au fost trimise cu succes.
            Echipa noastră va revizui informațiile și te va contacta în curând.
          </p>
          <p>Vei fi redirecționat către pagina principală în câteva secunde...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="artisan-registration-page">
      <div className="container">
        <div className="registration-header text-center">
          <h1 className="page-title">Înregistrare Artizană</h1>
          <p className="page-description">
            Completează formularul de mai jos pentru a te înregistra ca artizană pe platforma Cercul Feminin.
            Acest lucru îți va permite să îți promovezi produsele către turiștii de pe Via Transilvanica și
            să te conectezi cu platformele de e-commerce din România.
          </p>
        </div>
        
        <div className="registration-form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3 className="section-title">Informații Personale</h3>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">Prenume*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">Nume*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email*</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">Telefon*</label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="profileImage" className="form-label">Fotografie de Profil</label>
                <input
                  type="file"
                  className="form-control"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                />
                <div className="form-text">Încarcă o fotografie care să te reprezinte ca artizană.</div>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="section-title">Adresă</h3>
              
              <div className="mb-3">
                <label htmlFor="location" className="form-label">Localitate*</label>
                <input
                  type="text"
                  className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && <div className="invalid-feedback">{errors.location}</div>}
              </div>
              
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Adresă</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="county" className="form-label">Județ*</label>
                  <select
                    className={`form-select ${errors.county ? 'is-invalid' : ''}`}
                    id="county"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                  >
                    <option value="">Selectează județul</option>
                    {romanianCounties.map((county, index) => (
                      <option key={index} value={county}>{county}</option>
                    ))}
                  </select>
                  {errors.county && <div className="invalid-feedback">{errors.county}</div>}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="postalCode" className="form-label">Cod Poștal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="viaTransilvanicaProximity"
                  name="viaTransilvanicaProximity"
                  checked={formData.viaTransilvanicaProximity}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="viaTransilvanicaProximity">
                  Locuiesc în apropierea traseului Via Transilvanica
                </label>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="section-title">Informații despre Meșteșug</h3>
              
              <div className="mb-3">
                <label htmlFor="craftType" className="form-label">Tipul de Meșteșug*</label>
                <select
                  className={`form-select ${errors.craftType ? 'is-invalid' : ''}`}
                  id="craftType"
                  name="craftType"
                  value={formData.craftType}
                  onChange={handleChange}
                >
                  <option value="">Selectează tipul de meșteșug</option>
                  {craftTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.craftType && <div className="invalid-feedback">{errors.craftType}</div>}
              </div>
              
              {formData.craftType === 'Altele' && (
                <div className="mb-3">
                  <label htmlFor="otherCraftType" className="form-label">Specifică tipul de meșteșug*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.otherCraftType ? 'is-invalid' : ''}`}
                    id="otherCraftType"
                    name="otherCraftType"
                    value={formData.otherCraftType}
                    onChange={handleChange}
                  />
                  {errors.otherCraftType && <div className="invalid-feedback">{errors.otherCraftType}</div>}
                </div>
              )}
              
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Descriere Meșteșug*</label>
                <textarea
                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descrie meșteșugul tău, ce produse creezi și care este povestea din spatele lor..."
                ></textarea>
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
              </div>
              
              <div className="mb-3">
                <label htmlFor="productImages" className="form-label">Fotografii cu Produsele Tale</label>
                <input
                  type="file"
                  className="form-control"
                  id="productImages"
                  name="productImages"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                />
                <div className="form-text">Poți încărca mai multe fotografii cu produsele tale.</div>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="section-title">Logistică</h3>
              
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="hasTransport"
                  name="hasTransport"
                  checked={formData.hasTransport}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="hasTransport">
                  Am posibilitatea de a transporta produsele către clienți
                </label>
              </div>
              
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="needsLogistics"
                  name="needsLogistics"
                  checked={formData.needsLogistics}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="needsLogistics">
                  Am nevoie de ajutor cu transportul produselor
                </label>
              </div>
            </div>
            
            <div className="form-section">
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="acceptTerms">
                  Accept <a href="#" target="_blank">termenii și condițiile</a> platformei Cercul Feminin*
                </label>
                {errors.acceptTerms && <div className="invalid-feedback">{errors.acceptTerms}</div>}
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-lg">Trimite Înregistrarea</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtisanRegistration;
