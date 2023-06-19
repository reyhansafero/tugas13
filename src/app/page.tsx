import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer'; 

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-5">
          <h1>Welcome to my page</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

