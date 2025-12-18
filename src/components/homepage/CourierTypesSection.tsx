'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourierType {
  title: string;
  deliveryTime: string;
  maxDistance: string;
  image: string;
}

const courierTypes: CourierType[] = [
  {
    title: 'Normal Kurye',
    deliveryTime: '30 dk. içinde kurye kapında.',
    maxDistance: 'En yakın mesafe 180 dk.',
    image: '/normal-kurye.webp'
  },
  {
    title: 'Express Kurye',
    deliveryTime: '30 dk. içinde kurye kapında.',
    maxDistance: 'En yakın mesafe 120 dk.',
    image: '/express-kurye.png.webp'
  },
  {
    title: 'Vip Kurye',
    deliveryTime: '30 dk. içinde kurye kapında.',
    maxDistance: 'En yakın mesafe 60 dk.',
    image: '/vip-kurye.png.webp'
  }
];

export default function CourierTypesSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Kurye Hizmet Seçeneklerimiz
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            İhtiyacınıza göre en uygun hizmeti seçin
          </p>
        </div>

        {/* Kurye Tipleri Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {courierTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Görsel Bölümü */}
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center items-center h-36">
                <Image
                  src={type.image}
                  alt={type.title}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                  priority={index === 0}
                />
              </div>

              {/* İçerik Bölümü */}
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2.5 text-gray-900 dark:text-white">
                  {type.title}
                </h3>

                {/* Özellikler */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-1.5 text-xs">
                    <svg className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">{type.deliveryTime}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs">
                    <svg className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">{type.maxDistance}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="tel:+905452145949">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors duration-200">
                    Kurye Fiyat Al
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Tüm hizmetlerimizde 7/24 müşteri desteği.
          </p>
        </div>
      </div>
    </section>
  );
}
