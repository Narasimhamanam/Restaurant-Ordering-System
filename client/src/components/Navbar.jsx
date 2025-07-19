// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between">
    <Link to="/" className="font-bold text-lg">🍔 Foodie Menu</Link>
    <div className="space-x-4">
      <Link to="/">Menu</Link>
      <Link to="/admin">Admin</Link>
    </div>
  </nav>
);

export default Navbar;
