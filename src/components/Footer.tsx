import Link from 'next/link';

// Dummy Social Icons
const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
    {children}
  </a>
);

const WhatsAppIcon = () => (
  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.02.99 4.34L2.05 22l6.5-2.13C10.96 21.59 11.97 22 13 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.87 0-1.72-.19-2.5-.55l-.18-.1-1.82.6.61-1.8-.1-.18C4.78 16.55 4 14.85 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.64-6.67c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.24-.64.81-.79.97-.15.17-.3.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.24.26-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.2-.49-.4-.42-.57-.43h-.5c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.17 1.77 2.71 4.3 3.8 1.87.82 2.49.81 3.3.68.44-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29z"/>
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Hızla Kapında Kurye</h3>
            <p className="text-gray-400 max-w-md">İstanbul'un her yerine hızlı, güvenilir ve profesyonel kurye hizmetleri sunarak gönderilerinizi zamanında ulaştırıyoruz.</p>
             <div className="flex space-x-4 mt-6">
              <SocialIcon href="https://wa.me/905452145949"><WhatsAppIcon /></SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/hizmet-bolgeleri" className="text-gray-400 hover:text-white transition-colors">Hizmet Bölgeleri</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Adres: Örnek Mah. No:1, İstanbul</li>
              <li>Telefon: 0545 214 59 49</li>
              <li>Email: info@kuryeapp.com</li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hızla Kapında Kurye. Tüm hakları saklıdır. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
