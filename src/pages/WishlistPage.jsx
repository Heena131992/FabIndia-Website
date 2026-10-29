// src/pages/WishlistPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './WishlistPage.css';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, moveToBag } = useShop();

  return (
    <div className="shop-page-wrapper">
      <h1 className="shop-page-title">My Wishlist ({wishlist.length} Items)</h1>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <p>Aapki wishlist abhi khaali hai.</p>
          <Link to="/" className="shop-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="grid-product-card">
              <div className="prod-img-wrapper" style={{ position: 'relative' }}>
                <img src={item.image} alt={item.title} />
                <button
                  className="remove-fav-btn"
                  onClick={() => toggleWishlist(item)}
                  title="Remove from Wishlist"
                >
                  ✕
                </button>
              </div>

              <div className="prod-info">
                <h3 className="prod-title">{item.title}</h3>
                <div className="prod-pricing">
                  <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
                </div>
                <button className="add-cart-btn" onClick={() => moveToBag(item)}>
                  MOVE TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}