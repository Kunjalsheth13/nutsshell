// @ts-nocheck
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHeart, FaUser, FaShoppingCart, FaSearch, FaLeaf, FaMedal, FaTruck, FaShieldAlt } from 'react-icons/fa';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StoryPage from './pages/StoryPage';
import CategoriesPage from './pages/CategoriesPage';
import AdminPanel from './pages/AdminPanel';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Top Info Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <span className="top-bar-item"><FaLeaf className="gold-icon" /> 100% Natural</span>
            <span className="top-bar-item"><FaMedal className="gold-icon" /> Premium Quality</span>
            <span className="top-bar-item"><FaTruck className="gold-icon" /> Fast Delivery</span>
            <span className="top-bar-item"><FaShieldAlt className="gold-icon" /> FSSAI Certified</span>
          </div>
        </div>

        {/* Main Header */}
        <header className="header">
          <div className="header-left">
            <Link to="/" className="logo-container" style={{textDecoration: 'none'}}>
              <h1 className="logo-text playfair">NUTSSHELL</h1>
              <p className="logo-subtext">Your One-Stop Nut Shop</p>
            </Link>
            <nav className="nav">
              <Link to="/" className="nav-link active">Home</Link>
              <Link to="/categories" className="nav-link">Shop ▾</Link>
              <Link to="/categories" className="nav-link">Categories ▾</Link>
              <Link to="/categories" className="nav-link">Gift Boxes</Link>
              <Link to="/story" className="nav-link">Our Story</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
          
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search for nuts, seeds, dates..." className="search-input" />
              <FaSearch style={{color: '#757575'}} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <FaHeart className="icon-button" />
              <FaUser className="icon-button" />
              <button className="cart-button">
                <FaShoppingCart /> Cart ({cartCount})
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main style={{flex: 1}}>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            {/* Hidden admin route */}
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div style={{flex: 1}}>
              <h3 className="playfair" style={{margin: '0 0 10px 0', fontSize: '1.5rem', color: '#fff'}}>Stay Updated With Nutritious Tips & Exclusive Offers</h3>
              <p style={{margin: 0, color: '#aaa'}}>Be the first to know about new arrivals, healthy recipes and special discounts.</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <button className="btn-primary" style={{borderRadius: '4px'}}>Subscribe</button>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-col">
              <h1 className="logo-text playfair" style={{color: '#D4AF37'}}>NUTSSHELL</h1>
              <p style={{lineHeight: 1.6}}>Premium quality dry fruits, nuts, seeds, chocolates and healthy snacks delivered fresh to your doorstep.</p>
            </div>
            <div className="footer-col">
              <h4 style={{color: '#fff', marginBottom: '10px'}}>Quick Links</h4>
              <Link to="/" style={{color: '#aaa', textDecoration: 'none'}}>Home</Link>
              <Link to="/categories" style={{color: '#aaa', textDecoration: 'none'}}>Shop</Link>
              <Link to="/categories" style={{color: '#aaa', textDecoration: 'none'}}>Categories</Link>
              <Link to="/contact" style={{color: '#aaa', textDecoration: 'none'}}>Contact Us</Link>
            </div>
            <div className="footer-col">
              <h4 style={{color: '#fff', marginBottom: '10px'}}>Customer Care</h4>
              <p style={{margin: 0}}>My Account</p><p style={{margin: 0}}>Track Order</p><p style={{margin: 0}}>FAQs</p><p style={{margin: 0}}>Shipping Policy</p>
            </div>
            <div className="footer-col">
              <h4 style={{color: '#fff', marginBottom: '10px'}}>Contact Us</h4>
              <p style={{margin: 0}}>Shop No. 3 & 4, Nirma Building</p>
              <p style={{margin: 0}}>Ahmedabad - 380008</p>
              <p style={{margin: 0}}>📞 7043330890</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{margin: 0}}>© 2026 NUTSSHELL. All Rights Reserved.</p>
            <p style={{margin: 0}}>FSSAI License No | 10726026000671</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
