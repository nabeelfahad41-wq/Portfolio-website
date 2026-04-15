"use client";
import React, { useLayoutEffect, useRef } from 'react';
import { MessageCircle, Instagram, Linkedin, AtSign } from 'lucide-react';
import { League_Gothic } from "next/font/google";
import gsap from 'gsap';

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400"
});

const HeroSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);
  const desktopSocialRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from([".hero-heading-line", subTextRef.current, imageRef.current, ctaRef.current, desktopSocialRef.current], { 
        y: 60,
        opacity: 0, 
        duration: 1.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const SocialIcons = ({ className }) => (
    <div className={`flex items-center gap-5 text-[#ffffff] ${className}`}>
      <div className="w-7 h-7 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity">
        <MessageCircle className="w-full h-full" strokeWidth={1.5} />
      </div>
      <div className="w-7 h-7 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity">
        <Instagram className="w-full h-full" strokeWidth={1.5} />
      </div>
      <div className="w-7 h-7 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity">
        <Linkedin className="w-full h-full" strokeWidth={1.5} />
      </div>
      <div className="w-7 h-7 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity">
        <AtSign className="w-full h-full" strokeWidth={1.5} />
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="sticky top-0 h-screen max-h-screen bg-[linear-gradient(90deg,#000000,#737373)] flex flex-col justify-center overflow-hidden font-sans z-0">

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-8 mt-[40px]">

        {/* Desktop Social Icons (Top Right) */}
        <div ref={desktopSocialRef} className="hidden md:flex absolute top-0 right-8 z-50">
          <SocialIcons className="gap-6" />
        </div>

        <div className="relative w-full flex flex-col justify-center items-center overflow-visible h-[450px] sm:h-[500px] md:h-[450px] lg:h-[550px]">

          {/* Background Text */}
          <div
            ref={headingRef}
            className={`absolute z-0 flex flex-col items-center justify-center font-normal uppercase text-[#d3d0cb] w-full text-center h-full gap-2 md:gap-8 ${leagueGothic.className}`}
          >
            <div className="md:hidden flex flex-col items-center gap-1">
              <div className="hero-heading-line text-[17vw] leading-[0.8] whitespace-nowrap">FREELANCE DIGITAL</div>
              <div className="hero-heading-line text-[17vw] leading-[0.8] whitespace-nowrap">MARKETING IN</div>
              <div className="hero-heading-line text-[17vw] leading-[0.8] mt-10 whitespace-nowrap">BANGALORE &</div>
              <div className="hero-heading-line text-[17vw] leading-[0.8] whitespace-nowrap">KERALA</div>
            </div>

            <div className="hidden md:flex flex-col items-center gap-4 md:gap-8">
              <div className="hero-heading-line text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] whitespace-nowrap">
                FREELANCE DIGITAL MARKETING
              </div>
              <div className="hero-heading-line text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] whitespace-nowrap">
                IN BANGALORE & KERALA
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="absolute left-1/2 -translate-x-1/2 md:left-[2%] md:translate-x-0 lg:left-[5%] bottom-[-10%] md:bottom-[-10%] z-10 h-[145%] sm:h-[150%] md:h-[120%] lg:h-[135%] flex items-end justify-center md:justify-start pointer-events-none">
            <img
              src="/assets/Gemini_Generated_Image_jg9o8ojg9o8ojg9o (1).png"
              alt="Nabeel - Freelance Digital Marketing Strategist in Bangalore and Kerala"
              className="h-full w-auto object-contain object-bottom origin-bottom scale-[1.65] md:scale-100"
            />
          </div>

          <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center font-normal uppercase text-transparent w-full text-center h-full gap-2 md:gap-8 pointer-events-none ${leagueGothic.className}`}
          >
            <div className="md:hidden flex flex-col items-center gap-1">
              <div className="hero-heading-line text-[17vw] leading-[0.8] whitespace-nowrap" style={{ WebkitTextStroke: '1px #d3d0cb' }}>FREELANCE DIGITAL</div>
              <div className="hero-heading-line text-[17vw] leading-[0.8] whitespace-nowrap" style={{ WebkitTextStroke: '1px #d3d0cb' }}>MARKETING IN</div>
              <div className="hero-heading-line text-[17vw] leading-[0.8] mt-10 whitespace-nowrap" style={{ WebkitTextStroke: '1px #d3d0cb' }}>BANGALORE &</div>
              <div className="hero-heading-line text-[17vw] leading-[0.8] whitespace-nowrap" style={{ WebkitTextStroke: '1px #d3d0cb' }}>KERALA</div>
            </div>

            <div className="hidden md:flex flex-col items-center gap-4 md:gap-8">
              <div
                className="hero-heading-line text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] whitespace-nowrap"
                style={{ WebkitTextStroke: '2px #d3d0cb' }}
              >
                FREELANCE DIGITAL MARKETING
              </div>
              <div
                className="hero-heading-line text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] whitespace-nowrap"
                style={{ WebkitTextStroke: '2px #d3d0cb' }}
              >
                IN BANGALORE & KERALA
              </div>
            </div>
          </div>
        </div>

        {/* Paragraph & CTA */}
        <div className="relative z-30 w-full flex flex-col items-center px-4 md:px-[5%] lg:px-[10%] mt-8 md:-mt-8 lg:-mt-14">
          <div className="flex flex-col items-center md:items-end w-full max-w-4xl">

            <p ref={subTextRef} className="text-[#d3d0cb] text-[0.95rem] md:text-lg lg:text-xl lg:text-[1.35rem] leading-relaxed xl:leading-loose text-center font-light w-full">
              I’m Nabeel — a freelance digital marketing strategist focused on execution that actually drives results. 
              I build and optimize systems that turn your online presence into consistent leads and revenue.
            </p>

            {/* CTA Button */}
            <div className="w-full flex justify-center md:justify-end items-center mt-6 md:mt-4">
              <a 
                href="tel:+918111830647" 
                ref={ctaRef} 
                className="cssbuttons-io-button -translate-y-8 md:-translate-y-16"
              >
                Let's talk
                <div className="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* From Uiverse.io by adamgiebl */ 
        .cssbuttons-io-button {
          background: #16a34a; /* Tailwind green-600 */
          color: white;
          font-family: inherit;
          padding: 0.35em;
          padding-left: 1.2em;
          font-size: 17px;
          font-weight: 500;
          border-radius: 0.9em;
          border: none;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          box-shadow: inset 0 0 1.6em -0.6em #15803d; /* Tailwind green-700 */
          overflow: hidden;
          position: relative;
          height: 2.8em;
          padding-right: 3.3em;
          cursor: pointer;
          text-decoration: none;
        }

        .cssbuttons-io-button .icon {
          background: white;
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 0.7em;
          box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(22, 163, 74, 0.4);
          right: 0.3em;
          transition: all 0.3s;
        }

        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s;
          color: #16a34a;
        }

        .cssbuttons-io-button:hover .icon svg {
          transform: translateX(0.1em);
        }

        .cssbuttons-io-button:active .icon {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;