import React, { useState } from "react";
import "./AddressStep.css";

export default function AddressStep({ onAddressSelect, onBack }) {
  // Pre-saved demo addresses
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      fullName: "Pooja Sharma",
      phone: "9876543210",
      houseNo: "Flat 402, Lotus Apartments",
      street: "MG Road, Near Metro Station",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110001",
      type: "Home",
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  // New Address Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    houseNo: "",
    street: "",
    city: "",
    state: "",
    type: "Home", // Home ya Work
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Indian Pincode Auto-Fill Demo (Optional helper)
  const handlePincodeChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, pincode: val }));
    // Example: agar pincode 6 digits ho jaye toh auto city set karna chahein toh
    if (val.length === 6 && val.startsWith("11")) {
      setFormData((prev) => ({ ...prev, pincode: val, city: "New Delhi", state: "Delhi" }));
    }
  };

  // Save new address
  const handleSaveAddress = (e) => {
    e.preventDefault();
    const { fullName, phone, pincode, houseNo, street, city, state } = formData;

    if (!fullName || !phone || !pincode || !houseNo || !street || !city || !state) {
      setErrorMsg("Kripya sabhi zaroori fields bharein.");
      return;
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      setErrorMsg("Kripya 6-digit valid pincode enter karein.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      setErrorMsg("Kripya 10-digit valid phone number enter karein.");
      return;
    }

    const newAddr = {
      id: Date.now(),
      ...formData,
    };

    setSavedAddresses([newAddr, ...savedAddresses]);
    setSelectedAddressId(newAddr.id);
    setShowNewAddressForm(false);
    setErrorMsg("");
    setFormData({
      fullName: "",
      phone: "",
      pincode: "",
      houseNo: "",
      street: "",
      city: "",
      state: "",
      type: "Home",
    });
  };

  // Proceed to Payment
  const handleContinue = () => {
    const activeAddress = savedAddresses.find((item) => item.id === selectedAddressId);
    if (!activeAddress) {
      alert("Kripya ek delivery address select karein.");
      return;
    }
    onAddressSelect(activeAddress);
  };

  return (
    <div className="address-container">
      <div className="address-header">
        <h2>Delivery Address Chunein</h2>
        <p>Jahan aapka order ship karna hai wahan ka pata select karein</p>
      </div>

      {/* Saved Addresses List */}
      {!showNewAddressForm && (
        <div className="saved-address-list">
          {savedAddresses.map((addr) => (
            <label
              key={addr.id}
              className={`address-card ${selectedAddressId === addr.id ? "selected" : ""}`}
            >
              <div className="radio-wrapper">
                <input
                  type="radio"
                  name="selectedAddress"
                  checked={selectedAddressId === addr.id}
                  onChange={() => setSelectedAddressId(addr.id)}
                />
              </div>

              <div className="address-details">
                <div className="address-badge-row">
                  <span className="user-name">{addr.fullName}</span>
                  <span className="address-tag">{addr.type}</span>
                </div>
                <p className="address-line">
                  {addr.houseNo}, {addr.street}
                </p>
                <p className="address-line">
                  {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                </p>
                <p className="phone-line">Mobile: +91 {addr.phone}</p>
              </div>
            </label>
          ))}

          {/* Button to open Add New Address Form */}
          <button
            type="button"
            className="add-new-btn"
            onClick={() => setShowNewAddressForm(true)}
          >
            + Add New Address
          </button>

          {/* Action Footer */}
          <div className="address-actions">
            {onBack && (
              <button type="button" className="btn-secondary" onClick={onBack}>
                Back
              </button>
            )}
            <button type="button" className="btn-primary" onClick={handleContinue}>
              Deliver to this Address
            </button>
          </div>
        </div>
      )}

      {/* Add New Address Form */}
      {showNewAddressForm && (
        <form className="new-address-form" onSubmit={handleSaveAddress}>
          <h3>Add New Delivery Address</h3>

          {errorMsg && <div className="address-error-banner">{errorMsg}</div>}

          <div className="form-grid">
            <div className="input-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Pura naam enter karein"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Mobile Number *</label>
              <input
                type="tel"
                name="phone"
                maxLength="10"
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                maxLength="6"
                placeholder="6-digit pincode"
                value={formData.pincode}
                onChange={handlePincodeChange}
              />
            </div>

            <div className="input-group">
              <label>City / Town *</label>
              <input
                type="text"
                name="city"
                placeholder="City ka naam"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Flat / House No. / Building *</label>
            <input
              type="text"
              name="houseNo"
              placeholder="e.g. Flat 102, Building A"
              value={formData.houseNo}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Area / Colony / Street *</label>
            <input
              type="text"
              name="street"
              placeholder="e.g. Near Main Market, Street 5"
              value={formData.street}
              onChange={handleChange}
            />
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>State *</label>
              <input
                type="text"
                name="state"
                placeholder="State ka naam"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Address Type</label>
              <div className="type-toggle-group">
                <button
                  type="button"
                  className={`type-btn ${formData.type === "Home" ? "active" : ""}`}
                  onClick={() => setFormData({ ...formData, type: "Home" })}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={`type-btn ${formData.type === "Work" ? "active" : ""}`}
                  onClick={() => setFormData({ ...formData, type: "Work" })}
                >
                  Work
                </button>
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setShowNewAddressForm(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save & Use Address
            </button>
          </div>
        </form>
      )}
    </div>
  );
}