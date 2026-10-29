import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetch('http://localhost:5000/api/admin/dashboard-stats', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.data);
        } else {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      })
      .catch(() => navigate('/admin/login'))
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) return <div className="admin-loading">Dashboard data load ho raha hai...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h2>Store Management Dashboard</h2>
          <span className="badge-live">Live Data</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      {/* Analytics Metric Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Revenue</h4>
          <p className="stat-val">₹{stats.totalRevenue.toLocaleString('en-IN')}</p>
        </div>
        <div className="stat-card">
          <h4>Total Orders</h4>
          <p className="stat-val">{stats.totalOrders}</p>
        </div>
        <div className="stat-card">
          <h4>Pending Orders</h4>
          <p className="stat-val warning">{stats.pendingOrders}</p>
        </div>
        <div className="stat-card">
          <h4>Registered Customers</h4>
          <p className="stat-val">{stats.totalUsers}</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="table-card">
        <h3>Recent Customer Orders</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentOrders.map((ord) => (
              <tr key={ord.id}>
                <td><strong>{ord.id}</strong></td>
                <td>{ord.customer}</td>
                <td>{ord.date}</td>
                <td>₹{ord.amount.toLocaleString('en-IN')}</td>
                <td>
                  <span className={`status-pill ${ord.status.toLowerCase()}`}>
                    {ord.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}