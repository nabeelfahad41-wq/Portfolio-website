"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  ArrowRight,
  Star,
  ChevronDown,
  MapPin,
  Zap,
  Users,
  MessageCircle,
  Calendar,
  Globe,
  LineChart,
  Megaphone,
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function FreelanceSocialMediaMarketer() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.fromTo(
        ".hero-img-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.1 }
      );

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 44, opacity: 0 },
          {
            scrollTrigger: { trigger: section, start: "top 88%", toggleActions: "play none none none" },
            y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          }
        );
      });

      gsap.fromTo(
        ".service-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: ".services-grid", start: "top 90%", toggleActions: "play none none none" },
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".stat-card",
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: { trigger: ".stats-grid", start: "top 88%", toggleActions: "play none none none" },
          scale: 1, opacity: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.4)",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  /* ── SCHEMA MARKUPS ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adlyst.agency" },
      { "@type": "ListItem", position: 2, name: "Freelance Social Media Marketer", item: "https://adlyst.agency/freelance-social-media-marketer" },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nabeel",
    url: "https://adlyst.agency/freelance-social-media-marketer",
    jobTitle: "Freelance Social Media Marketer",
    description: "Freelance social media marketer with proven B2B growth. Scaled LinkedIn followers 2X in 6 months. Expert in social media strategy & ads for businesses in Bangalore & Kerala.",
    knowsAbout: ["Social Media Strategy", "LinkedIn Marketing", "Instagram Marketing", "Facebook Marketing", "Meta Ads", "LinkedIn Ads", "Lead Generation", "Content Marketing", "B2B Marketing"],
    areaServed: ["Bangalore", "Kerala"],
    sameAs: ["https://adlyst.agency/freelance-social-media-marketer"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a freelance social media marketer do?",
        acceptedAnswer: { "@type": "Answer", text: "A freelance social media marketer manages content, strategy, and advertising campaigns to grow your brand and generate leads through platforms like LinkedIn, Instagram, and Facebook." },
      },
      {
        "@type": "Question",
        name: "How can social media help my business grow?",
        acceptedAnswer: { "@type": "Answer", text: "Social media builds brand awareness, drives engagement, and generates qualified leads when executed with a strategic approach combining organic content and targeted paid campaigns." },
      },
      {
        "@type": "Question",
        name: "Do you handle social media ads?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, I specialize in freelancer social media ads, including Meta Ads and LinkedIn Ads for both B2C and B2B businesses." },
      },
      {
        "@type": "Question",
        name: "Which platforms do you specialize in?",
        acceptedAnswer: { "@type": "Answer", text: "I specialize in LinkedIn (B2B), Instagram, and Facebook. Each platform is approached with a tailored strategy based on your audience and business goals." },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Marketing",
    provider: { "@type": "Person", name: "Nabeel" },
    areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "City", name: "Kerala" }],
    description: "Strategic social media marketing including LinkedIn B2B growth, Meta Ads, Instagram & Facebook content management, and performance analysis.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Social Media Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Strategy & Planning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Creation & Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Ads (Meta & LinkedIn)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Analysis & Scaling" } },
      ],
    },
  };

  const accentColor = "#7c3aed";
  const accentLight = "#9d6cfa";
  const accentGlow = "rgba(124,58,237,0.35)";

  return (
    <main ref={containerRef} className="relative text-white" style={{ background: "#09090b" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764]/20 via-black to-black z-0" />
        <div
          className="absolute inset-0 opacity-[0.035] z-0"
          style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0" style={{ background: `${accentColor}12` }} />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: `${accentColor}0a` }} />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="hero-fade flex text-xs md:text-sm font-semibold tracking-wide text-gray-500 mb-8 font-mono uppercase">
              <ol className="flex items-center gap-3" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-white transition-colors" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="opacity-50">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" style={{ color: accentColor }}>
                  <span itemProp="name">Social Media Marketer</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <p className="hero-fade font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4" style={{ color: accentColor }}>
              Measurable Social Growth
            </p>

            <h1 className="hero-fade text-4xl md:text-5xl lg:text-[3.4rem] font-black mb-5 leading-[1.1] text-white">
              Freelance{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${accentColor}, ${accentLight})` }}
              >
                Social Media Marketer
              </span>{" "}
              Who Delivers Measurable Growth
            </h1>

            <p className="hero-fade text-base md:text-lg text-gray-300 font-medium mb-3 max-w-xl leading-relaxed">
              If you&apos;re looking for a freelance social media marketer who understands both brand building and performance, you&apos;re in the right place.
            </p>

            <p className="hero-fade text-sm text-gray-400 mb-6 max-w-xl leading-relaxed">
              I help businesses grow through strategic content planning, data-driven campaigns, and high-converting social media ads.
            </p>

            {/* Proven result callout */}
            <div
              className="hero-fade flex items-center gap-3 mb-8 p-4 rounded-2xl border max-w-xl"
              style={{ borderColor: `${accentColor}40`, background: `${accentColor}10` }}
            >
              <TrendingUp className="w-5 h-5 shrink-0" style={{ color: accentColor }} />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Proven Result:</strong> Doubled LinkedIn followers in just{" "}
                <strong className="text-white">6 months</strong> for a B2B company in Bangalore.
              </p>
            </div>

            {/* USPs */}
            <div className="hero-fade space-y-3 mb-10 max-w-xl">
              {[
                "Strategic content planning & Instagram organic growth",
                "Data-driven social media campaigns",
                "High-converting freelancer social media ads",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-fade flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#contact"
                id="smm-hero-cta"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 text-white font-black rounded-full text-base whitespace-nowrap hover:scale-105 transition-all flex items-center gap-2 group"
                style={{ background: accentColor, boxShadow: `0 10px 40px ${accentGlow}` }}
              >
                Let&apos;s Grow Your Social Presence <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 border border-white/20 hover:border-[#7c3aed]/50 text-white font-black rounded-full text-base whitespace-nowrap hover:scale-105 transition-all flex items-center gap-2 group"
              >
                See My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap">
                  5.0 Rated Specialist
                </span>
              </div>
            </div>

            {/* Location strip */}
            <div className="hero-fade flex flex-wrap items-center gap-x-5 gap-y-2 mt-10 py-5 border-y border-white/5">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" style={{ color: accentColor }} /> Serving:
              </span>
              {[
                { name: "Bangalore", label: "Freelance Social Media Marketer in Bangalore" },
                { name: "Kerala", label: "Freelance Social Media Marketer in Kerala" },
                { name: "Pan India", label: "Social Media Freelancer across India" },
              ].map((loc, i) => (
                <span key={i} className="text-[10px] sm:text-xs font-semibold text-gray-500 flex items-center gap-1" aria-label={loc.label}>
                  <MapPin className="w-3 h-3" style={{ color: accentColor }} /> {loc.name}
                </span>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="relative w-[312px] h-[422px] sm:w-[384px] sm:h-[520px] lg:w-[480px] lg:h-[650px] mx-auto">
              <div className="absolute top-0 left-0 w-[480px] h-[650px] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-top-left">
                <div
                  className="hero-img-card absolute w-[460px] h-[275px] rounded-xl overflow-hidden cursor-pointer border bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                  style={{ top: "0px", left: "20px", transform: "rotate(3deg)", transformOrigin: "center", borderColor: `${accentColor}40` }}
                >
                  <img
                    src="/assets/instagram marketing growth.png"
                    alt="Instagram organic growth proof showing significant increase in followers and engagement metrics through strategic content and community management"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider" style={{ background: accentColor }}>
                    Instagram Organic Growth
                  </div>
                </div>
                <div
                  className="hero-img-card absolute w-[460px] h-[275px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                  style={{ top: "150px", left: "-10px", transform: "rotate(-2deg)", transformOrigin: "center" }}
                >
                  <img
                    src="/assets/linkedin growth proof.png"
                    alt="LinkedIn follower growth proof showing 100% increase in followers within 6 months for a B2B company in Bangalore through strategic content and engagement"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-[#0077B5]/80">
                    LinkedIn Growth Proof
                  </div>
                </div>
                <div
                  className="hero-img-card absolute w-[340px] h-[160px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                  style={{ top: "330px", left: "80px", transform: "rotate(1.5deg)", transformOrigin: "center" }}
                >
                  {/* Stats overlay card */}
                  <div className="w-full h-full flex flex-col justify-center p-6" style={{ background: `linear-gradient(135deg, ${accentColor}30, #09090b)` }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Key Milestone</p>
                    <p className="text-4xl font-black text-white mb-1">2X</p>
                    <p className="text-sm text-gray-300">LinkedIn Followers in 6 Months</p>
                    <p className="text-xs text-gray-500 mt-1">B2B Company · Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / EEAT ── */}
      <section className="reveal-section py-24 px-6 bg-white text-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] z-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block" style={{ color: accentColor }}>
                About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] text-black mb-6">
                Social Media Freelancer with Real{" "}
                <span style={{ color: accentColor }}>B2B Growth Experience</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I&apos;m a social media freelancer with hands-on experience managing B2B marketing for a Bangalore-based company. Unlike generic marketers, I focus on audience intent, platform-specific strategy, and ROI-driven execution.
              </p>
              <p className="text-base text-gray-700 font-semibold mb-4">At Trasccon, I:</p>
              <div className="space-y-3 mb-8">
                {[
                  "Built and executed LinkedIn growth strategies",
                  "Increased followers by 100% in 6 months",
                  "Improved engagement through targeted content",
                  "Aligned social media with business goals",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accentColor }} />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Audience Intent", icon: <Target className="w-4 h-4" /> },
                  { label: "Platform-Specific Strategy", icon: <Megaphone className="w-4 h-4" /> },
                  { label: "ROI-Driven Execution", icon: <LineChart className="w-4 h-4" /> },
                ].map((tag, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl border text-center text-xs font-semibold text-gray-700" style={{ borderColor: `${accentColor}30`, background: `${accentColor}08` }}>
                    <span style={{ color: accentColor }}>{tag.icon}</span>
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn proof image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: `${accentColor}30` }}>
                <img
                  src="/assets/linkedin growth proof.png"
                  alt="LinkedIn analytics screenshot showing 100 percent follower growth over 6 months for a Bangalore-based B2B company through strategic social media management"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* floating badge */}
              <div
                className="absolute -bottom-5 -right-5 p-4 rounded-2xl border shadow-xl backdrop-blur-md"
                style={{ background: "#fff", borderColor: `${accentColor}30` }}
              >
                <p className="text-3xl font-black" style={{ color: accentColor }}>100%</p>
                <p className="text-xs text-gray-500 font-semibold">LinkedIn Growth</p>
                <p className="text-[10px] text-gray-400">in 6 months · Trasccon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="reveal-section py-24 px-6 bg-[#09090b] relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block" style={{ color: accentColor }}>
              What I Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Freelance Social Media Marketing Services
            </h2>
            <p className="text-xl text-gray-400">Full-spectrum social media management built for growth</p>
          </div>

          <div className="services-grid grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                num: "01",
                title: "Social Media Strategy & Planning",
                items: ["Competitor analysis", "Content calendar creation", "Platform-specific growth strategy"],
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                num: "02",
                title: "Content Creation & Management",
                items: ["LinkedIn, Instagram, Facebook content", "Instagram organic growth & Reels strategy", "Engagement optimization"],
              },
              {
                icon: <Megaphone className="w-6 h-6" />,
                num: "03",
                title: "Freelancer Social Media Ads",
                items: ["Meta Ads (Facebook & Instagram)", "LinkedIn Ads for B2B", "Lead generation campaigns", "Conversion tracking & optimization"],
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                num: "04",
                title: "Performance Analysis & Scaling",
                items: ["KPI tracking", "A/B testing", "Monthly reporting"],
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="service-card p-8 rounded-3xl border relative overflow-hidden group hover:border-opacity-60 transition-all"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${accentColor}60`; e.currentTarget.style.background = `${accentColor}08`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <span className="absolute top-4 right-6 text-6xl font-black opacity-[0.06] text-white group-hover:opacity-10 transition-opacity">{svc.num}</span>
                <div className="p-3 rounded-xl w-fit mb-5 transition-all" style={{ background: `${accentColor}15`, color: accentColor }}>
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{svc.title}</h3>
                <ul className="space-y-2">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY / RESULTS ── */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] z-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block" style={{ color: accentColor }}>
              Case Study
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              Real Growth: LinkedIn Scaling Strategy
            </h2>
            <p className="text-xl text-gray-500">Client: B2B Company (Bangalore) · Trasccon</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-6">
              {/* Challenge */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Challenge</p>
                <p className="text-gray-700 leading-relaxed">Low engagement and stagnant follower growth on LinkedIn — the company had the right product but no visible social presence to attract B2B leads.</p>
              </div>

              {/* Strategy */}
              <div className="p-6 rounded-2xl border shadow-sm" style={{ background: `${accentColor}06`, borderColor: `${accentColor}20` }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>Strategy Implemented</p>
                <div className="space-y-2">
                  {[
                    "Consistent value-driven content tailored to B2B audience",
                    "Industry-focused positioning and thought leadership posts",
                    "Engagement-focused posting schedule & format testing",
                    "Profile optimization for discoverability",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result stats */}
              <div className="stats-grid grid grid-cols-2 gap-4">
                {[
                  { num: "100%", label: "Increase in Followers", sub: "in just 6 months" },
                  { num: "2X", label: "LinkedIn Growth", sub: "vs baseline" },
                  { num: "↑", label: "Engagement & Visibility", sub: "Significant boost" },
                  { num: "B2B", label: "Industry Focus", sub: "Bangalore-based" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="stat-card p-5 rounded-2xl border text-center"
                    style={{ background: "#fff", borderColor: `${accentColor}20`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  >
                    <p className="text-3xl font-black mb-1" style={{ color: accentColor }}>{stat.num}</p>
                    <p className="text-sm font-bold text-gray-800">{stat.label}</p>
                    <p className="text-xs text-gray-400">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media growth proof image */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border shadow-xl sticky top-24" style={{ borderColor: `${accentColor}30` }}>
                <img
                  src="/assets/instagram marketing growth.png"
                  alt="Instagram marketing growth dashboard showing organic reach, follower increase and engagement rate for a B2C brand managed by freelance social media marketer Nabeel"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ME ── */}
      <section className="reveal-section py-24 px-6 bg-[#09090b] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block" style={{ color: accentColor }}>
              Why Choose Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Not Just Posting — I Build Growth Systems
            </h2>
            <p className="text-xl text-gray-400">Most freelancers post content. I build systems that grow brands.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, title: "Proven LinkedIn Growth", desc: "2X followers in 6 months — real B2B results, not theory." },
              { icon: <Users className="w-6 h-6" />, title: "Real B2B Experience", desc: "Hands-on experience managing social for a Bangalore-based industrial company." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Data-Driven Decisions", desc: "Every post, campaign and strategy is backed by data and KPIs." },
              { icon: <Zap className="w-6 h-6" />, title: "Combined Organic + Paid", desc: "Organic social content combined with targeted paid campaigns for maximum reach." },
              { icon: <MessageCircle className="w-6 h-6" />, title: "Clear Communication", desc: "Transparent reporting, regular updates and direct client communication always." },
              { icon: <Target className="w-6 h-6" />, title: "Platform-Specific Strategy", desc: "LinkedIn for B2B, Instagram & Facebook for B2C — tailored to each platform's algorithm." },
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border flex flex-col gap-4 group transition-all cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${accentColor}50`; e.currentTarget.style.background = `${accentColor}08`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div className="p-3 rounded-xl w-fit transition-all" style={{ background: `${accentColor}15`, color: accentColor }}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-white">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote block */}
          <div className="max-w-4xl mx-auto p-10 rounded-[2.5rem] border text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a1a, #09090b)", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 blur-[80px] pointer-events-none" style={{ background: `${accentColor}25` }} />
            <p className="text-2xl md:text-3xl font-black text-white relative z-10 mb-4">
              &ldquo;✔ Proven LinkedIn growth (2X in 6 months) ✔ Real B2B experience ✔ Data-driven decision making&rdquo;
            </p>
            <p className="text-gray-400 text-lg relative z-10">
              Combined <strong className="text-white">organic + paid strategy</strong> · Clear communication & reporting · ROI-driven execution
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCATION SECTION ── */}
      <section className="reveal-section py-20 px-6 bg-white text-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block" style={{ color: accentColor }}>
              Location Signal
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Freelance Social Media Marketer in{" "}
              <span style={{ color: accentColor }}>Bangalore & Kerala</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              I work with clients across India, with experience in Bangalore (B2B industry exposure) and Kerala (strong local market understanding).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                city: "Bangalore",
                label: "Freelance Social Media Marketer in Bangalore",
                desc: "B2B industry exposure. Deep understanding of the Bangalore tech and industrial market.",
                icon: <MapPin className="w-5 h-5" />,
              },
              {
                city: "Kerala",
                label: "Freelance Social Media Marketer in Kerala",
                desc: "Strong local market understanding. Malayalam-advantage content for local and regional brands.",
                icon: <Globe className="w-5 h-5" />,
              },
            ].map((loc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all"
                aria-label={loc.label}
                style={{ borderColor: `${accentColor}20`, background: `${accentColor}05` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl" style={{ background: `${accentColor}15`, color: accentColor }}>
                    {loc.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{loc.city}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto p-5 rounded-2xl border" style={{ borderColor: `${accentColor}20`, background: `${accentColor}05` }}>
            <p className="text-sm text-gray-600 text-center">
              This helps me <strong className="text-gray-900">understand diverse audience behavior</strong>, create{" "}
              <strong className="text-gray-900">localized and targeted campaigns</strong>, and deliver measurable ROI for clients across India.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="reveal-section py-24 px-6 bg-[#09090b] relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block" style={{ color: accentColor }}>
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What does a freelance social media marketer do?", a: "A freelance social media marketer manages content, strategy, and advertising campaigns to grow your brand and generate leads through platforms like LinkedIn, Instagram, and Facebook." },
              { q: "How can social media help my business grow?", a: "Social media builds brand awareness, drives engagement, and generates qualified leads when executed with a strategic approach combining value-driven content and targeted paid campaigns." },
              { q: "Do you handle social media ads?", a: "Yes, I specialize in freelancer social media ads, including Meta Ads (Facebook & Instagram) and LinkedIn Ads for both B2C and B2B businesses." },
              { q: "Which platforms do you specialize in?", a: "LinkedIn (B2B), Instagram, and Facebook. Each platform is approached with a tailored strategy based on your audience and business goals — not a copy-paste approach." },
            ].map((item, i) => (
              <SMMFAQItem key={i} q={item.q} a={item.a} accentColor={accentColor} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="contact" className="reveal-section py-32 px-6 relative overflow-hidden bg-[#09090b]">
        <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(135deg, ${accentColor}18, transparent 60%)` }} />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-bold tracking-[0.3em] uppercase text-sm mb-6 block" style={{ color: accentColor }}>
              Ready to grow?
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
              Let&apos;s Turn Your Social Presence Into a{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${accentColor}, ${accentLight})` }}>Growth Engine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              If you&apos;re looking for a freelance social media marketer who combines strategy, content,
              and ads for measurable business growth — let&apos;s connect.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Strategy-First", desc: "Every campaign starts with a clear growth plan.", color: accentColor },
                { label: "B2B & B2C Expertise", desc: "LinkedIn, Instagram & Facebook handled with precision.", color: accentLight },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border w-fit" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${badge.color}25` }}>
                    <TrendingUp className="w-6 h-6" style={{ color: badge.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-white uppercase text-xs tracking-widest">{badge.label}</p>
                    <p className="text-gray-400 text-sm">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-xl border p-8 md:p-12 rounded-[2rem] shadow-2xl" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
            <h3 className="text-2xl font-bold mb-8">Start Growing Today</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="smm-name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input id="smm-name" type="text" placeholder="Your Name" className="w-full rounded-xl px-5 py-4 focus:outline-none transition-colors text-white" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
                <div>
                  <label htmlFor="smm-email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input id="smm-email" type="email" placeholder="your@email.com" className="w-full rounded-xl px-5 py-4 focus:outline-none transition-colors text-white" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
              </div>
              <div>
                <label htmlFor="smm-service" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
                <select id="smm-service" className="w-full rounded-xl px-5 py-4 focus:outline-none transition-colors appearance-none text-white" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <option className="bg-black">Select a service</option>
                  <option className="bg-black">Social Media Strategy & Planning</option>
                  <option className="bg-black">Content Creation & Management</option>
                  <option className="bg-black">Social Media Ads (Meta & LinkedIn)</option>
                  <option className="bg-black">Performance Analysis & Scaling</option>
                  <option className="bg-black">Full Social Media Management</option>
                </select>
              </div>
              <div>
                <label htmlFor="smm-message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea id="smm-message" rows="4" placeholder="Tell me about your business and social media goals..." className="w-full rounded-xl px-5 py-4 focus:outline-none transition-colors text-white" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
              <button
                type="submit"
                id="smm-submit-btn"
                className="w-full py-5 text-white font-black rounded-xl text-xl uppercase tracking-tighter transition-all flex items-center justify-center gap-3 group"
                style={{ background: accentColor, boxShadow: `0 10px 30px ${accentGlow}` }}
              >
                Send Message <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SMMFAQItem({ q, a, accentColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl transition-all mb-3"
      style={{ background: open ? `${accentColor}0a` : "rgba(255,255,255,0.03)", border: `1px solid ${open ? `${accentColor}50` : "rgba(255,255,255,0.08)"}` }}
    >
      <button
        className="flex justify-between items-center p-6 cursor-pointer w-full text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3 className="text-lg font-semibold text-white pr-4">{q}</h3>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all"
          style={{ background: open ? accentColor : "rgba(255,255,255,0.1)", color: "#fff" }}
        >
          <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-400 leading-relaxed text-base">{a}</p>
        </div>
      )}
    </div>
  );
}
