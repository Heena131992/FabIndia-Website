import { useState } from 'react';
import './LoginModal.css';

export default function LoginModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Registering user:', formData);
    } else {
      console.log('Logging in user:', { email: formData.email, password: formData.password });
    }
    // Form submit hone par modal band karna:
    onClose();
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Modal Header */}
        <div className="auth-header">
          <h2 className="auth-brand">fabindia</h2>
          <p className="auth-subtitle">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

        {/* Toggle Login / Sign Up */}
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
  );
}