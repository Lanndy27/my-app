import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import BrowserRouter
// import { motion } from 'framer-motion'; // Import Framer Motion
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login'; // Import halaman Login
import TipsBahan from './pages/Tips Bahan';
import TipsWarna from './pages/Tips Warna';
import TipsAksesoris from './pages/Tips Aksesoris';

const App = () => {
  const location = useLocation();

  return (
    // <motion.div
    //   key={location.key} // Key untuk mengubah animasi saat berpindah halaman
    //   initial={{ opacity: 0 }} // Keadaan awal
    //   animate={{ opacity: 1 }} // Keadaan akhir saat animasi
    //   exit={{ opacity: 0 }} // Keadaan saat keluar
    //   transition={{ duration: 0.5 }} // Durasi transisi
    // >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Tips-Bahan" element={<TipsBahan />} />
        <Route path="/Tips-Warna" element={<TipsWarna />} />
        <Route path="/Tips-Aksesoris" element={<TipsAksesoris />} />
      </Routes>
    // </motion.div>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <App /> {/* Pindahkan Routes ke dalam komponen App */}
    </Router>
  </StrictMode>,
);