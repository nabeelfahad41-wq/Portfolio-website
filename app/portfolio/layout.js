import { siteConfig } from "@/content/config";

export const metadata = {
    title: "Portfolio & Case Studies | Nabeel - Web Developer & Marketer",
    description:
        "Real work and verified results: Websites, SEO growth, Meta ad campaigns, and social media strategy for industrial, resort, and local businesses.",
    alternates: {
        canonical: `${siteConfig.metadata.baseUrl}/portfolio`,
    },
    openGraph: {
        title: "Portfolio & Case Studies | Nabeel - Web Developer & Marketer",
        description:
            "Real work and verified results: Websites, SEO growth, Meta ad campaigns, and social media strategy for industrial, resort, and local businesses.",
        url: `${siteConfig.metadata.baseUrl}/portfolio`,
        siteName: siteConfig.metadata.title,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio & Case Studies | Nabeel - Web Developer & Marketer",
        description:
            "Real work and verified results: Websites, SEO growth, Meta ad campaigns, and social media strategy for industrial, resort, and local businesses.",
    },
};

export default function PortfolioLayout({ children }) {
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        "name": "Portfolio & Case Studies",
        "author": {
            "@type": "Person",
            "name": "Nabeel",
            "url": siteConfig.metadata.baseUrl
        },
        "url": `${siteConfig.metadata.baseUrl}/portfolio`,
        "description": "Portfolio of custom websites, SEO campaigns, performance marketing, and social media strategies."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />
            {children}
        </>
    );
}
