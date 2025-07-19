// src/pages/AdminPage.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders'); // Update with your actual backend URL
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="p-6">Loading orders...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Customer Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border rounded-lg p-4 mb-4 shadow">
            <h2 className="font-semibold">👤 {order.customerName || "Unknown Customer"}</h2>
            <p className="text-sm text-gray-500 mb-2">Order ID: {order._id}</p>
            <ul className="ml-4 list-disc">
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} × {item.quantity} - ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-2">
              Placed on: {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPage;