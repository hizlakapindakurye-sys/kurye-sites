'use client';

import React from 'react';
import { districts } from '@/data/districts';

const LocalBusinessJsonLd = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Hızla Kapında Kurye",
    "image": "", // Add a link to your logo here
    "@id": "", // Add your website URL here
    "url": "https://www.hizlakapindakurye.com", // Replace with your actual domain
    "telephone": "+905452145949",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Örnek Mah. Kurye Sk. No: 12/A",
      "addressLocality": "Üsküdar",
      "addressRegion": "İstanbul",
      "postalCode": "34000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0255, // Placeholder coordinates for Üsküdar
      "longitude": 29.0196
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    } 
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export default function ContactPage() {
  return (
    <div className="bg-white py-16 relative">
      <LocalBusinessJsonLd />
      
      {/* WhatsApp Buttons - Left and Right */}
      <div className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <a href="https://wa.me/905452145949" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transform transition-all">
          <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.02.99 4.34L2.05 22l6.5-2.13C10.96 21.59 11.97 22 13 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.87 0-1.72-.19-2.5-.55l-.18-.1-1.82.6.61-1.8-.1-.18C4.78 16.55 4 14.85 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.64-6.67c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.24-.64.81-.79.97-.15.17-.3.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.24.26-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.2-.49-.4-.42-.57-.43h-.5c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.17 1.77 2.71 4.3 3.8 1.87.82 2.49.81 3.3.68.44-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29z" />
          </svg>
        </a>
      </div>

      <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <a href="https://wa.me/905452145949" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transform transition-all">
          <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.02.99 4.34L2.05 22l6.5-2.13C10.96 21.59 11.97 22 13 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.87 0-1.72-.19-2.5-.55l-.18-.1-1.82.6.61-1.8-.1-.18C4.78 16.55 4 14.85 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.64-6.67c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.24-.64.81-.79.97-.15.17-.3.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.24.26-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.2-.49-.4-.42-.57-.43h-.5c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.17 1.77 2.71 4.3 3.8 1.87.82 2.49.81 3.3.68.44-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29z" />
          </svg>
        </a>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">
              İstanbul'da Kurye Hizmetleri İçin Bize Ulaşın
            </h1>
            <p className="text-lg text-gray-700 text-center mb-3">
              Hızla Kapında Kurye olarak, İstanbul'un tüm bölgelerinde hızlı, güvenilir ve ekonomik kurye hizmetleri sunuyoruz.
            </p>
            <p className="text-base text-gray-600 text-center">
              Aşağıdaki formu doldurarak anında WhatsApp üzerinden fiyat teklifi alabilir veya <strong className="text-blue-700">0545 214 59 49</strong> numarasından bizi arayabilirsiniz.
            </p>
          </div>

          {/* SEO Schema Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-blue-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex items-start gap-3">
                <svg className="w-7 h-7 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 5H5v14h14V9h-6zm3 8h-2v2h-2v-2h-2v-2h2V7h2v2h2z"/>
                </svg>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Hızlı Hizmet</h3>
                  <p className="text-sm text-gray-700">Motorlu ve arabalı kurye seçenekleri ile hızlı teslimat</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex items-start gap-3">
                <svg className="w-7 h-7 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h4V12h-4v-.01z"/>
                </svg>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Güvenilir</h3>
                  <p className="text-sm text-gray-700">Tüm gönderileriniz korunmalı ve güvenli</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex items-start gap-3">
                <svg className="w-7 h-7 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Uygun Fiyat</h3>
                  <p className="text-sm text-gray-700">Rekabetçi fiyatlar ve uygun teklifler</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <ContactForm />

          {/* FAQ Section for SEO */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-50 p-4 rounded cursor-pointer hover:bg-gray-100 transition">
                <summary className="font-semibold text-gray-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                  Aynı gün içinde kurye hizmeti alabilir miyim?
                </summary>
                <p className="text-gray-700 mt-2">Evet, acil teslimatlar için VIP hizmetimizi kullanabilirsiniz. WhatsApp üzerinden anında teklif alabilirsiniz.</p>
              </details>
              <details className="bg-gray-50 p-4 rounded cursor-pointer hover:bg-gray-100 transition">
                <summary className="font-semibold text-gray-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                  Büyük paketler gönderilebilir mi?
                </summary>
                <p className="text-gray-700 mt-2">Evet, arabalı kurye hizmeti ile büyük ve ağır paketler güvenle gönderilebilir. Detaylar için bize ulaşın.</p>
              </details>
              <details className="bg-gray-50 p-4 rounded cursor-pointer hover:bg-gray-100 transition">
                <summary className="font-semibold text-gray-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 5V1h-1v4c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10h-1c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9z"/>
                  </svg>
                  Gece saatlerinde kurye hizmeti var mı?
                </summary>
                <p className="text-gray-700 mt-2">24/7 hizmet sunuyoruz. Her saat başında WhatsApp üzerinden talep alabilirsiniz.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [pickupSide, setPickupSide] = React.useState<'avrupa' | 'anadolu'>('avrupa');
  const [deliverySide, setDeliverySide] = React.useState<'avrupa' | 'anadolu'>('avrupa');
  const pickupDistrictOptions = pickupSide === 'avrupa' ? districts.avrupa : districts.anadolu;
  const deliveryDistrictOptions = deliverySide === 'avrupa' ? districts.avrupa : districts.anadolu;

  return (
    <div className="bg-white border-2 border-blue-200 rounded-lg p-8 md:p-12 shadow-lg">
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const pickupDistrict = formData.get('pickupCity');
          const pickupAddress = formData.get('pickupAddress');
          const deliveryDistrict = formData.get('deliveryCity');
          const deliveryAddress = formData.get('deliveryAddress');
          const sendingType = formData.get('sendingType');
          const vehicleType = formData.get('vehicleType');
          const note = formData.get('note');
          
          const message = `*Kurye Hizmet Talebi*

📍 *Gönderici Bilgileri:*
İlçe: ${pickupDistrict}
Adres: ${pickupAddress || '-'}

📍 *Alıcı Bilgileri:*
İlçe: ${deliveryDistrict}
Adres: ${deliveryAddress || '-'}

*Gönderinin Türü:* ${sendingType}
*Taşıma Aracı:* ${vehicleType}

*Notlar:* ${note || '-'}`;
          
          window.open(`https://wa.me/905452145949?text=${encodeURIComponent(message)}`, '_blank');
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pickup Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">📍 Gönderici Bilgileri</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Yakası Seçin</label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                    <input 
                      type="radio" 
                      name="pickupSide" 
                      value="avrupa"
                      checked={pickupSide === 'avrupa'}
                      onChange={() => setPickupSide('avrupa')}
                      className="w-4 h-4 accent-yellow-400"
                    />
                    <span>Avrupa Yakası</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                    <input 
                      type="radio" 
                      name="pickupSide" 
                      value="anadolu"
                      checked={pickupSide === 'anadolu'}
                      onChange={() => setPickupSide('anadolu')}
                      className="w-4 h-4 accent-yellow-400"
                    />
                    <span>Anadolu Yakası</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="pickupCity" className="block text-sm font-semibold mb-2 text-gray-700">İlçe Seçin</label>
                <select 
                  id="pickupCity" 
                  name="pickupCity"
                  required
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg text-gray-800 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                >
                  <option value="">İlçe Seçin</option>
                  {pickupDistrictOptions.map((district) => (
                    <option key={district.slug} value={district.name}>{district.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pickupAddress" className="block text-sm font-semibold mb-2 text-gray-700">Semt / Mahalle (İsteğe Bağlı)</label>
                <input 
                  type="text" 
                  id="pickupAddress" 
                  name="pickupAddress"
                  placeholder="Örn: Cihangir, Ortaköy..."
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                />
              </div>
            </div>
          </div>

          {/* Delivery Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">📍 Alıcı Bilgileri</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Yakası Seçin</label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                    <input 
                      type="radio" 
                      name="deliverySide" 
                      value="avrupa"
                      checked={deliverySide === 'avrupa'}
                      onChange={() => setDeliverySide('avrupa')}
                      className="w-4 h-4 accent-yellow-400"
                    />
                    <span>Avrupa Yakası</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                    <input 
                      type="radio" 
                      name="deliverySide" 
                      value="anadolu"
                      checked={deliverySide === 'anadolu'}
                      onChange={() => setDeliverySide('anadolu')}
                      className="w-4 h-4 accent-yellow-400"
                    />
                    <span>Anadolu Yakası</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="deliveryCity" className="block text-sm font-semibold mb-2 text-gray-700">İlçe Seçin</label>
                <select 
                  id="deliveryCity" 
                  name="deliveryCity"
                  required
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg text-gray-800 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                >
                  <option value="">İlçe Seçin</option>
                  {deliveryDistrictOptions.map((district) => (
                    <option key={district.slug} value={district.name}>{district.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="deliveryAddress" className="block text-sm font-semibold mb-2 text-gray-700">Semt / Mahalle (İsteğe Bağlı)</label>
                <input 
                  type="text" 
                  id="deliveryAddress" 
                  name="deliveryAddress"
                  placeholder="Örn: Cihangir, Ortaköy..."
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sending Type and Vehicle Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">Gönderinin Sekli</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                <input type="radio" name="sendingType" value="Normal" defaultChecked className="w-4 h-4 accent-yellow-400" />
                <span className="text-sm">Normal</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                <input type="radio" name="sendingType" value="Ekspres" className="w-4 h-4 accent-yellow-400" />
                <span className="text-sm">Ekspres</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                <input type="radio" name="sendingType" value="VIP" className="w-4 h-4 accent-yellow-400" />
                <span className="text-sm">VIP</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-700">Taşıma Türü</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                <input type="radio" name="vehicleType" value="Motorlu Kurye" defaultChecked className="w-4 h-4 accent-yellow-400" />
                <span className="text-sm">Motorlu Kurye</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-600 transition">
                <input type="radio" name="vehicleType" value="Arabalı Kurye" className="w-4 h-4 accent-yellow-400" />
                <span className="text-sm">Arabalı Kurye</span>
              </label>
            </div>
          </div>
        </div>

        {/* Note */}
        <div>
          <label htmlFor="note" className="block text-sm font-semibold mb-2 text-gray-700">Not (opsiyonel)</label>
          <textarea 
            id="note" 
            name="note"
            rows={4}
            placeholder="Paket içeriği, koli/daire, zaman notu vb."
            className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition resize-none"
          ></textarea>
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start space-x-3">
          <input type="checkbox" id="privacy" name="privacy" defaultChecked className="w-4 h-4 mt-1 accent-yellow-400" />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            Kişisel verilerimin işlenmesini ve <a href="#" className="text-blue-700 underline hover:text-blue-800 font-semibold">KVKK Aydınlatma Metni</a>'ni okuduğumu onaylıyorum.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            WhatsApp'a Gönder
          </button>
          <p className="text-center text-sm text-gray-600 mt-2">Butona Basıldığında WhatsApp Açılır.</p>
        </div>
      </form>
    </div>
  );
}
