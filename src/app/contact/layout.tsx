import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Connect with Veda360 IT Solutions Surat",
  description: "Get in touch with Veda360 for expert IT services, web development, and digital transformation. Contact us via WhatsApp, email, or visit our studio in Surat, Gujarat.",
  keywords: [
    "Contact Veda360",
    "IT Company Surat Contact Number",
    "Hire Web Developers Surat",
    "Veda360 WhatsApp Support",
    "Digital Agency Gujarat",
    "Technical Consultation Surat"
  ],
  openGraph: {
    title: "Connect with Veda360 | Let's Build Your Digital Future",
    description: "Ready for a digital transformation? Reach out to our team for high-performance software and brand solutions.",
    url: "https://veda360.org/contact",
    type: "website",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630 }]
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}