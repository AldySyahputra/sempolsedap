import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center md:text-left">
        <img alt="Nexcent Logo" className="h-16 w-24 mx-auto md:mx-0" src={logo} />
        <p className="mt-4">© 2024 Sempol Sedap. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center md:justify-start space-x-4">
          {['instagram', 'whatsapp', 'linkedin'].map((icon) => (
            <a key={icon} className="text-gray-400 hover:text-white" href="#">
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">FITUR</h3>
        <ul className="mt-4 space-y-2">
          {['Beranda', 'Produk', 'WhatsApp'].map((item) => (
            <li key={item}>
              <a className="hover:underline" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">PRODUK</h3>
        <ul className="mt-4 space-y-2">
          {['Sempol Ayam', 'Citul', 'Teh Poci', 'Jeruk Peras'].map((item) => (
            <li key={item}>
              <a className="hover:underline" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
