import React, { useEffect, useRef, useState } from 'react';
import back1 from '../assets/back1.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import back2 from '../assets/back2.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import back3 from '../assets/back3.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import back4 from '../assets/back4.png'; // Pastikan path ini sesuai dengan struktur folder Anda
import kryw1 from '../assets/kryw1.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda
import test2 from '../assets/test2.jpeg'; // Pastikan path ini sesuai dengan struktur folder Anda
import test3 from '../assets/test3.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda
import test4 from '../assets/test4.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda
import pf1 from '../assets/pf1.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda
import pf2 from '../assets/pf2.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda
import pf3 from '../assets/pf3.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda
import Slider from 'react-slick'; // Tambahkan import untuk slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; // Tambahkan import Link

function Beranda() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Hentikan pengamatan setelah terlihat
        }
      },
      { threshold: 0.1 } // 10% dari elemen harus terlihat
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mt-10">
          {' '}
          {/* Menambahkan kelas animasi */}
          <div className="md:w-1/2 w-full animate-fade-in-right">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">SELAMAT DATANG DI WEBSITE SEMPOL SEDAP🤗</h1>
            <p className="text-gray-600 mb-6 text-left font-semibold text-center md:text-left">
              Kepada Pelanggan Setia Sempol Sedap, Sekarang Sempol Sedap Bisa Memesan Jajanan Yang Bapak/Ibu & Kakak/Adik Suka Melalui WhatsApp. Terimakasih🥰
            </p>
            <Link className="font-extrabold py-2 px-4 bg-red-600 text-white rounded transition duration-300 block mx-auto md:mx-0" to="/produk" style={{ maxWidth: '300px', textAlign: 'center' }}>
              <i className="fa fa-tag"></i> Lihat Semua Jajanan
            </Link>
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
        <div className="mt-15" ref={ref}>
          <div className="flex items-center mt-20">
            <div className="flex-grow border-t border-gray-800"></div> {/* Garis kiri */}
            <h2 className="text-3xl font-bold text-gray-800 mx-4">PRODUK FAVORIT</h2>
            <div className="flex-grow border-t border-gray-800"></div> {/* Garis kanan */}
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ${isVisible ? 'animate-zoom-in' : ''}`}>
            {/* Contoh produk terlaris */}
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
              <img alt="Produk 1" className="w-full h-48 object-cover" src={pf1} />
              <h3 className="text-xl font-semibold mt-2">Sempol Ayam</h3>
              <p className="text-gray-600">Sempol Ayam dengan harga 1.000</p>
              <p className="text-red-600 font-bold">Rp. 1.000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
              <img alt="Produk 2" className="w-full h-48 object-cover" src={pf2} />
              <h3 className="text-xl font-semibold mt-2">Citul ( Aci Tulang )</h3>
              <p className="text-gray-600">Beli 2 Citul atau aci tulang dengan harga 5.000</p>
              <p className="text-red-600 font-bold">Rp. 5.000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
              <img alt="Produk 3" className="w-full h-48 object-cover" src={pf3} />
              <h3 className="text-xl font-semibold mt-2">Teh Poci</h3>
              <p className="text-gray-600">Teh Poci tersedia dengan harga 3.000 & 5.000</p>
              <p className="text-red-600 font-bold">Rp. 3.000 & Rp. 5.000</p>
            </div>
          </div>
        </div>
        {/* Menambahkan informasi pemilik perusahaan */}
        <div className="mt-8">
          <div className="flex items-center mt-20">
            <div className="flex-grow border-t border-gray-800"></div> {/* Garis kiri */}
            <h2 className="text-3xl font-bold text-gray-800 mx-4 text-center">TESTIMONI TERHADAP SEMPOL SEDAP</h2>
            <div className="flex-grow border-t border-gray-800"></div> {/* Garis kanan */}
          </div>
          <div className="w-full mt-8 md:mt-10">
            <Slider {...settings} className="relative">
              <div className="bg-yellow-300 p-6 rounded-lg shadow-lg flex flex-col justify-center min-h-[200px]">
                {' '}
                {/* Menambahkan min-h untuk tinggi yang sama */}
                <p className="text-lg font-semibold text-gray-900">"Di sempol sedap ini jual sempolan yang enak banget, jadi saya beli sempolan nya terus kalo saya ke tempat jualan sempol sedap ini."</p>
                <div className="flex items-center mt-4">
                  <img alt="Anggota 1" className="w-16 h-16 rounded-full mr-4" src={test3} /> {/* Ganti dengan path foto anggota */}
                  <div>
                    <p className="text-gray-900 font-bold">Fathih</p>
                    <p className="text-gray-900">Mahasiswa Universitas Gunadarma</p>
                  </div>
                </div>
              </div>
              {/* Tambahkan anggota lainnya dengan format yang sama */}
              <div className="bg-yellow-300 p-6 rounded-lg shadow-lg flex flex-col justify-center min-h-[200px]">
                {' '}
                {/* Menambahkan min-h untuk tinggi yang sama */}
                <p className="text-lg font-semibold text-gray-900">
                  "Sempol sedap adalah jualan jajanan yang enak banget sama worth it untuk mahasiswa seperti saya, untuk sempol nya enak banget kaga ada rasa aci nya sama sekali malahan rasa ayam banget, jadi tolong beli jajanan di sempol
                  sedap okee👍"
                </p>
                <div className="flex items-center mt-4">
                  <img alt="Anggota 2" className="w-16 h-16 rounded-full mr-4" src={test4} /> {/* Ganti dengan path foto anggota */}
                  <div>
                    <p className="text-gray-900 font-bold">Rizky Ramadhan</p>
                    <p className="text-gray-900">Mahasiswa Universitas Gunadarma</p>
                  </div>
                </div>
              </div>
              {/* Tambahkan lebih banyak anggota sesuai kebutuhan */}
              <div className="bg-yellow-300 p-6 rounded-lg shadow-lg flex flex-col justify-center min-h-[200px]">
                {' '}
                {/* Menambahkan min-h untuk tinggi yang sama */}
                <p className="text-lg font-semibold text-gray-900">"Sempol Ayam disini enak sekali, citul nya juga enak gede-gede lagi sama isian nya juga banyak dan harga citulnya murah."</p>
                <div className="flex items-center mt-4">
                  <img alt="Anggota 2" className="w-16 h-16 rounded-full mr-4" src={kryw1} /> {/* Ganti dengan path foto anggota */}
                  <div>
                    <p className="text-gray-900 font-bold">Aldy Syahputra Harianja</p>
                    <p className="text-gray-900">Mahasiswa Universitas Gunadarma</p>
                  </div>
                </div>
              </div>
              {/* Tambahkan lebih banyak anggota sesuai kebutuhan */}
              <div className="bg-yellow-300 p-6 rounded-lg shadow-lg flex flex-col justify-center min-h-[200px]">
                {' '}
                {/* Menambahkan min-h untuk tinggi yang sama */}
                <p className="text-lg font-semibold text-gray-900">"Untuk teh poci disini manis sama juga beli 2 gratis 1 setiap hari, jadi seneng kalo mesen di sempol sedap ini dan sempol sama citul nya enak semua pokoknya."</p>
                <div className="flex items-center mt-4">
                  <img alt="Anggota 2" className="w-16 h-16 rounded-full mr-4" src={test2} /> {/* Ganti dengan path foto anggota */}
                  <div>
                    <p className="text-gray-900 font-bold">Alpiansyah Harianja</p>
                    <p className="text-gray-900">Mahasiswa Presiden University</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mt-20 text-center">LOKASI SEMPOL SEDAP</h2>
          <div className="wave-container">
            <div className="wave"></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mt-5">SEMPOL SEDAP LAPAK 1</h3>
          <iframe
            title="Lokasi Kami"
            className="w-full h-96 mt-3" // Anda dapat menyesuaikan tinggi sesuai kebutuhan
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126123.123456789!2d107.11161!3d-6.24625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e4f4f4f4f4f4%3A0x4f4f4f4f4f4f4f4!2sLokasi%20Kami!5e0!3m2!1sen!2sid!4v1234567890123"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <h3 className="text-2xl font-bold text-gray-800 mt-10">SEMPOL SEDAP LAPAK 2</h3>
          <iframe
            title="Lokasi Kami"
            className="w-full h-96 mt-3" // Anda dapat menyesuaikan tinggi sesuai kebutuhan
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126123.123456789!2d107.11161!3d-6.24625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e4f4f4f4f4f4%3A0x4f4f4f4f4f4f4f4!2sLokasi%20Kami!5e0!3m2!1sen!2sid!4v1234567890123"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
