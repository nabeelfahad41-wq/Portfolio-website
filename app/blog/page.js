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

export default async function BlogListingPage() {
    const posts = await getAllPosts();
    const featuredPost = posts && posts.length > 0 ? posts[0] : null;
    const gridPosts = posts && posts.length > 1 ? posts.slice(1) : (posts && posts.length === 1 ? [] : []);

    return (
        <main className="bg-white min-h-screen pt-32 pb-24 text-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Header Section */}
                <div className="max-w-3xl mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200/80 text-green-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Articles & Insights
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                        Latest Insights on <span className="text-green-600">Growth, Web & SEO</span>
                    </h1>
                    <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
                        Actionable strategies, technical web development guides, and search engine optimization breakdowns to scale your brand.
                    </p>
                </div>

                {/* Featured Story Hero Card */}
                {featuredPost && (
                    <section className="mb-16">
                        <div className="group relative bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-green-300 transition-all duration-300 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                {/* Featured Image */}
                                <Link
                                    href={`/blog/${featuredPost.slug}`}
                                    className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[400px] overflow-hidden bg-gray-100 block"
                                >
                                    <Image
                                        src={
                                            featuredPost.mainImage?.asset
                                                ? urlForImage(featuredPost.mainImage)?.url()
                                                : featuredPost.mainImage?.url || '/assets/hero-portrait.webp'
                                        }
                                        alt={featuredPost.mainImage?.alt || featuredPost.title}
                                        fill
                                        priority
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        <span className="bg-green-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                            Featured Story
                                        </span>
                                        {featuredPost.category && (
                                            <span className="bg-white/95 backdrop-blur-md text-green-700 font-semibold text-xs px-3.5 py-1.5 rounded-full border border-green-200/80 shadow-xs">
                                                {featuredPost.category.title}
                                            </span>
                                        )}
                                    </div>
                                </Link>

                                {/* Featured Content */}
                                <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-4">
                                            {featuredPost.publishedAt && (
                                                <time dateTime={featuredPost.publishedAt}>
                                                    {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </time>
                                            )}
                                            <span>•</span>
                                            <span className="text-green-700 bg-green-50 px-2.5 py-0.5 rounded-md font-bold">
                                                {getReadTime(featuredPost)}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 group-hover:text-green-600 transition-colors duration-200 leading-tight mb-4">
                                            <Link href={`/blog/${featuredPost.slug}`}>
                                                {featuredPost.title}
                                            </Link>
                                        </h2>

                                        {featuredPost.excerpt && (
                                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed line-clamp-3 mb-8 font-normal">
                                                {featuredPost.excerpt}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                                                {featuredPost.author?.name ? featuredPost.author.name.charAt(0) : 'N'}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">
                                                    {featuredPost.author?.name || 'Nabeel'}
                                                </div>
                                                <div className="text-xs text-gray-500">Author</div>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/blog/${featuredPost.slug}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 hover:bg-green-600 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm"
                                        >
                                            Read Article
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Section Header for Recent Stories */}
                {gridPosts.length > 0 && (
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                            Recent Stories
                        </h2>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {gridPosts.length} {gridPosts.length === 1 ? 'Article' : 'Articles'}
                        </span>
                    </div>
                )}

                {/* Blog Cards Grid */}
                {gridPosts && gridPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {gridPosts.map((post) => {
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
                                    className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 overflow-hidden hover:-translate-y-1"
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
                                            <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-green-700 font-semibold text-xs px-3.5 py-1.5 rounded-full border border-green-200/80 shadow-xs">
                                                {post.category.title}
                                            </span>
                                        )}
                                    </Link>

                                    {/* Card Content */}
                                    <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
                                        <div>
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                                                {formattedDate && (
                                                    <time dateTime={post.publishedAt}>{formattedDate}</time>
                                                )}
                                                {formattedDate && <span>•</span>}
                                                <span className="text-gray-500 font-semibold">{getReadTime(post)}</span>
                                            </div>

                                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2 leading-snug">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h2>

                                            {post.excerpt && (
                                                <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed font-normal">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                        </div>

                                        {/* Author & Footer Link */}
                                        <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                                                    {post.author?.name ? post.author.name.charAt(0) : 'N'}
                                                </div>
                                                <span className="text-xs font-semibold text-gray-700">
                                                    {post.author?.name || 'Nabeel'}
                                                </span>
                                            </div>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 hover:text-green-700 transition-colors"
                                            >
                                                Read Story
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
                ) : !featuredPost ? (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800">No blog posts found yet</h3>
                        <p className="text-gray-500 mt-2">Publish your first post from the Sanity Studio at /studio.</p>
                    </div>
                ) : null}
            </div>
        </main>
    );
}
