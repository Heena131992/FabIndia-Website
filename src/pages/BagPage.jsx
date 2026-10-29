// src/pages/BagPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './BagPage.css';
import { useNavigate } from 'react-router-dom';

export default function BagPage({ openLoginModal, user, }) {
const navigate = useNavigate();
const handleProceed = () => {
    if (!user) {
      openLoginModal(); // Agar login nahi hai toh popup khulega
    } else {
      // Agar already logged in hai toh direct address/payment step par jayein
navigate('/checkout');
    }
  };
  const { cart, updateQuantity, removeFromCart } = useShop();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 1999 || subtotal === 0 ? 0 : 150;
  const total = subtotal + shipping;

  return (

    <div className="bag-page-container">
      <h1 className="bag-title">Shopping Bag ({cart.length} Products)</h1>

      {cart.length === 0 ? (
        <div className="empty-state">
          <p>Aapka Bag abhi khaali hai.</p>
          <Link to="/" className="shop-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="bag-layout">
          {/* Products List */}
          <div className="bag-items-list">
            {cart.map((item) => (
              <div key={item.id} className="bag-item-card">
                <img src={item.image} alt={item.title} className="bag-item-img" />
                
                <div className="bag-item-details">
                  <h3 className="bag-item-title">{item.title}</h3>
                  <p className="bag-item-price">₹{item.price.toLocaleString('en-IN')}</p>

                  <div className="quantity-controller">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>

                <div className="bag-item-actions">
                  <p className="item-subtotal">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Total Amount:</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button className="checkout-btn" onClick={handleProceed}>
      PROCEED TO CHECKOUT
    </button>
          </div>
        </div>
      )}
    </div>
  );
}