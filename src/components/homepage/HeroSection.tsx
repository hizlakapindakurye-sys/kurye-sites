import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Şehir İçi Teslimatın En Hızlı Yolu</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Modern kurye çözümleriyle gönderilerinizi aynı gün güvenle ve rekor sürede ulaştırıyoruz.</p>
        <Link href="/iletisim" className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-transform duration-300 transform hover:scale-105">
          Teklif Alın &rarr;
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
