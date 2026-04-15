"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FormSection() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const formRef = useRef(null);

    // Refs for text items
    const itemExpandRef = useRef(null);
    const itemDominateRef = useRef(null);
    const itemScaleRef = useRef(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isMobile: "(max-width: 767px)",
            isDesktop: "(min-width: 768px)",
        }, (context) => {
            let { isMobile, isDesktop } = context.conditions;

            /* ===========================
               INITIAL STATES
            =========================== */
            const items = [itemExpandRef.current, itemDominateRef.current, itemScaleRef.current];

            // Items start pushed down and transparent
            gsap.set(items, {
                y: 85,
                opacity: 0
            });

            // Form starts off-screen right and transparent
            gsap.set(formRef.current, {
                x: 40,
                opacity: 0,
                pointerEvents: "none"
            });

            /* ===========================
               SCROLL INTERACTION
            =========================== */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    // Mobile: Start earlier (when top hits 70% of viewport)
                    // Desktop: Start when top hits top
                    start: isMobile ? "top 70%" : "top top",
                    end: "+=100%",
                    scrub: 0.5,
                    // Pin only on desktop to avoid locking mid-screen on mobile
                    pin: isDesktop ? true : false,
                }
            });

            // 1. Text Reveal Sequence
            // Item 1: Expand
            tl.to(itemExpandRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.25,
                ease: "power1.out"
            }, 0);

            // Item 2: Dominate
            tl.to(itemDominateRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.25,
                ease: "power1.out"
            }, 0.25);

            // Item 3: Scale
            tl.to(itemScaleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.25,
                ease: "power1.out"
            }, 0.5);

            // 2. Form Slide In (After Text)
            tl.to(formRef.current, {
                x: 0,
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.4,
                ease: "power2.out"
            }, 0.75); // Starts after text sequence

        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-transparent text-white font-sans overflow-hidden pb-32 md:pb-0">
            <div
                ref={wrapperRef}
                className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between px-[5vw] gap-8 bg-transparent z-10"
            >

                {/* LEFT COLUMN: SCROLL TEXT */}
                <div className="flex-1 flex flex-col gap-6 justify-center min-w-[300px] w-full md:w-auto">

                    {/* Item: Expand */}
                    <div ref={itemExpandRef} className="flex items-center gap-5 text-4xl md:text-7xl font-bold leading-tight">
                        <div className="w-[1em] h-[1em] rounded-[20%] flex justify-center items-center bg-[#00D06C] flex-shrink-0">
                            <svg viewBox="0 0 24 24" className="w-[52%] h-[52%] fill-white">
                                <path d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm14 0h2v6h-6v-2h4v-4z" />
                            </svg>
                        </div>
                        Expand
                    </div>

                    {/* Item: Dominate */}
                    <div ref={itemDominateRef} className="flex items-center gap-5 text-4xl md:text-7xl font-bold leading-tight">
                        <div className="w-[1em] h-[1em] rounded-[20%] flex justify-center items-center bg-[#4D8EFF] flex-shrink-0">
                            <svg viewBox="0 0 24 24" className="w-[52%] h-[52%] fill-white">
                                <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4 12h4M16 12h4" />
                            </svg>
                        </div>
                        Dominate
                    </div>

                    {/* Item: Scale */}
                    <div ref={itemScaleRef} className="flex items-center gap-5 text-4xl md:text-7xl font-bold leading-tight">
                        <div className="w-[1em] h-[1em] rounded-[20%] flex justify-center items-center bg-[#FF4D4D] flex-shrink-0">
                            <svg viewBox="0 0 24 24" className="w-[52%] h-[52%] fill-white">
                                <path d="M5 20l14-14M5 6h14v14" />
                            </svg>
                        </div>
                        Scale
                    </div>

                </div>

                {/* RIGHT COLUMN: FORM */}
                <div className="flex-none w-full md:w-[420px] flex justify-end items-center">
                    <form
                        ref={formRef}
                        className="w-full bg-gray-900 text-white p-8 rounded-2xl border-l-[6px] border-[#0C5920] shadow-[0_18px_46px_rgba(12,89,32,0.18)]"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <h2 className="text-2xl font-extrabold mb-6">Get Instant Free Consultation</h2>

                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input type="text" placeholder="Enter your name" className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-[#0C5920]" />

                        <label className="block text-sm font-bold mb-2">Company Name</label>
                        <input type="text" placeholder="Enter company" className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-[#0C5920]" />

                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input type="email" placeholder="Enter email" className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-[#0C5920]" />

                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                        <input type="tel" placeholder="Enter number" className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-base focus:outline-none focus:border-[#0C5920]" />

                        <button className="w-full p-4 rounded-lg border-none bg-[#0C5920] text-white font-extrabold text-base cursor-pointer hover:bg-[#0a481a] transition-colors">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
