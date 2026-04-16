"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { League_Gothic } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leagueGothic = League_Gothic({
    subsets: ["latin"],
    weight: "400"
});

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
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        logo: "/assets/Bangalore_University_logo.png"
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
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2670&auto=format&fit=crop",
        logo: "/assets/nearlearn logo.webp"
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
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        logo: "/assets/trasccon logo (1).png"
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
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
        logo: "/assets/Gemini_Generated_Image_jg9o8ojg9o8ojg9o (1).png"
    },
];

const CardLogoDisplay = ({ card, className = "" }) => {
    return (
        <div className={`w-full flex items-center justify-center py-8 mb-4 bg-white rounded-lg md:rounded-r-3xl md:rounded-l-none border border-white/10 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] h-full ${className}`}>
            {card.id === 4 ? (
                /* Portfolio Card Stack (from Service Hero reference) */
                <div className="relative w-full h-40 md:h-64 flex items-center justify-center scale-75 md:scale-100">
                    {/* Back Card (Trasccon) */}
                    <div className="absolute w-[70%] h-32 md:h-48 bg-[#111] rounded-lg border border-white/10 shadow-2xl transform -rotate-[12deg] -translate-y-4 -translate-x-4 overflow-hidden opacity-40">
                        <img src="/assets/trasccon.png" className="w-full h-full object-cover object-top" alt="" />
                    </div>
                    {/* 3rd Card (Rain Country) */}
                    <div className="absolute w-[70%] h-32 md:h-48 bg-[#111] rounded-lg border border-white/10 shadow-2xl transform rotate-[8deg] -translate-y-2 translate-x-3 overflow-hidden opacity-60">
                        <img src="/assets/rain country.png" className="w-full h-full object-cover object-top" alt="" />
                    </div>
                    {/* 2nd Card (Leadworkz) */}
                    <div className="absolute w-[70%] h-32 md:h-48 bg-[#111] rounded-lg border border-white/10 shadow-2xl transform -rotate-[4deg] translate-y-2 -translate-x-2 overflow-hidden opacity-80">
                        <img src="/assets/leadworks.png" className="w-full h-full object-cover object-top" alt="" />
                    </div>
                    {/* Top Card (Navodaya) */}
                    <div className="absolute w-[70%] h-32 md:h-48 bg-[#111] rounded-lg border border-white/10 shadow-2xl transform rotate-[2deg] translate-y-4 translate-x-1 overflow-hidden z-10 border-white/20">
                        <img src="/assets/navodaya.png" className="w-full h-full object-cover object-top" alt="" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>
            ) : (
                <img 
                    src={card.logo} 
                    alt={card.title} 
                    className="max-h-20 md:max-h-32 max-w-[80%] object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-110" 
                />
            )}
        </div>
    );
};

const MobileTimelineItem = ({ card }) => {
    const [expanded, setExpanded] = useState(false);
    
    // Extract year for the badge
    const yearMatch = card.date.match(/\d{4}/);
    const yearOnly = yearMatch ? yearMatch[0] : card.date;

    return (
        <div className="relative flex flex-col w-full mb-8 pt-4">
            {/* Year Badge */}
            <div className="flex items-center">
                <div className="bg-white border-2 border-[#22c55e] rounded-md px-3 py-1 z-10 w-[78px] flex justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <span className="text-[#22c55e] font-bold text-[16px]">{yearOnly}</span>
                </div>
            </div>

            {/* Connecting Line (Vertical) */}
            <div className="absolute left-[36px] top-[46px] bottom-[-32px] w-[5px] bg-[#22c55e] z-10" />

            <div className="flex mt-[12px] ml-[23px] relative z-20">
                {/* Circle Node */}
                <div className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center shrink-0 border-2 border-[#22c55e] z-10 bg-[#0a0a0a] mt-6 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#22c55e] flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.8)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></div>
                    </div>
                </div>

                {/* Triangle Pointer */}
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-white/10 ml-1.5 mt-[28px] z-10"></div>

                {/* Content Card */}
                <div className="ml-0 flex-1 pt-4 pb-2 pr-2 bg-white/[0.03] border border-white/10 rounded-xl p-4 mt-2 font-sans">
                    <h4 className="text-[#22c55e] font-extrabold text-xl leading-tight w-[95%] uppercase tracking-tight">{card.title}</h4>
                    <p className="text-gray-400 text-[12px] font-medium mt-1 mb-4 uppercase tracking-[0.15em]">{card.date}</p>

                    {/* Logo Area */}
                    <CardLogoDisplay card={card} />

                    {/* Description */}
                    <p className="text-gray-300 text-[14px] leading-relaxed mb-4 pr-1">
                        {card.description}
                    </p>
                    
                    <button 
                        onClick={() => setExpanded(!expanded)} 
                        className="flex items-center gap-2 text-[#22c55e] font-bold text-[13px] uppercase tracking-widest hover:brightness-110 transition-all"
                    >
                        <span>{expanded ? "READ LESS" : "READ MORE"}</span>
                        <svg className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Expanded Content (Bullets) */}
                    <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}
                    >
                        <ul className="space-y-4 border-t border-white/10 pt-4">
                            {card.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-300 group">
                                    <span className="text-[#22c55e] mt-1 shrink-0 animate-pulse">●</span>
                                    <span className="leading-snug group-hover:text-white transition-colors">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
            className="w-full bg-transparent text-white"
        >
            {/* Desktop View (Unchanged) */}
            <div 
                ref={containerRef}
                className="relative hidden md:flex flex-col items-center gap-10 py-20 px-4 md:px-10"
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
                                <CardLogoDisplay card={card} className="mb-0 rounded-none" />
                                
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
            </div>

            {/* Mobile View (Timeline) */}
            <div className="md:hidden w-full px-5 py-16 flex flex-col relative overflow-hidden bg-[linear-gradient(90deg,#000000,#737373)]">
                
                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
                
                {/* Mobile Header */}
                <div className="w-full text-center mb-12 relative z-10">
                    <h2 className="text-white text-base font-bold tracking-[0.2em] uppercase mb-0 font-sans">MY</h2>
                    <h3 className={`${leagueGothic.className} text-[#22c55e] text-5xl font-normal uppercase tracking-wider drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]`}>EXPERIENCE</h3>
                </div>

                {/* Timeline Container */}
                <div className="w-full relative min-h-[500px] pb-10">
                    {/* Main continuous white line down the back (only visible in gaps) */}
                    <div className="absolute left-[36px] top-4 bottom-10 w-[5px] bg-white z-0" />
                    
                    {/* Arrow at the end of the line */}
                    <div className="absolute left-[36px] bottom-10 -translate-x-1/2 translate-y-full z-20">
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-white opacity-60" />
                        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#43A047]" />
                    </div>

                    <div className="flex flex-col gap-0 w-full relative z-10">
                        {cards.map((card, i) => (
                            <div 
                                key={card.id} 
                                className="timeline-item-entry"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                <MobileTimelineItem card={card} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 mb-2 w-full flex justify-center z-50 relative">
                    <Link href="/portfolio">
                        <button className="btn-work text-[14px] px-8 py-3">
                            See my works
                        </button>
                    </Link>
                </div>

                {/* Entrance Animations & Mobile Styles */}
                <style>{`
                    .timeline-item-entry {
                        opacity: 0;
                        transform: translateY(30px);
                        animation: timelineIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                    }
                    @keyframes timelineIn {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
