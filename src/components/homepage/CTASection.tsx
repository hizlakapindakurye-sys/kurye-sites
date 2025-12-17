import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-blue-700">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Gönderilecek Bir Paketiniz mi Var?</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">Hızla Kapında Kurye'nin sunduğu ayrıcalıklı hizmetlerle tanışmak ve gönderinizi bugün yola çıkarmak için daha fazla beklemeyin.</p>
        <Link href="/iletisim" className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-transform duration-300 transform hover:scale-105">
          Hemen Teklif Alın
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
