// src/components/LoginForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, role });
    navigate(role === 'admin' ? '/admin' : '/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl mb-4 font-semibold">Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-2 border mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <select
        className="w-full p-2 border mb-3"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
