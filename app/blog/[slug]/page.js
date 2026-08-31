import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/sanity/lib/fetchData';
import { urlForImage } from '@/sanity/lib/image';
import PortableTextRenderer from '@/app/component/PortableTextRenderer';
import { siteConfig } from '@/content/config';

export const revalidate = 60;

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const seoTitle = post.seoTitle || post.title;
    const metaDescription = post.metaDescription || post.excerpt || '';
    const focusKeyword = post.focusKeyword || '';
    const canonicalUrl = post.canonicalUrl || `${siteConfig.metadata.baseUrl}/blog/${post.slug}`;
    const ogTitle = post.ogTitle || seoTitle;
    const ogDescription = post.ogDescription || metaDescription;
    const ogImage = post.ogImage?.asset
        ? urlForImage(post.ogImage)?.url()
        : post.mainImage?.asset
            ? urlForImage(post.mainImage)?.url()
            : post.mainImage?.url || `${siteConfig.metadata.baseUrl}/icon.png`;

    const noindex = Boolean(post.noindex);

    return {
        title: seoTitle,
        description: metaDescription,
        keywords: focusKeyword ? [focusKeyword] : undefined,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
            },
        },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url: canonicalUrl,
            siteName: 'Nabeel',
            locale: 'en_US',
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post._updatedAt || post.publishedAt,
            authors: [post.author?.name || 'Nabeel'],
            images: [
                {
                    url: ogImage,
                    alt: ogTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const seoTitle = post.seoTitle || post.title;
    const metaDescription = post.metaDescription || post.excerpt || '';
    const focusKeyword = post.focusKeyword || '';
    const canonicalUrl = post.canonicalUrl || `${siteConfig.metadata.baseUrl}/blog/${post.slug}`;
    const ogImage = post.ogImage?.asset
        ? urlForImage(post.ogImage)?.url()
        : post.mainImage?.asset
            ? urlForImage(post.mainImage)?.url()
            : post.mainImage?.url || `${siteConfig.metadata.baseUrl}/icon.png`;

    const mainImageSrc = post.mainImage?.asset
        ? urlForImage(post.mainImage)?.url()
        : post.mainImage?.url || '/assets/hero-portrait.webp';

    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : null;

    // JSON-LD Structured Data Schema.org objects
    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: seoTitle,
        description: metaDescription,
        image: ogImage,
        author: {
            '@type': 'Person',
            name: post.author?.name || 'Nabeel',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Nabeel - Digital Marketer & Web Developer',
            url: siteConfig.metadata.baseUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.metadata.baseUrl}/icon.png`,
            },
        },
        datePublished: post.publishedAt || post._createdAt,
        dateModified: post._updatedAt || post.publishedAt || post._createdAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
        },
        ...(focusKeyword ? { keywords: focusKeyword } : {}),
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteConfig.metadata.baseUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: `${siteConfig.metadata.baseUrl}/blog`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: canonicalUrl,
            },
        ],
    };

    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nabeel - Digital Marketer & Web Developer',
        url: siteConfig.metadata.baseUrl,
        logo: `${siteConfig.metadata.baseUrl}/icon.png`,
    };

    return (
        <>
            {/* Schema.org Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />

            <article className="bg-white min-h-screen pt-36 pb-24 text-gray-900 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 font-medium overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link>
                        {post.category && (
                            <>
                                <span>/</span>
                                <span className="text-green-700 font-semibold">{post.category.title}</span>
                            </>
                        )}
                        <span>/</span>
                        <span className="text-gray-400 truncate max-w-[200px]">{post.title}</span>
                    </nav>

                    {/* Header & Meta */}
                    <header className="mb-10">
                        {post.category && (
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-green-200">
                                {post.category.title}
                            </span>
                        )}

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 font-normal">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Author & Date Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 text-sm text-gray-600">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                                    {post.author?.name ? post.author.name.charAt(0) : 'N'}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{post.author?.name || 'Nabeel'}</div>
                                    <div className="text-xs text-gray-500">Digital Marketer & Developer</div>
                                </div>
                            </div>

                            {formattedDate && (
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Published on {formattedDate}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Featured Image */}
                    {mainImageSrc && (
                        <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
                            <Image
                                src={mainImageSrc}
                                alt={post.mainImage?.alt || post.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Rich Content Body */}
                    <div className="prose prose-lg prose-green max-w-none text-gray-800">
                        <PortableTextRenderer value={post.body} />
                    </div>

                    {/* Post Footer & Back Link */}
                    <footer className="mt-16 pt-8 border-t border-gray-200">
                        {post.author && (
                            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-full bg-green-600 text-white font-extrabold flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Written by {post.author.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                        {post.author.bio || 'Combining strategy, performance marketing, SEO, and custom web development to turn digital presence into real revenue.'}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between items-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to All Articles
                            </Link>
                        </div>
                    </footer>

                </div>
            </article>
        </>
    );
}
