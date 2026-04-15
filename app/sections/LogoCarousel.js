"use client";
// Updated: 2026-01-13 17:46 - Interactive infinite carousel

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

const LogoCarousel = () => {
    const carouselRef = useRef(null);
    const trackRef = useRef(null);
    const xPos = useRef(0);

    useEffect(() => {
        let width = 0;
        const track = trackRef.current;

        // Calculate width (half of total because of duplication)
        const updateWidth = () => {
            width = track.scrollWidth / 2;
        };

        updateWidth();
        // Delay to ensuring loading? Logos are SVGs/images.
        // Better to check on load but a timeout helps for simple implementation
        setTimeout(updateWidth, 500);
        window.addEventListener("resize", updateWidth);

        // Consistent speed
        const speed = -1.5;

        // Ticker function
        const tick = () => {
            xPos.current += speed;

            // Wrap logic (Left movement)
            if (xPos.current <= -width) {
                xPos.current += width;
            }

            gsap.set(track, { x: xPos.current });
        };

        // Start loop
        gsap.ticker.add(tick);

        // Draggable
        const draggable = Draggable.create(track, {
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
            // Wrap to valid range [-width, 0]
            xPos.current = xPos.current % width;
            if (xPos.current > 0) xPos.current -= width;

            gsap.ticker.add(tick);
        };

        return () => {
            window.removeEventListener("resize", updateWidth);
            gsap.ticker.remove(tick);
            if (draggable) draggable.kill();
        };
    }, []);

    // Digital marketing platform logos
    // Digital marketing platform logos
    const logos = [
        { name: "Meta", url: "/assets/logos/meta.svg" },
        { name: "Facebook", url: "/assets/logos/facebook.svg" },
        { name: "Google Analytics", url: "/assets/logos/google-analytics.svg" },
        { name: "LinkedIn", url: "/assets/logos/linkedin.svg" },
        { name: "Shopify", url: "/assets/logos/shopify.svg" },
        { name: "WhatsApp", url: "/assets/logos/whatsapp.svg" },
        
        { name: "Claude AI", url: "/assets/Claude_AI_symbol.svg" },
        { name: "Figma", url: "/assets/Figma-logo.svg.png" },
        { name: "Instagram", url: "/assets/Instagram_icon.png" },
        { name: "VS Code", url: "/assets/Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "WordPress", url: "/assets/WordPress_blue_logo.svg.png" },
        { name: "Google Ads", url: "/assets/google ads.png" },
        { name: "Google Search Console", url: "/assets/google-search-console-icon.webp" }
    ];

    return (
        <section
            ref={carouselRef}
            className="relative w-full pt-12 pb-2 md:py-16 bg-transparent overflow-hidden z-30"
        >
            <div
                ref={trackRef}
                className="flex gap-12 md:gap-16 items-center will-change-transform cursor-grab active:cursor-grabbing"
            >
                {/* Repeat logos twice for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-12 md:gap-16 items-center shrink-0">
                        {logos.map((logo, index) => (
                            <div
                                key={`${setIndex}-${index}`}
                                className="flex items-center justify-center shrink-0 w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-110"
                            >
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="w-full h-full object-contain pointer-events-none"
                                    loading="lazy"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoCarousel;
