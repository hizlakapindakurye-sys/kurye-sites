// A single testimonial card component for reusability
const TestimonialCard = ({ text, author, company }: { text: string, author: string, company: string }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <p className="text-gray-600 mb-6">"{text}"</p>
      <div className="font-bold text-gray-800">{author}</div>
      <div className="text-sm text-gray-500">{company}</div>
    </div>
  );
};


const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Müşterilerimiz Ne Diyor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            text="Acil bir evrak göndermem gerekiyordu ve Hızla Kapında Kurye 1 saat içinde teslimatı gerçekleştirdi. Gerçekten hayat kurtarıcı bir hizmet."
            author="Ayşe Yılmaz"
            company="Yılmaz Hukuk Bürosu"
          />
           <TestimonialCard 
            text="E-ticaret sitemiz için düzenli olarak çalışıyoruz. Siparişlerimizi zamanında ve sorunsuz bir şekilde müşterilerimize ulaştırıyorlar. Profesyonel bir ekip."
            author="Mehmet Öztürk"
            company="Butik Alya CEO"
          />
           <TestimonialCard 
            text="Büyük ve hassas bir maket göndermem gerekiyordu. Arabalı kurye hizmetleri sayesinde gönderim güvenle ve tam zamanında yerine ulaştı. Teşekkürler!"
            author="Elif Kaya"
            company="Mimar"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
