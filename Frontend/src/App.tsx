import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <header style={styles.header}>
          <div style={styles.logo}>NUTSSHELL</div>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/admin" style={styles.navLink}>Admin Panel</Link>
          </nav>
        </header>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>

        <footer style={styles.footer}>
          <p>Goodness of Nature, Delivered with Trust.</p>
        </footer>
      </div>
    </Router>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAF7F2',
    color: '#333'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#D4AF37', // Gold color similar to premium quality badge
    letterSpacing: '2px'
  },
  nav: {
    display: 'flex',
    gap: '1.5rem'
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '600'
  },
  main: {
    flex: 1,
    padding: '2rem 5%'
  },
  footer: {
    backgroundColor: '#3E2723', // Dark brown
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: 'auto'
  }
};

export default App;
