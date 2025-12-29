import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  // 1. FIXED: Added metadataBase to resolve the absolute URL warning
  metadataBase: new URL('https://veda360.org'),
  
  // 2. SEO-Optimized Title (Uses high-volume keywords)
  title: {
    default: "Veda360 | Expert IT Services & Digital Transformation Agency",
    template: "%s | Veda360"
  },
  
  // 3. Descriptive Meta (Explains the 'What' and 'Where')
  description: "Veda360 is a premier IT services agency specializing in custom web development, Next.js solutions, mobile apps, and brand identity. Based in Surat, delivering global digital excellence.",
  
  // 4. Broad Keyword Coverage (Targets various search intents)
  keywords: [
    "IT Services Surat", 
    "Web Development Agency", 
    "Next.js Experts", 
    "Digital Transformation Services", 
    "Custom Software Development", 
    "UI/UX Design Agency India", 
    "Full-stack Web Solutions",
    "Mobile App Development",
    "Business Intelligence Systems",
    "Veda360 Agency"
  ],

  // 5. Author and Verification
  authors: [{ name: "Veda360 Team" }],
  creator: "Veda360",
  publisher: "Veda360",

  // 6. Robots Instructions
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

  // 7. OpenGraph (Social Media SEO)
  openGraph: {
    title: "Veda360 | Holistic IT Services & Digital Solutions",
    description: "Bridging Ancient Wisdom and Future Tech. Experience the 360-degree digital evolution.",
    url: "https://veda360.org",
    siteName: "Veda360",
    images: [
      {
        url: "/og-image.jpg", // Ensure this file exists in your public folder
        width: 1200,
        height: 630,
        alt: "Veda360 Digital Transformation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 8. Twitter SEO
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
    // 9. FIXED: Added data-scroll-behavior to resolve the smooth scroll warning
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}