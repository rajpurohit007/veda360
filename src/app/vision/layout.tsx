import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision | Veda360 Digital Transformation & Business Intelligence",
  description: "Explore the Veda360 manifesto. We bridge ancient wisdom with future tech to provide holistic IT services, Next.js development, and data-driven digital strategies.",
  keywords: [
    "Digital Transformation Vision",
    "Business Intelligence Strategy",
    "Veda360 Manifesto",
    "Future Tech Solutions India",
    "Holistic Web Engineering",
    "Next.js Development Philosophy"
  ],
  openGraph: {
    title: "The Veda360 Vision | Engineering Enlightenment",
    description: "Bridging the gap between technological evolution and human-centric business purpose.",
    url: "https://veda360.org/vision",
    type: "website",
    images: [{ url: "/og-vision.jpg", width: 1200, height: 630 }]
  },
};

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}