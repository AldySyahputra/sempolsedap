import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Produk from './components/Produk';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div lang="en">
        <Navbar />
        <Routes>
          {/* Ganti Switch dengan Routes */}
          <Route path="/" element={<Beranda />} />
          <Route path="/produk" element={<Produk />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
