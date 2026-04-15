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
  ChevronDown,
  ArrowRight,
  Star,
  ShieldCheck,
  TrendingUp,
  Globe,
  Briefcase
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function CalicutWebDeveloper() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

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
        "name": "Calicut",
        "item": "https://www.adlyst.in/freelance-web-developer-calicut"
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Freelance Web Developer in Calicut",
    "description": "Freelance web developer in Calicut offering reliable website design and SEO-focused development tailored for local businesses.",
    "areaServed": "Kozhikode",
    "sameAs": [
      "https://www.adlyst.in/freelance-web-developer-calicut"
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
                <li className="text-[#43A047]">Calicut</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-white tracking-tight">
              Freelance Web Developer in Calicut <br className="hidden lg:block"/> <span className="text-[#43A047]">Helping Businesses Go Digital and Grow</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-medium mb-6 max-w-2xl leading-relaxed">
              Looking for a freelance web developer in Calicut who understands your business, communicates clearly, and builds a website that actually works?
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-4 max-w-2xl leading-relaxed font-light">
              I help local businesses in Calicut create simple, effective, and professional websites that attract customers and support long-term growth.
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl leading-relaxed font-light">
              Being based in Calicut, I offer the advantage of convenient meetings and direct discussions, along with clear communication in Malayalam. This ensures your requirements are fully understood and executed exactly as expected.
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
                  5.0 Trusted by Industry Leaders in Calicut
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
                  <img src="/assets/freelance-web-developer-calicut-local-business.png" alt="Professional business website developed by freelance web developer in Calicut" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>

                <div
                  className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                  style={{ top: '130px', left: '-10px', transform: 'rotate(-2deg)', transformOrigin: 'center' }}
                >
                  <img src="/assets/website-designer-calicut-growth.png" alt="Modern website design for connecting local businesses in Calicut with their audience" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>

                <div
                  className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                  style={{ top: '260px', left: '15px', transform: 'rotate(4deg)', transformOrigin: 'center' }}
                >
                  <img src="/assets/seo-ready-website-development-calicut.png" alt="SEO ready website development supporting business growth in Calicut" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>

                <div
                  className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-40 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                  style={{ top: '390px', left: '-5px', transform: 'rotate(-3deg)', transformOrigin: 'center' }}
                >
                  <img src="/assets/affordable-website-design-calicut.png" alt="Affordable and fast loading website design solutions in Calicut" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: Website Developer in Calicut for Local Businesses & Growing Brands --- */}
      <section className="reveal-section py-20 md:py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-3xl">
              <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4 block">Growing Brands</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] text-black">
                Website Developer in Calicut
              </h2>
            </div>
            <p className="text-gray-600 text-lg md:text-xl font-light max-w-md leading-relaxed">
              Many businesses in Calicut are moving online — but a website alone is not enough.
            </p>
          </div>

          <div className="mt-12 mb-16 p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              As a website developer in Calicut, I focus on building websites that form the foundation of a digital business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 services-grid mb-12">
            <ServiceCard
              icon={<Briefcase className="w-8 h-8 text-[#43A047]" />}
              title="Represent Business"
              desc="Clearly represent your service and offerings."
            />
            <ServiceCard
              icon={<ShieldCheck className="w-8 h-8 text-[#43A047]" />}
              title="Build Trust"
              desc="Build trust and authority with your online audience."
            />
            <ServiceCard
              icon={<Target className="w-8 h-8 text-[#43A047]" />}
              title="Convert Visitors"
              desc="Convert website visitors into business enquiries."
            />
          </div>

          <div className="text-center mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-3xl mx-auto w-full">
            <p className="text-lg text-gray-800 font-semibold italic">
              👉 Simple, effective, and result-driven.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: Practical Websites That Deliver Real Value --- */}
      <section className="reveal-section py-24 px-6 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Practical Websites That Deliver Real Value</h2>
            <p className="text-xl text-[#43A047] font-medium tracking-wide uppercase">Results Over Complexity</p>
          </div>
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Not every business needs a complex website. What matters is Clarity, Performance, and Usability.
              <br className="hidden md:block" />
              As one of the web designers in Calicut focused on business results, I create platforms driven by intent.
            </p>
          </div>

          <div className="space-y-12 relative max-w-4xl mx-auto">
            <ProcessStep
              number="01"
              title="Easy to use"
              desc="Seamless usability driving lower bounce rates and more interactions."
              align="right"
            />
            <ProcessStep
              number="02"
              title="Fast loading"
              desc="Optimized load times to keep audiences engaged."
              align="left"
            />
            <ProcessStep
              number="03"
              title="Designed for real customers"
              desc="Content mapped explicitly to local customer psychology."
              align="right"
            />
          </div>

          <div className="mt-20 p-8 rounded-2xl border border-[#43A047]/30 bg-[#43A047]/5 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl text-white font-medium">
              👉 No unnecessary complexity — only what works.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: Website Design and Development in Calicut --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black border-y border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">Services</h2>
            <p className="text-xl text-gray-500 font-medium">Website Design and Development in Calicut</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            <ServiceCard
              icon={<Palette className="w-8 h-8 text-[#43A047]" />}
              title="Custom Website Design"
              desc="Clean and professional designs tailored for your business."
            />
            <ServiceCard
              icon={<Code2 className="w-8 h-8 text-[#43A047]" />}
              title="Website Development"
              desc="Responsive, fast, and reliable websites."
            />
            <ServiceCard
              icon={<Search className="w-8 h-8 text-[#43A047]" />}
              title="SEO-Ready Websites"
              desc="Built with strong fundamentals to help your site rank on Google."
            />
            <ServiceCard
              icon={<Layout className="w-8 h-8 text-[#43A047]" />}
              title="WordPress Development"
              desc="Easy-to-manage websites for everyday business use."
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8 text-[#43A047]" />}
              title="Performance Optimization"
              desc="Fast loading websites for better user experience."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 5: Experience That Builds Confidence --- */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience That Builds Confidence</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              I’ve worked with businesses across different industries including industrial companies, service businesses, and digital agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <CaseStudyCardSimple
              title="Lead Generation"
              desc="Delivered websites focused on lead generation and growth."
              color="border-blue-500/30 bg-blue-500/5"
              accentColor="text-blue-500"
            />
            <CaseStudyCardSimple
              title="Critical Requirements"
              desc="Built high-trust platforms for businesses with critical requirements."
              color="border-purple-500/30 bg-purple-500/5"
              accentColor="text-purple-500"
            />
            <CaseStudyCardSimple
              title="Engagement Focus"
              desc="Created user-friendly websites for better engagement."
              color="border-emerald-500/30 bg-emerald-500/5"
              accentColor="text-emerald-500"
            />
            <CaseStudyCardSimple
              title="Modern Performance"
              desc="Developed modern websites with strong performance and design quality."
              color="border-yellow-500/30 bg-yellow-500/5"
              accentColor="text-yellow-500"
            />
          </div>

          <div className="text-center mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl mx-auto max-w-3xl w-full">
            <p className="text-lg text-gray-300 font-medium">
              👉 This experience helps me deliver practical and effective solutions for businesses in Calicut.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: Affordable and Value-Driven Website Solutions --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-[#43A047]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Affordable and Value-Driven Website Solutions</h2>
            <p className="text-xl text-gray-400 font-light">
              For many businesses in Calicut, the goal is simple:
            </p>
            <p className="text-[#43A047] font-semibold text-xl md:text-2xl mt-4">
              👉 Get a website that works without unnecessary cost or complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <WhyMeCard icon={<Star className="w-6 h-6" />} title="Cost-effective solutions" />
            <WhyMeCard icon={<Target className="w-6 h-6" />} title="Clear scope and delivery" />
            <WhyMeCard icon={<CheckCircle2 className="w-6 h-6" />} title="Long-term usability" />
          </div>

          <div className="text-center mt-6">
            <p className="text-white font-semibold text-xl">
              👉 You get maximum value for your investment.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: Supporting Businesses Across Calicut --- */}
      <section className="reveal-section py-32 px-6 relative overflow-hidden bg-[#43A047]">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-wide">Supporting Businesses Across Calicut</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
            From local shops to growing brands around SM Street and Nadakkavu, I work with businesses across Calicut to build websites that help them grow online.
          </p>
          <p className="text-lg md:text-xl font-medium tracking-wide bg-black/20 p-4 rounded-xl inline-block mt-4">
            👉 Local understanding + practical execution.
          </p>
        </div>
      </section>

      {/* --- SECTION 8: FAQ SECTION --- */}
      <section className="reveal-section py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>

          <div className="space-y-4">
            <FAQItem
              q="How much does website development cost in Calicut?"
              a="It depends on your business needs, but I focus on providing cost-effective solutions with real value."
            />
            <FAQItem
              q="Do I need a website for my local business?"
              a="Yes, a website helps build trust and attract more customers online."
            />
            <FAQItem
              q="Will my website be SEO-friendly?"
              a="Yes, all websites are built with SEO basics to help improve visibility."
            />
            <FAQItem
              q="Can I manage the website after development?"
              a="Yes, especially with WordPress, you can easily manage content."
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
