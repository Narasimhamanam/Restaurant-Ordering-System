// src/pages/MenuPage.jsx
import MenuItem from '../components/MenuItem';

const menuData = [
  { id: 1, name: "Paneer Tikka", price: 150, category: "Starters" },
  { id: 2, name: "Butter Chicken", price: 250, category: "Main Course" },
  { id: 3, name: "Gulab Jamun", price: 80, category: "Desserts" },
];

const MenuPage = () => (
  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {menuData.map(item => (
      <MenuItem key={item.id} item={item} />
    ))}
  </div>
);

export default MenuPage;