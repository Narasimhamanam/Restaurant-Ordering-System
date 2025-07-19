// src/pages/AdminPage.jsx
import { useEffect, useState } from "react";

const AdminPage = () => {
const [orders, setOrders] = useState([]);

useEffect(() => {
// In real app, fetch from backend: fetch('/api/orders')
const mockOrders = [
{
id: 101,
customer: "Alice",
items: ["Paneer Tikka", "Mango Lassi"],
total: 210,
},
{
id: 102,
customer: "Bob",
items: ["Butter Chicken", "Veg Biryani"],
total: 450,
},
];
setOrders(mockOrders);
}, []);

return (
<div className="p-6">
<h1 className="text-3xl font-bold mb-4">📦 Orders Dashboard</h1>
<div className="space-y-4">
{orders.map((order) => (
<div key={order.id} className="bg-white shadow p-4 rounded-lg border">
<h2 className="text-xl font-semibold">Order #{order.id}</h2>
<p className="text-gray-700">👤 {order.customer}</p>
<p className="text-gray-600">🧾 Items: {order.items.join(", ")}</p>
<p className="font-semibold text-green-700">💰 Total: ₹{order.total}</p>
</div>
))}
</div>
</div>
);
};

export default AdminPage;