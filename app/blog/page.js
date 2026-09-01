import Link from 'next/link';
import Image from 'next/image';
import { League_Gothic } from 'next/font/google';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { getAllPosts } from '@/sanity/lib/fetchData';
import { urlForImage } from '@/sanity/lib/image';
import { siteConfig } from '@/content/config';

const leagueGothic = League_Gothic({
    subsets: ['latin'],
    weight: '400',
});

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
    const gridPosts = posts && posts.length > 0 ? posts : [];

    return (
        <main className="bg-black text-white min-h-screen font-sans selection:bg-[#43A047] selection:text-white relative">
            {/* Page-wide Background Enhancements (Matching Portfolio & Site Theme) */}
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-24">

                {/* Hero Header Section */}
                <div className="max-w-4xl mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#43A047]/30 bg-[#43A047]/10 text-[#43A047] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
                        Articles & Insights
                    </div>
                    <h1
                        className={`text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.9] uppercase mb-8 ${leagueGothic.className}`}
                    >
                        Latest Insights On <br />
                        <span className="text-[#43A047]">Growth, Web & SEO</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                        Actionable strategies, technical web development guides, and search engine optimization breakdowns to scale your brand.
                    </p>
                </div>

                {/* Featured Story Hero Card */}
                {featuredPost && (
                    <section className="mb-20">
                        <div className="group relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#43A047]/50 transition-all duration-500 backdrop-blur-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                {/* Featured Image */}
                                <Link
                                    href={`/blog/${featuredPost.slug}`}
                                    className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[420px] overflow-hidden bg-white/5 block"
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
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                                        <span className="bg-[#43A047] text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md">
                                            Featured Story
                                        </span>
                                        {featuredPost.category && (
                                            <span className="bg-black/80 backdrop-blur-md text-[#43A047] font-semibold text-xs px-4 py-1.5 rounded-full border border-[#43A047]/40 shadow-xs">
                                                {featuredPost.category.title}
                                            </span>
                                        )}
                                    </div>
                                </Link>

                                {/* Featured Content */}
                                <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 mb-4">
                                            {featuredPost.publishedAt && (
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-[#43A047]" />
                                                    <time dateTime={featuredPost.publishedAt}>
                                                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        })}
                                                    </time>
                                                </div>
                                            )}
                                            <span>•</span>
                                            <div className="flex items-center gap-1 text-[#43A047] bg-[#43A047]/10 px-2.5 py-0.5 rounded-md font-bold border border-[#43A047]/20">
                                                <Clock className="w-3 h-3" />
                                                <span>{getReadTime(featuredPost)}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#43A047] transition-colors duration-200 leading-snug mb-4">
                                            <Link href={`/blog/${featuredPost.slug}`}>
                                                {featuredPost.title}
                                            </Link>
                                        </h2>

                                        {featuredPost.excerpt && (
                                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed line-clamp-3 mb-8 font-light">
                                                {featuredPost.excerpt}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#43A047]/20 border border-[#43A047]/40 text-[#43A047] font-bold flex items-center justify-center text-sm shadow-sm">
                                                {featuredPost.author?.name ? featuredPost.author.name.charAt(0) : 'N'}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white">
                                                    {featuredPost.author?.name || 'Nabeel'}
                                                </div>
                                                <div className="text-xs text-gray-500">Author</div>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/blog/${featuredPost.slug}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#43A047] hover:bg-[#66BB6A] text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md group/btn"
                                        >
                                            Read Article
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Section Title for Grid Posts */}
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/10">
                    <h2 className={`text-3xl md:text-5xl uppercase tracking-tight text-white ${leagueGothic.className}`}>
                        Explore All Articles
                    </h2>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#43A047] bg-[#43A047]/10 border border-[#43A047]/30 px-3.5 py-1.5 rounded-full">
                        {gridPosts.length} {gridPosts.length === 1 ? 'Article' : 'Articles'}
                    </span>
                </div>

                {/* Blog Cards Grid Layout */}
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
                                    className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#43A047]/50 hover:bg-white/[0.05] transition-all duration-500 h-full"
                                >
                                    {/* Card Image */}
                                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-white/5">
                                        <Image
                                            src={imageSrc}
                                            alt={post.mainImage?.alt || post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        {post.category && (
                                            <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#43A047] font-bold text-xs px-3.5 py-1.5 rounded-full border border-[#43A047]/40 shadow-xs uppercase tracking-wider">
                                                {post.category.title}
                                            </span>
                                        )}
                                    </Link>

                                    {/* Card Content */}
                                    <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
                                        <div>
                                            <div className="flex items-center gap-2.5 text-xs font-medium text-gray-400 mb-3">
                                                {formattedDate && (
                                                    <time dateTime={post.publishedAt}>{formattedDate}</time>
                                                )}
                                                {formattedDate && <span>•</span>}
                                                <span className="text-[#43A047] font-bold bg-[#43A047]/10 px-2 py-0.5 rounded border border-[#43A047]/20">
                                                    {getReadTime(post)}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white group-hover:text-[#43A047] transition-colors duration-200 line-clamp-2 leading-snug">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>

                                            {post.excerpt && (
                                                <p className="mt-3 text-sm text-gray-400 line-clamp-3 leading-relaxed font-light">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                        </div>

                                        {/* Author & Footer Link */}
                                        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-[#43A047]/20 border border-[#43A047]/40 text-[#43A047] font-bold flex items-center justify-center text-xs">
                                                    {post.author?.name ? post.author.name.charAt(0) : 'N'}
                                                </div>
                                                <span className="text-xs font-semibold text-gray-300">
                                                    {post.author?.name || 'Nabeel'}
                                                </span>
                                            </div>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#43A047] group-hover:text-white uppercase tracking-wider transition-colors"
                                            >
                                                Read Post
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                        <h3 className="text-xl font-bold text-white">No blog posts found yet</h3>
                        <p className="text-gray-400 mt-2">Publish your first post from the Sanity Studio at /studio.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
