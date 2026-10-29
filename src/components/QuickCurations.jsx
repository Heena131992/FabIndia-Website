import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuickCurations.css';

const allCurations = [
  // Pehle 7 items
  {
    id: 1,
    title: "Women's Kurta",
    badge: 'New In',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
    link: '/category/womens-kurta',
  },
  {
    id: 2,
    title: "Men's Kurtas",
    badge: 'Festive',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
    link: '/category/mens-kurtas',
  },
  {
    id: 3,
    title: 'Solid Furniture',
    badge: 'Sheesham',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
    link: '/category/solid-furniture',
  },
  {
    id: 4,
    title: 'Under ₹999',
    badge: 'Value',
    textOnly: true,
    textDisplay: 'Under ₹999',
    link: '/category/under-999',
  },
  {
    id: 5,
    title: 'Fantastic Finds',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80',
    link: '/category/fantastic-finds',
  },
  {
    id: 6,
    title: 'Silk Saris',
    badge: 'Zari Silk',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    link: '/category/silk-saris',
  },
  {
    id: 7,
    title: 'Puja Essentials',
    badge: 'Pure Brass',
    textOnly: true,
    textDisplay: 'Puja Essentials',
    link: '/category/puja-essentials',
  },

  // Extra items jo VIEW ALL dabane par expand honge
  {
    id: 8,
    title: 'Handcrafted Lamps',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80',
    link: '/category/lamps',
  },
  {
    id: 9,
    title: 'Kids Festive',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&q=80',
    link: '/category/kids',
  },
  {
    id: 10,
    title: 'Cushion Covers',
    badge: 'Handloom',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80',
    link: '/category/cushions',
  },
  {
    id: 11,
    title: 'Organic Pantry',
    badge: 'Pure Organics',
    textOnly: true,
    textDisplay: 'Organic Pantry',
    link: '/category/organics',
  },
  {
    id: 12,
    title: 'Silver Jewellery',
    badge: 'Handmade',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
    link: '/category/jewellery',
  },
  {
    id: 13,
    title: 'Dining & Kitchen',
    badge: 'Ceramics',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=400&q=80',
    link: '/category/dining',
  },
  {
    id: 14,
    title: 'Gift Boxes',
    badge: 'Festive Pack',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=400&q=80',
    link: '/category/gifts',
  },
];

export default function QuickCurations() {
  const [showAll, setShowAll] = useState(false);

  // Toggle logic: showAll true hone par sabhi 14 dikhenge, varna pehle 7
  const visibleItems = showAll ? allCurations : allCurations.slice(0, 7);

  return (
    <section className="curations-section" aria-label="Quick Curations">
      <div className="curations-header">
        <div className="curations-title-wrap">
          <h2 className="curations-title">Quick Curations</h2>
          <p className="curations-subtitle">Explore handpicked craft treasures</p>
        </div>

        {/* View All Button */}
        <button
          type="button"
          className="curations-view-all-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'VIEW LESS ←' : 'VIEW ALL →'}
        </button>
      </div>

      <div className="curations-grid">
        {visibleItems.map((item) => (
          <Link key={item.id} to={item.link} className="curation-item">
            <div className="curation-avatar-wrap">
              {item.textOnly ? (
                <div className="curation-avatar-text">
                  <span>{item.textDisplay}</span>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="curation-avatar-img"
                  loading="lazy"
                />
              )}
              <span className="curation-badge">{item.badge}</span>
            </div>
            <span className="curation-label">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}