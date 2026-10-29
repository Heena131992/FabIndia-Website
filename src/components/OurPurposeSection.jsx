// src/components/OurPurposeSection.jsx
import React from 'react';
import './OurPurposeSection.css';

export default function OurPurposeSection() {
  return (
    <section className="purpose-section" aria-label="Our Purpose">
      <div className="purpose-container">
        <span className="purpose-eyebrow">OUR PURPOSE</span>
        <h2 className="purpose-quote">
          &ldquo;We celebrate the Hands that Wove our Nation&rdquo;
        </h2>
        <p className="purpose-description">
          For over six decades, Fabindia has partnered with over 55,000 rural artisans, weavers, and craftspeople across India, preserving indigenous textile legacies and celebrating mindful, sustainable living.
        </p>
      </div>
    </section>
  );
}