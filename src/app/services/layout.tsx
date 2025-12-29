import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional IT Services | Web & App Development Surat | Veda360",
  description: "Explore Veda360's premium IT services: Custom Static & Dynamic Websites, Mobile App Development, UI/UX Graphic Design, and 24/7 Website Maintenance. Optimized for performance and ROI.",
  keywords: [
    "Web Development Services Surat",
    "Custom App Development India",
    "Static Website Design",
    "Dynamic Web Applications",
    "Professional Graphic Design",
    "Website Maintenance Packages",
    "Next.js Development Agency",
    "IT Consultation Surat"
  ],
  openGraph: {
    title: "Veda360 Digital Services | Transforming Visions into Reality",
    description: "From lightning-fast static sites to scalable mobile apps, discover how Veda360 drives business value through technology.",
    url: "https://veda360.org/services",
    type: "website",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630 }]
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}