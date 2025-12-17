import Link from 'next/link';
import { districts } from '@/data/districts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { yaka: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const side = params.yaka === 'anadolu' ? 'Anadolu' : 'Avrupa';
  return {
    title: `${side} Yakası Kurye Hizmet Bölgeleri - Hızla Kapında Kurye`,
    description: `İstanbul ${side} Yakası'ndaki tüm ilçeler için motorlu kurye hizmetlerimiz.`,
  };
}

export default function YakaPage({ params }: Props) {
  const { yaka } = params;
  const side = yaka === 'anadolu' ? 'anadolu' : yaka === 'avrupa' ? 'avrupa' : null;

  if (!side) {
    notFound();
  }

  const sideName = side === 'anadolu' ? 'Anadolu' : 'Avrupa';
  const districtList = districts[side];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {sideName} Yakası Hizmet Bölgelerimiz
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {districtList.map((district) => (
          <Link
            key={district.slug}
            href={`/hizmet-bolgeleri/${yaka}/${district.slug}`}
            className="bg-white p-4 rounded-lg shadow text-center font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            {district.name}
          </Link>
        ))}
      </div>
       <div className="text-center mt-12">
        <Link href="/hizmet-bolgeleri" className="text-blue-600 hover:underline">
          &larr; Tüm Hizmet Bölgelerine Geri Dön
        </Link>
      </div>
    </div>
  );
}
