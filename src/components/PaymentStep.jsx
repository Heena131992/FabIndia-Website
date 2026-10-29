import React, { useState } from 'react';
import './PaymentStep.css';

export default function PaymentStep({ totalAmount = 14570, selectedAddress, onPaymentSuccess, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Input states for methods
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [selectedBank, setSelectedBank] = useState('HDFC');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (paymentMethod === 'upi') {
      if (!upiId || !upiId.includes('@')) {
        setErrorMsg('Kripya valid UPI ID enter karein (jaise: username@oksbi ya username@paytm).');
        return;
      }
    } else if (paymentMethod === 'card') {
      if (cardDetails.number.replace(/\s/g, '').length !== 16 || cardDetails.cvv.length < 3) {
        setErrorMsg('Kripya sahi 16-digit card number aur CVV enter karein.');
        return;
      }
    }

    setIsProcessing(true);

    // Mock payment delay
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess({
        paymentMethod,
        orderId: 'FAB' + Math.floor(100000 + Math.random() * 900000),
        amount: totalAmount,
      });
    }, 2000);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>Payment Method Chunein</h2>
        <p className="pay-amount-label">
          Payable Amount: <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
        </p>
      </div>

      {selectedAddress && (
        <div className="delivery-summary-strip">
          <span>Deliver to: <strong>{selectedAddress.fullName}</strong> ({selectedAddress.pincode})</span>
        </div>
      )}

      {errorMsg && <div className="payment-error-banner">{errorMsg}</div>}

      <div className="payment-grid-layout">
        {/* Left side: Payment Methods List */}
        <div className="methods-sidebar">
          <button
            type="button"
            className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            UPI (GPay / PhonePe / Paytm)
          </button>

          <button
            type="button"
            className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            Credit / Debit Card
          </button>

          <button
            type="button"
            className={`method-tab ${paymentMethod === 'netbanking' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('netbanking')}
          >
            Net Banking
          </button>

          <button
            type="button"
            className={`method-tab ${paymentMethod === 'cod' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('cod')}
          >
            Cash on Delivery (COD)
          </button>
        </div>

        {/* Right side: Method Details Input */}
        <div className="method-details-panel">
          {/* UPI */}
          {paymentMethod === 'upi' && (
            <div className="method-content">
              <h3>Pay using UPI</h3>
              <p className="method-note">Google Pay, PhonePe, Paytm ya koi bhi UPI app use karein.</p>
              <div className="form-group">
                <label>Enter UPI ID</label>
                <input
                  type="text"
                  placeholder="e.g. mobileNumber@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Cards */}
          {paymentMethod === 'card' && (
            <div className="method-content">
              <h3>Credit / Debit Card</h3>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                  value={cardDetails.number}
                  onChange={handleCardChange}
                />
              </div>
              <div className="form-group">
                <label>Name on Card</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  value={cardDetails.name}
                  onChange={handleCardChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry (MM/YY)</label>
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={cardDetails.expiry}
                    onChange={handleCardChange}
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    placeholder="123"
                    maxLength="3"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Net Banking */}
          {paymentMethod === 'netbanking' && (
            <div className="method-content">
              <h3>Net Banking</h3>
              <p className="method-note">Apna bank select karein:</p>
              <div className="form-group">
                <select value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="SBI">State Bank of India (SBI)</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="AXIS">Axis Bank</option>
                  <option value="KOTAK">Kotak Mahindra Bank</option>
                </select>
              </div>
            </div>
          )}

          {/* COD */}
          {paymentMethod === 'cod' && (
            <div className="method-content">
              <h3>Cash on Delivery</h3>
              <p className="method-note">
                Order deliver hote waqt cash ya delivery agent ke QR code par UPI se payment karein.
              </p>
            </div>
          )}

          {/* Submit Actions */}
          <div className="payment-actions">
            {onBack && (
              <button type="button" className="btn-secondary" onClick={onBack} disabled={isProcessing}>
                Back to Address
              </button>
            )}
            <button
              type="button"
              className="btn-pay"
              onClick={handlePayNow}
              disabled={isProcessing}
            >
              {isProcessing
                ? 'Processing Payment...'
                : paymentMethod === 'cod'
                ? 'Place Order (COD)'
                : `Pay ₹${totalAmount.toLocaleString('en-IN')}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}