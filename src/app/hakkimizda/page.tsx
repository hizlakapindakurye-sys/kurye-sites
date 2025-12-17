import type { Metadata } from 'next';
import Link from 'next/link';

// Icon Components
const CustomerIcon = () => (
  <svg fill="currentColor" className="w-6 h-6 mb-2" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const CheckIcon = () => (
  <svg fill="currentColor" className="w-6 h-6 mb-2" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
);

const TechIcon = () => (
  <svg fill="currentColor" className="w-6 h-6 mb-2" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);

const EarthIcon = () => (
  <svg fill="currentColor" className="w-6 h-6 mb-2" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export const metadata: Metadata = {
  title: 'Hakkımızda | Hızla Kapında Kurye - İstanbul\'da Profesyonel Motorlu Kurye',
  description: 'Hızla Kapında Kurye olarak, İstanbul\'da 24/7 profesyonel kurye hizmeti sunuyoruz. Vizyonumuz, misyonumuz, değerlerimiz ve deneyimli ekibimiz hakkında bilgi edinin. Hız ve güvenle kurye taşıması.',
  keywords: 'kurye firması, kurye hizmeti, profesyonel kurye, İstanbul kurye, hızla kapında',
  openGraph: {
    title: 'Hakkımızda - Hızla Kapında Kurye',
    description: 'İstanbul\'da 24/7 profesyonel motorlu kurye hizmeti. Güvenilir, hızlı ve teknoloji odaklı.',
    type: 'website',
  },
};

const ValueCard = ({ title, description, icon: IconComponent }: { title: string, description: string, icon: React.ReactNode }) => (
    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col items-center text-center">
        <div className="text-blue-600 mb-3">
            {IconComponent}
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
);

export default function AboutUsPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">Biz Hızla Kapında Kurye'yiz</h1>
           <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">İstanbul'un lojistik ve teslimat ihtiyaçlarına <strong>modern ve profesyonel çözümler</strong> sunan, <strong>teknoloji ve insanı birleştiren</strong> yeni nesil bir kurye firmasıyız. 24/7 hizmet ile güvenle ve hızla yanınızdayız.</p>

          <div className="prose lg:prose-xl max-w-none mx-auto text-gray-700 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-2 border-blue-600 pb-3">Felsefemiz: Hız ve Güven Birleşimi</h2>
              <p className="leading-relaxed text-gray-700">
                Adımızdan da anlaşılacağı gibi, temel felsefemiz <strong>hıza</strong> dayanır. Ancak bizim için hız, sadece gönderiyi bir noktadan diğerine çabucak ulaştırmak anlamına gelmez. Aynı zamanda:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li><strong>Talebinize saniyeler içinde yanıt vermek,</strong></li>
                <li><strong>Size en yakın kuryeyi dakikalar içinde yönlendirmek,</strong></li>
                <li><strong>Tüm süreci sizin için şeffaf ve pürüzsüz hale getirmektir.</strong></li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-700">
                Bu hızı, her aşamada sarsılmaz bir <strong>güven ilkesiyle</strong> dengeliyoruz. Gönderiniz, ne olursa olsun, bize emanet edildiği andan teslim edildiği ana kadar bizim <strong>sorumluluğumuz ve güvencemiz altındadır.</strong>
              </p>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-600 pb-3">Çekirdek Değerlerimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ValueCard title="Müşteri Odaklılık" description="Tüm operasyonlarımızın merkezinde müşterilerimizin ihtiyaç ve beklentileri yer alır. Size sadece bir hizmet değil, <strong>tam bir çözüm</strong> sunarız." icon={<CustomerIcon />} />
                    <ValueCard title="Güvenilirlik" description="Şeffaf süreçlerimiz ve sorumlu ekibimizle, <strong>her gönderinin güvenle teslim edileceğinin garantisini</strong> veririz." icon={<CheckIcon />} />
                    <ValueCard title="Teknoloji ve Yenilik" description="Sektördeki en son teknolojileri kullanarak <strong>daha hızlı, daha verimli ve daha şeffaf</strong> bir hizmet sunmak için sürekli olarak kendimizi geliştiririz." icon={<TechIcon />} />
                    <ValueCard title="Sosyal Sorumluluk" description="Hem müşterilerimizin gönderilerine karşı hem de operasyonlarımızın <strong>çevreye olan etkisine</strong> karşı sorumluluk bilinciyle hareket ederiz." icon={<EarthIcon />} />
                </div>
            </div>

            

            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-2 border-blue-600 pb-3">Deneyimli ve Profesyonel Ekibimiz</h2>
                <p className="leading-relaxed text-gray-700">
                Hızla Kapında Kurye'nin başarısının arkasındaki en büyük güç, sahadaki <strong>profesyonel ve deneyimli ekibimizdir.</strong> Kuryelerimiz, sadece motor kullanan kişiler değildir. Aynı zamanda:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 mb-4">
                  <li><strong>İstanbul'un her sokağını avucunun içi gibi bilen</strong> şehir uzmanlarıdır,</li>
                  <li><strong>Zorlu trafik koşullarında</strong> dahi en hızlı ve en güvenli rotaları bulabilenlerdir,</li>
                  <li><strong>Müşteri hizmetine</strong> ve profesyonelliğe saygı duyanlarır.</li>
                </ul>
                <p className="leading-relaxed text-gray-700">
                <strong>Düzenli eğitimler ve performans değerlendirmeleri</strong> ile ekibimizin hizmet kalitesini sürekli olarak en üst düzeyde tutarız. Her kuryemiz, "Hızla Kapında" felsefesinin bir temsilcisidir.
                </p>
            </div>
            <div className="text-center pt-8 bg-gradient-to-r from-blue-50 to-yellow-50 p-8 rounded-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Bizimle İş Yapmaya Başlamak İster misiniz?</h3>
                <p className="text-gray-700 mb-6">Hızla Kapında Kurye olarak, İstanbul'un her noktasında sizin için hazırız.</p>
                <Link href="/iletisim" className="inline-block bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Fiyat Teklifi Al →
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}