// src/pages/CategoryPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../components/productsData';
import './CategoryPage.css';
import { useShop } from '../context/ShopContext';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [sortBy, setSortBy] = useState('featured');
const { toggleWishlist, isInWishlist, addToCart } = useShop();
  
  // Shuruat mein pehle 24 products dikhenge
  const [visibleCount, setVisibleCount] = useState(24);

  // Hyphen aur spaces ignore karke exact match
  const cleanSlug = (str) => str?.toLowerCase().replace(/[-\s]/g, '') || '';

  const categoryProducts = products.filter(
    (item) => cleanSlug(item.category) === cleanSlug(categorySlug)
  );

  const categoryTitle =
    categoryProducts.length > 0
      ? categoryProducts[0].categoryName
      : categorySlug?.replace('-', ' ').toUpperCase();

  // Sorting
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    if (sortBy === 'low-high') return a.price - b.price;
    if (sortBy === 'high-low') return b.price - a.price;
    return a.id - b.id;
  });

  // Ek baar mein 24 aur products load honge
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <div className="category-page-wrapper">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <strong>{categoryTitle}</strong>
      </nav>

      <div className="category-header">
        <div>
          <h1 className="category-heading">{categoryTitle}</h1>
          <p className="category-count">
            Showing {Math.min(visibleCount, sortedProducts.length)} of {sortedProducts.length} items
          </p>
        </div>

        <div className="sort-dropdown">
          <label htmlFor="sortSelect">Sort By: </label>
          <select
            id="sortSelect"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="no-products">
          <h3>Is category mein abhi koi product available nahi hai.</h3>
          <Link to="/" className="back-btn">Home par wapas jayein</Link>
        </div>
      ) : (
        <>
         <div className="products-grid">
      {sortedProducts.slice(0, visibleCount).map((prod) => {
        const isFav = isInWishlist(prod.id);

        return (
          <div key={prod.id} className="grid-product-card">
            <div className="prod-img-wrapper" style={{ position: 'relative' }}>
              {prod.tag && <span className="prod-badge">{prod.tag}</span>}
              
              {/* Wishlist Heart Button */}
              <button
                onClick={() => toggleWishlist(prod)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  zIndex: 2
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={isFav ? '#8b3a42' : 'none'}
                  stroke={isFav ? '#8b3a42' : '#555'}
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              <img src={prod.image} alt={prod.title} loading="lazy" />
            </div>

            <div className="prod-info">
              <h3 className="prod-title">{prod.title}</h3>
              <div className="prod-pricing">
                <span className="current-price">₹{prod.price.toLocaleString('en-IN')}</span>
                {prod.originalPrice && (
                  <span className="original-price">₹{prod.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(prod)}>
                ADD TO BAG
              </button>
            </div>
          </div>
        );
      })}
    </div>

          {/* Agar 50 ya 100 se zyada items bache hain toh button dikhega */}
          {visibleCount < sortedProducts.length && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                onClick={handleLoadMore}
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#551922',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  letterSpacing: '1px'
                }}
              >
                LOAD MORE PRODUCTS ({sortedProducts.length - visibleCount} REMAINING)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}