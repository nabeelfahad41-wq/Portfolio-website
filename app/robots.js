export default function Robot() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: process.env.NEXT_PUBLIC_BASE_URL
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
            : 'https://adlyst.agency/sitemap.xml',
    }
}
