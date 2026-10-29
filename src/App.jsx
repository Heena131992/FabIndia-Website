// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

// Common Components
import HeaderStrip from './components/HeaderStrip.jsx';
import Navbar from './components/Navbar.jsx';
import CategoryNav from './components/CategoryNav.jsx';
import BrandSeoStrip from './components/BrandSeoStrip.jsx';
import Footer from './components/Footer.jsx';
import { ShopProvider } from './context/ShopContext';
import WishlistPage from './pages/WishlistPage';
import BagPage from './pages/BagPage';

// Login Component
import Login from './components/Login.jsx';

// Checkout / Address Page Import karein
import CheckoutPage from './pages/CheckoutPage.jsx';

// Homepage Sections
import HeroSlider from './components/HeroSlider.jsx';
import QuickCurations from './components/QuickCurations.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import PromoBanners from './components/PromoBanners.jsx';
import ShopByStartingPrice from './components/ShopByStartingPrice.jsx';
import DecorHeader from './components/DecorHeader.jsx';
import DecorProductGrid from './components/DecorProductGrid.jsx';
import FestiveCampaignBanner from './components/FestiveCampaignBanner.jsx';
import OffersSection from './components/OffersSection.jsx';
import ServiceFeatureCards from './components/ServiceFeatureCards.jsx';
import OurPurposeSection from './components/OurPurposeSection.jsx';
import CategoryPage from './pages/CategoryPage.jsx';


function HomePage() {
  return (
    <>
      <HeroSlider />
      <QuickCurations />
      <SectionHeader />
      <PromoBanners />
      <ShopByStartingPrice />
      <DecorHeader />
      <DecorProductGrid />
      <FestiveCampaignBanner />
      <OffersSection />
      <ServiceFeatureCards />
      <OurPurposeSection />
    </>
  );
}

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Login successful hone par
  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setIsLoginOpen(false);
  };

  return (
    <ShopProvider>
      <Router>
        <div className="app-container">
          <HeaderStrip />
          <Navbar onLoginClick={() => setIsLoginOpen(true)} user={currentUser} />
          <CategoryNav />

          <main>
            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />



              {/* Bag Page */}
              <Route
                path="/bag"
                element={
                  <BagPage
                    user={currentUser}
                    openLoginModal={() => setIsLoginOpen(true)}
                  />
                }
              />

              {/* Step 2: Naya Checkout / Address Route */}
              <Route
                path="/checkout"
                element={<CheckoutPage user={currentUser} />}
              />

{/* Admin Routes */}
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>

          </main>

          <BrandSeoStrip />
          <Footer />

          {/* Login Modal */}
          <Login
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </div>
      </Router>
    </ShopProvider>
  );
}