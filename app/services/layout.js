import { siteConfig } from "@/content/config";

export const metadata = {
    title: "Freelance Digital Marketing & Web Development Services | Nabeel",
    description:
        "High-converting web design, SEO optimization, performance marketing (Meta Ads), and social media growth systems tailored for business revenue.",
    alternates: {
        canonical: `${siteConfig.metadata.baseUrl}/services`,
    },
    openGraph: {
        title: "Freelance Digital Marketing & Web Development Services | Nabeel",
        description:
            "High-converting web design, SEO optimization, performance marketing (Meta Ads), and social media growth systems tailored for business revenue.",
        url: `${siteConfig.metadata.baseUrl}/services`,
        siteName: siteConfig.metadata.title,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelance Digital Marketing & Web Development Services | Nabeel",
        description:
            "High-converting web design, SEO optimization, performance marketing (Meta Ads), and social media growth systems tailored for business revenue.",
    },
};

export default function ServicesLayout({ children }) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Marketing & Web Development Services",
        "provider": {
            "@type": "Person",
            "name": "Nabeel",
            "url": siteConfig.metadata.baseUrl
        },
        "url": `${siteConfig.metadata.baseUrl}/services`,
        "description": "Complete digital growth services including web development, SEO, performance marketing (Meta Ads), and social media marketing.",
        "areaServed": ["Bangalore", "Kerala"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Organic Growth" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            {children}
        </>
    );
}
