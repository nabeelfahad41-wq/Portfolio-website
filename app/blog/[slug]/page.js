import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/sanity/lib/fetchData';
import { urlForImage } from '@/sanity/lib/image';
import PortableTextRenderer from '@/app/component/PortableTextRenderer';
import { siteConfig } from '@/content/config';

export const revalidate = 60;

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

function getReadTime(post) {
    let words = 0;
    if (post.excerpt) words += post.excerpt.split(/\s+/).length;
    if (post.title) words += post.title.split(/\s+/).length;
    if (Array.isArray(post.body)) {
        post.body.forEach((block) => {
            if (Array.isArray(block.children)) {
                block.children.forEach((child) => {
                    if (child.text) words += child.text.split(/\s+/).length;
                });
            }
        });
    }
    const mins = Math.max(2, Math.ceil(words / 180));
    return `${mins} min read`;
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

    const readTime = getReadTime(post);

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

            <main id="main-content" className="bg-black text-white min-h-screen font-sans selection:bg-[#43A047] selection:text-white relative">
                {/* Page-wide Background Enhancements */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    {/* Green/Black Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,160,71,0.15),transparent_70%)]" />
                    {/* Small Grid Lines */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-24">

                    {/* Breadcrumb Navigation */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-8 font-medium overflow-x-auto whitespace-nowrap scrollbar-none">
                        <Link href="/" className="hover:text-[#66BB6A] transition-colors">Home</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/blog" className="hover:text-[#66BB6A] transition-colors">Blog</Link>
                        {post.category && (
                            <>
                                <span aria-hidden="true">/</span>
                                <span className="text-[#66BB6A] font-semibold">{post.category.title}</span>
                            </>
                        )}
                        <span aria-hidden="true">/</span>
                        <span className="text-gray-300 truncate max-w-[200px]">{post.title}</span>
                    </nav>

                    {/* Article Header */}
                    <header className="mb-10">
                        {post.category && (
                            <span className="inline-block bg-[#43A047]/20 text-[#66BB6A] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 border border-[#43A047]/50 shadow-2xs">
                                {post.category.title}
                            </span>
                        )}

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Author & Reading Meta Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#43A047]/20 border border-[#43A047]/50 text-[#66BB6A] font-bold flex items-center justify-center text-sm shadow-xs">
                                    {post.author?.name ? post.author.name.charAt(0) : 'N'}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{post.author?.name || 'Nabeel'}</div>
                                    <div className="text-xs text-gray-300">Digital Marketer & Developer</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs font-medium text-gray-300">
                                {formattedDate && (
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-[#66BB6A]" aria-hidden="true" />
                                        <time dateTime={post.publishedAt}>{formattedDate}</time>
                                    </div>
                                )}
                                <span>•</span>
                                <div className="flex items-center gap-1 text-[#66BB6A] bg-[#43A047]/20 px-2.5 py-1 rounded-md font-bold border border-[#43A047]/40">
                                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>{readTime}</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image - Optimized for LCP */}
                    {mainImageSrc && (
                        <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5">
                            <Image
                                src={mainImageSrc}
                                alt={post.mainImage?.alt || post.title}
                                fill
                                priority
                                fetchPriority="high"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 800px"
                                quality={80}
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Ergonomic Content Body */}
                    <div className="max-w-3xl mx-auto">
                        <PortableTextRenderer value={post.body} />
                    </div>

                    {/* Post Footer & Author Card */}
                    <footer className="max-w-3xl mx-auto mt-16 pt-10 border-t border-white/10">
                        {post.author && (
                            <div className="bg-white/[0.03] p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10 shadow-sm">
                                <div className="w-14 h-14 rounded-full bg-[#43A047]/20 border border-[#43A047]/50 text-[#66BB6A] font-extrabold flex items-center justify-center text-xl flex-shrink-0">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Written by {post.author.name}</h3>
                                    <p className="text-sm text-gray-300 mt-1 leading-relaxed font-light">
                                        {post.author.bio || 'Combining strategy, performance marketing, SEO, and custom web development to turn digital presence into real revenue.'}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between items-center">
                            <Link
                                href="/blog"
                                aria-label="Back to All Articles"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#43A047] hover:bg-[#66BB6A] text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
                            >
                                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                                Back to All Articles
                            </Link>
                        </div>
                    </footer>

                </article>
            </main>
        </>
    );
}
