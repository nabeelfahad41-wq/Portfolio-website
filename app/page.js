import Hero from "./sections/Hero";
import ServicesPreview from "./sections/ServicesPreview";
import StackedCards from "./sections/StackedCards";
import GlobalReachSection from "./sections/GlobalReachSection";
import RibbonCarousel from "./sections/RibbonCarousel";
import LogoCarousel from "./sections/LogoCarousel";
import WhoWeAre from "./sections/WhoWeAre";
import ScrollRevealSection from "./sections/ScrollRevealSection";
import Testimonials from "./sections/Testimonials";
import FormSection from "./sections/FormSection";
import Footer from "./component/Footer";
import { siteConfig } from "@/content/config";

export const metadata = {
  title: "Freelance Digital Marketing in Bangalore & Kerala | Nabeel",
  description: "I’m Nabeel — a freelance digital marketing strategist focused on execution that actually drives results. Specialized in systems that turn online presence into consistent leads and revenue.",
  alternates: {
    canonical: siteConfig.metadata.baseUrl,
  },
  openGraph: {
    title: "Freelance Digital Marketing in Bangalore & Kerala | Nabeel",
    description: "Results-driven freelance digital marketing strategist in Bangalore and Kerala.",
    url: siteConfig.metadata.baseUrl,
    siteName: "Nabeel - Freelance Digital Marketer",
    images: [{ url: "/og-image.jpg" }], // Assuming an OG image exists
    type: 'website',
  },
};

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nabeel - Freelance Digital Marketer",
    "description": "Freelance digital marketing strategist based in Bangalore & Kerala focusing on lead generation and revenue growth.",
    "url": siteConfig.metadata.baseUrl,
    "telephone": "", // Add if available
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    ],
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Person",
      "name": "Nabeel"
    },
    "areaServed": ["Bangalore", "Kerala"],
    "sameAs": [
      "https://www.linkedin.com/in/nabeel", // Placeholders
      "https://www.instagram.com/nabeel"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="relative w-full">
        <Hero />
        <GlobalReachSection />
      </div>
      <RibbonCarousel />
      <LogoCarousel />
      <ServicesPreview />
      <StackedCards />
      <WhoWeAre />
      <ScrollRevealSection />
      <Testimonials />
      <FormSection />
      <Footer />
    </>
  );
}
