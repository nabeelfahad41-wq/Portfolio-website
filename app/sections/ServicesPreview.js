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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── DESKTOP ONLY ──────────────────────────────────────────────
      mm.add("(min-width: 768px)", () => {
        // Common initial state for desktop
        gsap.set(".services-preview-card", {
          autoAlpha: 0,
          scale: 0.86,
          xPercent: -50,
          yPercent: -50,
        });

        // Start Positions (distinct entry directions)
        gsap.set("#card-0", { x: "-60vw", y: "-40vh", autoAlpha: 0 });
        gsap.set("#card-1", { x: "60vw", y: "-40vh", autoAlpha: 0 });
        gsap.set("#card-2", { x: "-60vw", y: "40vh", autoAlpha: 0 });
        gsap.set("#card-3", { x: "60vw", y: "40vh", autoAlpha: 0 });

        // Final Grid Positions (2×2)
        const final = [
          { x: "-22vw", y: "-26vh" },
          { x: "22vw", y: "-26vh" },
          { x: "-22vw", y: "26vh" },
          { x: "22vw", y: "26vh" },
        ];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: wrapperRef.current,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        final.forEach((pos, i) => {
          tl.to(
            `#card-${i}`,
            {
              x: pos.x,
              y: pos.y,
              autoAlpha: 1,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
            },
            0
          );
        });

        tl.to(
          headingRef.current,
          { scale: 0.6, autoAlpha: 0, duration: 0.7, ease: "power3.out" },
          0
        );
      });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web Design & Development",
      desc: "High-converting websites and optimized funnels.",
      image: "/assets/website.jpg",
      href: "/freelance-web-developer",
    },
    {
      title: "SEO & Organic Growth",
      desc: "Global keyword targeting and sustainable rank growth.",
      image: "/assets/seo.png",
      href: "/seo-freelancer",
    },
    {
      title: "Performance Marketing",
      desc: "ROI-focused campaigns built to convert.",
      image: "/assets/performance marketing.png",
      href: "/freelance-performance-marketer",
    },
    {
      title: "Social Media Marketing",
      desc: "Scroll-stopping creative and growth-driven strategies.",
      image: "/assets/social media (1).jpg",
      href: "/freelance-social-media-marketer",
    },
  ];

  const cardColors = [
    "bg-neutral-900",
    "bg-neutral-800",
    "bg-neutral-700",
    "bg-neutral-600",
  ];

  return (
    <>
      {/* ─── MOBILE LAYOUT (static, CSS-only entrance animation) ─── */}
      <section className="md:hidden w-full px-4 py-14 flex flex-col gap-5">
        <h2
          className="text-4xl font-black uppercase text-white tracking-tighter text-center mb-6 leading-none"
          style={{ fontFeatureSettings: '"cv01"' }}
        >
          SERVICES
        </h2>

        {services.map((service, i) => (
          <Link
            key={i}
            href={service.href}
            className={`mobile-service-card w-full rounded-2xl ${cardColors[i]} border border-white/10 shadow-xl overflow-hidden flex flex-col`}
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {/* Card image */}
            <div className="relative w-full h-44 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card footer */}
            <div
              className={`w-full px-4 py-3 flex flex-row items-center justify-between ${cardColors[i]}`}
            >
              <div className="flex flex-col gap-0.5 max-w-[70%]">
                <h3 className="text-sm font-bold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-[11px] text-white/50 leading-tight">
                  {service.desc}
                </p>
              </div>
              <span className="text-[10px] font-semibold bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full shrink-0">
                View
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ─── DESKTOP LAYOUT (GSAP scroll animation, unchanged) ─── */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[200vh] w-full bg-transparent z-[50]"
      >
        <div
          ref={wrapperRef}
          className="flex relative top-0 h-screen w-full overflow-hidden justify-center items-center pointer-events-auto bg-transparent"
          style={{ minHeight: "700px" }}
        >
          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] font-black uppercase text-white tracking-tighter text-center m-0 pointer-events-none leading-[0.92]"
            style={{ fontSize: "clamp(4.5rem, 15vw, 16rem)" }}
          >
            SERVICES
          </h1>

          {/* Cards Wrapper */}
          <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                id={`card-${i}`}
                className={`services-preview-card absolute left-1/2 top-1/2 w-[420px] h-[280px] p-0 rounded-[30px] ${cardColors[i]} border border-white/10 shadow-2xl flex flex-col items-start justify-start overflow-hidden pointer-events-auto transition-transform duration-300 ease-out hover:scale-[1.02] cursor-pointer`}
              >
                <div className="relative w-full h-[70%] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div
                  className={`relative w-full h-[30%] px-5 flex flex-row items-center justify-between ${cardColors[i]}`}
                >
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-tight max-w-[65%]">
                    {service.title}
                  </h3>
                  <button className="text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-all shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    View
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Mobile card entrance animation (CSS only, no JS) ─── */}
      <style>{`
        @media (max-width: 767px) {
          .mobile-service-card {
            opacity: 0;
            transform: translateY(24px);
            animation: mobileCardIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes mobileCardIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
}
