import React, { useState } from 'react';
import './DecorProductGrid.css';

const decorProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80',
    discount: '31% OFF',
    category: 'HOME & PUJA',
    title: 'Hand-Carved Brass Mayur T-Lite Diya',
    price: '₹1,290',
    originalPrice: '₹1,890',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=600&q=80',
    discount: '23% OFF',
    category: 'HOME & PUJA',
    title: 'Aethel Fluted Glazed Ceramic Floor Urn',
    price: '₹2,450',
    originalPrice: '₹3,200',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    discount: '24% OFF',
    category: 'HOME & PUJA',
    title: 'Hand-Hammered Antique Bell Wind Chime',
    price: '₹1,890',
    originalPrice: '₹2,490',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    discount: '32% OFF',
    category: 'HOME & PUJA',
    title: 'Jaipuri Block-Printed Silk Cushion Set (Pair)',
    price: '₹1,499',
    originalPrice: '₹2,199',
  },
];

const DecorProductGrid = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="decor-grid-section">
      <div className="decor-grid">
        {decorProducts.map((item) => (
          <div key={item.id} className="decor-card">
            {/* Image & Badges */}
            <div className="decor-card-media">
              <img src={item.image} alt={item.title} className="decor-product-img" />

              {/* Discount Tag */}
              <span className="decor-discount-badge">{item.discount}</span>

              {/* Wishlist Icon */}
              <button
                type="button"
                className={`decor-wishlist-btn ${wishlist[item.id] ? 'active' : ''}`}
                onClick={() => toggleWishlist(item.id)}
                aria-label="Add to Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={wishlist[item.id] ? '#883e43' : 'none'}
                  stroke={wishlist[item.id] ? '#883e43' : '#4a3f35'}
                  strokeWidth="1.8"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Info Body */}
            <div className="decor-card-body">
              <span className="decor-category">{item.category}</span>
              <h3 className="decor-item-title">{item.title}</h3>

              <div className="decor-card-footer">
                <div className="decor-price-group">
                  <span className="decor-curr-price">{item.price}</span>
                  <span className="decor-orig-price">{item.originalPrice}</span>
                </div>

                <button type="button" className="decor-add-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>ADD</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DecorProductGrid;