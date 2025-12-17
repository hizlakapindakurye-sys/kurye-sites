// SVG Icon Components - It's better to have these in their own files, but for simplicity, they are here.
const FastForwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 6h14v2H5z"/>
    </svg>
  );
  
const GlobeIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
</svg>
);

const PriceTagIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16zm-5.5-9c.83 0 1.5-.67 1.5-1.5S13.33 8 12.5 8 11 8.67 11 9.5s.67 1.5 1.5 1.5z"/>
</svg>
);


const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                <FastForwardIcon />
                <h3 className="text-2xl font-bold mb-2">Şimşek Hızında Teslimat</h3>
                <p className="text-gray-600">
                  İstanbul'un yoğun trafiği bizim için bir engel değil. Akıllı rota planlama sistemimiz ve tecrübeli kuryelerimiz sayesinde, acil gönderilerinizi <strong>Ekspres Kurye</strong> seçeneğimizle ortalama 90 dakika içinde alıcısına ulaştırıyoruz. Zamanla yarışan her anınızda yanınızdayız.
                </p>
                </div>
                <div className="flex flex-col items-center">
                <GlobeIcon />
                <h3 className="text-2xl font-bold mb-2">İstanbul'un Her Yerine</h3>
                <p className="text-gray-600">
                  Hizmet ağımız, Adalar'dan Silivri'ye, Beykoz'dan Çatalca'ya kadar İstanbul'un 39 ilçesini de kapsar. Nerede olursanız olun, size en yakın motorlu kuryemiz dakikalar içinde kapınızda olur. Geniş ve etkin dağıtım ağımızla şehrin her noktasına hakimiz.
                </p>
                </div>
                <div className="flex flex-col items-center">
                <PriceTagIcon />
                <h3 className="text-2xl font-bold mb-2">Net ve Rekabetçi Fiyatlar</h3>
                <p className="text-gray-600">
                  Kaliteli hizmetin pahalı olması gerekmediğine inanıyoruz. Gönderinizin mesafesine ve türüne göre en uygun fiyat teklifini, hiçbir gizli maliyet olmadan, en başta net bir şekilde sunuyoruz. Şeffaf fiyat politikamızla bütçenizi koruyoruz.
                </p>
                </div>
            </div>
            </div>
      </section>
    );
}

export default FeaturesSection;
