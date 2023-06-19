import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <ul>
        <li className="mb-3"><a className="hover:text-gray-300" href="/">Home</a></li>
        <li className="mb-3"><a className="hover:text-gray-300" href="/about">About</a></li>
        <li className="mb-3"><a className="hover:text-gray-300" href="/contact">Contact</a></li>
        <li className="mb-3"><a className="hover:text-gray-300" href="/contact">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
