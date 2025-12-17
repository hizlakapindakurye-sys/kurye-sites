"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">
          <Link href="/">Hızla Kapında Kurye</Link>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
          <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-blue-600 transition-colors">Hizmetlerimiz</Link>
          <Link href="/hizmet-bolgeleri" className="text-gray-700 hover:text-blue-600 transition-colors">Hizmet Bölgeleri</Link>
          <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımızda</Link>
          <Link href="/iletisim" className="bg-yellow-400 text-blue-900 font-bold py-2 px-5 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            İletişim
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 border-t">
          <Link href="/" className="block py-3 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link>
          <Link href="/hizmetlerimiz" className="block py-3 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Hizmetlerimiz</Link>
          <Link href="/hizmet-bolgeleri" className="block py-3 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Hizmet Bölgeleri</Link>
          <Link href="/hakkimizda" className="block py-3 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link>
          <Link href="/iletisim" className="block py-3 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

