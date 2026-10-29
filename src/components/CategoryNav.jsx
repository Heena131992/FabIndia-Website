// src/components/CategoryNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

export default function CategoryNav() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="category-navbar-wrap">
      <ul className="nav-items-list">
        {/* WOMEN Menu with Mega Dropdown */}
        <li
          className="nav-item has-dropdown"
          onMouseEnter={() => setActiveMenu('women')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link to="/category/all-women" className="nav-link main-category-link">
            WOMEN
          </Link>

          {activeMenu === 'women' && (
            <div className="mega-dropdown-menu">
              <div className="mega-dropdown-content">
                {/* Column 1: All in Women & Ethnic Wear */}
                <div className="dropdown-col">
                  <h4 className="top-category-link">
                    <Link to="/category/all-women">All In Women</Link>
                  </h4>
                  <h4 className="section-title">Ethnic Wear</h4>
                  <ul className="sub-links-list">
                    <li><Link to="/category/kurtas">Kurtas</Link></li>
                    <li><Link to="/category/dupattas">Dupattas</Link></li>
                    <li><Link to="/category/saris-blouses">Saris & Blouses</Link></li>
                    <li><Link to="/category/churidars-salwars">Churidars & Salwars</Link></li>
                    <li><Link to="/category/ethnic-pants-skirts">Ethnic Pants & Skirts</Link></li>
                    <li><Link to="/category/kurta-sets">Kurta Sets</Link></li>
                  </ul>
                </div>

                {/* Column 2: Western Wear, Shawls & Sleepwear */}
                <div className="dropdown-col">
                  <ul className="sub-links-list mb-12">
                    <li><Link to="/category/shawls">Shawls</Link></li>
                  </ul>
                  <h4 className="section-title">Western Wear</h4>
                  <ul className="sub-links-list">
                    <li><Link to="/category/dresses-jumpsuits">Dresses & Jumpsuits</Link></li>
                    <li><Link to="/category/tops-shirts-tunics">Tops, Shirts & Tunics</Link></li>
                    <li><Link to="/category/formal-casual-pants">Formal & Casual Pants</Link></li>
                    <li><Link to="/category/skirts-shorts">Skirts & Shorts</Link></li>
                    <li><Link to="/category/co-ord-sets">Co-ord Sets</Link></li>
                    <li><Link to="/category/outerwear">Outerwear</Link></li>
                  </ul>
                  <h4 className="section-title mt-16">
                    <Link to="/category/sleepwear">Sleepwear</Link>
                  </h4>
                </div>

                {/* Column 3: Footwear, Accessories, Jewellery */}
                <div className="dropdown-col">
                  <h4 className="section-title">
                    <Link to="/category/footwear">Footwear</Link>
                  </h4>
                  
                  <h4 className="section-title mt-16">Accessories</h4>
                  <ul className="sub-links-list">
                    <li><Link to="/category/bags-wallets">Bags & Wallets</Link></li>
                    <li><Link to="/category/stoles-scarves">Stoles & Scarves</Link></li>
                    <li><Link to="/category/winter-accessories">Winter Accessories</Link></li>
                  </ul>

                  <h4 className="section-title mt-16">Jewellery</h4>
                  <ul className="sub-links-list">
                    <li><Link to="/category/silver-jewellery">Silver Jewellery</Link></li>
                    <li><Link to="/category/fashion-jewellery">Fashion Jewellery</Link></li>
                  </ul>
                </div>

                {/* Column 4: Collection */}
                <div className="dropdown-col">
                  <h4 className="section-title">Collection</h4>
                  <ul className="sub-links-list">
                    <li><Link to="/category/gifting">Gifting</Link></li>
                    <li><Link to="/category/festive">Festive</Link></li>
                    <li><Link to="/category/everyday-living">Everyday Living</Link></li>
                    <li><Link to="/category/indigo">Indigo</Link></li>
                    <li><Link to="/category/wedding">Wedding</Link></li>
                    <li><Link to="/category/summer">Summer</Link></li>
                    <li><Link to="/category/winterwear">Winterwear</Link></li>
                    <li><Link to="/category/sale">Sale</Link></li>
                  </ul>
                </div>

                {/* Column 5: Right Banner / Campaign Badge */}
                <div className="dropdown-col banner-col">
                  <div className="svarnim-badge">
                    <span className="svarnim-title">SVARNIM</span>
                    <span className="svarnim-subtitle">Golden Moments</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>
{/* MEN Category Item with Mega Dropdown */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('men')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/all-men" className="nav-link">
    MEN
  </Link>

  {activeMenu === 'men' && (
    <div className="mega-dropdown-menu men-mega-menu">
      <div className="men-dropdown-grid">
        
        {/* Column 1: All In Men & Ethnic Wear */}
        <div className="men-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/all-men" className="men-main-heading">All In Men</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="men-main-heading">Ethnic Wear</span>
          </div>
          <ul className="men-sub-list">
            <li><Link to="/category/men-kurtas">Kurtas</Link></li>
            <li><Link to="/category/nehru-jackets">Nehru Jackets</Link></li>
            <li><Link to="/category/churidars-pyjamas">Churidars & Pyjamas</Link></li>
            <li><Link to="/category/salwars-dhotis">Salwars & Dhotis</Link></li>
            <li><Link to="/category/indian-sets">Indian sets</Link></li>
          </ul>
        </div>

        {/* Column 2: Western Wear & Accessories */}
        <div className="men-col">
          <div className="col-heading-wrap">
            <span className="men-main-heading">Western Wear</span>
          </div>
          <ul className="men-sub-list">
            <li><Link to="/category/men-shirts">Shirts</Link></li>
            <li><Link to="/category/men-pants">Pants</Link></li>
            <li><Link to="/category/men-shorts">Shorts</Link></li>
            <li><Link to="/category/men-tshirts">T-Shirts</Link></li>
            <li><Link to="/category/men-jackets">Jackets</Link></li>
          </ul>

          <div className="col-heading-wrap mt-22">
            <span className="men-main-heading">Accessories</span>
          </div>
        </div>

        {/* Column 3: Stoles/Shawls, Footwear, Custom Kurtas, Collection */}
        <div className="men-col">
          <ul className="men-sub-list mb-18">
            <li><Link to="/category/men-stoles">Stoles</Link></li>
            <li><Link to="/category/men-shawls">Shawls</Link></li>
            <li><Link to="/category/men-bags-wallets">Bags & Wallets</Link></li>
          </ul>

          <div className="col-heading-wrap mb-18">
            <Link to="/category/men-footwear" className="men-main-heading">Footwear</Link>
          </div>

          <div className="col-heading-wrap mb-18">
            <Link to="/category/custom-kurtas" className="men-main-heading">Custom Kurtas</Link>
          </div>

          <div className="col-heading-wrap">
            <Link to="/category/men-collection" className="men-main-heading">Collection</Link>
          </div>
        </div>

        {/* Column 4: Collection Sub-items & Sale */}
        <div className="men-col">
          <ul className="men-sub-list">
            <li><Link to="/category/men-festive">Festive</Link></li>
            <li><Link to="/category/men-everyday-living">Everyday Living</Link></li>
            <li><Link to="/category/men-indigo">Indigo</Link></li>
            <li><Link to="/category/men-wedding">Wedding</Link></li>
            <li><Link to="/category/men-summer">Summer</Link></li>
            <li><Link to="/category/men-winterwear">Winterwear</Link></li>
          </ul>

          <div className="col-heading-wrap mt-22">
            <Link to="/category/men-sale" className="men-main-heading men-sale-title">Sale</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>

        {/* Baaki Navigation Tabs */}
        
      {/* HOME & LIVING Dropdown Menu */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('home')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/all-home-living" className="nav-link">
    HOME & LIVING
  </Link>

  {activeMenu === 'home' && (
    <div className="mega-dropdown-menu home-mega-menu">
      <div className="home-dropdown-grid">
        
        {/* Column 1: All In, Bed Linen, Cushions, Curtains */}
        <div className="home-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/all-home-living" className="home-main-heading">All In Home & Living</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="home-main-heading">Bed Linen</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/bedcovers">Bedcovers</Link></li>
            <li><Link to="/category/bedsheets">Bedsheets</Link></li>
            <li><Link to="/category/dohars">Dohars</Link></li>
            <li><Link to="/category/quilts">Quilts</Link></li>
            <li><Link to="/category/pillow-covers">Pillow Covers</Link></li>
            <li><Link to="/category/throws">Throws</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="home-main-heading">Cushions & Cushion Covers</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/cushion-covers">Cushion Covers</Link></li>
            <li><Link to="/category/bolster-covers">Bolster Covers</Link></li>
            <li><Link to="/category/floor-cushions">Floor Cushions</Link></li>
            <li><Link to="/category/chair-pads">Chair Pads</Link></li>
            <li><Link to="/category/fillers">Fillers</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <Link to="/category/curtains" className="home-main-heading">Curtains</Link>
          </div>
        </div>

        {/* Column 2: Bath, Lighting, Kitchen & Dining */}
        <div className="home-col">
          <div className="col-heading-wrap">
            <span className="home-main-heading">Bath</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/bathrobes">Bathrobes</Link></li>
            <li><Link to="/category/bath-accessories">Bath Accessories</Link></li>
            <li><Link to="/category/bath-mats">Bath Mats</Link></li>
            <li><Link to="/category/towels">Towels</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="home-main-heading">Lighting</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/table-lamps">Table Lamps</Link></li>
            <li><Link to="/category/floor-lamps">Floor Lamps</Link></li>
            <li><Link to="/category/hanging-wall-lamps">Hanging & Wall Lamps</Link></li>
            <li><Link to="/category/lampshades">Lampshades</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="home-main-heading">Kitchen & Dining</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/dinner-serveware">Dinner & Serveware</Link></li>
            <li><Link to="/category/drinkware">Drinkware</Link></li>
            <li><Link to="/category/kitchenware">Kitchenware</Link></li>
            <li><Link to="/category/table-linen">Table Linen</Link></li>
          </ul>
        </div>

        {/* Column 3: Dining Accessories, Home Decor, Floor Coverings */}
        <div className="home-col">
          <ul className="home-sub-list mb-18">
            <li><Link to="/category/dining-accessories">Dining Accessories</Link></li>
          </ul>

          <div className="col-heading-wrap">
            <span className="home-main-heading">Home Decor</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/candles-stands">Candles & Candle Stands</Link></li>
            <li><Link to="/category/incense-fragrances">Incense & Fragrances</Link></li>
            <li><Link to="/category/diyas-lamps-lanterns">Diyas, Lamps & Lanterns</Link></li>
            <li><Link to="/category/vases">Vases</Link></li>
            <li><Link to="/category/photo-frames">Photo Frames</Link></li>
            <li><Link to="/category/clocks">Clocks</Link></li>
            <li><Link to="/category/accents">Accents</Link></li>
            <li><Link to="/category/hardwares">Hardwares</Link></li>
            <li><Link to="/category/mirrors-wall-art">Mirrors & Wall Art</Link></li>
            <li><Link to="/category/garden">Garden</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="home-main-heading">Floor Coverings</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/dhurries">Dhurries</Link></li>
            <li><Link to="/category/door-mats">Door Mats</Link></li>
          </ul>
        </div>

        {/* Column 4: Storage, Accessories, Collection, Gifting, Sale */}
        <div className="home-col">
          <ul className="home-sub-list mb-18">
            <li><Link to="/category/boxes">Boxes</Link></li>
            <li><Link to="/category/baskets">Baskets</Link></li>
          </ul>

          <div className="col-heading-wrap">
            <span className="home-main-heading">Accessories</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/stationery">Stationery</Link></li>
            <li><Link to="/category/gift-packaging">Gift Packaging</Link></li>
            <li><Link to="/category/games-toys">Games & Toys</Link></li>
            <li><Link to="/category/personal-accessories">Personal Accessories</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="home-main-heading">Collection</span>
          </div>
          <ul className="home-sub-list">
            <li><Link to="/category/collection-winter">Winter</Link></li>
            <li><Link to="/category/collection-wedding">Wedding</Link></li>
            <li><Link to="/category/collection-summer">Summer</Link></li>
            <li><Link to="/category/collection-indigo">Indigo</Link></li>
            <li><Link to="/category/collection-pm-vishwakarma">PM Vishwakarma</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <Link to="/category/collection-gifting" className="home-main-heading">Gifting</Link>
          </div>

          <div className="col-heading-wrap mt-16">
            <Link to="/category/all-home-living" className="home-main-heading">Sale</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
{/* KIDS Mega Dropdown Menu */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('kids')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/all-kids" className="nav-link">
    KIDS
  </Link>

  {activeMenu === 'kids' && (
    <div className="mega-dropdown-menu kids-mega-menu">
      <div className="kids-dropdown-grid">
        
        {/* Column 1: All In Kids, Boys Ethnic Wear, Boys Western Wear */}
        <div className="kids-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/all-kids" className="kids-main-heading">All In Kids</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="kids-main-heading">Boys Ethnic Wear</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/kids-boys-kurtas">Kurtas</Link></li>
            <li><Link to="/category/kids-boys-jackets">Jackets</Link></li>
            <li><Link to="/category/kids-boys-churidars-dhotis">Churidars, Pyjamas & Dhotis</Link></li>
            <li><Link to="/category/kids-boys-sets">Sets</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="kids-main-heading">Boys Western Wear</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/kids-boys-shirts-kurtas">Shirts & Short Kurtas</Link></li>
            <li><Link to="/category/kids-boys-pants-shorts">Pants & Shorts</Link></li>
          </ul>
        </div>

        {/* Column 2: Jackets, Girls Ethnic Wear, Girls Western Wear */}
        <div className="kids-col">
          <ul className="kids-sub-list mb-18">
            <li><Link to="/category/kids-boys-jackets">Jackets</Link></li>
          </ul>

          <div className="col-heading-wrap">
            <span className="kids-main-heading">Girls Ethnic Wear</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/kids-girls-kurtas">Kurtas</Link></li>
            <li><Link to="/category/kids-girls-ethnic-sets">Ethnic Sets</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="kids-main-heading">Girls Western Wear</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/kids-girls-dress-jumpsuits">Dress & Jumpsuits</Link></li>
            <li><Link to="/category/kids-girls-tops-tshirts">Tops & T-Shirts</Link></li>
            <li><Link to="/category/kids-girls-shorts-skirts">Shorts & Skirts</Link></li>
            <li><Link to="/category/kids-girls-leggings">Leggings</Link></li>
            <li><Link to="/category/kids-girls-sets">Sets</Link></li>
          </ul>
        </div>

        {/* Column 3: Jackets, Sleepwear, Infant Boys, Infant Girls */}
        <div className="kids-col">
          <ul className="kids-sub-list mb-18">
            <li><Link to="/category/kids-girls-jackets">Jackets</Link></li>
            <li><Link to="/category/kids-sleepwear">Sleepwear</Link></li>
          </ul>

          <div className="col-heading-wrap">
            <span className="kids-main-heading">Infant Boys</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/infant-boys-kurtas">Kurtas</Link></li>
            <li><Link to="/category/infant-boys-sets">Sets</Link></li>
            <li><Link to="/category/infant-boys-churidars-dhotis">Churidars, Pyjamas & Dhotis</Link></li>
            <li><Link to="/category/infant-boys-shirts-kurtas">Shirts & Short Kurtas</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="kids-main-heading">Infant Girls</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/infant-girls-dresses">Dresses</Link></li>
            <li><Link to="/category/infant-girls-sets">Sets</Link></li>
          </ul>
        </div>

        {/* Column 4: Footwear, Collection, Sale */}
        <div className="kids-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/kids-footwear" className="kids-main-heading">Footwear</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="kids-main-heading">Collection</span>
          </div>
          <ul className="kids-sub-list">
            <li><Link to="/category/collection-festive">Festive</Link></li>
            <li><Link to="/category/collection-everyday">Everyday Living</Link></li>
            <li><Link to="/category/collection-indigo">Indigo</Link></li>
            <li><Link to="/category/collection-wedding">Wedding</Link></li>
            <li><Link to="/category/collection-summer">Summer</Link></li>
            <li><Link to="/category/collection-winter">Winterwear</Link></li>
          </ul>

          <div className="col-heading-wrap mt-22">
            <Link to="/category/all-kids" className="kids-main-heading kids-sale-title">Sale</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
{/* FURNITURE Mega Dropdown Menu */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('furniture')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/all-furniture" className="nav-link">
    FURNITURE
  </Link>

  {activeMenu === 'furniture' && (
    <div className="mega-dropdown-menu furniture-mega-menu">
      <div className="furniture-dropdown-grid">
        
        {/* Column 1: All In Furniture, Living */}
        <div className="furniture-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/all-furniture" className="furniture-main-heading">All In Furniture</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="furniture-main-heading">Living</span>
          </div>
          <ul className="furniture-sub-list">
            <li><Link to="/category/living-tables">Tables</Link></li>
            <li><Link to="/category/sofas-seatings">Sofas & Seatings</Link></li>
            <li><Link to="/category/furniture-chairs">Chairs</Link></li>
            <li><Link to="/category/cabinets">Cabinets</Link></li>
            <li><Link to="/category/consoles">Consoles</Link></li>
            <li><Link to="/category/benches">Benches</Link></li>
          </ul>
        </div>

        {/* Column 2: Ottoman & Stools, Day Beds, Bedroom */}
        <div className="furniture-col">
          <ul className="furniture-sub-list mb-18">
            <li><Link to="/category/ottoman-stools">Ottoman & Stools</Link></li>
            <li><Link to="/category/day-beds-sofacum">Day Beds & Sofa Cum Beds</Link></li>
            <li><Link to="/category/entertainment-units">Entertainment Units</Link></li>
          </ul>

          <div className="col-heading-wrap">
            <span className="furniture-main-heading">Bedroom</span>
          </div>
          <ul className="furniture-sub-list">
            <li><Link to="/category/furniture-beds">Beds</Link></li>
            <li><Link to="/category/bedside-tables">Bedside Tables</Link></li>
            <li><Link to="/category/wardrobes">Wardrobes</Link></li>
            <li><Link to="/category/drawers">Drawers</Link></li>
          </ul>
        </div>

        {/* Column 3: Dining, Accents */}
        <div className="furniture-col">
          <div className="col-heading-wrap">
            <span className="furniture-main-heading">Dining</span>
          </div>
          <ul className="furniture-sub-list">
            <li><Link to="/category/dining-tables">Tables</Link></li>
            <li><Link to="/category/dining-chairs">Chairs</Link></li>
            <li><Link to="/category/bar-furniture">Bar Furniture</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="furniture-main-heading">Accents</span>
          </div>
          <ul className="furniture-sub-list">
            <li><Link to="/category/mirrors-wall-art">Mirrors</Link></li>
            <li><Link to="/category/breakfast-tray-tables">Breakfast & Tray Tables</Link></li>
            <li><Link to="/category/organisers">Organisers</Link></li>
          </ul>
        </div>

        {/* Column 4: Trunks, Shelves, Home Office, Outdoor, Studio, Sale */}
        <div className="furniture-col">
          <ul className="furniture-sub-list mb-18">
            <li><Link to="/category/furniture-trunks">Trunks</Link></li>
            <li><Link to="/category/coat-stands-hangers">Coat Stands & Hangers</Link></li>
            <li><Link to="/category/shelves-racks">Shelves & Racks</Link></li>
          </ul>

          <div className="col-heading-wrap mb-18">
            <Link to="/category/home-office" className="furniture-main-heading">Home Office</Link>
          </div>

          <div className="col-heading-wrap mb-18">
            <Link to="/category/outdoor-furniture" className="furniture-main-heading">Outdoor Furniture</Link>
          </div>

          <div className="col-heading-wrap mb-18">
            <Link to="/category/interior-design-studio" className="furniture-main-heading">Interior Design Studio</Link>
          </div>

          <div className="col-heading-wrap">
            <Link to="/category/all-furniture" className="furniture-main-heading furniture-sale-title">Sale</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
{/* BEAUTY & WELLNESS Mega Dropdown Menu */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('beauty')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/beauty-wellness" className="nav-link">
    BEAUTY & WELLNESS
  </Link>

  {activeMenu === 'beauty' && (
    <div className="mega-dropdown-menu beauty-mega-menu">
      <div className="beauty-dropdown-grid">
        
        {/* Column 1: All In Beauty & Skin Care */}
        <div className="beauty-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/beauty-wellness" className="beauty-main-heading">All In Beauty & Wellness</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="beauty-main-heading">Skin Care</span>
          </div>
          <ul className="beauty-sub-list">
            <li><Link to="/category/face-cleansers">Face Cleansers & Washes</Link></li>
            <li><Link to="/category/face-creams-serums">Creams & Serums</Link></li>
            <li><Link to="/category/face-scrubs-packs">Scrubs & Face Packs</Link></li>
            <li><Link to="/category/toners-mists">Toners & Pure Rose Mists</Link></li>
            <li><Link to="/category/lip-care">Lip Butters & Balms</Link></li>
            <li><Link to="/category/eye-care">Under Eye Creams</Link></li>
          </ul>
        </div>

        {/* Column 2: Body Care & Hair Care */}
        <div className="beauty-col">
          <div className="col-heading-wrap">
            <span className="beauty-main-heading">Body Care</span>
          </div>
          <ul className="beauty-sub-list">
            <li><Link to="/category/handmade-soaps">Handcrafted Soaps</Link></li>
            <li><Link to="/category/body-washes-gels">Shower Gels & Body Washes</Link></li>
            <li><Link to="/category/body-lotions-butters">Body Lotions & Butters</Link></li>
            <li><Link to="/category/bath-oils">Nourishing Bath Oils</Link></li>
            <li><Link to="/category/hand-foot-creams">Hand & Foot Creams</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="beauty-main-heading">Hair Care</span>
          </div>
          <ul className="beauty-sub-list">
            <li><Link to="/category/herbal-shampoos">Herbal Shampoos</Link></li>
            <li><Link to="/category/hair-conditioners">Hair Conditioners</Link></li>
            <li><Link to="/category/pure-hair-oils">Organic Hair Oils</Link></li>
          </ul>
        </div>

        {/* Column 3: Aromatherapy & Fragrances */}
        <div className="beauty-col">
          <div className="col-heading-wrap">
            <span className="beauty-main-heading">Aromatherapy</span>
          </div>
          <ul className="beauty-sub-list">
            <li><Link to="/category/essential-oils">Pure Essential Oils</Link></li>
            <li><Link to="/category/carrier-oils">Carrier Massage Oils</Link></li>
            <li><Link to="/category/diffusers-burners">Aroma Diffusers & Burners</Link></li>
            <li><Link to="/category/room-mists">Herbal Room Mists</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="beauty-main-heading">Fragrances</span>
          </div>
          <ul className="beauty-sub-list">
            <li><Link to="/category/traditional-ittr">Natural Ittr & Attar</Link></li>
            <li><Link to="/category/body-mists">Eau De Cologne & Mists</Link></li>
          </ul>
        </div>

        {/* Column 4: Wellness, Gift Sets & Offers */}
        <div className="beauty-col">
          <div className="col-heading-wrap">
            <span className="beauty-main-heading">Ayurvedic Wellness</span>
          </div>
          <ul className="beauty-sub-list">
            <li><Link to="/category/kumkumadi-range">Kumkumadi Miraculous Range</Link></li>
            <li><Link to="/category/neem-tulsi-range">Neem & Tulsi Purifying Range</Link></li>
            <li><Link to="/category/wellness-teas">Herbal & Infusion Teas</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <Link to="/category/beauty-gift-sets" className="beauty-main-heading">Gift Kits & Hampers</Link>
          </div>

          <div className="col-heading-wrap mt-18">
            <Link to="/category/beauty-wellness" className="beauty-main-heading beauty-sale-title">Offers & Deals</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
{/* FESTIVE '24 Mega Dropdown Menu */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('festive24')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/festive" className="nav-link">
    FESTIVE '24 •
  </Link>

  {activeMenu === 'festive24' && (
    <div className="mega-dropdown-menu festive-mega-menu">
      <div className="festive-dropdown-grid">
        
        {/* Column 1: All In Festive & Women's Celebration Wear */}
        <div className="festive-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/festive" className="festive-main-heading">All In Festive '24</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="festive-main-heading">Women's Celebration</span>
          </div>
          <ul className="festive-sub-list">
            <li><Link to="/category/festive-silk-saris">Banarasi & Katan Silk Saris</Link></li>
            <li><Link to="/category/festive-anarkalis">Embroidered Zari Anarkalis</Link></li>
            <li><Link to="/category/festive-sharara-sets">Sharara & Gharara Sets</Link></li>
            <li><Link to="/category/festive-chanderi-dupattas">Chanderi Handwoven Dupattas</Link></li>
            <li><Link to="/category/festive-lehengas">Heritage Silk Lehengas</Link></li>
          </ul>
        </div>

        {/* Column 2: Men's Festive & Kids Celebration */}
        <div className="festive-col">
          <div className="col-heading-wrap">
            <span className="festive-main-heading">Men's Celebration</span>
          </div>
          <ul className="festive-sub-list">
            <li><Link to="/category/festive-silk-kurtas">Pure Silk Bandhgala Kurtas</Link></li>
            <li><Link to="/category/festive-bundi-jackets">Raw Silk Bundi & Nehru Jackets</Link></li>
            <li><Link to="/category/festive-dhoti-sets">Zari Border Dhoti & Kurta Sets</Link></li>
            <li><Link to="/category/festive-tussar-stoles">Tussar Silk Embroidered Stoles</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="festive-main-heading">Kids Festive</span>
          </div>
          <ul className="festive-sub-list">
            <li><Link to="/category/festive-boys-sets">Boys Kurta & Bundi Sets</Link></li>
            <li><Link to="/category/festive-girls-lehengas">Girls Zari Lehenga Choli</Link></li>
          </ul>
        </div>

        {/* Column 3: Puja Essentials & Festive Home Decor */}
        <div className="festive-col">
          <div className="col-heading-wrap">
            <span className="festive-main-heading">Puja Essentials</span>
          </div>
          <ul className="festive-sub-list">
            <li><Link to="/category/festive-brass-diyas">Solid Brass Traditional Diyas</Link></li>
            <li><Link to="/category/festive-puja-thalis">Engraved Brass Puja Thalis</Link></li>
            <li><Link to="/category/festive-incense-dhoop">Sacred Dhoop & Agarbatti</Link></li>
            <li><Link to="/category/festive-bell-urli">Brass Urlis & Temple Bells</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <span className="festive-main-heading">Festive Home Accents</span>
          </div>
          <ul className="festive-sub-list">
            <li><Link to="/category/festive-lanterns">Perforated Hanging Lanterns</Link></li>
            <li><Link to="/category/festive-torans">Marigold & Brass Door Torans</Link></li>
          </ul>
        </div>

        {/* Column 4: Gifting Hampers, Jewellery & Offers */}
        <div className="festive-col">
          <div className="col-heading-wrap">
            <span className="festive-main-heading">Festive Gifting</span>
          </div>
          <ul className="festive-sub-list">
            <li><Link to="/category/festive-sweet-boxes">Gourmet Organic Sweet Boxes</Link></li>
            <li><Link to="/category/festive-dry-fruit-trays">Brass Dry Fruit Gift Trays</Link></li>
            <li><Link to="/category/festive-luxury-hampers">Svarnim Curated Luxury Hampers</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <Link to="/category/festive-jewellery" className="festive-main-heading">Silver & Kundan Jewellery</Link>
          </div>

          <div className="col-heading-wrap mt-18">
            <Link to="/category/festive" className="festive-main-heading festive-sale-title">Festive Offers •</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
{/* ================= COLLECTION DROPDOWN ================= */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('collection')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/collection-festive" className="nav-link">
    Collection
  </Link>

  {activeMenu === 'collection' && (
    <div className="mega-dropdown-menu collection-strip-menu">
      <div className="collection-strip-grid">
        
        {/* Column 1: Gifting & Festive */}
        <div className="coll-strip-col">
          <div className="coll-underline-wrap">
            <Link to="/category/collection-gifting" className="coll-strip-link">Gifting</Link>
          </div>
          <div className="coll-underline-wrap mt-24">
            <Link to="/category/collection-festive" className="coll-strip-link">Festive</Link>
          </div>
        </div>

        {/* Column 2: Everyday Living & Indigo */}
        <div className="coll-strip-col">
          <div className="coll-underline-wrap">
            <Link to="/category/collection-everyday" className="coll-strip-link">Everyday Living</Link>
          </div>
          <div className="coll-underline-wrap mt-24">
            <Link to="/category/collection-indigo" className="coll-strip-link">Indigo</Link>
          </div>
        </div>

        {/* Column 3: Chikankari & Wedding */}
        <div className="coll-strip-col">
          <div className="coll-underline-wrap">
            <Link to="/category/collection-chikankari" className="coll-strip-link">Chikankari</Link>
          </div>
          <div className="coll-underline-wrap mt-24">
            <Link to="/category/collection-wedding" className="coll-strip-link">Wedding</Link>
          </div>
        </div>

        {/* Column 4: Summer & Winter */}
        <div className="coll-strip-col">
          <div className="coll-underline-wrap">
            <Link to="/category/collection-summer" className="coll-strip-link">Summer</Link>
          </div>
          <div className="coll-underline-wrap mt-24">
            <Link to="/category/collection-winter" className="coll-strip-link">Winter</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
{/* SALE / OFFERS Mega Dropdown Menu */}
<li
  className="nav-item"
  onMouseEnter={() => setActiveMenu('sale')}
  onMouseLeave={() => setActiveMenu(null)}
>
  <Link to="/category/sale" className="nav-link sale-link">
    SALE / OFFERS •
  </Link>

  {activeMenu === 'sale' && (
    <div className="mega-dropdown-menu sale-mega-menu">
      <div className="sale-dropdown-grid">
        
        {/* Column 1: Flat Discounts & Clearance */}
        <div className="sale-col">
          <div className="col-heading-wrap mb-18">
            <Link to="/category/sale" className="sale-main-heading">All Sale & Offers</Link>
          </div>

          <div className="col-heading-wrap">
            <span className="sale-main-heading">Special Discounts</span>
          </div>
          <ul className="sale-sub-list">
            <li><Link to="/category/sale-flat-50">Flat 50% Off</Link></li>
            <li><Link to="/category/sale-flat-40">Flat 40% Off</Link></li>
            <li><Link to="/category/sale-flat-30">Flat 30% Off</Link></li>
            <li><Link to="/category/sale-clearance">End of Season Clearance</Link></li>
            <li><Link to="/category/sale-combos">Value Buy Combos</Link></li>
          </ul>
        </div>

        {/* Column 2: Category Deals */}
        <div className="sale-col">
          <div className="col-heading-wrap">
            <span className="sale-main-heading">Women & Men Offers</span>
          </div>
          <ul className="sale-sub-list">
            <li><Link to="/category/sale-women-kurtas">Women's Kurtas on Sale</Link></li>
            <li><Link to="/category/sale-silk-saris">Silk Saris Minimum 30% Off</Link></li>
            <li><Link to="/category/sale-men-kurtas">Men's Festive Kurtas Offer</Link></li>
            <li><Link to="/category/sale-nehru-jackets">Nehru Jackets Clearance</Link></li>
            <li><Link to="/category/sale-kids">Kids Festive Deals</Link></li>
          </ul>
        </div>

        {/* Column 3: Home & Living Deals */}
        <div className="sale-col">
          <div className="col-heading-wrap">
            <span className="sale-main-heading">Home & Living Offers</span>
          </div>
          <ul className="sale-sub-list">
            <li><Link to="/category/sale-bedlinen">Bedcovers & Dohars on Sale</Link></li>
            <li><Link to="/category/sale-cushions">Cushion Covers from ₹499</Link></li>
            <li><Link to="/category/sale-lamps">Lamps & Lighting Deals</Link></li>
            <li><Link to="/category/sale-dining">Dinnerware Clearance</Link></li>
            <li><Link to="/category/sale-furniture">Solid Wood Furniture Offers</Link></li>
          </ul>
        </div>

        {/* Column 4: Price Point Stores & SVARNIM Promo */}
        <div className="sale-col">
          <div className="col-heading-wrap">
            <span className="sale-main-heading">Budget Stores</span>
          </div>
          <ul className="sale-sub-list">
            <li><Link to="/category/under-999">Under ₹999 Store</Link></li>
            <li><Link to="/category/sale-under-1499">Under ₹1,499 Store</Link></li>
            <li><Link to="/category/sale-under-2499">Under ₹2,499 Store</Link></li>
          </ul>

          <div className="col-heading-wrap mt-20">
            <Link to="/category/festive" className="sale-main-heading sale-highlight-title">Festive Deals •</Link>
          </div>
        </div>

      </div>
    </div>
  )}
</li>
      </ul>
    </nav>
  );

}