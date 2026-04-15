"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
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
  RefreshCw,
  TestTube2,
  Globe,
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function FreelancePerformanceMarketer() {
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
        ".case-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: ".cases-grid", start: "top 88%", toggleActions: "play none none none" },
          y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power3.out",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adlyst.agency" },
      { "@type": "ListItem", position: 2, name: "Freelance Performance Marketer", item: "https://adlyst.agency/freelance-performance-marketer" },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nabeel",
    url: "https://adlyst.agency/freelance-performance-marketer",
    jobTitle: "Freelance Performance Marketer",
    description: "Freelance performance marketer specializing in Meta Ads (Facebook & Instagram). Serving Bangalore & Kerala businesses with ROI-driven lead generation campaigns.",
    knowsAbout: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Lead Generation", "Performance Marketing", "A/B Testing", "WhatsApp Marketing", "Retargeting"],
    areaServed: ["Bangalore", "Kerala"],
    sameAs: ["https://adlyst.agency/freelance-performance-marketer"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a freelance performance marketer do?",
        acceptedAnswer: { "@type": "Answer", text: "A freelance performance marketer focuses on generating measurable results like leads, sales, and ROI through paid advertising platforms such as Meta Ads (Facebook & Instagram), using data-driven strategies and continuous optimization." },
      },
      {
        "@type": "Question",
        name: "Why should I hire a freelance performance marketer instead of an agency?",
        acceptedAnswer: { "@type": "Answer", text: "Freelancers offer direct communication, lower cost compared to agencies, personalized strategy, and faster execution and optimization. This makes them ideal for startups and growing businesses." },
      },
      {
        "@type": "Question",
        name: "Do you provide services in Bangalore and Kerala?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. I work as a freelance performance marketer in Bangalore and Kerala, helping local businesses generate leads through highly targeted Meta ad campaigns tailored to regional audiences." },
      },
      {
        "@type": "Question",
        name: "What industries do you have experience with?",
        acceptedAnswer: { "@type": "Answer", text: "I have successfully run Meta ad campaigns for interior design companies, wall decor brands, resorts and hospitality businesses, and local service-based businesses. Each campaign is optimized based on audience behavior and conversion goals." },
      },
      {
        "@type": "Question",
        name: "How much does it cost to run Meta ads?",
        acceptedAnswer: { "@type": "Answer", text: "Ad spend depends on your industry and goals. However, I focus on optimizing campaigns to achieve low cost per lead and high ROI, ensuring efficient use of your budget." },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Performance Marketing",
    provider: { "@type": "Person", name: "Nabeel" },
    areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "City", name: "Kerala" }],
    description: "ROI-driven Meta Ads (Facebook & Instagram) campaign management for lead generation, WhatsApp campaigns, retargeting, and A/B testing.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Performance Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Strategy & Execution" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation Campaigns" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp & Messaging Campaigns" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retargeting & Funnel Optimization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "A/B Testing & Scaling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Audit & Consultation" } },
      ],
    },
  };

  return (
    <main ref={containerRef} className="relative text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a56b0]/15 via-black to-black z-0" />
        <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#246ccc]/8 rounded-full blur-[120px] pointer-events-none z-0" />

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
                <li className="text-[#246ccc]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">Performance Marketer</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <p className="hero-fade text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              ROI-Driven Growth Specialist
            </p>

            <h1 className="hero-fade text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-5 leading-[1.1] text-white">
              Freelance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#246ccc] to-[#3a85e0]">
                Performance Marketer
              </span>
            </h1>

            <p className="hero-fade text-base md:text-lg text-gray-300 font-medium mb-4 max-w-xl leading-relaxed">
              Scale Your Business with a Freelance Performance Marketer Who Delivers Results
            </p>
            <p className="hero-fade text-sm md:text-base text-gray-400 mb-8 max-w-xl leading-relaxed">
              I specialize in data-driven performance marketing strategies that generate leads, reduce cost per
              acquisition, and maximize ROI through{" "}
              <strong className="text-white">Meta Ads (Facebook &amp; Instagram)</strong>. Whether you&apos;re a startup, local
              business, or scaling brand &mdash; I help you turn ad spend into predictable revenue.
            </p>

            {/* USPs */}
            <div className="hero-fade space-y-3 mb-10 max-w-xl">
              {[
                "ROI-focused campaigns (not vanity metrics)",
                "Deep understanding of buyer psychology + funnel optimization",
                "Hyper-local targeting expertise (Kerala & Bangalore markets)",
                "Continuous A/B testing & performance scaling",
                "Transparent reporting & communication",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#246ccc] shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-fade flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-8">
              <a
                href="#contact"
                id="perf-hero-cta"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#246ccc] hover:bg-[#3a85e0] text-white font-black rounded-full text-base whitespace-nowrap hover:scale-105 transition-all shadow-[0_10px_40px_rgba(36,108,204,0.35)] flex items-center gap-2 group"
              >
                Get a Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 border border-white/20 hover:border-[#246ccc]/50 text-white font-black rounded-full text-base whitespace-nowrap hover:scale-105 transition-all flex items-center gap-2 group"
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
                <Globe className="w-3.5 h-3.5 text-[#246ccc]" /> Serving:
              </span>
              {[
                { name: "Bangalore", label: "Freelance Performance Marketer in Bangalore" },
                { name: "Kerala", label: "Freelance Performance Marketer in Kerala" },
              ].map((loc, i) => (
                <span key={i} className="text-[10px] sm:text-xs font-semibold text-gray-500 flex items-center gap-1" aria-label={loc.label}>
                  <MapPin className="w-3 h-3 text-[#246ccc]" /> {loc.name}
                </span>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="relative w-[312px] h-[422px] sm:w-[384px] sm:h-[520px] lg:w-[480px] lg:h-[650px] mx-auto">
              <div className="absolute top-0 left-0 w-[480px] h-[650px] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-top-left">
                <div className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-[#246ccc]/30 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500 hover:z-50 hover:scale-[1.02]" style={{ top: "0px", left: "20px", transform: "rotate(3deg)", transformOrigin: "center" }}>
                  <img src="/assets/ab test screen short of interior design company.png" alt="A/B testing results for interior design Meta ad campaign showing winning creative variation with 95% confidence level" className="w-full h-full object-cover object-top" loading="eager" />
                </div>
                <div className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]" style={{ top: "130px", left: "-10px", transform: "rotate(-2deg)", transformOrigin: "center" }}>
                  <img src="/assets/14 cpr result of performance marketing of wall decor company.png" alt="Rs.14 cost per result Meta ad campaign result for wall decor brand with 180+ messaging conversations" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]" style={{ top: "260px", left: "15px", transform: "rotate(4deg)", transformOrigin: "center" }}>
                  <img src="/assets/result screen short of meta ad.png" alt="Meta ads campaign results showing optimized cost per lead and high conversion rate for local business" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL MARKET ADVANTAGE ── */}
      <section className="reveal-section py-20 md:py-28 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Local Market Advantage</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] text-black mb-6">
                Freelance Performance Marketer in{" "}
                <span className="text-[#246ccc]">Bangalore &amp; Kerala</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                As someone who understands both Kerala and Bangalore markets, I bring local audience behavior insights
                and a language advantage that remote agencies simply can&apos;t match.
              </p>
              <div className="space-y-4">
                {[
                  "Local audience behavior insights",
                  "Language advantage (especially Malayalam for Kerala campaigns)",
                  "Better ad personalization — higher conversion rates",
                  "Easier communication & strategy alignment",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#246ccc] shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { city: "Bangalore", desc: "Hyper-local Meta Ads targeting tech hubs, residential zones & local businesses across Bangalore.", emoji: "city", kw: "freelance performance marketer in Bangalore" },
                { city: "Kerala", desc: "Malayalam-advantage campaigns for resorts, interior brands & service businesses across Kerala.", emoji: "palm", kw: "freelance performance marketer in Kerala" },
                { city: "Meta Ads Specialist", desc: "Facebook & Instagram ads built on buyer psychology, funnel strategy and conversion intent.", emoji: "target", kw: "Meta ad specialist in Bangalore" },
                { city: "ROI First", desc: "I don't boost posts. I build performance systems aligned with your business revenue goals.", emoji: "chart", kw: "ROI-driven Meta ads India" },
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#246ccc]/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#246ccc]/10 flex items-center justify-center mb-3">
                    {i === 0 && <MapPin className="w-5 h-5 text-[#246ccc]" />}
                    {i === 1 && <Globe className="w-5 h-5 text-[#246ccc]" />}
                    {i === 2 && <Target className="w-5 h-5 text-[#246ccc]" />}
                    {i === 3 && <TrendingUp className="w-5 h-5 text-[#246ccc]" />}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{card.city}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVEN RESULTS ── */}
      <section className="reveal-section py-24 px-6 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Real Work. Real Results.</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Proven Results from Real Campaigns</h2>
            <p className="text-xl text-gray-400">Numbers from actual Meta ad campaigns I&apos;ve run</p>
          </div>

          <div className="cases-grid grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="case-card rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#246ccc]/40 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src="/assets/ab test screen short of interior design company.png" alt="A/B testing screenshot showing winning Meta ad creative for interior design company campaign with structured audience segmentation" className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#246ccc] text-white text-xs font-bold rounded-full uppercase tracking-wider">Interior Design</span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">A/B Testing &amp; Cost Optimization Campaign</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {["Structured A/B testing on creatives", "Winning ad variation at 95%+ confidence level", "Significantly reduced cost per lead"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#246ccc] shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Strategy Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Creative Testing", "Audience Segmentation", "Conversion Alignment"].map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-xs text-gray-400 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 – Featured */}
            <div className="case-card rounded-3xl overflow-hidden border border-[#246ccc]/30 bg-gradient-to-b from-[#246ccc]/10 to-[#0a0a0a] hover:border-[#246ccc]/60 transition-all flex flex-col relative z-10 scale-[1.03]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#246ccc] text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-b-xl z-20">
                Rs.14 Cost Per Lead
              </div>
              <div className="relative h-48 overflow-hidden mt-6">
                <img src="/assets/14 cpr result of performance marketing of wall decor company.png" alt="Meta ads dashboard showing Rs.14 cost per result for wall decor brand click-to-WhatsApp campaign with 180+ conversations" className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">Wall Decor Brand</span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">High-Volume Messaging Campaign</h3>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-2xl font-black text-[#246ccc]">180+</p>
                    <p className="text-xs text-gray-400">Conversations</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-2xl font-black text-[#246ccc]">Rs.14</p>
                    <p className="text-xs text-gray-400">Cost per Result</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-5 flex-grow">
                  {["Generated 180+ messaging conversations", "Achieved approx Rs.14 cost per result", "Daily budget optimized for consistent lead flow"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#246ccc] shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Strategy Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Click-to-WhatsApp", "High-Converting Creatives", "Retargeting"].map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-[#246ccc]/10 border border-[#246ccc]/20 text-xs text-[#3a85e0] rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="case-card rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#246ccc]/40 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src="/assets/performance marketing screen.png" alt="Multi-location Meta ads campaign performance dashboard for resort targeting Tamil Nadu, Bangalore and Mysore audiences" className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#246ccc] text-white text-xs font-bold rounded-full uppercase tracking-wider">Resort &amp; Hospitality</span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Multi-Location Targeting Campaign</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {["Campaigns across Tamil Nadu, Bangalore & Mysore", "Structured ad sets for geo-targeted performance", "Optimized budget allocation per region"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#246ccc] shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Strategy Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Location Segmentation", "Seasonal Targeting", "Creative Personalization"].map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-xs text-gray-400 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-br from-[#0f0f0f] to-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">How I Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Performance Marketing Approach</h2>
            <p className="text-xl text-gray-400">No random ads &mdash; only structured growth systems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", icon: <Target className="w-6 h-6" />, title: "Funnel-Based Strategy", desc: "Awareness to Consideration to Conversion. Structured campaigns with clear purpose at each funnel stage." },
              { num: "2", icon: <BarChart3 className="w-6 h-6" />, title: "Data-Driven Decisions", desc: "CTR, CPC, CPA tracking. Kill losers fast, scale winners hard. No guesswork." },
              { num: "3", icon: <TestTube2 className="w-6 h-6" />, title: "Creative Testing System", desc: "Multiple creatives per ad set. Continuous iteration based on real performance data." },
              { num: "4", icon: <RefreshCw className="w-6 h-6" />, title: "Conversion Optimization", desc: "Ad + landing page alignment. Messaging consistency across the entire conversion funnel." },
            ].map((step, i) => (
              <div key={i} className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-[#246ccc]/50 transition-all flex flex-col relative overflow-hidden group">
                <span className="absolute top-3 right-5 text-[#246ccc] text-6xl font-black opacity-10 group-hover:scale-110 transition-transform">{step.num}</span>
                <div className="p-3 rounded-xl bg-[#246ccc]/10 text-[#246ccc] w-fit mb-5 group-hover:bg-[#246ccc] group-hover:text-white transition-all">{step.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Marketing in Action</h3>
              <p className="text-gray-400 leading-relaxed mb-5">
                Every campaign I run is backed by structured data analysis and creative testing. The screenshots here show real Meta Ads manager results &mdash; not mock-ups.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Meta Ads Manager", "Facebook Business Suite", "WhatsApp Business", "A/B Testing Tools"].map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-300 rounded-full">{tool}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/assets/performance marketing.png" alt="Performance marketing Meta ads dashboard showing campaign metrics, cost optimization and conversion tracking for freelance marketing campaigns" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES & SERVICES ── */}
      <section className="reveal-section py-24 px-6 bg-white text-black relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Industries */}
            <div>
              <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Industries</span>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Industries I&apos;ve Worked With</h2>
              <div className="space-y-4">
                {[
                  { icon: <Target className="w-5 h-5" />, title: "Interior Design Companies", desc: "Lead generation & A/B testing for high-ticket interior projects." },
                  { icon: <TrendingUp className="w-5 h-5" />, title: "Wall Decor Brands", desc: "WhatsApp campaigns and messaging funnels for eCommerce growth." },
                  { icon: <Globe className="w-5 h-5" />, title: "Resorts & Hospitality", desc: "Multi-location geo-targeted campaigns for seasonal bookings." },
                  { icon: <Users className="w-5 h-5" />, title: "Local Service-Based Businesses", desc: "Hyper-local Meta ads for leads and walk-in conversions." },
                ].map((ind, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#246ccc]/30 hover:shadow-md transition-all">
                    <div className="p-2.5 rounded-xl bg-[#246ccc]/10 text-[#246ccc] shrink-0">{ind.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{ind.title}</h3>
                      <p className="text-gray-600 text-sm">{ind.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Services</span>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Services I Offer</h2>
              <div className="services-grid grid gap-4">
                {[
                  { icon: <Target className="w-5 h-5" />, title: "Meta Ads Strategy & Execution", desc: "Full-funnel campaign strategy and hands-on ad management." },
                  { icon: <Users className="w-5 h-5" />, title: "Lead Generation Campaigns", desc: "High-intent lead campaigns optimized for cost-per-lead." },
                  { icon: <MessageCircle className="w-5 h-5" />, title: "WhatsApp & Messaging Campaigns", desc: "Click-to-WhatsApp funnels that drive direct conversations." },
                  { icon: <RefreshCw className="w-5 h-5" />, title: "Retargeting & Funnel Optimization", desc: "Re-engage warm audiences and plug conversion leaks." },
                  { icon: <TestTube2 className="w-5 h-5" />, title: "A/B Testing & Scaling", desc: "Systematic creative testing to identify and scale winners." },
                  { icon: <BarChart3 className="w-5 h-5" />, title: "Performance Audit & Consultation", desc: "Deep audit of existing campaigns with actionable growth plan." },
                ].map((svc, i) => (
                  <div key={i} className="service-card flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-[#246ccc]/30 hover:shadow-md transition-all">
                    <div className="p-2.5 rounded-xl bg-[#246ccc]/10 text-[#246ccc] shrink-0">{svc.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{svc.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ME ── */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-[#246ccc]/10 to-transparent relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Me as Your Freelance Performance Marketer?</h2>
            <p className="text-xl text-gray-400">Business outcomes over vanity metrics</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Target className="w-6 h-6" />, title: "ROI-Focused Campaigns", desc: "Not vanity metrics — every rupee of ad spend is tracked and optimized for real business outcomes." },
              { icon: <Zap className="w-6 h-6" />, title: "Buyer Psychology Expertise", desc: "Deep understanding of how audiences think, decide, and convert — especially in Kerala & Bangalore markets." },
              { icon: <MapPin className="w-6 h-6" />, title: "Hyper-Local Targeting", desc: "Native market knowledge and language advantage means better audience alignment and lower CPL." },
              { icon: <TestTube2 className="w-6 h-6" />, title: "Systematic A/B Testing", desc: "Continuous creative testing with data-backed decisions — no gut feeling ad management." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Scalable Performance Systems", desc: "Built to scale. From Rs.500/day to Rs.5,000/day — the system grows with your business." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Transparent Reporting", desc: "Clear, honest reporting with real metrics. You always know exactly where your money is going." },
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 group hover:bg-white/10 hover:border-[#246ccc]/30 transition-all">
                <div className="p-3 rounded-xl bg-[#246ccc]/10 text-[#246ccc] w-fit group-hover:bg-[#246ccc] group-hover:text-white transition-all">{card.icon}</div>
                <h3 className="font-bold text-white">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-[#246ccc]/20 blur-[80px] pointer-events-none" />
            <p className="text-2xl md:text-3xl font-black text-white relative z-10 mb-4">
              &ldquo;I don&apos;t boost posts. I build performance systems.&rdquo;
            </p>
            <p className="text-gray-400 text-lg relative z-10">
              If you&apos;re searching for a <strong className="text-white">freelance performance marketer in Bangalore</strong>,{" "}
              <strong className="text-white">freelance performance marketer in Kerala</strong>, or a{" "}
              <strong className="text-white">Meta ad specialist in Bangalore</strong> &mdash; you&apos;re working with someone who
              understands your audience better than agencies sitting remotely.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="reveal-section py-24 px-6 bg-white text-black border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What does a freelance performance marketer do?", a: "A freelance performance marketer focuses on generating measurable results like leads, sales, and ROI through paid advertising platforms such as Meta Ads (Facebook & Instagram), using data-driven strategies and continuous optimization." },
              { q: "Why should I hire a freelance performance marketer instead of an agency?", a: "Freelancers offer direct communication, lower cost compared to agencies, personalized strategy (not templated processes), and faster execution and optimization. This makes them ideal for startups and growing businesses." },
              { q: "Do you provide services in Bangalore and Kerala?", a: "Yes. I work as a freelance performance marketer in Bangalore and Kerala, helping local businesses generate leads through highly targeted Meta ad campaigns tailored to regional audiences." },
              { q: "What industries do you have experience with?", a: "I have successfully run Meta ad campaigns for interior design companies, wall decor brands, resorts and hospitality businesses, and local service-based businesses. Each campaign is optimized based on audience behavior and conversion goals." },
              { q: "How much does it cost to run Meta ads?", a: "Ad spend depends on your industry and goals. However, I focus on optimizing campaigns to achieve low cost per lead and high ROI, ensuring efficient use of your budget." },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="contact" className="reveal-section py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#246ccc]/20 via-black to-black z-0" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#246ccc] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Ready to grow?</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Let&apos;s Build a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#246ccc] to-[#3a85e0]">Revenue Machine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              If you&apos;re looking for a freelance performance marketer who understands Meta Ads, buyer psychology, and scalable growth &mdash; let&apos;s connect.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Performance-First", desc: "Every campaign built for measurable ROI.", color: "text-[#246ccc]", bg: "bg-[#246ccc]/20" },
                { label: "Local Advantage", desc: "Bangalore & Kerala market expertise.", color: "text-[#3a85e0]", bg: "bg-[#3a85e0]/20" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                  <div className={`w-12 h-12 rounded-full ${badge.bg} flex items-center justify-center`}>
                    <TrendingUp className={`w-6 h-6 ${badge.color}`} />
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
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Start Your Campaign</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pm-name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input id="pm-name" type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors text-white" />
                </div>
                <div>
                  <label htmlFor="pm-email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input id="pm-email" type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="pm-service" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
                <select id="pm-service" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors appearance-none text-white">
                  <option className="bg-black">Select a service</option>
                  <option className="bg-black">Meta Ads Strategy &amp; Execution</option>
                  <option className="bg-black">Lead Generation Campaigns</option>
                  <option className="bg-black">WhatsApp &amp; Messaging Campaigns</option>
                  <option className="bg-black">Retargeting &amp; Funnel Optimization</option>
                  <option className="bg-black">A/B Testing &amp; Scaling</option>
                  <option className="bg-black">Performance Audit &amp; Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="pm-message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea id="pm-message" rows="4" placeholder="Tell me about your business goals and current ad spend..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors text-white" />
              </div>
              <button type="submit" id="pm-submit-btn" className="w-full py-5 bg-[#246ccc] hover:bg-[#3a85e0] text-white font-black rounded-xl text-xl uppercase tracking-tighter transition-all shadow-[0_10px_30px_rgba(36,108,204,0.3)] flex items-center justify-center gap-3 group">
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

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl bg-white transition-all mb-3 shadow-sm ${open ? "border-[#246ccc]/50" : "border-gray-200 hover:border-[#246ccc]/30"}`}>
      <button className="flex justify-between items-center p-6 cursor-pointer w-full text-left" onClick={() => setOpen(!open)} aria-expanded={open}>
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{q}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${open ? "bg-[#246ccc] text-white" : "bg-gray-100"}`}>
          <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-600 leading-relaxed text-base">{a}</p>
        </div>
      )}
    </div>
  );
}
