import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/sanity/lib/fetchData';
import { urlForImage } from '@/sanity/lib/image';
import { siteConfig } from '@/content/config';

export const revalidate = 60;

export const metadata = {
    title: `Blog | ${siteConfig.metadata.title}`,
    description: 'Explore our latest insights, strategies, SEO tutorials, and web development guides.',
    alternates: {
        canonical: `${siteConfig.metadata.baseUrl}/blog`,
    },
    openGraph: {
        title: `Blog | ${siteConfig.metadata.title}`,
        description: 'Explore our latest insights, strategies, SEO tutorials, and web development guides.',
        url: `${siteConfig.metadata.baseUrl}/blog`,
        type: 'website',
    },
};

export default async function BlogListingPage() {
    const posts = await getAllPosts();

    return (
        <main className="bg-white min-h-screen pt-36 pb-24 text-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Hero Section */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Articles & Insights
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        Latest Insights on <span className="text-green-600">Growth, Web & SEO</span>
                    </h1>
                    <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Actionable strategies, technical web development guides, and search optimization breakdowns to elevate your brand.
                    </p>
                </div>

                {/* Blog Post Cards Grid */}
                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {posts.map((post) => {
                            const imageSrc = post.mainImage?.asset
                                ? urlForImage(post.mainImage)?.url()
                                : post.mainImage?.url || '/assets/hero-portrait.webp';

                            const formattedDate = post.publishedAt
                                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                                : null;

                            return (
                                <article
                                    key={post._id || post.slug}
                                    className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Card Image */}
                                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-gray-100">
                                        <Image
                                            src={imageSrc}
                                            alt={post.mainImage?.alt || post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        />
                                        {post.category && (
                                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-green-700 font-semibold text-xs px-3 py-1.5 rounded-full border border-green-200 shadow-xs">
                                                {post.category.title}
                                            </span>
                                        )}
                                    </Link>

                                    {/* Card Content */}
                                    <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
                                        <div>
                                            {formattedDate && (
                                                <div className="text-xs font-medium text-gray-400 mb-3 flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <time dateTime={post.publishedAt}>{formattedDate}</time>
                                                </div>
                                            )}

                                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2 leading-snug">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h2>

                                            {post.excerpt && (
                                                <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                        </div>

                                        {/* Author & Footer Link */}
                                        <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center text-xs">
                                                    {post.author?.name ? post.author.name.charAt(0) : 'N'}
                                                </div>
                                                <span className="text-xs font-medium text-gray-700">
                                                    {post.author?.name || 'Nabeel'}
                                                </span>
                                            </div>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 hover:text-green-700 transition-colors"
                                            >
                                                Read Post
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800">No blog posts found yet</h3>
                        <p className="text-gray-500 mt-2">Publish your first post from the Sanity Studio at /studio.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
