import Link from 'next/link';

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Nasıl Çalışır?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Sadece 3 basit adımda gönderinizi yola çıkarın.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
            <span className="text-5xl font-bold text-blue-200">1</span>
            <h3 className="text-xl font-bold my-3">Talep Oluşturun</h3>
            <p className="text-gray-600">Web sitemizden veya telefonla bizi arayarak kurye talebinizi oluşturun.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
             <span className="text-5xl font-bold text-blue-200">2</span>
            <h3 className="text-xl font-bold my-3">Paketinizi Alalım</h3>
            <p className="text-gray-600">Size en yakın kuryemiz dakikalar içinde adresinize gelerek gönderinizi teslim alsın.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
             <span className="text-5xl font-bold text-blue-200">3</span>
            <h3 className="text-xl font-bold my-3">Güvenle Teslim Edelim</h3>
            <p className="text-gray-600">Gönderiniz, seçtiğiniz hizmet türüne göre en hızlı şekilde alıcısına ulaştırılsın.</p>
          </div>
        </div>
        <Link href="/hizmetlerimiz" className="mt-12 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
          Tüm Hizmetlerimizi Keşfedin
        </Link>
      </div>
    </section>
  );
};

export default HowItWorksSection;
