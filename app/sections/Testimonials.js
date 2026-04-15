"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

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

// Flatten for 3 sets of items to ensure infinite circle feel
const allItems = [...testimonialsArray, ...testimonialsArray, ...testimonialsArray];

export default function Testimonials() {
    const trackRef = useRef(null);
    const xPos = useRef(0);
    const isPaused = useRef(false);

    useEffect(() => {
        let width = 0;
        const track = trackRef.current;
        const totalItemsCount = testimonialsArray.length;

        const updateWidth = () => {
            const card = track.querySelector('.testimonial-card');
            if (card) {
                const cardWidth = card.offsetWidth + 32; // width + gap
                width = cardWidth * totalItemsCount;
                // Center in middle set
                xPos.current = -width;
                gsap.set(track, { x: xPos.current });
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        const timer = setTimeout(updateWidth, 500);

        const tick = () => {
            if (isPaused.current) return;
            xPos.current -= 0.5; // continuous speed

            // Wrap within middle set
            if (xPos.current <= -2 * width) {
                xPos.current += width;
            } else if (xPos.current >= 0) {
                xPos.current -= width;
            }

            gsap.set(track, { x: xPos.current });
        };

        gsap.ticker.add(tick);

        const draggable = Draggable.create(track, {
            type: "x",
            zIndexBoost: false,
            onPress: () => {
                isPaused.current = true;
            },
            onDrag: function() {
                xPos.current = this.x;
            },
            onRelease: function() {
                setTimeout(() => {
                    isPaused.current = false;
                }, 2000);
            }
        })[0];

        return () => {
            window.removeEventListener("resize", updateWidth);
            clearTimeout(timer);
            gsap.ticker.remove(tick);
            if (draggable) draggable.kill();
        };
    }, []);

    const slide = (direction) => {
        const track = trackRef.current;
        const card = track?.querySelector('.testimonial-card');
        if (!card) return;

        const step = (card.offsetWidth + 32) * (direction === 'next' ? -1 : 1);
        isPaused.current = true;

        gsap.to(xPos, {
            current: xPos.current + step,
            duration: 1,
            ease: "power2.inOut",
            onUpdate: () => {
                const cardWidth = card.offsetWidth + 32;
                const fullWidth = cardWidth * testimonialsArray.length;
                if (xPos.current <= -2 * fullWidth) xPos.current += fullWidth;
                else if (xPos.current >= 0) xPos.current -= fullWidth;
                gsap.set(track, { x: xPos.current });
            },
            onComplete: () => {
                setTimeout(() => {
                    isPaused.current = false;
                }, 3000);
            }
        });
    };

    return (
        <section className="relative w-full pt-20 pb-0 bg-transparent overflow-hidden z-40 select-none">
            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-sm font-mono text-white/50 uppercase tracking-[0.2em]">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">What my clients say</h2>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={() => slide('prev')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button 
                        onClick={() => slide('next')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden px-16">
                <div ref={trackRef} className="flex gap-8 will-change-transform cursor-grab active:cursor-grabbing">
                    {allItems.map((t, i) => (
                        <div
                            key={`t-item-${i}`}
                            className="testimonial-card shrink-0 w-[85vw] md:w-[calc(25%-24px)] min-h-[320px] p-8 rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl flex flex-col justify-between"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="text-green-500">
                                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                        <path d="M0 30V15.5C0 11.1667 1.33333 7.33333 4 4C6.66667 0.666667 10.3333 -1 15 1L12 8C10 7 8 8 7 10C6 12 6 13 6 15H15V30H0ZM25 30V15.5C25 11.1667 26.3333 7.33333 29 4C31.6667 0.666667 35.3333 -1 40 1L37 8C35 7 33 8 32 10C31 12 31 13 31 15H40V30H25Z" />
                                    </svg>
                                </div>
                                <p className="text-white/80 text-lg leading-relaxed font-medium">{t.quote}</p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-bold text-base uppercase tracking-wider">{t.company}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-12 w-full" />
        </section>
    );
}
