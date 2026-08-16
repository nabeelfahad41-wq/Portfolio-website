import ClientContact from './ClientContact';
import Footer from '../component/Footer';
import { siteConfig } from '@/content/config';

export const metadata = {
  title: "Contact Nabeel | Freelance Digital Marketer & Web Developer",
  description: "Get in touch for freelance digital marketing, SEO, and web development services. Based in Bangalore & Kerala. Chat on WhatsApp, Email, or Call directly.",
  alternates: {
    canonical: `${siteConfig.metadata.baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Nabeel | Freelance Digital Marketer & Web Developer",
    description: "Get in touch for freelance digital marketing, SEO, and web development services. Based in Bangalore & Kerala.",
    url: `${siteConfig.metadata.baseUrl}/contact`,
    siteName: siteConfig.metadata.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nabeel | Freelance Digital Marketer & Web Developer",
    description: "Get in touch for freelance digital marketing, SEO, and web development services.",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nabeel",
    "url": `${siteConfig.metadata.baseUrl}/contact`,
    "description": "Contact Nabeel for freelance web development, SEO, and performance marketing services.",
    "mainEntity": {
      "@type": "Person",
      "name": "Nabeel",
      "email": "nabeelfahad41@gmail.com",
      "telephone": "+918111830647",
      "areaServed": ["Bangalore", "Kerala"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ClientContact />
      <Footer />
    </>
  );
}

