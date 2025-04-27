import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ArtisanRegistration from './pages/ArtisanRegistration';
import ArtisanProfile from './pages/ArtisanProfile';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import MapSearch from './pages/MapSearch';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<ArtisanRegistration />} />
            <Route path="/artisan/:id" element={<ArtisanProfile />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/map-search" element={<MapSearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
