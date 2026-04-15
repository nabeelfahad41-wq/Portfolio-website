"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  Code2,
  Palette,
  Rocket,
  Target,
  Layout,
  Zap,
  Search,
  BarChart3,
  Lock,
  ChevronDown,
  ArrowRight,
  Star,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function WebDeveloperInBangalore() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in animations
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Image stack animation
      gsap.fromTo(".hero-img-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.1
        }
      );

      // Section Fade-ins
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.fromTo(section, 
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              toggleActions: "play none none none"
            },
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out"
          }
        );
      });

      // Service Cards Stagger
      gsap.fromTo(".service-card", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 90%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // SEO Structured Data (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.adlyst.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Freelance Web Developer",
        "item": "https://www.adlyst.in/freelance-web-developer"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bangalore",
        "item": "https://www.adlyst.in/web-developer-in-bangalore"
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Web Developer in Bangalore",
    "description": "Freelance website designer offering SEO-focused website development, modern design, and high-performance websites built for business growth in Bangalore.",
    "areaServed": "Bangalore",
    "sameAs": [
      "https://www.adlyst.in/web-developer-in-bangalore"
    ]
  };

  return (
    <main ref={containerRef} className="relative text-white overflow-hidden">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden flex items-center">
        {/* Background Green Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#43A047]/15 via-black to-black z-0" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Column: Content */}
          <div className="hero-fade text-left">
            {/* SEO Breadcrumbs */}
            <nav className="flex text-xs md:text-sm font-semibold tracking-wide text-gray-500 mb-8 z-20 relative font-mono uppercase">
              <ol className="flex items-center gap-3">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="opacity-50">/</li>
                <li><Link href="/freelance-web-developer" className="hover:text-white transition-colors">Freelance</Link></li>
                <li className="opacity-50">/</li>
                <li className="text-[#43A047]">Bangalore</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-white">
              Web Developer <br className="hidden lg:block"/> in <span className="text-[#43A047]">Bangalore.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl leading-relaxed">
              Looking for a reliable freelance web developer in Bangalore who can clearly understand your requirements and turn them into a high-performing website?
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl leading-relaxed font-light">
              With an MBA background and 3+ years of experience working in Bangalore’s business environment, I focus on clear communication, strategic thinking, and building websites that drive real business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mt-10">
              <Link
                href="/portfolio"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#43A047] hover:bg-[#66BB6A] text-white font-black rounded-full text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(67,160,71,0.35)] flex items-center gap-2 group"
              >
                See My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1 text-[#FFC107]">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap">
                  5.0 Trusted by Industry Leaders in Bangalore
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cascading Image Stack */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="relative w-[312px] h-[422px] sm:w-[384px] sm:h-[520px] lg:w-[480px] lg:h-[650px] mx-auto">
              <div className="absolute top-0 left-0 w-[480px] h-[650px] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-top-left">
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-[#43A047]/30 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '0px', left: '20px', transform: 'rotate(3deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/web-developer-in-bangalore-defence-industry-portfolio.png" alt="High-performance business website developed for Bangalore defence manufacturing company" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '130px', left: '-10px', transform: 'rotate(-2deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/bangalore-freelance-website-designer-agency-project.png" alt="Next.js custom web development for Bangalore marketing agencies by freelance website designer" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '260px', left: '15px', transform: 'rotate(4deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo-focused-website-development-bangalore-tourism.png" alt="SEO-ready travel website developed by Bangalore web developer for measurable growth" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-40 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '390px', left: '-5px', transform: 'rotate(-3deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/b2b-website-design-bangalore-industrial-growth.png" alt="B2B website design showcasing strategic industrial web development in Bangalore" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* --- SECTION 2: Freelance Web Developer in Bangalore for Modern Businesses --- */}
      <section className="reveal-section py-20 md:py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4 block">Modern Businesses</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] text-black">
                Freelance Web Developer <br className="hidden md:block" /> in Bangalore
              </h2>
            </div>
            <p className="text-gray-600 text-lg md:text-xl font-light max-w-sm leading-relaxed">
              Bangalore is a competitive market — your website needs to do more than just look good.
            </p>
          </div>

          <div className="mt-12 mb-16 p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              I help startups, agencies, and industrial businesses build websites that rank, convert, and reflect strong brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 services-grid mb-12">
            <ServiceCard
              icon={<Target className="w-8 h-8 text-[#43A047]" />}
              title="Convert Visitors"
              desc="Turn visitors into actionable leads."
            />
            <ServiceCard
              icon={<Search className="w-8 h-8 text-[#43A047]" />}
              title="Rank Higher"
              desc="Rank on search engines efficiently."
            />
            <ServiceCard
              icon={<Palette className="w-8 h-8 text-[#43A047]" />}
              title="Brand Identity"
              desc="Reflect strong brand identity."
            />
          </div>

          <div className="text-center mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-3xl mx-auto w-full">
            <p className="text-lg text-gray-800 font-semibold italic">
              Unlike typical website designers in Bangalore, I combine design, development, and SEO strategy into one streamlined solution.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: Not Just a Website Developer — A Business-Focused Partner --- */}
      <section className="reveal-section py-24 px-6 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Not Just a Website Developer</h2>
            <p className="text-xl text-[#43A047] font-medium tracking-wide uppercase">A Business-Focused Partner</p>
          </div>
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Most freelance web developers focus only on design or coding. 
              <br className="hidden md:block" />
              I approach every project with a business and revenue perspective.
            </p>
          </div>

          <div className="space-y-12 relative max-w-4xl mx-auto">
            <ProcessStep
              number="01"
              title="MBA Background"
              desc="Understanding of market, positioning, and growth"
              align="right"
            />
            <ProcessStep
              number="02"
              title="Experience in Bangalore"
              desc="Exposure to real business environments"
              align="left"
            />
            <ProcessStep
              number="03"
              title="Strong Communication"
              desc="Clear understanding of your requirements"
              align="right"
            />
          </div>

          <div className="mt-20 p-8 rounded-2xl border border-[#43A047]/30 bg-[#43A047]/5 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl text-white font-medium mb-3">
              👉 When you hire a freelancer, communication decides everything.
            </p>
            <p className="text-[#43A047] text-lg font-semibold tracking-wide uppercase">
              That’s where I stand apart.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: Website Design and Development Services in Bangalore --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black border-y border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">Services</h2>
            <p className="text-xl text-gray-500 font-medium">Website Design and Development Services in Bangalore</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            <ServiceCard
              icon={<Palette className="w-8 h-8 text-[#43A047]" />}
              title="Custom Website Design"
              desc="Unique, brand-focused designs that make your business stand out."
            />
            <ServiceCard
              icon={<Code2 className="w-8 h-8 text-[#43A047]" />}
              title="Website Development"
              desc="Fast, scalable, and secure websites using modern technologies."
            />
            <ServiceCard
              icon={<Search className="w-8 h-8 text-[#43A047]" />}
              title="SEO-Ready Websites"
              desc="Built with strong technical SEO foundations."
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8 text-[#43A047]" />}
              title="Next.js Development"
              desc="High-performance websites with better speed and ranking potential."
            />
            <ServiceCard
              icon={<Layout className="w-8 h-8 text-[#43A047]" />}
              title="WordPress Development"
              desc="Flexible and easy-to-manage websites for businesses."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 5: Proven Results Across Industries --- */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              I’ve worked with businesses across industries including manufacturing, B2B, hospitality, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <CaseStudyCardSimple
              title="SEO-Driven Growth"
              desc="Delivered SEO-driven growth resulting in thousands of organic visitors."
              color="border-blue-500/30 bg-blue-500/5"
              accentColor="text-blue-500"
            />
            <CaseStudyCardSimple
              title="Critical Industries"
              desc="Built high-trust websites for critical industries requiring confidentiality."
              color="border-purple-500/30 bg-purple-500/5"
              accentColor="text-purple-500"
            />
            <CaseStudyCardSimple
              title="Industrial Companies"
              desc="Designed conversion-focused B2B platforms for industrial companies."
              color="border-emerald-500/30 bg-emerald-500/5"
              accentColor="text-emerald-500"
            />
            <CaseStudyCardSimple
              title="Agencies"
              desc="Developed premium, high-performance websites using Next.js for agencies."
              color="border-yellow-500/30 bg-yellow-500/5"
              accentColor="text-yellow-500"
            />
          </div>

          <div className="text-center mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl mx-auto max-w-3xl w-full">
            <p className="text-lg text-gray-300 font-medium">
              👉 This cross-industry experience allows me to adapt quickly to any business model in Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: Modern Design That Builds Brand Identity --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-[#43A047]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Modern Design That Builds Brand Identity</h2>
            <p className="text-xl text-gray-400 font-light">
              In a city like Bangalore, design is not optional — it’s a competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <WhyMeCard icon={<Layout className="w-6 h-6" />} title="Clean, modern UI/UX" />
            <WhyMeCard icon={<Target className="w-6 h-6" />} title="Strong brand recall" />
            <WhyMeCard icon={<Rocket className="w-6 h-6" />} title="Futuristic scrolling animations" />
            <WhyMeCard icon={<Zap className="w-6 h-6" />} title="High-end visual experience" />
          </div>

          <div className="text-center mt-6">
            <p className="text-[#43A047] font-semibold text-xl md:text-2xl mt-4">
              👉 Every website I build is designed to feel like a signature brand asset, not a template.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: Serving Businesses Across Bangalore --- */}
      <section className="reveal-section py-32 px-6 relative overflow-hidden bg-[#43A047]">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-wide">Serving Businesses Across Bangalore</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
            Whether you’re a startup, agency, or industrial company, I provide website design and development services across Bangalore.
          </p>
          <p className="text-lg md:text-xl font-medium tracking-wide bg-black/20 p-4 rounded-xl inline-block">
            From building your brand presence to generating leads, the focus is always on measurable growth.
          </p>
        </div>
      </section>

      {/* --- SECTION 8: FAQ SECTION --- */}
      <section className="reveal-section py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>

          <div className="space-y-4">
            <FAQItem
              q="How much does it cost to hire a web developer in Bangalore?"
              a="Costs vary depending on complexity, features, and business requirements."
            />
            <FAQItem
              q="Why hire a freelance web developer in Bangalore?"
              a="Freelancers provide personalized attention, faster execution, and cost-effective solutions compared to agencies."
            />
            <FAQItem
              q="Do you provide SEO with website development?"
              a="Yes, every website is built with SEO best practices to improve visibility."
            />
            <FAQItem
              q="Which platform is better: WordPress or Next.js?"
              a="It depends on your goals — WordPress is flexible, while Next.js offers high performance and scalability."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 9: FINAL CTA --- */}
      <section className="reveal-section py-32 px-6 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#43A047]/20 via-black to-black z-0" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Ready to grow?</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Let’s Build a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">Revenue machine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              Don't settle for a website that just looks pretty. If you're looking for a freelance web developer who understands business, design, and SEO — let’s connect.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#43A047]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</p>
                  <p className="text-gray-400 text-sm">Every line of code is optimized for revenue.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Enterprise Architecture</p>
                  <p className="text-gray-400 text-sm">Scalable solutions built with Next.js & React.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Start Your Project</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#43A047]/50 transition-colors text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#43A047]/50 transition-colors text-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#43A047]/50 transition-colors appearance-none text-white">
                  <option className="bg-black">Select a service</option>
                  <option className="bg-black">Website Development</option>
                  <option className="bg-black">UI/UX Design</option>
                  <option className="bg-black">SEO Optimization</option>
                  <option className="bg-black">Performance Audit</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows="4" placeholder="Tell me about your business goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#43A047]/50 transition-colors text-white"></textarea>
              </div>
              <button className="w-full py-5 bg-[#43A047] hover:bg-[#66BB6A] text-white font-black rounded-xl text-xl uppercase tracking-tighter transition-all shadow-[0_10px_30px_rgba(67,160,71,0.3)] flex items-center justify-center gap-3 group">
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

/* --- Reusable Components --- */

function ProcessStep({ number, title, desc, align }) {
  const isLeft = align === "left";
  return (
    <div className={`flex items-center w-full mb-12 last:mb-0 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="hidden md:block w-1/2" />
      <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#43A047] border-4 border-black z-10 flex items-center justify-center shadow-[0_0_20px_rgba(67,160,71,0.5)]" />
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 pt-2 md:pt-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
        <span className="text-xl font-mono text-[#43A047] font-bold mb-2 block tracking-widest">{number}</span>
        <h3 className="text-2xl md:text-3xl font-black uppercase mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function WhyMeCard({ icon, title }) {
  return (
    <div className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-5 group hover:bg-white/10 hover:border-[#43A047]/30 transition-all cursor-default">
      <div className="p-4 rounded-2xl bg-[#43A047]/10 text-[#43A047] group-hover:scale-110 group-hover:bg-[#43A047] group-hover:text-black transition-all shrink-0">
        {icon}
      </div>
      <p className="font-semibold text-lg text-white leading-snug">{title}</p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group border border-white/10 rounded-2xl bg-white/[0.03] hover:border-[#43A047]/30 transition-all mb-3">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
        <h3 className="text-lg font-semibold text-white pr-4">{q}</h3>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-open:bg-[#43A047] group-open:text-black shrink-0 transition-all">
          <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="px-6 pb-6">
        <p className="text-gray-400 leading-relaxed text-base">{a}</p>
      </div>
    </details>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="service-card p-10 rounded-[2.5rem] bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all group scale-100 hover:scale-[1.02]">
      <div className="mb-8 p-5 inline-block rounded-2xl bg-gray-50 group-hover:bg-[#43A047]/10 group-hover:scale-110 transition-all text-[#43A047]">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase tracking-tighter text-black">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {desc}
      </p>
    </div>
  );
}

function CaseStudyCardSimple({ title, desc, color, accentColor }) {
  return (
    <div className={`p-8 rounded-3xl border ${color} backdrop-blur-sm flex flex-col h-full group hover:bg-white/[0.03] transition-all`}>
      <h3 className="text-2xl md:text-3xl font-black mb-4 text-white flex items-center gap-3">
        <CheckCircle2 className={`w-8 h-8 shrink-0 ${accentColor}`} />
        {title}
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-[#43A047]/40 pl-4 ml-11">{desc}</p>
    </div>
  );
}
