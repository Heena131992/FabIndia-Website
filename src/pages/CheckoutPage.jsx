// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddressStep from '../components/AddressStep';
import PaymentStep from '../components/PaymentStep';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('address'); // 'address', 'payment', 'success'
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);

  // Address confirm hone par
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setCurrentStep('payment'); // Agle payment step par move karega
  };

  // Payment complete hone par
  const handlePaymentSuccess = (paymentDetails) => {
    setOrderInfo(paymentDetails);
    setCurrentStep('success');
  };

  return (
    <div style={{ padding: '40px 15px', background: '#faf7f2', minHeight: '80vh' }}>
      {/* Step 1: Address */}
      {currentStep === 'address' && (
        <AddressStep
          onAddressSelect={handleAddressSelect}
          onBack={() => navigate('/bag')}
        />
      )}

      {/* Step 2: Payment */}
      {currentStep === 'payment' && (
        <PaymentStep
          totalAmount={14570}
          selectedAddress={selectedAddress}
          onBack={() => setCurrentStep('address')}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Step 3: Success Screen */}
      {currentStep === 'success' && orderInfo && (
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          background: '#fff',
          padding: '30px',
          textAlign: 'center',
          borderRadius: '6px',
          border: '1px solid #e0d0c0'
        }}>
          <h2 style={{ color: '#2e7d32', marginBottom: '10px' }}>Order Placed Successfully!</h2>
          <p style={{ fontSize: '14px', color: '#555' }}>
            Order ID: <strong>{orderInfo.orderId}</strong>
          </p>
          <p style={{ fontSize: '13px', color: '#777', margin: '8px 0 20px' }}>
            Payment Method: {orderInfo.paymentMethod.toUpperCase()}
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#4b1822',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}