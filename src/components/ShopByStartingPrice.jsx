import React from 'react';
import './ShopByStartingPrice.css';

const priceCards = [
  {
    id: 1,
    title: 'Solid Wood Furniture',
    subtitle: 'Sheesham & Teak Heirlooms',
    price: '₹8,990',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    link: '#solid-wood-furniture',
  },
  {
    id: 2,
    title: 'Lamps & Lampshades',
    subtitle: 'Parchment & Brass Lights',
    price: '₹1,500',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    link: '#lamps-lampshades',
  },
  {
    id: 3,
    title: 'Festive Gift Sets',
    subtitle: 'Luxury Hampers & Sweets',
    price: '₹1,090',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80',
    link: '#festive-gift-sets',
  },
  {
    id: 4,
    title: 'Handcrafted Puja Essentials',
    subtitle: 'Pure Brass Diyas & Incense',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80',
    link: '#handcrafted-puja-essentials',
  },
];

export default function ShopByStartingPrice() {
  return (
    <section className="starting-price-section" aria-label="Shop By Starting Price">
      <div className="starting-price-header">
        <h2 className="starting-price-title">Shop By Starting Price</h2>
        <p className="starting-price-subtitle">
          Authentic craftsmanship priced honestly for every home
        </p>
      </div>

      <div className="starting-price-grid">
        {priceCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            className="price-card"
          >
            <div className="price-card-image-wrap">
              <img
                src={card.image}
                alt={card.title}
                className="price-card-image"
                loading="lazy"
              />
            </div>

            <div className="price-card-content">
              <h3 className="price-card-title">{card.title}</h3>
              <p className="price-card-desc">{card.subtitle}</p>
              <div className="price-card-pill">
                Starting <span className="price-card-value">{card.price}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}