"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function KeralaAnimations() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timer = setTimeout(() => {
            gsap.fromTo(
                ".hero-fade",
                { y: 20, opacity: 0.8 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
            );

            gsap.fromTo(
                ".hero-img-card",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }
            );

            gsap.utils.toArray(".reveal-section").forEach((section) => {
                gsap.fromTo(
                    section,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: section,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out"
                    }
                );
            });

            gsap.fromTo(
                ".service-card",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".services-grid",
                        start: "top 92%",
                        toggleActions: "play none none none"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return null;
}
