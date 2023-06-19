import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logonav.png';
import Inbox from './Inbox';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50">
      <div className="flex items-center justify-between p-5">
        <div className="relative w-12 h-12">
          <Image src={Logo} alt="Logo"/>
        </div>
        <ul className="flex">
          <li className="mx-5"><Inbox /></li>
       </ul>
      </div>
    </nav>
  );
};

export default Navbar;

