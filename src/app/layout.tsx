import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactButtons from '@/components/ContactButtons'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'] 
})

export const metadata: Metadata = {
  title: {
    default: 'Hızla Kapında Kurye - İstanbul Moto Kurye Hizmeti',
    template: '%s | Hızla Kapında Kurye',
  },
  icons: {
    icon: '/favicon.svg',
  },
  description: 'İstanbul içi tüm ilçelere hızlı, güvenilir ve uygun fiyatlı motorlu kurye hizmetleri. Acil gönderileriniz için bize ulaşın.',
  metadataBase: new URL('https://www.hizlakapindakurye.com'), // Replace with your actual domain
  openGraph: {
    title: 'Hızla Kapında Kurye - İstanbul Moto Kurye Hizmeti',
    description: 'İstanbul içi acil ve güvenilir kurye çözümleri.',
    url: 'https://www.hizlakapindakurye.com',
    siteName: 'Hızla Kapında Kurye',
    images: [
      {
        url: '/og-image.jpg', // Replace with a link to a real image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hızla Kapında Kurye',
    description: 'İstanbul içi acil ve güvenilir kurye çözümleri.',
    // images: ['/twitter-image.jpg'], // Replace with a real image
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactButtons phoneNumber="+905452145949" whatsappNumber="+905452145949" />
      </body>
    </html>
  )
}
