import React from 'react';
import './Footer.css';

const footerNavLinks = [
  {
    title: 'LET US HELP YOU',
    links: [
      { label: 'Order Tracking', href: '#order-tracking' },
      { label: 'Shipping & Delivery', href: '#shipping' },
      { label: 'Returns & Exchanges', href: '#returns' },
      { label: 'Size Guides', href: '#size-guides' },
      { label: 'Bulk Corporate Orders', href: '#corporate-orders' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Customer Care', href: '#customer-care' },
      { label: 'Store Locator', href: '#store-locator' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'Gift Cards Support', href: '#gift-cards' },
      { label: 'Contact Us', href: '#contact-us' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'Our Heritage & Legacy', href: '#heritage' },
      { label: 'Artisan Stories', href: '#artisan-stories' },
      { label: 'Careers at Fabindia', href: '#careers' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Investor Relations', href: '#investor-relations' },
    ],
  },
  {
    title: 'ABOUT FABINDIA',
    links: [
      { label: 'Community Philosophy', href: '#community' },
      { label: 'Organic Farming Pacts', href: '#farming-pacts' },
      { label: 'Handloom Clusters', href: '#handloom-clusters' },
      { label: 'Bespoke Tailoring', href: '#bespoke-tailoring' },
      { label: 'Terms & Privacy', href: '#terms-privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        {/* Navigation Columns */}
        {footerNavLinks.map((col) => (
          <div key={col.title} className="footer-col">
            <h4 className="footer-heading">{col.title}</h4>
            <ul className="footer-list">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* App & Social Media Column */}
        <div className="footer-col footer-col-app">
          <h4 className="footer-heading">EXPERIENCE FABINDIA APP</h4>
          <p className="footer-subtext">
            Get exclusive festive previews & seamless shopping.
          </p>

          <div className="app-download-buttons">
            <a href="#playstore" className="app-badge">
              <span className="app-badge-subtitle">GET IT ON</span>
              <span className="app-badge-title">Google Play</span>
            </a>
            <a href="#appstore" className="app-badge">
              <span className="app-badge-subtitle">Download on the</span>
              <span className="app-badge-title">App Store</span>
            </a>
          </div>

          <div className="footer-social-section">
            <h4 className="footer-heading footer-social-heading">FOLLOW US</h4>
            <div className="footer-social-icons">
              {/* Instagram */}
              <a href="#instagram" aria-label="Instagram" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#facebook" aria-label="Facebook" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#twitter" aria-label="Twitter" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#youtube" aria-label="YouTube" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="footer-bottom-container">
        <p className="copyright-text">
          © 2026 Fabindia Limited. All Handcrafted Rights Reserved.
        </p>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="footer-separator">•</span>
          <a href="#terms">Terms of Service</a>
          <span className="footer-separator">•</span>
          <a href="#security">Security</a>
        </div>
      </div>
    </footer>
  );
}