import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Navbar.css';

export default function Navbar() {
  const shopData = useShop() || {};
  const { wishlistCount = 0, cartCount = 0 } = shopData;

  // Auth Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Registering user:', formData);
    } else {
      console.log('Logging in user:', { email: formData.email, password: formData.password });
    }
    // Form submit ke baad modal close karein
    setIsAuthOpen(false);
  };

  return (
    <>
      <header className="fi-navbar">
        {/* 1. Left Section: Logo & Country Selector */}
        <div className="fi-nav-left">
          <Link to="/" className="fi-logo">
            <span className="fi-brand-name">fabindia</span>
            <span className="fi-brand-tagline">CELEBRATE INDIA</span>
          </Link>

          <div className="fi-country-selector">
            <span className="fi-flag">🇮🇳</span>
            <span className="fi-country-name">India</span>
            <svg className="fi-arrow" width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
              <path d="M0 0.5L5 5.5L10 0.5H0Z" />
            </svg>
          </div>
        </div>

        {/* 2. Middle Section: Pill Rounded Search Bar */}
        <div className="fi-nav-center">
          <div className="fi-search-box">
            <svg className="fi-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search here..."
              className="fi-search-input"
            />
          </div>
        </div>

        {/* 3. Right Section: Maroon Minimal Icons */}
        <div className="fi-nav-right">
          {/* Store Locator Icon */}
          <Link to="/stores" className="fi-icon-btn" title="Stores">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
              <circle cx="12" cy="9" r="3" />
            </svg>
          </Link>

          {/* User Profile Button (Opens Modal) */}
          <button
            type="button"
            className="fi-icon-btn fi-profile-trigger"
            title="Account"
            onClick={() => setIsAuthOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Wishlist Icon + Badge */}
          <Link to="/wishlist" className="fi-icon-btn" title="Wishlist">
            <div className="fi-badge-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistCount > 0 && <span className="fi-badge">{wishlistCount}</span>}
            </div>
          </Link>

          {/* Cart / Bag Icon + Badge */}
          <Link to="/bag" className="fi-icon-btn" title="Cart">
            <div className="fi-badge-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="fi-badge">{cartCount}</span>}
            </div>
          </Link>
        </div>
      </header>

      {/* 4. Login & Sign-Up Popup Modal */}
      {isAuthOpen && (
        <div className="auth-overlay" onClick={() => setIsAuthOpen(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="auth-close-btn"
              onClick={() => setIsAuthOpen(false)}
            >
              ✕
            </button>

            <div className="auth-header">
              <h2 className="auth-brand">fabindia</h2>
              <p className="auth-subtitle">
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </p>
            </div>

            <form className="auth-form" onSubmit={handleAuthSubmit}>
              {isSignUp && (
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              {!isSignUp && (
                <div className="forgot-password">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="auth-toggle">
              {isSignUp ? (
                <p>
                  Already have an account?{' '}
                  <button type="button" onClick={() => setIsSignUp(false)}>
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  New to Fabindia?{' '}
                  <button type="button" onClick={() => setIsSignUp(true)}>
                    Create Account
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}