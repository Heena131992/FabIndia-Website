// src/components/ProductCardGrid.jsx
import React, { useState } from 'react';
import { products } from './productsData';
import './ProductCardGrid.css';

export default function ProductCardGrid() {
  // Shuru me 12 products show honge
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, products.length));
  };

  return (
    <section className="catalog-wrapper">
      <div className="catalog-header-info">
        <p>Showing {Math.min(visibleCount, products.length)} of {products.length} products</p>
      </div>

      <div className="product-grid-container">
        {products.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-img-box">
              {item.tag && <span className="product-tag">{item.tag}</span>}
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>

            <div className="product-details">
              <h4 className="product-title">{item.title}</h4>
              <div className="product-price-row">
                <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
                {item.originalPrice && (
                  <span className="old-price">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              <button className="buy-btn">Add to Bag</button>
            </div>
          </div>
        ))}
      </div>

      {/* Agar products bache hain to Load More button dikhega */}
      {visibleCount < products.length && (
        <div className="load-more-wrap">
          <button className="load-more-btn" onClick={handleLoadMore}>
            LOAD MORE PRODUCTS ({products.length - visibleCount} REMAINING)
          </button>
        </div>
      )}
    </section>
  );
}