const FaqItem = ({ q, a }: { q: string, a: string }) => (
    <div className="py-6 border-b border-gray-300 last:border-b-0">
      <h3 className="font-bold text-lg text-blue-900 mb-2">{q}</h3>
      <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
    </div>
);
  
const ServiceFAQ = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-3 text-blue-900">Kurye Hizmetleri - Sıkça Sorulan Sorular</h2>
                    <p className="text-center text-gray-600 mb-12">Hizmetlerimiz hakkında merak ettiklerinize yanıt bulabilirsiniz.</p>
                    <div className="bg-white rounded-lg p-8 shadow-md">
                        <FaqItem
                            q="Kurye çağırmak için saat sınırı var mı?"
                            a="Hayır. Gece Kuryesi hizmetimiz sayesinde, <strong>günün 24 saati, haftanın 7 günü</strong>, resmi tatiller dahil olmak üzere <strong>kesintisiz olarak</strong> kurye talebinde bulunabilirsiniz. WhatsApp veya telefon ile bize ulaştığınızda, acil talepleriniz en kısa sürede yerine getirilir."
                        />
                        <FaqItem
                            q="Gönderimin ağırlık veya boyut limiti nedir?"
                            a="Motorlu kuryelerimiz için standart bir boyut ve ağırlık (genellikle 15-20 kg) limiti bulunmaktadır. Ancak, motorla taşınamayacak kadar büyük, ağır veya hassas gönderileriniz için <strong>Arabalı Kurye hizmetimiz</strong> ile çözüm sunuyoruz. Mobilya, maket, elektronik cihazlar veya çok sayıda paket gönderebilirsiniz."
                        />
                        <FaqItem
                            q="Fiyatlandırma neye göre yapılıyor?"
                            a="Kurye fiyatlarımız; gönderinin alınacağı ve teslim edileceği noktalar arasındaki <strong>mesafe</strong>, gönderinin <strong>boyutu/ağırlığı</strong> ve seçtiğiniz <strong>hizmet türü</strong> (Normal, Ekspres, Gece vb.) göre belirlenir. En uygun ve net fiyat için <strong>0545 214 59 49</strong> numarasından bizi arayarak anında teklif alabilirsiniz."
                        />
                        <FaqItem
                            q="Kurumsal firmalar için özel çözümleriniz var mı?"
                            a="Evet, kurumsal müşterilerimiz için özel çözümlerimiz bulunmaktadır. <strong>E-ticaret firmaları</strong> için entegre lojistik hizmetlerinden, düzenli gönderi yapan firmalar için <strong>toplu dağıtım</strong>, özel faturalandırma ve <strong>corporate hesap</strong> seçeneklerine kadar birçok hizmet sunuyoruz. Kurumsal ihtiyaçlarınız için bize ulaşın."
                        />
                        <FaqItem
                            q="Normal Kurye, Ekspres Kurye ve Gece Kuryesi arasındaki fark nedir?"
                            a="<strong>Normal Kurye</strong> standart teslimat zamanı ile ekonomik seçenektir. <strong>Ekspres Kurye</strong> 60-90 dakika içinde acil gönderi teslimatı sağlar. <strong>Gece Kuryesi</strong> ise mesai saatleri dışında veya hafta sonunda yapılması gereken gönderi taleplerinizi karşılar."
                        />
                    </div>
                </div>
            </div>
      </section>
    );
};

export default ServiceFAQ;
