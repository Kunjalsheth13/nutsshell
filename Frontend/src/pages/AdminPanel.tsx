// @ts-nocheck
import React, { useState } from 'react';
import { FaPlus, FaImage, FaTag } from 'react-icons/fa';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('categories');

  return (
    <div style={styles.adminContainer}>
      <h1 style={styles.headerTitle}>Admin Dashboard</h1>
      
      <div style={styles.tabs}>
        <button 
          style={activeTab === 'categories' ? { ...styles.tabBtn, ...styles.activeTab } : styles.tabBtn}
          onClick={() => setActiveTab('categories')}
        >
          Master Categories
        </button>
        <button 
          style={activeTab === 'products' ? { ...styles.tabBtn, ...styles.activeTab } : styles.tabBtn}
          onClick={() => setActiveTab('products')}
        >
          Manage Products
        </button>
        <button 
          style={activeTab === 'carousel' ? { ...styles.tabBtn, ...styles.activeTab } : styles.tabBtn}
          onClick={() => setActiveTab('carousel')}
        >
          Carousel Images
        </button>
      </div>

      <div style={styles.contentArea}>
        {activeTab === 'categories' && <CategoryManager />}
        {activeTab === 'products' && <ProductManager />}
        {activeTab === 'carousel' && <CarouselManager />}
      </div>
    </div>
  );
};

const CategoryManager = () => (
  <div style={styles.card}>
    <h2>Add New Category / Sub-Category</h2>
    <form style={styles.form}>
      <div style={styles.formGroup}>
        <label>Category Name</label>
        <input type="text" placeholder="e.g. Premium Dry Fruits" style={styles.input} />
      </div>
      <button style={styles.submitBtn}><FaPlus /> Add Category</button>
    </form>
  </div>
);

const ProductManager = () => (
  <div style={styles.card}>
    <h2>Add New Product</h2>
    <form style={styles.form}>
      <div style={styles.formRow}>
        <div style={styles.formGroup}>
          <label>Product Name</label>
          <input type="text" placeholder="e.g. Cashew Nuts" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label>Category</label>
          <select style={styles.input}>
            <option>Select Category...</option>
            <option>Premium Dry Fruits</option>
            <option>Pistachios & Walnuts</option>
          </select>
        </div>
      </div>
      
      <div style={styles.formRow}>
        <div style={styles.formGroup}>
          <label>Price (₹)</label>
          <input type="number" placeholder="800" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label><FaTag /> Individual Discount (%)</label>
          <input type="number" placeholder="10" style={styles.input} />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label><FaImage /> Image URL (Cloudinary / Unsplash)</label>
        <input type="text" placeholder="https://..." style={styles.input} />
      </div>

      <button style={styles.submitBtn}><FaPlus /> Save Product</button>
    </form>
  </div>
);

const CarouselManager = () => (
  <div style={styles.card}>
    <h2>Add Carousel Image</h2>
    <form style={styles.form}>
      <div style={styles.formGroup}>
        <label><FaImage /> Image URL</label>
        <input type="text" placeholder="https://..." style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label>Title (Optional)</label>
        <input type="text" placeholder="Banner Title" style={styles.input} />
      </div>
      <button style={styles.submitBtn}><FaPlus /> Add to Carousel</button>
    </form>
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  adminContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  headerTitle: {
    color: '#3E2723',
    borderBottom: '2px solid #D4AF37',
    paddingBottom: '0.5rem'
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    borderBottom: '1px solid #ddd'
  },
  tabBtn: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#757575',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: 'all 0.2s'
  },
  activeTab: {
    color: '#D4AF37',
    borderBottomColor: '#D4AF37'
  },
  contentArea: {
    padding: '1rem 0'
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  formRow: {
    display: 'flex',
    gap: '1rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: 1
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    fontFamily: 'inherit'
  },
  submitBtn: {
    backgroundColor: '#3E2723',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    alignSelf: 'flex-start',
    marginTop: '1rem'
  }
};

export default AdminPanel;
