import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
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
    if (!formData.name.trim()) newErrors.name = 'Numele este obligatoriu';
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subiectul este obligatoriu';
    if (!formData.message.trim()) newErrors.message = 'Mesajul este obligatoriu';
    
    return newErrors;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header text-center">
          <h1 className="page-title">Contactează-ne</h1>
          <p className="page-description">
            Ai întrebări sau sugestii? Completează formularul de mai jos și te vom contacta cât mai curând posibil.
          </p>
        </div>
        
        {isSubmitted && (
          <div className="alert alert-success text-center mb-4" role="alert">
            Mesajul tău a fost trimis cu succes! Îți mulțumim pentru contactarea noastră.
          </div>
        )}
        
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Adresă</h3>
                  <p className="info-text">Strada Exemplu, Nr. 123, București, România</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Email</h3>
                  <p className="info-text">
                    <a href="mailto:contact@cerculfeminin.ro">contact@cerculfeminin.ro</a>
                  </p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Telefon</h3>
                  <p className="info-text">
                    <a href="tel:+40700000000">+40 700 000 000</a>
                  </p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Program</h3>
                  <p className="info-text">Luni - Vineri: 9:00 - 17:00</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3 className="social-title">Urmărește-ne</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nume*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                
                <div className="mb-3">
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
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subiect*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mesaj*</label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                
                <button type="submit" className="btn btn-primary w-100">Trimite Mesajul</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="map-container mt-5">
          <h2 className="map-title">Locația Noastră</h2>
          <div className="map-frame">
            <img 
              src="https://via.placeholder.com/1200x400?text=Hartă+Locație" 
              alt="Locația Cercul Feminin pe hartă" 
              className="map-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
