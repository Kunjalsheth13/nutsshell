// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHeart, FaUser, FaShoppingCart, FaSearch, FaLeaf, FaMedal, FaTruck, FaShieldAlt } from 'react-icons/fa';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Top Info Bar */}
        <div style={styles.topBar}>
          <div style={styles.topBarContent}>
            <span style={styles.topBarItem}><FaLeaf style={styles.goldIcon} /> 100% Natural</span>
            <span style={styles.topBarItem}><FaMedal style={styles.goldIcon} /> Premium Quality</span>
            <span style={styles.topBarItem}><FaTruck style={styles.goldIcon} /> Fast Delivery</span>
            <span style={styles.topBarItem}><FaShieldAlt style={styles.goldIcon} /> FSSAI Certified</span>
          </div>
        </div>

        {/* Main Header */}
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.logoContainer}>
              <h1 style={styles.logoText}>NUTSSHELL</h1>
              <p style={styles.logoSubtext}>Your One-Stop Nut Shop</p>
            </div>
            <nav style={styles.nav}>
              <Link to="/" style={{...styles.navLink, ...styles.navLinkActive}}>Home</Link>
              <Link to="/" style={styles.navLink}>Shop ▾</Link>
              <Link to="/" style={styles.navLink}>Categories ▾</Link>
              <Link to="/" style={styles.navLink}>Gift Boxes</Link>
              <Link to="/" style={styles.navLink}>Our Story</Link>
              <Link to="/admin" style={styles.navLink}>Admin</Link>
            </nav>
          </div>
          
          <div style={styles.headerRight}>
            <div style={styles.searchBar}>
              <input type="text" placeholder="Search for nuts, seeds, dates..." style={styles.searchInput} />
              <FaSearch style={styles.searchIcon} />
            </div>
            <div style={styles.headerIcons}>
              <FaHeart style={styles.iconButton} />
              <FaUser style={styles.iconButton} />
              <button style={styles.cartButton}>
                <FaShoppingCart /> Cart (0)
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerTop}>
            <div style={styles.newsletter}>
              <h3>Stay Updated With Nutritious Tips & Exclusive Offers</h3>
              <p>Be the first to know about new arrivals, healthy recipes and special discounts.</p>
            </div>
            <div style={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email address" style={styles.newsletterInput} />
              <button style={styles.newsletterBtn}>Subscribe</button>
            </div>
          </div>
          <div style={styles.footerMain}>
            <div style={styles.footerCol}>
              <h1 style={styles.logoTextFooter}>NUTSSHELL</h1>
              <p style={styles.footerDesc}>Premium quality dry fruits, nuts, seeds, chocolates and healthy snacks delivered fresh to your doorstep.</p>
            </div>
            <div style={styles.footerCol}>
              <h4>Quick Links</h4>
              <p>Home</p><p>Shop</p><p>Categories</p><p>Contact Us</p>
            </div>
            <div style={styles.footerCol}>
              <h4>Customer Care</h4>
              <p>My Account</p><p>Track Order</p><p>FAQs</p><p>Shipping Policy</p>
            </div>
            <div style={styles.footerCol}>
              <h4>Contact Us</h4>
              <p>Shop No. 3 & 4, Nirma Building</p>
              <p>Ahmedabad - 380008</p>
              <p>📞 7043330890</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>© 2026 NUTSSHELL. All Rights Reserved.</p>
            <p>FSSAI License No | 10726026000671</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    fontFamily: "'Playfair Display', 'Segoe UI', serif",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAF7F2',
    color: '#333'
  },
  topBar: {
    backgroundColor: '#1E130C', // Very dark brown
    color: '#C59B5F', // Gold/Bronze
    padding: '8px 0',
    fontSize: '0.85rem'
  },
  topBarContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px'
  },
  topBarItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  goldIcon: {
    color: '#D4AF37'
  },
  header: {
    backgroundColor: '#FAF7F2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#3E2723',
    margin: 0,
    letterSpacing: '1px'
  },
  logoTextFooter: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    margin: '0 0 10px 0',
  },
  logoSubtext: {
    fontSize: '0.7rem',
    margin: 0,
    color: '#757575',
    textTransform: 'uppercase'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  navLink: {
    textDecoration: 'none',
    color: '#3E2723',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'color 0.2s'
  },
  navLinkActive: {
    color: '#C59B5F',
    borderBottom: '2px solid #C59B5F'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#EFEBE1',
    borderRadius: '20px',
    padding: '5px 15px',
    width: '250px'
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    padding: '8px',
    width: '100%',
    fontSize: '0.9rem'
  },
  searchIcon: {
    color: '#757575'
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  iconButton: {
    fontSize: '1.2rem',
    color: '#3E2723',
    cursor: 'pointer'
  },
  cartButton: {
    backgroundColor: '#C59B5F',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 15px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  main: {
    flex: 1
  },
  footer: {
    backgroundColor: '#1A110B',
    color: '#EFEBE1',
    display: 'flex',
    flexDirection: 'column'
  },
  footerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 5%',
    borderBottom: '1px solid #332'
  },
  newsletter: {
    flex: 1
  },
  newsletterForm: {
    display: 'flex',
    gap: '10px'
  },
  newsletterInput: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    width: '250px',
    backgroundColor: '#2A1A12',
    color: '#fff'
  },
  newsletterBtn: {
    backgroundColor: '#C59B5F',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  footerMain: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    padding: '40px 5%'
  },
  footerCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '0.9rem',
    color: '#aaa'
  },
  footerDesc: {
    lineHeight: '1.5'
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 5%',
    backgroundColor: '#0F0906',
    fontSize: '0.8rem',
    color: '#888'
  }
};

export default App;
