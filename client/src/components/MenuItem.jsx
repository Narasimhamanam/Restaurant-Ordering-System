// src/components/MenuItem.jsx
const MenuItem = ({ item }) => (
  <div className="border rounded-xl p-4 shadow-lg bg-white">
    <h2 className="text-xl font-bold">{item.name}</h2>
    <p className="text-gray-600">{item.category}</p>
    <p className="font-semibold mt-2">₹{item.price}</p>
    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mt-3">
      Add to Cart
    </button>
  </div>
);

export default MenuItem;
