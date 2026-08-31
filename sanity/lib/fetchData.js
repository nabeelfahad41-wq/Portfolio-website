import { client } from './client';
import { postsQuery, postBySlugQuery, postSlugsQuery } from './queries';

// Fallback sample posts if Sanity dataset is empty or initializing
export const SAMPLE_POSTS = [
    {
        _id: 'sample-1',
        title: 'How Strategy, Web Development, and SEO Drive Modern Business Growth',
        slug: 'strategy-web-development-seo-growth',
        excerpt: 'Discover how combining performance marketing, custom web design, and technical SEO builds a high-converting digital presence.',
        publishedAt: '2026-08-30T10:00:00.000Z',
        category: { title: 'Web Strategy', slug: 'web-strategy' },
        author: { name: 'Nabeel', image: null },
        mainImage: {
            alt: 'Digital strategy and web development concept',
            asset: null,
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        },
        seoTitle: 'How Strategy, Web Development, and SEO Drive Modern Growth',
        metaDescription: 'Learn actionable strategies for integrating web design, SEO, and performance marketing to scale online sales.',
        focusKeyword: 'Web Development and SEO',
        canonicalUrl: 'https://www.nabeelscale.com/blog/strategy-web-development-seo-growth',
        ogTitle: 'Strategy, Web Development, and SEO for Growth',
        ogDescription: 'Actionable strategies for integrating web design, SEO, and performance marketing.',
        ogImage: null,
        noindex: false,
        body: [
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'The Power of Unified Strategy' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        text: 'Building a successful online brand requires more than just an attractive website. It requires a cohesive approach where design, performance, user experience, and search engine optimization align with your business revenue targets.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Key Pillars of High-Converting Digital Platforms' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        text: 'When we design digital experiences, every element serves a specific purpose in guiding visitors towards taking meaningful action.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [
                    {
                        _type: 'span',
                        text: 'A website is not just a digital business card—it is your most dedicated 24/7 sales vehicle.',
                    },
                ],
            },
        ],
    },
    {
        _id: 'sample-2',
        title: 'Optimizing Next.js Web Vitals for Peak Conversion Rates',
        slug: 'optimizing-nextjs-web-vitals-conversion-rates',
        excerpt: 'Speed is a feature. Learn how optimizing Core Web Vitals directly impacts search engine rankings and user retention.',
        publishedAt: '2026-08-25T14:30:00.000Z',
        category: { title: 'SEO & Performance', slug: 'seo-performance' },
        author: { name: 'Nabeel', image: null },
        mainImage: {
            alt: 'Code optimization and web performance analytics',
            asset: null,
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        },
        seoTitle: 'Optimizing Next.js Web Vitals for High Conversions',
        metaDescription: 'Practical guide to boosting LCP, FCP, and CLS scores in Next.js to maximize conversion rates.',
        focusKeyword: 'Next.js Core Web Vitals',
        canonicalUrl: 'https://www.nabeelscale.com/blog/optimizing-nextjs-web-vitals-conversion-rates',
        ogTitle: 'Optimizing Next.js Web Vitals for Peak Conversion Rates',
        ogDescription: 'Speed is a feature. Learn how optimizing Core Web Vitals directly impacts search engine rankings.',
        ogImage: null,
        noindex: false,
        body: [
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Why Speed directly dictates Revenue' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        text: 'Every second delay in page load speed can decrease conversion rates by up to 20%. Modern web frameworks like Next.js give us powerful tools to deliver near-instant load times.',
                    },
                ],
            },
        ],
    },
];

export async function getAllPosts() {
    try {
        const posts = await client.fetch(postsQuery);
        if (posts && posts.length > 0) {
            return posts;
        }
    } catch (error) {
        console.warn('Sanity fetch returned error or is unconfigured, falling back to sample posts:', error?.message);
    }
    return SAMPLE_POSTS;
}

export async function getPostBySlug(slug) {
    try {
        const post = await client.fetch(postBySlugQuery, { slug });
        if (post) {
            return post;
        }
    } catch (error) {
        console.warn(`Sanity fetch for slug "${slug}" returned error, checking sample posts:`, error?.message);
    }
    return SAMPLE_POSTS.find((p) => p.slug === slug) || null;
}

export async function getAllPostSlugs() {
    try {
        const slugs = await client.fetch(postSlugsQuery);
        if (slugs && slugs.length > 0) {
            return slugs;
        }
    } catch (error) {
        console.warn('Sanity slug fetch returned error, falling back to sample slugs:', error?.message);
    }
    return SAMPLE_POSTS.map((p) => p.slug);
}
