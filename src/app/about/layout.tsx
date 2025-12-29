import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Veda360 | Leading Digital Agency in Surat, Gujarat",
  description: "Discover Veda360, a premier digital solutions agency in Surat specializing in high-end Web Development, Next.js engineering, and UI/UX design. Learn about our mission to architect the digital future.",
  keywords: [
    "About Veda360",
    "Digital Solutions Agency Surat",
    "Web Development Company Gujarat",
    "Next.js 15 Development Experts",
    "Full-Cycle Software Development",
    "UI/UX Design Studio Surat",
    "Veda360 Founders",
    "Digital Transformation Agency India"
  ],
  openGraph: {
    title: "About Veda360 | Driven by Excellence, Guided by Intelligence",
    description: "Veda360 bridges the gap between complex technology and seamless user experiences. Explore our legacy in the making.",
    url: "https://veda360.org/about",
    type: "website",
    images: [{ url: "/og-about.jpg", width: 1200, height: 630 }]
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}