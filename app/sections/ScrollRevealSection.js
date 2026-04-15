"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealSection() {
    const containerRef = useRef(null);
    const revealLayerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 40%", // Even more delayed start
                    end: "bottom center", // Finish when bottom reaches center
                    pin: false, // Don't pin, just reveal on scroll
                    scrub: 1,
                    invalidateOnRefresh: true, // Re-record positions on refresh
                    refreshPriority: 1, // Calculate early
                    fastScrollEnd: true, // Prevent jumpy endings
                }
            });

            // Triangle Peak Reveal (Rising from bottom)
            // Initial: Flat line at bottom (hidden)
            // Final: Huge triangle covering the screen
            tl.fromTo(revealLayerRef.current,
                { clipPath: "polygon(0% 100%, 100% 100%, 50% 100%)" },
                { clipPath: "polygon(-150% 100%, 250% 100%, 50% -150%)", ease: "power1.inOut" }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden font-sans z-10 bg-[#0C5920]">

            {/* Layer 1: Green Background, White Text (Bottom Layer - Initially Visible) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-[#0C5920] z-0">
                <h1 className="text-white font-bold text-[clamp(4rem,10vw,8rem)] leading-[1.1] tracking-tighter max-w-[90%]">
                    Stop wasting<br />ad spend,
                </h1>
                <div className="text-white mt-8 text-2xl font-medium opacity-90">
                    Performance marketing designed to dominate.
                </div>
            </div>

            {/* Layer 2: White Background, Green Text (Top Layer - Revealed) */}
            <div
                ref={revealLayerRef}
                className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gray-100 z-20"
                style={{ clipPath: "polygon(0% 100%, 100% 100%, 50% 100%)" }} // Initial state: hidden at bottom
            >
                <h1 className="text-[#0C5920] font-bold text-[clamp(4rem,10vw,8rem)] leading-[1.1] tracking-tighter max-w-[90%]">
                    Start gaining<br />market share.
                </h1>
                <div className="text-[#0C5920] mt-8 text-2xl font-medium opacity-90">
                    Performance marketing designed to dominate.
                </div>
            </div>

        </section>
    );
}
