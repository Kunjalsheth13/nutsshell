// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaCheckCircle, FaGlobe, FaCertificate, FaShieldAlt } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  imageUrl: string;
  category: { name: string };
}

interface HomePageProps {
  onAddToCart?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=1920&h=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620601058204-7476e33d02d3?q=80&w=1920&h=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1920&h=800&auto=format&fit=crop'
  ];

  // Carousel auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prodRes = await fetch('http://localhost:5000/api/products');
        const catRes = await fetch('http://localhost:5000/api/categories');
        
        const prods = await prodRes.json();
        const cats = await catRes.json();

        setProducts(prods.length === 0 ? mockProducts : prods);
        setCategories(cats.length === 0 ? mockCategories : cats);
      } catch (e) {
        setProducts(mockProducts);
        setCategories(mockCategories);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="container">
      {/* Hero Section (Carousel) */}
      <section className="hero-section">
        {heroImages.map((img, idx) => (
          <div 
            key={idx} 
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`} 
            style={{ backgroundImage: `url(${img})` }} 
          />
        ))}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title playfair">Nature's Finest,<br/><span className="gold-text">Crafted for You</span></h1>
            <p className="hero-subtitle">
              Premium dry fruits, exotic nuts, healthy seeds and<br/>
              delicious treats — handpicked for your healthy lifestyle.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Shop Collection →</button>
              <button className="btn-secondary">Explore Categories</button>
            </div>
            
            <div className="hero-trust">
              <span className="trust-item"><FaCheckCircle className="gold-icon" /> <div>100% Natural<br/><small style={{fontWeight:'normal'}}>No Preservatives</small></div></span>
              <span className="trust-item"><FaCertificate className="gold-icon" /> <div>Premium Quality<br/><small style={{fontWeight:'normal'}}>Handpicked</small></div></span>
              <span className="trust-item"><FaGlobe className="gold-icon" /> <div>Fast Delivery<br/><small style={{fontWeight:'normal'}}>Across India</small></div></span>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Categories */}
      <section className="category-section">
        <div className="category-scroll">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-circle-wrapper">
              <div className="category-circle">
                <img src={cat.imageUrl} alt={cat.name} className="category-img" />
              </div>
              <p className="category-name">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Picks - Product Grid */}
      <section className="products-section">
        <div className="section-header">
          <div>
            <h4 className="section-sub">OUR MOST LOVED PICKS</h4>
            <h2 className="section-title playfair">Premium Picks for You</h2>
          </div>
          <div className="filter-tabs">
            {['All Products', 'Dry Fruits', 'Nuts', 'Seeds', 'Dates'].map(tab => (
              <button 
                key={tab} 
                className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {loading ? <p>Loading premium selection...</p> : (
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-img-container">
                  {product.discount > 0 && <div className="discount-badge">-{product.discount}%</div>}
                  <button className="wishlist-btn"><FaHeart /></button>
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="star-icon" />)}
                    <span className="rating-text">4.8 (112)</span>
                  </div>
                  <div className="price-row">
                    <span className="current-price">₹{product.price - (product.price * product.discount / 100)}</span>
                    {product.discount > 0 && <span className="original-price">₹{product.price}</span>}
                  </div>
                  <div className="action-row">
                    <select className="weight-select">
                      <option>250g</option>
                      <option>500g</option>
                      <option>1kg</option>
                    </select>
                    <button className="add-to-cart-icon-btn" onClick={onAddToCart}><FaShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Feature Banners */}
      <section className="feature-banners">
        <div className="feature-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop)'}}>
          <div className="feature-overlay">
            <h3 className="playfair">Luxury Gift Hampers<br/>For Every Occasion</h3>
            <p>Beautifully curated hampers for your loved ones.</p>
            <button className="btn-outline">Explore Hampers</button>
          </div>
        </div>
        <div className="feature-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1620601058204-7476e33d02d3?q=80&w=600&auto=format&fit=crop)'}}>
          <div className="feature-overlay">
            <h3 className="playfair">Premium<br/>Imported Nuts</h3>
            <p>Handpicked from the best farms across the world.</p>
            <button className="btn-outline">Shop Now</button>
          </div>
        </div>
        <div className="feature-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=600&auto=format&fit=crop)'}}>
          <div className="feature-overlay">
            <h3 className="playfair">Superfoods<br/>For Super You</h3>
            <p>Seeds that power your health naturally every day.</p>
            <button className="btn-outline">Shop Seeds</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <h4 className="section-sub">WHY CHOOSE NUTSSHELL</h4>
        <h2 className="section-title playfair" style={{color: '#fff', marginBottom: '50px'}}>Purity. Quality. Trust.</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon-wrap"><FaCertificate style={{fontSize: '2rem', color: '#C59B5F'}}/></div>
            <h4 style={{margin: '5px 0'}}>Premium Quality</h4>
            <p style={{margin: 0, fontSize: '0.9rem', color: '#aaa'}}>Handpicked & Sorted</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap"><FaGlobe style={{fontSize: '2rem', color: '#C59B5F'}}/></div>
            <h4 style={{margin: '5px 0'}}>Imported Selection</h4>
            <p style={{margin: 0, fontSize: '0.9rem', color: '#aaa'}}>Worldwide Sourcing</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap"><FaHeart style={{fontSize: '2rem', color: '#C59B5F'}}/></div>
            <h4 style={{margin: '5px 0'}}>Healthy Lifestyle</h4>
            <p style={{margin: 0, fontSize: '0.9rem', color: '#aaa'}}>Supports Your Health</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrap"><FaShieldAlt style={{fontSize: '2rem', color: '#C59B5F'}}/></div>
            <h4 style={{margin: '5px 0'}}>Trusted Store</h4>
            <p style={{margin: 0, fontSize: '0.9rem', color: '#aaa'}}>Thousands of Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-image-container">
          <img src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=800&auto=format&fit=crop" alt="Our Story" className="story-image" />
        </div>
        <div className="story-content">
          <h4 className="section-sub">OUR STORY</h4>
          <h2 className="section-title playfair" style={{marginBottom: '20px'}}>A Journey of Passion, Purity & Purpose</h2>
          <p className="story-text">
            Our journey began with a simple mission — to bring the purest and finest quality dry fruits to every home. Today NUTSSHELL is a trusted destination where premium quality, authenticity, health and taste come together.
          </p>
          <button className="btn-primary">Read Our Full Story</button>
        </div>
      </section>
    </div>
  );
};

// 15 Mock Categories
const mockCategories = [
  { name: 'Almonds', imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Cashews', imageUrl: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Walnuts', imageUrl: 'https://images.unsplash.com/photo-1574548489728-1cebc91428ec?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Pistachios', imageUrl: 'https://images.unsplash.com/photo-1563121516-4148e6a14352?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Dates', imageUrl: 'https://images.unsplash.com/photo-1604543501783-6d04ab571ff7?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Raisins', imageUrl: 'https://images.unsplash.com/photo-1620601058204-7476e33d02d3?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Figs', imageUrl: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Apricots', imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Mixed Nuts', imageUrl: 'https://images.unsplash.com/photo-1574548489728-1cebc91428ec?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Seeds', imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Berries', imageUrl: 'https://images.unsplash.com/photo-1620601058204-7476e33d02d3?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Chocolates', imageUrl: 'https://images.unsplash.com/photo-1604543501783-6d04ab571ff7?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Gift Hampers', imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Saffron', imageUrl: 'https://images.unsplash.com/photo-1563121516-4148e6a14352?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Spices', imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=200&h=200&auto=format&fit=crop' }
];

const mockProducts = [
  { id: 1, name: 'Premium Pistachios (Iranian)', price: 999, discount: 20, imageUrl: 'https://images.unsplash.com/photo-1563121516-4148e6a14352?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 2, name: 'California Almonds Premium', price: 820, discount: 15, imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 3, name: 'Kashmiri Walnut Kernel', price: 650, discount: 0, imageUrl: 'https://images.unsplash.com/photo-1574548489728-1cebc91428ec?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 4, name: 'Roasted Cashew Nuts', price: 666, discount: 10, imageUrl: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 5, name: 'Premium Medjool Dates', price: 350, discount: 0, imageUrl: 'https://images.unsplash.com/photo-1604543501783-6d04ab571ff7?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 6, name: 'Organic Chia Seeds', price: 299, discount: 5, imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=400&h=400&auto=format&fit=crop' }
];

export default HomePage;
