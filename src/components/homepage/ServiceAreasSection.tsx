import Link from 'next/link';
import { districts } from '@/data/districts';

const ServiceAreasSection = () => {
  // Get a few districts to showcase
  const anadoluSample = districts.anadolu.slice(0, 5);
  const avrupaSample = districts.avrupa.slice(0, 5);

  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Tüm İstanbul Hizmetinizde</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Anadolu ve Avrupa yakasındaki 39 ilçenin tamamına ulaşıyoruz.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Anadolu Yakası</h3>
            <div className="flex flex-wrap gap-3">
              {anadoluSample.map(d => (
                <Link key={d.slug} href={`/hizmet-bolgeleri/anadolu/${d.slug}`} className="bg-gray-700 py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                  {d.name}
                </Link>
              ))}
              <span className="py-2 px-4">& daha fazlası...</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Avrupa Yakası</h3>
             <div className="flex flex-wrap gap-3">
              {avrupaSample.map(d => (
                <Link key={d.slug} href={`/hizmet-bolgeleri/avrupa/${d.slug}`} className="bg-gray-700 py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                  {d.name}
                </Link>
              ))}
              <span className="py-2 px-4">& daha fazlası...</span>
            </div>
          </div>
        </div>
        <Link href="/hizmet-bolgeleri" className="mt-12 inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300">
          Tüm Hizmet Bölgelerini Gör
        </Link>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
