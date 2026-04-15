"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPreview() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Common initial state
      gsap.set(".services-preview-card", {
        autoAlpha: 0,
        scale: 0.86,
        xPercent: -50,
        yPercent: -50
      });

      // Desktop Timeline
      mm.add("(min-width: 768px)", () => {
        // Start Positions (distinct entry directions)
        gsap.set("#card-0", { x: "-60vw", y: "-40vh", autoAlpha: 0 });
        gsap.set("#card-1", { x: "60vw", y: "-40vh", autoAlpha: 0 });
        gsap.set("#card-2", { x: "-60vw", y: "40vh", autoAlpha: 0 });
        gsap.set("#card-3", { x: "60vw", y: "40vh", autoAlpha: 0 });

        // Final Grid Positions (2x2)
        const final = [
          { x: "-22vw", y: "-26vh" },
          { x: "22vw", y: "-26vh" },
          { x: "-22vw", y: "26vh" },
          { x: "22vw", y: "26vh" }
        ];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: wrapperRef.current,
            pinSpacing: true,
            anticipatePin: 1
          }
        });

        // All 6 cards animate simultaneously with identical duration and ease.
        // Using stagger:0 (same start time) ensures no card visually arrives
        // earlier than another regardless of its travel distance.
        final.forEach((pos, i) => {
          tl.to(`#card-${i}`, {
            x: pos.x,
            y: pos.y,
            autoAlpha: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out"
          }, 0); // All start at the same moment — uniform convergence
        });

        // Heading fades out in sync with the cards
        tl.to(headingRef.current, { scale: 0.6, autoAlpha: 0, duration: 0.7, ease: "power3.out" }, 0);
      });

      // Mobile Timeline
      mm.add("(max-width: 767px)", () => {
        // Start Positions (smaller radius for mobile)
        gsap.set(".services-preview-card", { x: "0vw", y: "40vh" }); // All fly from bottom

        // Final Grid Positions (2x2)
        const final = [
          { x: "-24vw", y: "-20vh" }, // Card 0
          { x: "24vw", y: "-20vh" },  // Card 1
          { x: "-24vw", y: "20vh" },   // Card 2
          { x: "24vw", y: "20vh" },    // Card 3
        ];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top", // Seamless hand-off from previous section
            end: "bottom bottom",
            scrub: 1,
            pin: wrapperRef.current,
          }
        });

        // Mobile: same uniform simultaneous entry as desktop
        final.forEach((pos, i) => {
          tl.to(`#card-${i}`, {
            x: pos.x,
            y: pos.y,
            autoAlpha: 1,
            scale: 1,
            duration: 0.7,       // Same duration as desktop
            ease: "power3.out"   // Same ease as desktop
          }, 0); // All start at the same moment
        });

        // Heading matches card ease for visual cohesion
        tl.to(headingRef.current, { scale: 0.6, duration: 0.7, ease: "power3.out" }, 0);
      });

    }, containerRef);

    // Refresh ScrollTrigger after component mounts to ensure correct timing for other sections
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web Design & Development",
      desc: "High-converting websites and optimized funnels.",
      image: "/assets/website.jpg",
      href: "/freelance-web-developer"
    },
    {
      title: "SEO & Organic Growth",
      desc: "Global keyword targeting and sustainable rank growth.",
      image: "/assets/seo.png",
      href: "/seo-freelancer"
    },
    {
      title: "Performance Marketing",
      desc: "ROI-focused campaigns built to convert.",
      image: "/assets/performance marketing.png",
      href: "/freelance-performance-marketer"
    },
    {
      title: "Social Media Marketing",
      desc: "Scroll-stopping creative and growth-driven strategies.",
      image: "/assets/social media (1).jpg",
      href: "/freelance-social-media-marketer"
    }
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-[120vh] md:h-[200vh] w-full bg-transparent md:bg-transparent z-[50] -mt-[15vh] md:mt-0"
    >
      <div
        ref={wrapperRef}
        className="flex relative top-0 h-screen w-full overflow-hidden justify-center items-center pointer-events-auto bg-transparent md:bg-transparent"
        style={{ minHeight: '700px' }}
      >
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] font-black uppercase text-white tracking-tighter text-center m-0 pointer-events-none leading-[0.92]"
          style={{ fontSize: "clamp(4.5rem, 15vw, 16rem)" }}
        >
          SERVICES
        </h1>

        {/* Cards Wrapper */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          {services.map((service, i) => {
            const cardColors = ["bg-neutral-900", "bg-neutral-800", "bg-neutral-700", "bg-neutral-600", "bg-neutral-700", "bg-neutral-800"];
            const CardWrapper = service.href ? Link : 'div';
            
            return (
              <CardWrapper
                key={i}
                {...(service.href ? { href: service.href } : {})}
                id={`card-${i}`}
                className={`services-preview-card absolute left-1/2 top-1/2 w-[46vw] md:w-[420px] h-[190px] md:h-[280px] p-0 rounded-[15px] md:rounded-[30px] ${cardColors[i]} border border-white/10 shadow-2xl flex flex-col items-start justify-start overflow-hidden pointer-events-auto transition-transform duration-300 ease-out hover:scale-[1.02] ${service.href ? 'cursor-pointer' : ''}`}
              >
                <div className="relative w-full h-[70%] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className={`relative w-full h-[30%] px-3 md:px-5 flex flex-row items-center justify-between ${cardColors[i]}`}>
                  <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white leading-tight max-w-[65%]">
                    {service.title}
                  </h3>
                  <button className="text-[10px] md:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full hover:bg-white/20 transition-all shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    View
                  </button>
                </div>
              </CardWrapper>
            );
          })}
        </div>
        {/* Fallback grid for cards if GSAP fails (hidden by default, shown via CSS if needed) */}
        <div className="services-preview-fallback-grid hidden absolute inset-0 w-full h-full z-0 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center pointer-events-none">
          {services.map((service, i) => {
            const cardColors = ["bg-neutral-900", "bg-neutral-800", "bg-neutral-700", "bg-neutral-600", "bg-neutral-700", "bg-neutral-800"];
            return (
              <div
                key={i}
                className={`w-[46vw] md:w-[420px] h-[190px] md:h-[280px] p-0 rounded-[15px] md:rounded-[30px] ${cardColors[i]} border border-white/10 shadow-2xl flex flex-col items-start justify-start overflow-hidden pointer-events-auto transition-transform duration-300 ease-out hover:scale-[1.02]`}
              >
                <div className="relative w-full h-[70%] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className={`relative w-full h-[30%] px-3 md:px-5 flex flex-row items-center justify-between ${cardColors[i]}`}>
                  <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white leading-tight max-w-[65%]">
                    {service.title}
                  </h3>
                  <button className="text-[10px] md:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full hover:bg-white/20 transition-all shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
