import React from 'react';
import pf1 from '../assets/pf1.jpg';
import pf2 from '../assets/pf2.jpg';
import pf3 from '../assets/pf3.jpg';
import pf4 from '../assets/pf4.jpg';
import pf5 from '../assets/pf5.jpg';
import pf6 from '../assets/pf6.jpg';
import pf7 from '../assets/pf7.jpg';
import pf8 from '../assets/pf8.jpg';
import pf9 from '../assets/pf9.jpg';
import back1 from '../assets/back1.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import back2 from '../assets/back2.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import back3 from '../assets/back3.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import back4 from '../assets/back4.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import Slider from 'react-slick'; // Tambahkan import untuk slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Produk() {
  const productList = [
    {
      id: 1,
      name: 'SEMPOL AYAM',
      price: 'Rp. 1.000',
      image: pf1,
    },
    {
      id: 2,
      name: 'Citul ( Aci Tulang )',
      price: 'Rp. 5.000',
      image: pf2,
    },
    {
      id: 3,
      name: 'Teh Poci',
      price: 'Rp. 3.000',
      image: pf3,
    },
    {
      id: 4,
      name: 'Teh Poci',
      price: 'Rp. 5.000',
      image: pf3,
    },
    {
      id: 5,
      name: 'Es Milo',
      price: 'Rp. 5.000',
      image: pf4,
    },
    {
      id: 6,
      name: 'Drink Beng-Beng',
      price: 'Rp. 5.000',
      image: pf5,
    },
    {
      id: 7,
      name: 'Es Jeruk Peras',
      price: 'Rp. 5.000',
      image: pf6,
    },
    {
      id: 8,
      name: 'Jeruk Peras Hangat',
      price: 'Rp. 5.000',
      image: pf6,
    },
    {
      id: 9,
      name: 'Chocolatos Drink',
      price: 'Rp. 5.000',
      image: pf7,
    },
    {
      id: 10,
      name: 'Good Day Freeze',
      price: 'Rp. 5.000',
      image: pf8,
    },
    {
      id: 11,
      name: 'Cappucino Drink',
      price: 'Rp. 5.000',
      image: pf9,
    },
  ];

  // Konfigurasi slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Menambahkan autoplay
    autoplaySpeed: 6000, // Waktu dalam milidetik untuk setiap slide
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center mt-14">
        {' '}
        {/* Menambahkan kelas animasi */}
        <div className="md:w-1/2 w-full animate-fade-in-right">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">SILAHKAN PESAN JAJANAN DI WEBSITE SEMPOL SEDAP🤗</h1>
          <p className="text-gray-600 mb-6 text-left font-semibold text-center md:text-left">
            Kepada Pelanggan Setia Sempol Sedap, Sekarang Sempol Sedap Bisa Memesan Jajanan Yang Bapak/Ibu & Kakak/Adik Suka Melalui WhatsApp. Terimakasih🥰
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 animate-fade-in-left">
          <Slider {...settings}>
            <div>
              <img alt="Gambar 1" className="w-full h-auto" src={back1} />
            </div>
            <div>
              <img alt="Gambar 2" className="w-full h-auto" src={back2} />
            </div>
            <div>
              <img alt="Gambar 3" className="w-full h-auto" src={back3} />
            </div>
            <div>
              <img alt="Gambar 4" className="w-full h-auto" src={back4} />
            </div>
          </Slider>
        </div>
      </div>
      <h2 className="text-3xl text-gray-800 font-bold text-center mt-16">TERSEDIA JAJANAN DI BAWAH👇</h2>
      <hr className="border-t-2 border-gray-400 mt-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {productList.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 animate-zoom-in">
            {' '}
            {/* Menambahkan kelas animasi */}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-red-900 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produk;
