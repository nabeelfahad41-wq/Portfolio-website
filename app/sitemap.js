import { siteConfig } from "@/content/config";

export default function sitemap() {
    const baseUrl = siteConfig.metadata.baseUrl;

    // Static routes
    const routes = siteConfig.navigation.map((route) => ({
        url: `${baseUrl}${route.href}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route.href === '/' ? 1 : 0.8,
    }));

    // Additional landing pages
    const landingPages = [
        '/freelance-web-developer',
        '/freelance-web-developer-calicut',
        '/freelance-web-developer-kochi',
        '/freelance-website-designer-in-kerala',
        '/web-developer-in-bangalore',
        '/seo-freelancer',
        '/seo-freelancer-in-bangalore',
        '/seo-freelancer-in-kerala',
        '/freelance-performance-marketer',
        '/freelance-social-media-marketer',
    ].map((href) => ({
        url: `${baseUrl}${href}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        ...routes,
        ...landingPages,
    ];
}
