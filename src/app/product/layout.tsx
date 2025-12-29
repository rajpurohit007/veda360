import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Digital Masterpieces & Case Studies | Veda360",
  description: "Explore the Veda360 portfolio gallery. Featuring high-performance branding websites like Siya Laser Tech and dynamic educational platforms like PadhaiOn. Professional IT solutions engineered for excellence.",
  keywords: [
    "Veda360 Portfolio",
    "Web Development Case Studies",
    "Siya Laser Tech Website",
    "PadhaiOn Platform",
    "Digital Portfolio Surat",
    "UI/UX Design Gallery",
    "React Next.js Project Examples",
    "Branding Website Showcase"
  ],
  openGraph: {
    title: "Veda360 Project Gallery | Our Digital Masterpieces",
    description: "A curated selection of projects where ancient wisdom meets cutting-edge engineering.",
    url: "https://veda360.org/product",
    type: "website",
    images: [{ url: "/og-portfolio.jpg", width: 1200, height: 630 }]
  },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}