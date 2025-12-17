import type { Metadata } from 'next';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import CTASection from '@/components/homepage/CTASection';

// Import Icon Components
import PackageIcon from '@/components/icons/PackageIcon';
import BoltIcon from '@/components/icons/BoltIcon';
import MoonIcon from '@/components/icons/MoonIcon';
import TruckIcon from '@/components/icons/TruckIcon';
import MailOpenIcon from '@/components/icons/MailOpenIcon';
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon';

export const metadata: Metadata = {
  title: 'Profesyonel Kurye Hizmetleri | Normal, Ekspres, Gece & Arabalı | Hızla Kapında',
  description: 'İstanbul için tüm kurye çözümleri: Normal kurye, ekspres kurye, gece kuryesi, arabalı kurye, toplu dağıtım ve e-ticaret lojistiği. Aynı gün teslimat, 24/7 hizmet, uygun fiyatlar.',
  keywords: 'kurye hizmeti, motorlu kurye, ekspres kurye, gece kuryesi, arabalı kurye, e-ticaret lojistiği, İstanbul kurye',
  openGraph: {
    title: 'Profesyonel Kurye Hizmetleri',
    description: 'İstanbul\'un tüm bölgelerine profesyonel kurye hizmetleri. Hızlı, güvenilir ve uygun fiyatlı çözümler.',
    type: 'website',
  },
};

// Define services data at the module level
const services = [
  {
    name: 'Normal Kurye',
    description: 'Gün içi teslimatlar için en ideal ve ekonomik çözümümüzdür. Gönderileriniz aynı gün içinde, mesai saatleri dahilinde güvenle alınır ve alıcısına ulaştırılır. Fiyat-performans olarak en çok tercih edilen bu hizmetimiz, aciliyeti olmayan ancak aynı gün teslim edilmesi gereken evrak ve paketleriniz için mükemmeldir.',
    icon: <PackageIcon />,
  },
  {
    name: 'Ekspres Kurye',
    description: 'Zamanla yarıştığınız, acil ve kritik öneme sahip gönderileriniz için tasarlanmıştır. Önemli bir sözleşme, acil bir ilaç, son dakika yetişmesi gereken bir proje veya değerli bir hediye gibi gönderileriniz, talebinizden sonraki ortalama 60-90 dakika içinde teslim edilir. Hızın en önemli öncelik olduğu durumlar için vazgeçilmezdir.',
    icon: <BoltIcon />,
  },
  {
    name: 'Gece Kuryesi',
    description: 'Hizmetin zamana takılmasına izin vermiyoruz. Mesai saatleri dışında, hafta sonu veya resmi tatillerde yapılması gereken gönderileriniz için 7/24 kesintisiz hizmet sunarız. Nöbetçi eczaneden alınacak bir ilaç veya gece tamamlanan bir proje gibi durumlarda, gece kuryesi hizmetimizle işlerinizin aksamasını önlüyoruz.',
    icon: <MoonIcon />,
  },
  {
    name: 'Arabalı Kurye',
    description: 'Motorla taşınamayacak kadar büyük, ağır, kırılabilir veya hassas gönderileriniz için klimalı ve güvenli araçlarımızla hizmetinizdeyiz. Birden fazla paket, büyük bir maket, hassas elektronik cihazlar veya kötü hava koşullarından etkilenmemesi gereken gönderileriniz için arabalı kurye en doğru seçimdir.',
    icon: <TruckIcon />,
  },
   {
    name: 'Toplu Dağıtım',
    description: 'Çok sayıda gönderiyi tek seferde farklı adreslere ulaştırmak isteyen firmalar için özel olarak geliştirilmiştir. Davetiye, fatura, dergi, promosyon ürünü veya özel gün hediyeleri gibi gönderileriniz, belirlenen rota ve zaman planına göre en ekonomik ve organize şekilde dağıtılır.',
    icon: <MailOpenIcon />,
  },
   {
    name: 'E-ticaret Lojistiği',
    description: 'Online satış yapan ve operasyonel yükünü hafifletmek isteyen işletmelerin en büyük yardımcısıyız. Müşteri siparişlerinizin depodan alınması, paketlenmesi ve müşteriye hızlıca teslim edilmesini sağlıyoruz. İade süreçlerinizi de yöneterek sizin sadece satışlarınıza odaklanmanıza olanak tanıyoruz.',
    icon: <ShoppingCartIcon />,
  },
];

// Component to generate Service Schema
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hızla Kapında Kurye",
    "url": "https://www.hizlakapindakurye.com",
    "logo": "https://www.hizlakapindakurye.com/logo.png", // Replace with actual logo URL
    "makesOffer": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Hızla Kapında Kurye"
        },
        "areaServed": {
          "@type": "City",
          "name": "İstanbul"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <ServiceIntro />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.name}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <ServiceFAQ />
      <CTASection />
    </>
  );
}

