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

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All Products');

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const prodRes = await fetch('http://localhost:5000/api/products');
        const catRes = await fetch('http://localhost:5000/api/categories');
        
        const prods = await prodRes.json();
        const cats = await catRes.json();

        // If backend is empty, use mock data to ensure the design is visible
        if (prods.length === 0) {
          setProducts(mockProducts);
        } else {
          setProducts(prods);
        }

        if (cats.length === 0) {
          setCategories(mockCategories);
        } else {
          setCategories(cats);
        }
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
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Nature's Finest,<br/><span style={styles.heroTitleGold}>Crafted for You</span></h1>
            <p style={styles.heroSubtitle}>
              Premium dry fruits, exotic nuts, healthy seeds and<br/>
              delicious treats — handpicked for your healthy lifestyle.
            </p>
            <div style={styles.heroButtons}>
              <button style={styles.btnPrimary}>Shop Collection →</button>
              <button style={styles.btnSecondary}>Explore Categories</button>
            </div>
            
            <div style={styles.heroTrust}>
              <span style={styles.trustItem}><FaCheckCircle style={styles.goldIcon} /> 100% Natural<br/><small>No Preservatives</small></span>
              <span style={styles.trustItem}><FaCertificate style={styles.goldIcon} /> Premium Quality<br/><small>Handpicked</small></span>
              <span style={styles.trustItem}><FaGlobe style={styles.goldIcon} /> Fast Delivery<br/><small>Across India</small></span>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Categories */}
      <section style={styles.categorySection}>
        <div style={styles.categoryScroll}>
          {categories.map((cat, idx) => (
            <div key={idx} style={styles.categoryCircleWrapper}>
              <div style={styles.categoryCircle}>
                <img src={cat.imageUrl || `https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=200&h=200&auto=format&fit=crop&sig=${idx}`} alt={cat.name} style={styles.categoryImg} />
              </div>
              <p style={styles.categoryName}>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Picks - Product Grid */}
      <section style={styles.productsSection}>
        <div style={styles.sectionHeader}>
          <div>
            <h4 style={styles.sectionSub}>OUR MOST LOVED PICKS</h4>
            <h2 style={styles.sectionTitle}>Premium Picks for You</h2>
          </div>
          <div style={styles.filterTabs}>
            {['All Products', 'Dry Fruits', 'Nuts', 'Seeds', 'Dates'].map(tab => (
              <button 
                key={tab} 
                style={activeFilter === tab ? {...styles.filterBtn, ...styles.filterBtnActive} : styles.filterBtn}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {loading ? <p>Loading premium selection...</p> : (
          <div style={styles.productGrid}>
            {products.map(product => (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.productImgContainer}>
                  {product.discount > 0 && <div style={styles.discountBadge}>-{product.discount}%</div>}
                  <button style={styles.wishlistBtn}><FaHeart /></button>
                  <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
                </div>
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <div style={styles.rating}>
                    {[...Array(5)].map((_, i) => <FaStar key={i} style={styles.starIcon} />)}
                    <span style={styles.ratingText}>4.8 (112)</span>
                  </div>
                  <div style={styles.priceRow}>
                    <span style={styles.currentPrice}>₹{product.price - (product.price * product.discount / 100)}</span>
                    {product.discount > 0 && <span style={styles.originalPrice}>₹{product.price}</span>}
                  </div>
                  <div style={styles.actionRow}>
                    <select style={styles.weightSelect}>
                      <option>250g</option>
                      <option>500g</option>
                      <option>1kg</option>
                    </select>
                    <button style={styles.addToCartIconBtn}><FaShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Feature Banners */}
      <section style={styles.featureBanners}>
        <div style={{...styles.featureCard, backgroundImage: 'url(https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop)'}}>
          <div style={styles.featureOverlay}>
            <h3>Luxury Gift Hampers<br/>For Every Occasion</h3>
            <p>Beautifully curated hampers for your loved ones.</p>
            <button style={styles.btnOutline}>Explore Hampers</button>
          </div>
        </div>
        <div style={{...styles.featureCard, backgroundImage: 'url(https://images.unsplash.com/photo-1620601058204-7476e33d02d3?q=80&w=600&auto=format&fit=crop)'}}>
          <div style={styles.featureOverlay}>
            <h3>Premium<br/>Imported Nuts</h3>
            <p>Handpicked from the best farms across the world.</p>
            <button style={styles.btnOutline}>Shop Now</button>
          </div>
        </div>
        <div style={{...styles.featureCard, backgroundImage: 'url(https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=600&auto=format&fit=crop)'}}>
          <div style={styles.featureOverlay}>
            <h3>Superfoods<br/>For Super You</h3>
            <p>Seeds that power your health naturally every day.</p>
            <button style={styles.btnOutline}>Shop Seeds</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whyChooseSection}>
        <h4 style={styles.sectionSubDark}>WHY CHOOSE NUTSSHELL</h4>
        <h2 style={styles.sectionTitleDark}>Purity. Quality. Trust.</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureItem}>
            <div style={styles.featureIconWrap}><FaCertificate style={styles.goldIconLg}/></div>
            <h4>Premium Quality</h4>
            <p>Handpicked & Sorted</p>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIconWrap}><FaGlobe style={styles.goldIconLg}/></div>
            <h4>Imported Selection</h4>
            <p>Worldwide Sourcing</p>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIconWrap}><FaHeart style={styles.goldIconLg}/></div>
            <h4>Healthy Lifestyle</h4>
            <p>Supports Your Health</p>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIconWrap}><FaShieldAlt style={styles.goldIconLg}/></div>
            <h4>Trusted Store</h4>
            <p>Thousands of Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={styles.storySection}>
        <div style={styles.storyImageContainer}>
          <img src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=800&auto=format&fit=crop" alt="Our Story" style={styles.storyImage} />
        </div>
        <div style={styles.storyContent}>
          <h4 style={styles.sectionSub}>OUR STORY</h4>
          <h2 style={styles.sectionTitle}>A Journey of Passion, Purity & Purpose</h2>
          <p style={styles.storyText}>
            Our journey began with a simple mission — to bring the purest and finest quality dry fruits to every home. Today NUTSSHELL is a trusted destination where premium quality, authenticity, health and taste come together.
          </p>
          <button style={styles.btnPrimary}>Read Our Full Story</button>
        </div>
      </section>
    </div>
  );
};

const mockCategories = [
  { name: 'Dry Fruits', imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Imported Nuts', imageUrl: 'https://images.unsplash.com/photo-1574548489728-1cebc91428ec?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Healthy Seeds', imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Dates', imageUrl: 'https://images.unsplash.com/photo-1604543501783-6d04ab571ff7?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Exotic Fruits', imageUrl: 'https://images.unsplash.com/photo-1620601058204-7476e33d02d3?q=80&w=200&h=200&auto=format&fit=crop' }
];

const mockProducts = [
  { id: 1, name: 'Premium Pistachios (Iranian)', price: 999, discount: 20, imageUrl: 'https://images.unsplash.com/photo-1563121516-4148e6a14352?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 2, name: 'California Almonds Premium', price: 820, discount: 15, imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 3, name: 'Kashmiri Walnut Kernel', price: 650, discount: 0, imageUrl: 'https://images.unsplash.com/photo-1574548489728-1cebc91428ec?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 4, name: 'Roasted Cashew Nuts', price: 666, discount: 10, imageUrl: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=400&h=400&auto=format&fit=crop' },
  { id: 5, name: 'Premium Medjool Dates', price: 350, discount: 0, imageUrl: 'https://images.unsplash.com/photo-1604543501783-6d04ab571ff7?q=80&w=400&h=400&auto=format&fit=crop' },
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#FAF7F2'
  },
  heroSection: {
    height: '600px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=1920&h=800&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(26, 17, 11, 0.75)', // Dark brown overlay
    display: 'flex',
    alignItems: 'center',
    padding: '0 10%'
  },
  heroContent: {
    maxWidth: '600px',
    color: '#fff'
  },
  heroTitle: {
    fontSize: '4rem',
    fontFamily: "'Playfair Display', serif",
    lineHeight: '1.2',
    margin: '0 0 20px 0'
  },
  heroTitleGold: {
    color: '#C59B5F' // Gold
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: '#EFEBE1',
    lineHeight: '1.6',
    marginBottom: '40px'
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    marginBottom: '50px'
  },
  btnPrimary: {
    backgroundColor: '#C59B5F',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '30px',
    cursor: 'pointer'
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #C59B5F',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '30px',
    cursor: 'pointer'
  },
  heroTrust: {
    display: 'flex',
    gap: '30px',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '30px'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  goldIcon: {
    color: '#C59B5F',
    fontSize: '1.5rem'
  },
  categorySection: {
    padding: '60px 5%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    position: 'relative',
    marginTop: '-40px',
    borderRadius: '20px',
    margin: '-40px 5% 60px 5%'
  },
  categoryScroll: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    overflowX: 'auto'
  },
  categoryCircleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  categoryCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    padding: '5px',
    border: '2px solid #EFEBE1',
    overflow: 'hidden'
  },
  categoryImg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  categoryName: {
    fontWeight: 'bold',
    color: '#3E2723'
  },
  productsSection: {
    padding: '0 5% 60px 5%'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '40px'
  },
  sectionSub: {
    color: '#C59B5F',
    letterSpacing: '2px',
    margin: '0 0 10px 0',
    fontSize: '0.8rem'
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    color: '#3E2723',
    margin: 0
  },
  filterTabs: {
    display: 'flex',
    gap: '15px'
  },
  filterBtn: {
    backgroundColor: '#EFEBE1',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '20px',
    color: '#3E2723',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s'
  },
  filterBtnActive: {
    backgroundColor: '#C59B5F',
    color: '#fff'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '30px'
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column'
  },
  productImgContainer: {
    position: 'relative',
    height: '200px',
    backgroundColor: '#FAF7F2',
    borderRadius: '12px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  productImage: {
    width: '90%',
    height: '90%',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  discountBadge: {
    position: 'absolute',
    top: '10px', left: '10px',
    backgroundColor: '#D32F2F',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  },
  wishlistBtn: {
    position: 'absolute',
    top: '10px', right: '10px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px', height: '30px',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    color: '#ccc',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  productInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  productName: {
    fontSize: '1.1rem',
    color: '#3E2723',
    margin: '0 0 10px 0'
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '15px'
  },
  starIcon: {
    color: '#F4B41A',
    fontSize: '0.8rem'
  },
  ratingText: {
    fontSize: '0.8rem',
    color: '#888'
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px'
  },
  currentPrice: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#3E2723'
  },
  originalPrice: {
    fontSize: '0.9rem',
    color: '#aaa',
    textDecoration: 'line-through'
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  },
  weightSelect: {
    padding: '8px',
    border: '1px solid #EFEBE1',
    borderRadius: '8px',
    backgroundColor: '#FAF7F2',
    color: '#3E2723',
    outline: 'none'
  },
  addToCartIconBtn: {
    backgroundColor: '#C59B5F',
    color: '#fff',
    border: 'none',
    width: '40px', height: '40px',
    borderRadius: '8px',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    cursor: 'pointer'
  },
  featureBanners: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '0 5% 60px 5%'
  },
  featureCard: {
    height: '300px',
    borderRadius: '16px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  featureOverlay: {
    position: 'absolute',
    top:0, left:0, right:0, bottom:0,
    backgroundColor: 'rgba(42, 26, 18, 0.6)',
    padding: '40px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  btnOutline: {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '20px',
    width: 'fit-content',
    marginTop: '20px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  whyChooseSection: {
    backgroundColor: '#1E130C',
    color: '#EFEBE1',
    padding: '80px 5%',
    textAlign: 'center'
  },
  sectionSubDark: {
    color: '#C59B5F',
    letterSpacing: '2px',
    margin: '0 0 10px 0',
    fontSize: '0.8rem'
  },
  sectionTitleDark: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    color: '#fff',
    margin: '0 0 50px 0'
  },
  featuresGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '5%',
    flexWrap: 'wrap'
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  featureIconWrap: {
    width: '80px', height: '80px',
    border: '1px dashed #C59B5F',
    borderRadius: '50%',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  goldIconLg: {
    color: '#C59B5F',
    fontSize: '2rem'
  },
  storySection: {
    display: 'flex',
    padding: '80px 5%',
    alignItems: 'center',
    gap: '50px',
    backgroundColor: '#fff'
  },
  storyImageContainer: {
    flex: 1,
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  storyImage: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  storyContent: {
    flex: 1
  },
  storyText: {
    color: '#555',
    lineHeight: '1.8',
    fontSize: '1.1rem',
    marginBottom: '30px'
  }
};

export default HomePage;
