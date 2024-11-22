import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State untuk mengelola menu mobile

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState); // Menggunakan prevState untuk toggle state menu mobile
  };

  return (
    <nav className="bg-black shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link className="flex items-center py-4 px-2" to="/">
                <img alt="Company Logo" className="h-16 w-24 mr-2" src={logo} /> {/* Menggunakan gambar yang diimpor */}
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-7 px-96">
              {' '}
              {/* Tambahkan justify-center */}
              <Link className="py-4 px-2 text-white font-extrabold hover:text-red-500 text-opacity-50 transition duration-300 hover:underline" to="/">
                BERANDA
              </Link>
              <Link className="py-4 px-2 text-white font-extrabold hover:text-red-500 text-opacity-50 transition duration-300 hover:underline" to="/produk">
                PRODUK
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300" href="https://wa.me/081287665556">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-gray-500 hover:text-red-500 text-opacity-50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      <div className={`md:hidden mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li className="active">
            <Link className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold" to="/">
              BERANDA
            </Link>
          </li>
          <li>
            <Link className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300 font-semibold" to="/produk">
              PRODUK
            </Link>
          </li>
          {/* <li>
            <Link className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300" to="/contact">
              HUBUNGI KAMI
            </Link>
          </li> */}
          <li>
            <a className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold" href="081287665556">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
