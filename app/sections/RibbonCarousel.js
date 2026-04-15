"use client";
// Updated: 2026-01-13 17:46 - Interactive infinite carousel

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

const Ribbon = ({ text, direction = "left", rotate = 0, className = "" }) => {
    const ribbonRef = useRef(null);
    const textRef = useRef(null);
    const xPos = useRef(0);

    useEffect(() => {
        let width = 0;
        const content = textRef.current;

        // Calculate width (half of total because of duplication)
        const updateWidth = () => {
            width = content.offsetWidth / 2;
            // If expanding, maintain position relative to width
        };

        // Initial measure
        updateWidth();
        window.addEventListener("resize", updateWidth);

        // Consistent physical speed across devices
        // 1.5 px/frame * 60fps = 90px/sec
        const speed = direction === "left" ? -1.5 : 1.5;

        // Ticker function for infinite loop
        const tick = () => {
            xPos.current += speed;

            // Wrap logic
            if (direction === "left") {
                if (xPos.current <= -width) xPos.current += width;
            } else {
                if (xPos.current >= 0) xPos.current -= width;
            }

            gsap.set(content, { x: xPos.current });
        };

        // Start loop
        gsap.ticker.add(tick);

        // Draggable
        const draggable = Draggable.create(content, {
            type: "x",
            inertia: true,
            onPress: () => {
                gsap.ticker.remove(tick);
            },
            onDrag: function () {
                xPos.current = this.x;
            },
            onThrowUpdate: function () {
                xPos.current = this.x;
            },
            onRelease: function () {
                if (!this.isThrowing) {
                    resumeTick(this.x);
                }
            },
            onThrowComplete: function () {
                resumeTick(this.x);
            }
        })[0];

        const resumeTick = (currentX) => {
            xPos.current = currentX;
            // Wrap to valid range to avoid drift
            if (direction === "left") {
                xPos.current = xPos.current % width;
                if (xPos.current > 0) xPos.current -= width;
            } else {
                xPos.current = xPos.current % width;
                if (xPos.current > 0) xPos.current -= width;
            }
            gsap.ticker.add(tick);
        };

        // Initial positioning for Right direction
        if (direction === "right") {
            xPos.current = -width;
            gsap.set(content, { x: xPos.current });
        }

        return () => {
            window.removeEventListener("resize", updateWidth);
            gsap.ticker.remove(tick);
            if (draggable) draggable.kill();
        };
    }, [direction]);

    return (
        <div
            ref={ribbonRef}
            className={`absolute w-[120vw] bg-white text-black py-2 md:py-3 overflow-hidden whitespace-nowrap ${className} cursor-grab active:cursor-grabbing`}
            style={{
                left: '-10vw',
                top: '50%',
                transform: `translateY(-50%) rotate(${rotate}deg)`,
                transformOrigin: 'center center',
            }}
        >
            <div
                ref={textRef}
                className="flex gap-6 md:gap-10 text-2xl md:text-4xl font-bold uppercase tracking-wider items-center will-change-transform"
            >
                {/* Repeat content many times for seamless infinite scroll */}
                {[...Array(30)].map((_, i) => (
                    <span key={i} className="flex items-center gap-6 md:gap-10 shrink-0">
                        {text}
                        <span className="text-2xl md:text-4xl">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default function RibbonCarousel() {
    const TEXT = "SOCIAL MEDIA MARKETING • UX UI DESIGN • PERFORMANCE MARKETING • WEBSITE DESIGN • SEO / SEM • BRANDING";

    return (
        <section className="relative w-full h-[40vh] md:h-[50vh] bg-transparent overflow-hidden flex items-center justify-center z-40">

            {/* Ribbon 1 - Top ribbon, tilted down-right, scrolling left */}
            <Ribbon
                text={TEXT}
                direction="left"
                rotate={-5}
                className="z-10 opacity-80"
            />

            {/* Ribbon 2 - Bottom ribbon, tilted up-right, scrolling right */}
            <Ribbon
                text={TEXT}
                direction="right"
                rotate={5}
                className="z-20"
            />

        </section>
    );
}
