"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const AccordionItem = ({ title, isOpen, onClick, children }) => {
    return (
        <div className="border-b border-gray-400/30">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-black group-hover:text-[#0C5920] transition-colors mb-1">
                        {title}
                    </span>
                </div>
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <span className={`absolute bg-[#0C5920] h-[2px] w-full transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    <span className={`absolute bg-[#0C5920] h-[2px] w-full rotate-90 transition-transform duration-300 ${isOpen ? "rotate-180 opacity-0" : ""}`} />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default function WhoWeAre() {
    const [openIndex, setOpenIndex] = useState(-1);

    // Refresh ScrollTrigger when layout shifts due to accordion opening/closing
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 600); // Wait for the transition (500ms) to finish before refreshing
        return () => clearTimeout(timer);
    }, [openIndex]);

    const accordionData = [
        {
            title: "Full Ownership, Real Accountability",
            desc: "You work directly with the person responsible for strategy and execution—ensuring clarity, faster decisions, and measurable results."
        },
        {
            title: "Faster Execution, Better Results",
            desc: "No delays, no layers. Ideas are tested, implemented, and optimized quickly to capture opportunities before competitors do."
        },
        {
            title: "Data-Driven Approach",
            desc: "Every action is guided by real user behavior and performance data—ensuring continuous improvement and smarter decisions."
        },
        {
            title: "Complete Growth System Thinking",
            desc: "From building your digital presence to scaling it, everything is aligned into one system focused on attracting, converting, and growing."
        },
        {
            title: "Results That Matter",
            desc: "The focus is always on what impacts your business—more leads, better conversions, and consistent growth—not just vanity metrics."
        }
    ];

    return (
        <section className="py-24 bg-[#E8E3D8] text-black font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* LEFT COLUMN - HEADLINE */}
                <div className="flex flex-col justify-start pt-10">
                    <span className="text-gray-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Here’s a gist of
                    </span>
                    <h2 className="w-fit text-center text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-gray-800 mb-8">
                        WHO<br />AM<br />I
                    </h2>
                    <div className="w-32 h-2 bg-[#0C5920] mt-2 self-center md:self-start"></div>
                </div>

                {/* RIGHT COLUMN - CONTENT */}
                <div className="flex flex-col gap-10">
                    {/* Intro Text */}
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                        <p className="font-bold text-xl text-black">
                            I’m a freelance digital marketer with a strong foundation in business and data-driven marketing.
                        </p>
                        <p>
                            I hold an MBA in Business Analytics and Marketing, where I developed a deep understanding of consumer behavior, market dynamics, and performance-focused strategy.
                        </p>
                        <p>
                            My journey into digital marketing started with hands-on experience in SEO, where I built a solid base in search visibility, keyword strategy, and competitive analysis. From there, I moved into a full-scale digital marketing role, taking complete ownership of strategy and execution—working directly with leadership to drive measurable growth.
                        </p>
                        <p>
                            Over time, I’ve worked across website development, SEO, performance marketing, and social media—focusing on how each element connects to real business outcomes. This experience has helped me move beyond isolated tactics and think in terms of complete growth systems.
                        </p>
                        <p>
                            Today, I work independently with businesses, applying everything I’ve learned to build, optimize, and scale their digital presence—always with a clear focus on results, efficiency, and long-term growth.
                        </p>
                    </div>

                    <div className="mt-6">
                        {/* Single Accordion for Why Partner With Us */}
                        <div className="w-full border-t border-gray-400/30">
                            <AccordionItem
                                title="Why Hire Me?"
                                isOpen={openIndex === 0}
                                onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
                            >
                                <ul className="space-y-6 pt-4 pb-8">
                                    {accordionData.map((item, index) => (
                                        <li key={index} className="flex flex-col gap-1">
                                            <span className="font-bold text-[#0C5920] text-xl">{item.title}</span>
                                            <span className="text-gray-700 text-lg">{item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionItem>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
