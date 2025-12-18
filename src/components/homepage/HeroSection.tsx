import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Şehir İçi Teslimatın En Hızlı Yolu</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Modern kurye çözümleriyle gönderilerinizi aynı gün güvenle ve rekor sürede ulaştırıyoruz.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/iletisim" className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-transform duration-300 transform hover:scale-105">
            Teklif Alın &rarr;
          </Link>
          <a href="tel:+905452145949" className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            0545 214 59 49
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
