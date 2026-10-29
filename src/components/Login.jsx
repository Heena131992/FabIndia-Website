import React, { useState, useEffect, useRef } from "react";
import "./Login.css";

const Login = ({ isOpen, onClose, onLoginSuccess }) => {
  const [authMethod, setAuthMethod] = useState("mobile"); // 'mobile' ya 'email'
  
  // Mobile / OTP state
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const otpInputsRef = useRef([]);

  // Email state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  // OTP Timer countdown
  useEffect(() => {
    let interval = null;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  if (!isOpen) return null;

  // Handle Mobile submit -> Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (mobileNumber.length !== 10 || !/^\d+$/.test(mobileNumber)) {
      setErrorMsg("Kripya valid 10-digit mobile number enter karein.");
      return;
    }

    setOtpSent(true);
    setTimer(30);
    setCanResend(false);
  };

  // Handle single digit OTP input box
  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  // Verify OTP
// src/components/Login.jsx ke andar:

const handleVerifyOtp = async (e) => {
  e.preventDefault();
  setErrorMsg("");

  const enteredOtp = otp.join(""); // 4 boxes ka OTP jod kar ek string banayi

  if (enteredOtp.length !== 4) {
    setErrorMsg("Kripya 4-digit OTP enter karein.");
    return;
  }

  try {
    // Backend API ko OTP check karne ke liye bheja
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        mobile: mobileNumber, 
        otp: enteredOtp 
      }),
    });

    const data = await res.json();

    if (!data.success) {
      setErrorMsg(data.message); // Galat OTP ya Expired ka error dikhayega
      return;
    }

    // Token save karein aur login complete karein
    localStorage.setItem("authToken", data.token);
    onLoginSuccess(data.user);

  } catch (err) {
    setErrorMsg("Backend server se connect nahi ho paya.");
  }
};

  // Email Login
  const handleEmailLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.includes("@") || password.length < 6) {
      setErrorMsg("Valid email aur minimum 6-character password enter karein.");
      return;
    }

    onLoginSuccess({ type: "email", value: email });
  };

  // Switch tabs
  const handleTabSwitch = (method) => {
    setAuthMethod(method);
    setErrorMsg("");
    setOtpSent(false);
    setOtp(["", "", "", ""]);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="modal-header">
          <h3>Login ya Sign-in Karein</h3>
          <p>Checkout ke agle step par jaane ke liye pehle sign in karein</p>
        </div>

        {/* Tab switchers: Mobile vs Email */}
        <div className="tab-buttons">
          <button
            type="button"
            className={`tab-btn ${authMethod === "mobile" ? "active" : ""}`}
            onClick={() => handleTabSwitch("mobile")}
          >
            Mobile & OTP
          </button>
          <button
            type="button"
            className={`tab-btn ${authMethod === "email" ? "active" : ""}`}
            onClick={() => handleTabSwitch("email")}
          >
            Email ID
          </button>
        </div>

        {errorMsg && <div className="error-banner">{errorMsg}</div>}

        {/* METHOD 1: MOBILE & OTP */}
        {authMethod === "mobile" && (
          <div className="auth-form-container">
            {!otpSent ? (
              <form onSubmit={handleSendOtp}>
                <label className="input-label">Mobile Number</label>
                <div className="phone-input-wrapper">
                  <span className="country-code">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    maxLength="10"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    autoFocus
                  />
                </div>
                <p className="hint-text">Aapko 4-digit OTP SMS ke zariye aayega.</p>
                <button type="submit" className="submit-btn">
                  Continue (Send OTP)
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div className="otp-heading">
                  <p>
                    OTP bheja gaya hai: <strong>+91 {mobileNumber}</strong>
                  </p>
                  <button
                    type="button"
                    className="edit-number-btn"
                    onClick={() => setOtpSent(false)}
                  >
                    Change
                  </button>
                </div>

                <label className="input-label">Enter 4-Digit OTP (Demo: 1234)</label>
                <div className="otp-inputs">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      ref={(el) => (otpInputsRef.current[idx] = el)}
                      onChange={(e) => handleOtpChange(e.target.value, idx)}
                      onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                    />
                  ))}
                </div>

                <div className="resend-wrapper">
                  {canResend ? (
                    <button
                      type="button"
                      className="resend-btn"
                      onClick={() => {
                        setTimer(30);
                        setCanResend(false);
                      }}
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <span>Resend OTP in {timer}s</span>
                  )}
                </div>

                <button type="submit" className="submit-btn">
                  Verify OTP & Proceed
                </button>
              </form>
            )}
          </div>
        )}

        {/* METHOD 2: EMAIL LOGIN */}
        {authMethod === "email" && (
          <form className="auth-form-container" onSubmit={handleEmailLogin}>
            <div className="form-group">
              <label className="input-label">Email ID</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>

            <div className="form-group">
              <label className="input-label">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">
              Sign In with Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;