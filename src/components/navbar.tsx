import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logonav.png';
import InboxNotifications from './inbox';

const Navbar: React.FC = () => {
  const unreadCount = 3; // Replace with actual count from your data

  return (
    <nav className="bg-gray-800 bg-opacity-50">
      <div className="flex items-center justify-between p-5">
        <div className="relative w-12 h-12">
          <Image src={Logo} alt="Logo"/>
        </div>
        <ul className="flex">
          <li className="mx-5"><a className="text-white hover:text-gray-300" href="/about">About</a></li>
          <li className="mx-5"><a className="text-white hover:text-gray-300" href="/contact">Contact</a></li>
        </ul>
        <InboxNotifications count={unreadCount} />
      </div>
    </nav>
  );
};

export default Navbar;

