// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

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
  const [loading, setLoading] = useState(true);

  // Mock data to display before backend is fully hooked up
  useEffect(() => {
    const mockProducts: Product[] = [
      { id: 1, name: 'Cashew Nuts', price: 800, discount: 10, imageUrl: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=400&auto=format&fit=crop', category: { name: 'Premium Dry Fruits' } },
      { id: 2, name: 'Almond California', price: 900, discount: 0, imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=400&auto=format&fit=crop', category: { name: 'Premium Dry Fruits' } },
      { id: 3, name: 'Salted Pistachio', price: 1200, discount: 15, imageUrl: 'https://images.unsplash.com/photo-1563121516-4148e6a14352?q=80&w=400&auto=format&fit=crop', category: { name: 'Pistachios & Walnuts' } },
      { id: 4, name: 'Medjool Dates', price: 600, discount: 5, imageUrl: 'https://images.unsplash.com/photo-1604543501783-6d04ab571ff7?q=80&w=400&auto=format&fit=crop', category: { name: 'Premium Dates' } },
      { id: 5, name: 'Walnut Kernel', price: 1500, discount: 20, imageUrl: 'https://images.unsplash.com/photo-1574548489728-1cebc91428ec?q=80&w=400&auto=format&fit=crop', category: { name: 'Pistachios & Walnuts' } },
    ];
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  return (
    <div style={styles.container}>
      {/* Carousel Section */}
      <div style={styles.carousel}>
        <img 
          src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=1200&h=400&auto=format&fit=crop" 
          alt="Premium Nuts Banner" 
          style={styles.carouselImage} 
        />
        <div style={styles.carouselOverlay}>
          <h1 style={styles.carouselTitle}>Nutsshell: Your One-Stop Nut Shop</h1>
          <p style={styles.carouselSubtitle}>Trusted Nuts, Healthy Life</p>
        </div>
      </div>

      {/* Categories & Products */}
      <h2 style={styles.sectionTitle}>Our Premium Selection</h2>
      
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={styles.productGrid}>
          {products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.imageContainer}>
                <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
                {product.discount > 0 && (
                  <span style={styles.discountBadge}>{product.discount}% OFF</span>
                )}
              </div>
              <div style={styles.productInfo}>
                <p style={styles.categoryName}>{product.category.name}</p>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={styles.priceContainer}>
                  <span style={styles.currentPrice}>
                    ₹{product.price - (product.price * product.discount / 100)}
                  </span>
                  {product.discount > 0 && (
                    <span style={styles.originalPrice}>₹{product.price}</span>
                  )}
                </div>
                <button style={styles.addToCartBtn}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  carousel: {
    position: 'relative',
    width: '100%',
    height: '400px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  carouselOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center'
  },
  carouselTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  carouselSubtitle: {
    fontSize: '1.5rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#3E2723',
    textAlign: 'center',
    margin: '1rem 0'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem'
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    position: 'relative',
    height: '200px'
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  discountBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#E53935',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  productInfo: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  categoryName: {
    color: '#757575',
    fontSize: '0.85rem',
    marginBottom: '0.5rem'
  },
  productName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.5rem'
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  currentPrice: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#2E7D32'
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#9E9E9E',
    fontSize: '0.9rem'
  },
  addToCartBtn: {
    marginTop: 'auto',
    backgroundColor: '#D4AF37',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background-color 0.2s'
  }
};

export default HomePage;
