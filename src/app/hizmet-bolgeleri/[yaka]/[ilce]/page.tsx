import { districts } from '@/data/districts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
  params: {
    yaka: string;
    ilce: string;
  };
}

const LocalBusinessJsonLd = ({ districtName, sideName }: { districtName: string; sideName: string }) => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${districtName} Kurye Hizmetleri - Hızla Kapında Kurye`,
    "description": `${districtName}, ${sideName} yakasında profesyonel motorlu kurye hizmeti`,
    "areaServed": {
      "@type": "City",
      "name": districtName
    },
    "serviceType": ["Motorlu Kurye", "Arabalı Kurye", "Ekspres Kurye"],
    "telephone": "+905452145949",
    "url": "https://www.hizlakapindakurye.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": districtName,
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+905452145949"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export function generateMetadata({ params }: Props): Metadata {
  const side = params.yaka === 'anadolu' ? 'anadolu' : params.yaka === 'avrupa' ? 'avrupa' : null;
  if (!side) return {};

  const district = districts[side].find(d => d.slug === params.ilce);
  if (!district) return {};

  const districtName = district.name;
  const sideName = side === 'anadolu' ? 'Anadolu' : 'Avrupa';
  
  return {
    title: `${districtName} Kurye Hizmeti | Motorlu & Arabalı Kurye | Hızla Kapında`,
    description: `${districtName} ilçesinde acil ve güvenilir kurye hizmeti. Motorlu, arabalı ve ekspres kurye seçenekleri. Aynı gün teslimat, uygun fiyatlar. Hemen teklif alın!`,
    keywords: `${districtName} kurye, ${districtName} motorlu kurye, ${districtName} kurye hizmeti, ${districtName} acil kurye`,
    openGraph: {
      title: `${districtName} Kurye Hizmeti`,
      description: `${districtName} ilçesinde profesyonel kurye hizmeti. Motorlu ve arabalı kurye seçenekleri ile aynı gün teslimat.`,
      type: 'website',
    },
  };
}

const FaqItem = ({ q, a }: { q: string, a: string }) => (
  <div className="py-4">
    <h3 className="font-semibold text-lg text-gray-800">{q}</h3>
    <p className="mt-1 text-gray-600" dangerouslySetInnerHTML={{ __html: a }}></p>
  </div>
);

export default function IlcePage({ params }: Props) {
  const { yaka, ilce } = params;
  const side = yaka === 'anadolu' ? 'anadolu' : yaka === 'avrupa' ? 'avrupa' : null;

  if (!side) notFound();

  const district = districts[side].find(d => d.slug === ilce);

  if (!district) notFound();

  const sideName = side === 'anadolu' ? 'Anadolu' : 'Avrupa';

  return (
    <div className="bg-white py-16">
      <LocalBusinessJsonLd districtName={district.name} sideName={sideName} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-lg border border-blue-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              {district.name} Kurye Hizmeti - Motorlu & Arabalı Kurye
            </h1>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              İstanbul'un {sideName} yakasında yer alan <strong>{district.name}</strong> ilçesinin tüm mahallelerine profesyonel motorlu ve arabalı kurye hizmeti sunuyoruz. {district.feature} ile bilinen bu semtin acil evrak ve paket göndermelerinde, <strong>Hızla Kapında Kurye</strong> olarak <strong>aynı gün teslimat</strong> ve <strong>uygun fiyatlar</strong> ile hizmet veriyoruz.
            </p>

            {/* Pricing and Service Table */}
            <div className="my-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">{district.name} Kurye Hizmet Seçenekleri</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="p-3 font-semibold text-sm">Hizmet Türü</th>
                                <th className="p-3 font-semibold text-sm">Tahmini Süre</th>
                                <th className="p-3 font-semibold text-sm">Fiyat Düzeyi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-blue-50 transition">
                                <td className="p-3 font-medium">Normal Kurye</td>
                                <td className="p-3">120 - 180 dakika</td>
                                <td className="p-3">₺ Ekonomik</td>
                            </tr>
                            <tr className="border-b hover:bg-blue-50 transition bg-yellow-50">
                                <td className="p-3 font-bold text-yellow-900">Ekspres Kurye</td>
                                <td className="p-3 font-bold text-yellow-900">60 - 90 dakika</td>
                                <td className="p-3 font-bold text-yellow-900">₺₺ Standart</td>
                            </tr>
                            <tr className="hover:bg-blue-50 transition">
                                <td className="p-3 font-medium">Arabalı Kurye</td>
                                <td className="p-3">90 - 150 dakika</td>
                                <td className="p-3">₺₺₺ Premium</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Popular Shipments Section */}
            {district.popularShipments && district.popularShipments.length > 0 && (
                <div className="my-10">
                    <h3 className="text-xl font-bold text-center mb-4 text-blue-900">{district.name} İçin Sık Gönderilen Paket Türleri</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {district.popularShipments.map(shipment => (
                            <span key={shipment} className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full border border-green-300">{shipment}</span>
                        ))}
                    </div>
                </div>
            )}

            <div className="text-center mt-10">
              <Link href="/iletisim" className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg">
                {district.name} İçin Fiyat Teklifi Al &rarr;
              </Link>
            </div>
          </div>
          
          {/* NEIGHBORHOODS SECTION */}
          {district.neighborhoods && district.neighborhoods.length > 0 && (
              <div className="my-16 bg-blue-50 p-8 rounded-lg border border-blue-200">
                  <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">{district.name} Hizmet Verdiğimiz Başlıca Mahalleler</h2>
                  <p className="text-center text-gray-700 mb-6">Aşağıdaki mahalleler ve çevresinde motorlu kurye hizmetimiz bulunmaktadır:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                      {district.neighborhoods.map(hood => (
                          <span key={hood} className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition">{hood}</span>
                      ))}
                  </div>
              </div>
            )}
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-2 text-blue-900">{district.name} Kurye Hizmeti - Sıkça Sorulan Sorular</h2>
            <p className="text-center text-gray-600 mb-8">Aşağıdaki sorular ve cevaplar, {district.name} ilçesinde kurye hizmeti hakkında sık sorulan soruları içermektedir.</p>
            <div className="divide-y divide-gray-300 bg-gray-50 rounded-lg p-6">
              <FaqItem 
                q={`${district.name} içinde bir gönderi ne kadar sürede teslim edilir?`}
                a={`${district.name} ilçesinin merkez ve çevre mahallelerine gönderileriniz standart olarak <strong>aynı gün teslim</strong> edilir. ${district.name} kurye hizmetimizin <strong>Ekspres Kurye</strong> seçeneğini tercih ederseniz, gönderiniz ortalama <strong>60-90 dakika</strong> içinde teslimat yapılacaktır.`}
              />
              <FaqItem 
                q={`${district.name} kurye ücretleri nasıl hesaplanıyor?`}
                a={`${district.name} kurye fiyatlandırması, gönderinin boyutu, ağırlığı, teslimatın yapılacağı mahalle ve hizmet türüne göre belirlenir. En <strong>uygun fiyatlı kurye</strong> teklifini almak için <strong>0545 214 59 49</strong> numarasından bizimle iletişime geçebilir veya web formumuzdan hemen teklif isteyebilirsiniz.`}
              />
              <FaqItem 
                q={`${district.name} bölgesinde gönderim takibi yapılabiliyor mu?`}
                a={`Evet, ${district.name} kurye talebiniz oluşturduktan sonra size verilecek takip numarası veya WhatsApp üzerinden <strong>gönderinizin gerçek zamanlı konumunu</strong> harita üzerinden takip edebilirsiniz.`}
              />
              <FaqItem 
                q={`${district.name} bölgesinden büyük paket veya mobilya gönderebilir miyim?`}
                a={`Evet, ${district.name} bölgesinden büyük, ağır veya homojen olmayan gönderiler için <strong>Arabalı Kurye</strong> hizmetimiz mevcuttur. Bu hizmetle, ${district.name} adresinizdeki büyük paketlerinizi, mobilyalarınızı veya equipmanlarınızı güvenle alıp teslimat yapıyoruz.`}
              />
              <FaqItem 
                q={`${district.name} kurye hizmetleri hafta sonları da var mı?`}
                a={`Evet, ${district.name} kurye hizmetimiz <strong>7 gün 24 saat</strong> açıktır. Hafta sonları ve tatil günlerinde de ${district.name} ilçesine motorlu ve arabalı kurye gönderebilirsiniz. Acil gönderimlerde bize hemen WhatsApp veya telefon ile ulaşmanız yeterlidir.`}
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/hizmet-bolgeleri/${yaka}`} className="text-blue-600 hover:underline font-semibold">
              &larr; {sideName} Yakası Tüm İlçeler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// This function tells Next.js which district pages to pre-build
export async function generateStaticParams({ params }: { params: { yaka: string } }) {
  const side = params.yaka === 'anadolu' ? 'anadolu' : 'avrupa';
  return districts[side].map((district) => ({
    ilce: district.slug,
  }));
}