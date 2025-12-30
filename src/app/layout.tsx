import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://veda360.org'),
  
  title: {
    default: "Veda360 | Expert IT Services & Digital Transformation Agency",
    template: "%s | Veda360"
  },
  
  description: "Veda360 is a premier IT services agency specializing in custom web development, Next.js solutions, mobile apps, and brand identity. Based in Surat, delivering global digital excellence.",

  // FIXED: Explicitly defined icons to satisfy Google's 48x48px requirement
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  keywords: [
    "IT Services Surat", "Web Development Agency", "Next.js Experts", 
    "Digital Transformation Services", "Custom Software Development", 
    "UI/UX Design Agency India", "Full-stack Web Solutions",
    "Mobile App Development", "Business Intelligence Systems", "Veda360 Agency"
  ],

  authors: [{ name: "Veda360 Team" }],
  creator: "Veda360",
  publisher: "Veda360",

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

  openGraph: {
    title: "Veda360 | Holistic IT Services & Digital Solutions",
    description: "Bridging Ancient Wisdom and Future Tech. Experience the 360-degree digital evolution.",
    url: "https://veda360.org",
    siteName: "Veda360",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veda360 Digital Transformation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veda360 | Digital Masterpieces",
    description: "Expert IT services and high-performance engineering.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased bg-[#0A0A0A] text-white`}>
        {children}
      </body>
    </html>
  );
}