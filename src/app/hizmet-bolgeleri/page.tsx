import Link from 'next/link';
import { districts } from '@/data/districts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İstanbul Hizmet Bölgeleri | 39 İlçeye Motorlu Kurye | Hızla Kapında',
  description: 'İstanbul\'ün tüm 39 ilçesine profesyonel motorlu kurye hizmeti. Anadolu ve Avrupa yakasında aynı gün teslimat. Her ilçe için özel hizmet detayları.',
  keywords: 'İstanbul kurye, motorlu kurye, hizmet bölgeleri, kurye hizmetleri',
  openGraph: {
    title: 'İstanbul Hizmet Bölgeleri - 39 İlçeye Kurye',
    description: 'İstanbul\'ün tüm bölgelerine profesyonel motorlu kurye hizmeti ve aynı gün teslimat',
    type: 'website',
  },
};

const FaqItem = ({ q, a }: { q: string, a: string }) => (
  <div className="py-4">
    <h3 className="font-semibold text-lg text-blue-900">{q}</h3>
    <p className="mt-1 text-gray-700" dangerouslySetInnerHTML={{ __html: a }} />
  </div>
);

export default function ServiceAreas() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">İstanbul'da Motorlu Kurye Hizmeti - 39 İlçe</h1>
          <p className="text-lg text-gray-700 text-center mb-3 leading-relaxed">
            Hızla Kapında Kurye olarak, <strong>İstanbul'un 39 ilçesinin tamamına</strong> yayılan geniş hizmet ağımızla her an yanınızdayız. Anadolu ve Avrupa yakasında lokomotif hizmet farkıyla <strong>aynı gün teslimat</strong> ve <strong>profesyonel kurye çözümleri</strong> sunuyoruz.
          </p>
          <p className="text-base text-gray-600 text-center mb-12">
            Aşağıdan ilçenizi seçerek, size özel kurye hizmet detaylarına, fiyat bilgilerine ve mahalle bilgilerine ulaşabilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Anadolu Yakası */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 border-b-2 border-blue-300 pb-4">Anadolu Yakası İlçeler</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                {districts.anadolu.map((district) => (
                  <Link
                    key={district.slug}
                    href={`/hizmet-bolgeleri/anadolu/${district.slug}`}
                    className="text-blue-900 font-medium hover:text-blue-600 hover:underline transition"
                  >
                    {district.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Avrupa Yakası */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg border-2 border-yellow-200">
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 border-b-2 border-yellow-300 pb-4">Avrupa Yakası İlçeler</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                {districts.avrupa.map((district) => (
                  <Link
                    key={district.slug}
                    href={`/hizmet-bolgeleri/avrupa/${district.slug}`}
                    className="text-blue-900 font-medium hover:text-blue-600 hover:underline transition"
                  >
                    {district.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

           {/* FAQ Section */}
           <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-3 text-blue-900">Hizmet Bölgeleri - Sıkça Sorulan Sorular</h2>
            <p className="text-center text-gray-600 mb-12">İstanbul bölgelerimiz ve hizmetlerimiz hakkında merak ettiklerinizi bulabilirsiniz.</p>
            <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md divide-y divide-gray-300">
              <FaqItem 
                q="İstanbul'un tüm ilçelerine hizmet veriyor musunuz?"
                a="Evet, hizmet ağımız <strong>İstanbul'un 39 ilçesinin tamamını</strong> ve tüm mahallelerini kapsamaktadır. Adalar gibi ulaşımı zor bölgeler için de <strong>özel çözümlerimiz</strong> bulunmaktadır. İlçenizi seçerek detaylı bilgi alabilirsiniz."
              />
              <FaqItem 
                q="Kurye fiyatları ilçeden ilçeye değişiklik gösterir mi?"
                a="Evet, kurye fiyatlandırmasındaki ana faktör <strong>mesafe</strong>dir. Gönderinin alınacağı ilçe ile teslim edileceği ilçe arasındaki mesafe, fiyatı belirlemede önemli bir rol oynar. Tüm bölgeler için <strong>adil ve rekabetçi fiyat politikası</strong> izlemekteyiz."
              />
               <FaqItem 
                q="En uzak ilçelere teslimat süreniz nedir?"
                a="Teslimat süresi seçtiğiniz hizmet türüne (<strong>Ekspres/Normal</strong>) ve mesafeye göre değişir. <strong>Ekspres Kurye</strong> hizmetimizle, İstanbul'un en uzak iki noktası arasında bile birkaç saat içinde teslimat yapmayı hedefliyoruz. Detaylı bilgi için <strong>0545 214 59 49</strong> numarasından bizimle iletişime geçebilirsiniz."
              />
              <FaqItem 
                q="Anadolu Yakası ve Avrupa Yakası arasında hizmet farkı var mı?"
                a="Hayır, <strong>her iki yakada da aynı kaliteli ve profesyonel hizmeti</strong> sunuyoruz. Anadolu ve Avrupa yakasının tüm ilçelerinde özel kurye ağlarımız bulunmaktadır. Çevre trafik ve harita bilgisine sahip kuryelerimizle en hızlı rotayı buluyoruz."
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
