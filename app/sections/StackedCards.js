"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        id: 1,
        title: "MBA – Business Analytics & Marketing",
        date: "2024",
        description: "Master’s specialization in Business Analytics and Marketing, building a foundation in data-driven strategy.",
        bullets: [
            "Expertise in consumer behavior & brand strategy",
            "Hands-on data analysis & BI tools",
            "Aligned marketing with measurable ROI",
            "Focused on scalable growth systems"
        ],
        color: "bg-neutral-900",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "SEO Executive Intern — Nearlearn",
        date: "Jan 2025",
        description: "Began professional journey focusing on search engine optimization and digital visibility.",
        bullets: [
            "Executed off-page SEO & backlink outreach",
            "Supported keyword research & SERP evaluation",
            "Leveraged SEMrush, Ahrefs, & Search Console",
            "Improved domain ranks & search visibility"
        ],
        color: "bg-neutral-800",
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Growth Lead — Trasccon",
        date: "Mar 2025",
        description: "Led the digital marketing function, working with leadership to drive measurable growth.",
        bullets: [
            "Managed end-to-end digital strategy independently",
            "Ranked 35+ high-volume keywords on page 1",
            "Optimized website for SEO, UX & scalability",
            "Doubled LinkedIn followers in 6 months",
            "Awarded 'Badge of Honor' for high-impact results"
        ],
        color: "bg-neutral-700",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Freelance Digital Consultant",
        date: "2025 – Present",
        description: "Building scalable digital growth systems across multiple industries.",
        bullets: [
            "Designed high-converting niche websites",
            "Ran performance campaigns at ₹12 avg. CPR",
            "Optimized scalable campaigns from ₹1000/day budgets",
            "Delivered custom SEO & conversion strategies",
            "Focused on end-to-end traffic to conversion funnels"
        ],
        color: "bg-neutral-600",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
    },
];

export default function StackedCards() {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const createdTriggers = [];
            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const t1 = ScrollTrigger.create({
                    trigger: card,
                    start: "top 15%",
                    end: "+=40%",
                    scrub: 1,
                    animation: gsap.to(card.querySelector('.stacked-card-dimmer'), {
                        opacity: 1,
                        ease: "power1.in",
                    }),
                    toggleActions: "play none none reverse"
                });

                createdTriggers.push(t1);

                const t2 = ScrollTrigger.create({
                    trigger: card,
                    start: "top 15%",
                    end: "bottom center",
                    scrub: true,
                    animation: gsap.to(card, {
                        scale: 1 - ((cards.length - index) * 0.05),
                        ease: "none",
                    })
                });

                createdTriggers.push(t2);
            });

            try { ScrollTrigger.refresh(); } catch (e) { }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-transparent text-white py-20 px-4 md:px-10 flex flex-col items-center gap-10"
        >
            <div className="w-full max-w-7xl mx-auto mb-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">What I&apos;ve Built</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    A track record of driving scalable growth and leading end-to-end digital success.
                </p>
            </div>

            <div className="w-full max-w-6xl relative">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`sticky w-full h-[82vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${card.color} flex flex-col md:flex-row mb-[2vh]`}
                        style={{
                            top: "15%",
                            zIndex: 100 + index,
                        }}
                    >
                        {/* Dimmer Overlay */}
                        <div className="stacked-card-dimmer absolute inset-0 bg-black/60 pointer-events-none opacity-0 z-50" />

                        {/* Content side */}
                        <div className="flex-1 md:w-2/3 p-5 md:p-12 flex flex-col justify-start md:justify-center gap-2 md:gap-4 z-10 overflow-hidden order-2 md:order-1 pt-4 md:pt-12">
                            <div className="hidden md:flex flex-row items-center gap-3 md:gap-4 mb-0.5 md:mb-1">
                                <span className="text-sm md:text-base font-mono text-white/50 uppercase tracking-widest shrink-0">0{card.id}</span>
                                <span className="text-[11px] md:text-sm font-semibold bg-white/10 text-white rounded-full px-2 py-0.5 md:px-3 md:py-1 w-fit">{card.date}</span>
                            </div>
                            
                            <h3 className="text-[27px] leading-tight md:text-4xl lg:text-5xl font-bold mb-0.5 md:mb-1">{card.title}</h3>
                            <p className="text-white/80 text-[15px] md:text-lg leading-snug md:leading-relaxed">{card.description}</p>
                            
                            <ul className="mt-1 md:mt-2 space-y-2 md:space-y-3 overflow-y-auto pr-1 pb-2">
                                {card.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex gap-2 md:gap-3 text-[15px] md:text-lg text-gray-300 items-start">
                                        <span className="text-green-500 mt-0 md:mt-1 shrink-0 text-base md:text-xl leading-none">•</span>
                                        <span className="leading-[1.4] md:leading-normal">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image side */}
                        <div className="w-full md:w-1/3 relative h-[25%] md:h-auto overflow-hidden shrink-0 block order-1 md:order-2">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                style={{ backgroundImage: `url(${card.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 md:bg-black/40" />
                            
                            {/* Mobile overlay for date and number */}
                            <div className="absolute bottom-3 left-5 flex md:hidden flex-row items-center gap-3 z-10">
                                <span className="text-[14px] font-mono text-white uppercase tracking-widest shrink-0 drop-shadow-md">0{card.id}</span>
                                <span className="text-[11px] font-semibold bg-black/40 backdrop-blur-md border border-white/20 text-white rounded-full px-2 py-0.5 w-fit shadow-md">{card.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 mb-6 z-50">
                <Link href="/portfolio">
                    <button className="btn-work">
                        See my works
                    </button>
                </Link>
            </div>

            {/* Spacer */}
            <div className="h-[2vh]" />
        </section>
    );
}
