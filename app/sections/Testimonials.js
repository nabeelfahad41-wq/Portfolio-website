"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { League_Gothic } from "next/font/google";
import gsap from "gsap";

const leagueGothic = League_Gothic({
    subsets: ["latin"],
    weight: "400"
});

const testimonialsArray = [
    {
        company: "Trasccon Interconnection Solutions",
        quote: "Working with Nabeel completely transformed our digital presence. Within just 7 months, we saw over 35 high-value keywords ranking on Google’s first page and generated more than 7,000 new visitors organically. His ability to take full ownership and deliver measurable growth is what truly sets him apart."
    },
    {
        company: "Navodaya Powertech",
        quote: "Nabeel designed and developed our website with a clear understanding of our industry and products. The custom product pages and advanced filtering features made it much easier for users to navigate and find relevant solutions. The final result was not just a website—but a functional business tool."
    },
    {
        company: "Rain Country Resort",
        quote: "We wanted a website that reflects the experience of our resort, and Nabeel delivered exactly that. The design, structure, and user experience were thoughtfully executed, giving our brand a strong and professional online presence."
    },
    {
        company: "Kuruva Island Resort",
        quote: "Nabeel handled our performance marketing with a clear focus on results. We achieved leads at an average cost of ₹15 with strong conversion quality. His approach was data-driven, efficient, and aligned with our business goals."
    },
    {
        company: "Aestic Design (Wall Decor)",
        quote: "With Nabeel’s performance marketing strategy, we consistently generated high-quality leads at an average cost of ₹12. What stood out was not just the cost efficiency, but the quality of leads that actually converted into business."
    }
];

// Flatten for infinite loop
const allItems = [...testimonialsArray, ...testimonialsArray, ...testimonialsArray];

export default function Testimonials() {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(testimonialsArray.length); // Start at middle set
    const [isMoving, setIsMoving] = useState(false);
    const autoPlayRef = useRef(null);

    const getXOffset = useCallback((index) => {
        const track = trackRef.current;
        if (!track) return 0;
        const card = track.querySelector(".testimonial-card");
        if (!card) return 0;

        const cardWidth = card.offsetWidth;
        const gap = 32; // gap-8
        return -(index * (cardWidth + gap));
    }, []);

    const slide = useCallback((direction) => {
        if (isMoving) return;
        setIsMoving(true);

        const newIndex = direction === "next" ? activeIndex + 1 : activeIndex - 1;
        const targetX = getXOffset(newIndex);

        gsap.to(trackRef.current, {
            x: targetX,
            duration: 0.8,
            ease: "expo.out",
            onComplete: () => {
                let finalIndex = newIndex;
                const len = testimonialsArray.length;

                // Infinite loop logic
                if (newIndex >= 2 * len) {
                    finalIndex = newIndex - len;
                } else if (newIndex < len) {
                    finalIndex = newIndex + len;
                }

                if (finalIndex !== newIndex) {
                    gsap.set(trackRef.current, { x: getXOffset(finalIndex) });
                }

                setActiveIndex(finalIndex);
                setIsMoving(false);
            }
        });
    }, [activeIndex, getXOffset, isMoving]);

    // Auto-play logic
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            slide("next");
        }, 5000);

        return () => clearInterval(autoPlayRef.current);
    }, [slide]);

    const handleManualSlide = (direction) => {
        clearInterval(autoPlayRef.current);
        slide(direction);
    };

    // Initial positioning
    useEffect(() => {
        const handleResize = () => {
            gsap.set(trackRef.current, { x: getXOffset(activeIndex) });
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        
        // Small timeout to ensure DOM is ready and widths are calculated
        const timer = setTimeout(handleResize, 100);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, [activeIndex, getXOffset]);

    return (
        <section className="relative w-full pt-20 pb-0 bg-transparent overflow-hidden z-40 select-none">
            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 uppercase">
                <div>
                    <span className="text-sm font-mono text-white/50 uppercase tracking-[0.2em]">Testimonials</span>
                    <h2 className={`${leagueGothic.className} text-5xl md:text-8xl font-normal text-white tracking-widest uppercase`}>
                        What my <span className="text-green-500">clients say</span>
                    </h2>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={() => handleManualSlide('prev')}
                        disabled={isMoving}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-green-500/50 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button 
                        onClick={() => handleManualSlide('next')}
                        disabled={isMoving}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-green-500/50 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden px-8 md:px-16">
                <div 
                    ref={trackRef} 
                    className="flex gap-8 will-change-transform"
                >
                    {allItems.map((t, i) => (
                        <div
                            key={`t-item-${i}`}
                            className="testimonial-card shrink-0 w-[85vw] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] min-h-[320px] p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 shadow-2xl flex flex-col justify-between transition-colors duration-500 hover:border-green-500/30"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="text-green-500/50">
                                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                        <path d="M0 30V15.5C0 11.1667 1.33333 7.33333 4 4C6.66667 0.666667 10.3333 -1 15 1L12 8C10 7 8 8 7 10C6 12 6 13 6 15H15V30H0ZM25 30V15.5C25 11.1667 26.3333 7.33333 29 4C31.6667 0.666667 35.3333 -1 40 1L37 8C35 7 33 8 32 10C31 12 31 13 31 15H40V30H25Z" />
                                    </svg>
                                </div>
                                <p className="text-white/80 text-lg leading-relaxed font-light">{t.quote}</p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-green-500 font-bold text-sm uppercase tracking-wider">{t.company}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-12 w-full" />
        </section>
    );
}
