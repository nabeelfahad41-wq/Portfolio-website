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
  Users,
  ChevronDown,
  ArrowRight,
  Star,
  ShieldCheck,
  TrendingUp,
  Globe
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function FreelanceWebDeveloper() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in animations (no ScrollTrigger needed for hero)
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Image stack animation — fast fade in so cards visible at first paint
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

      // Section Fade-ins — use "play none none none" to avoid scroll-lock on reverse
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

      // Service Cards Stagger — scroll into view
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
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Freelance Web Developer",
    "url": "https://www.adlyst.in/freelance-web-developer",
    "jobTitle": "Freelance Website Designer & Developer",
    "description": "Expert freelance web developer & designer offering custom website development, Next.js optimization, and UI/UX solutions.",
    "sameAs": [
      "https://www.adlyst.in/freelance-web-developer"
    ]
  };

  return (
    <main ref={containerRef} className="relative text-white">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />


      {/* --- SECTION 1: PREMIUM HERO SECTION (Reference Layout) --- */}
      <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden flex items-center">
        {/* Background Green Glow (Matches CTA) */}
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
                <li className="text-[#43A047]">Freelance Web Developer</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-white">
              Freelance Web Developer Who Builds Websites That Drive{" "}
              <span className="text-[#43A047]">Business Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl leading-relaxed">
              I design and develop high-performance websites focused on conversions, SEO, and long-term brand value.
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl leading-relaxed font-light">
              Most websites look fine and do nothing. Yours shouldn't be one of them. I'm a freelance web developer and designer who brings something rare to every project — business thinking baked into every pixel. With an MBA background and hands-on experience across industries as different as defence manufacturing and eco-tourism, I design and develop websites that don't just represent your brand — they work for it. Whether you need freelance website development from scratch, a performance-driven redesign, or a Next.js build with enterprise-level architecture, every site I deliver is engineered to rank on Google, load fast, and convert visitors into paying customers.
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
                  5.0 Trusted by Industry Leaders
                </span>
              </div>
            </div>

            {/* Quick Location Links - Positioned under CTA button row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 py-6 border-y border-white/5 hero-fade">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#43A047]" /> Serving:
              </span>
              {[
                { name: "Bangalore", path: "/web-developer-in-bangalore" },
                { name: "Kerala", path: "/freelance-website-designer-in-kerala" },
                { name: "Kochi", path: "/freelance-web-developer-kochi" },
                { name: "Calicut", path: "/freelance-web-developer-calicut" }
              ].map((loc, i) => (
                <Link 
                  key={i} 
                  href={loc.path}
                  className="text-[10px] sm:text-xs font-semibold text-gray-500 hover:text-[#43A047] transition-all flex items-center gap-1 group whitespace-nowrap"
                >
                  {loc.name}
                  <ArrowRight className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform opacity-70 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Vertical Cascading Image Stack */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="relative w-[312px] h-[422px] sm:w-[384px] sm:h-[520px] lg:w-[480px] lg:h-[650px] mx-auto">
              <div className="absolute top-0 left-0 w-[480px] h-[650px] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-top-left">

                {/* Card 1 — Trasccon (Top, Back) */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-[#43A047]/30 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '0px', left: '20px', transform: 'rotate(3deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/freelance-web-design-defence-manufacturing-trasccon.png" alt="High-trust defence manufacturing website developed by freelance web developer for Trasccon" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              {/* Card 2 — Leadworkz */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '130px', left: '-10px', transform: 'rotate(-2deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/custom-website-development-digital-marketing-agency-leadworkz.png" alt="Premium custom website developed in Next.js for Leadworkz digital marketing agency" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              {/* Card 3 — Rain Country */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '260px', left: '15px', transform: 'rotate(4deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/hospitality-website-design-resorts-seo.png" alt="SEO-focused hospitality website design driving organic bookings for Rain Country resorts" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              {/* Card 4 — Navodaya (Bottom, Front) */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-40 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '390px', left: '-5px', transform: 'rotate(-3deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/b2b-industrial-website-developer-navodaya.png" alt="Conversion-focused B2B industrial website developed for Navodaya Power" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* --- SECTION 2: SERVICES (Light Neutral Theme) --- */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        {/* Decorative Grid for Light Theme */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4 block">Capabilities</span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[1.1] text-black">
                Strategic <br className="hidden md:block" /> Development
              </h2>
            </div>
            <p className="text-gray-600 text-lg md:text-xl font-light max-w-sm leading-relaxed">
              As a freelance web developer, I bridge the gap between commercial thinking and visual excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid">
            <ServiceCard
              icon={<Palette className="w-8 h-8 text-[#43A047]" />}
              title="Website Design"
              desc="Modern, clean, and brand-focused UI/UX that creates a strong first impression."
            />
            <ServiceCard
              icon={<Code2 className="w-8 h-8 text-[#43A047]" />}
              title="Website Development"
              desc="Fast, scalable, and secure websites using WordPress and Next.js."
            />
            <ServiceCard
              icon={<Search className="w-8 h-8 text-[#43A047]" />}
              title="SEO-Focused Development"
              desc="Every website is built with SEO fundamentals to help you rank on Google."
            />
            <ServiceCard
              icon={<Target className="w-8 h-8 text-[#43A047]" />}
              title="Conversion Optimization"
              desc="Designed to turn visitors into leads and customers."
            />
            <ServiceCard
              icon={<Layout className="w-8 h-8 text-[#43A047]" />}
              title="Custom Web Solutions"
              desc="Tailored solutions based on your business model and industry."
            />
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#43A047]/10 to-emerald-100 border border-[#43A047]/20 flex items-center justify-center">
              <p className="text-lg font-bold italic text-center text-gray-800">
                "I sit at the intersection of design, development, and business strategy."
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              There's a common gap in the web development world: designers who can't think commercially, and developers who can't think visually. I sit at the intersection of both — and I bring a third dimension most freelancers simply don't have.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CASE STUDIES --- */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-gray-400">Real Results from Real Businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Trasccon */}
            <CaseStudyCard
              name="Trasccon"
              industry="Defence Manufacturing Industry"
              url="https://trasccon.com/"
              results={[
                "Built a high-trust, professional website for a critical industry",
                "Ranked 35+ keywords on Google",
                "Generated 7000+ new organic visitors",
                "Delivered SEO + development as a combined strategy"
              ]}
              color="border-blue-500/30 bg-blue-500/5"
              accentColor="text-orange-500"
              desc="This proves my ability to handle high-confidentiality and performance-driven projects."
            />

            {/* Navodaya Power */}
            <CaseStudyCard
              name="Navodaya Power"
              industry="B2B Industrial Company"
              url="https://navodayapower.com/"
              results={[
                "Designed a structured B2B website for better product clarity",
                "Improved user journey for industrial buyers",
                "Built credibility through clean and technical presentation"
              ]}
              color="border-purple-500/30 bg-purple-500/5"
              accentColor="text-purple-500"
            />

            {/* Rain Country Resorts */}
            <CaseStudyCard
              name="Rain Country Resorts"
              industry="Hospitality Industry"
              url="https://raincountryresorts.com/"
              results={[
                "Designed a visually engaging website for tourism",
                "Created an experience-driven layout to attract bookings",
                "Showcased ability to adapt across completely different industries"
              ]}
              color="border-emerald-500/30 bg-emerald-500/5"
              accentColor="text-emerald-500"
            />

            {/* Leadworkz */}
            <CaseStudyCard
              name="Leadworkz"
              industry="Digital Marketing Agency – Next.js Project"
              url="https://www.leadworkz.com/"
              results={[
                "Built using Next.js for high performance and SEO advantage",
                "Implemented smooth, modern scrolling animations",
                "Developed a premium agency-level experience"
              ]}
              color="border-yellow-500/30 bg-yellow-500/5"
              accentColor="text-yellow-500"
              footer="Even digital marketing agencies rely on my development expertise."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 4: DEVELOPMENT APPROACH --- */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Approach</h2>
            <p className="text-xl text-gray-400">My Website Development Process</p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0 hidden md:block" />

            <div className="space-y-12">
              <ProcessStep
                number="01"
                title="Understanding Your Business"
                desc="Goals, audience, and revenue model"
                align="right"
              />
              <ProcessStep
                number="02"
                title="Strategic Planning"
                desc="Structure, SEO mapping, and content direction"
                align="left"
              />
              <ProcessStep
                number="03"
                title="Design Phase"
                desc="Unique, brand-focused UI/UX"
                align="right"
              />
              <ProcessStep
                number="04"
                title="Development"
                desc="Clean, optimized, and scalable code"
                align="left"
              />
              <ProcessStep
                number="05"
                title="SEO & Performance Optimization"
                desc="Speed, indexing, and ranking readiness"
                align="right"
              />
              <ProcessStep
                number="06"
                title="Launch & Support"
                desc="Smooth deployment and continuous improvements"
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: TECHNOLOGY STACK --- */}
      <section className="reveal-section py-24 px-6 bg-white border-y border-gray-100 relative overflow-hidden">
        {/* Light Theme Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black">Technology Stack</h2>
          <p className="text-xl text-gray-500 mb-16 font-medium">Tools & Technologies I Use</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <TechItem name="WordPress" sub="Custom builds" />
            <TechItem name="Next.js" sub="High-performance" />
            <TechItem name="Modern Web" sub="HTML, CSS, JS" />
            <TechItem name="SEO Tools" sub="Optimization" />
            <TechItem name="Performance" sub="Speed techniques" />
          </div>
        </div>
      </section>

      {/* --- SECTION 6: WHY CHOOSE ME (Green theme) --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-[#43A047]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Me</h2>
            <p className="text-xl text-gray-400">What Makes Me Different from Other Freelance Web Designers?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WhyMeCard icon={<Rocket className="w-6 h-6" />} title="MBA-backed business understanding" />
            <WhyMeCard icon={<BarChart3 className="w-6 h-6" />} title="Focus on revenue, not just design" />
            <WhyMeCard icon={<Palette className="w-6 h-6" />} title="Strong brand-oriented design sense" />
            <WhyMeCard icon={<Search className="w-6 h-6" />} title="Proven SEO results (not assumptions)" />
            <WhyMeCard icon={<Lock className="w-6 h-6" />} title="Trusted by critical industries" />
            <WhyMeCard icon={<Zap className="w-6 h-6" />} title="Performance-first development" />
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">My Services Across Cities</h3>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              As a freelance web developer, I offer website design and development services across multiple cities, helping businesses build high-performing websites tailored to their local market. Explore location-specific pages to find services tailored for your region:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Bangalore", path: "bangalore" },
                { name: "Kerala", path: "kerala" },
                { name: "Kochi", path: "kochi" },
                { name: "Calicut", path: "calicut" }
              ].map((loc, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#43A047]/50 transition-all group flex flex-col items-center text-center backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#43A047]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-2xl font-black text-white mb-6 relative z-10">{loc.name}</h4>
                  <Link 
                    href={loc.path === "bangalore" ? "/web-developer-in-bangalore" : loc.path === "kerala" ? "/freelance-website-designer-in-kerala" : loc.path === "kochi" ? "/freelance-web-developer-kochi" : loc.path === "calicut" ? "/freelance-web-developer-calicut" : `/freelance-web-developer/${loc.path}`}
                    className="w-full py-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white group-hover:bg-[#43A047] group-hover:border-[#43A047] transition-all relative z-10 shadow-lg group-hover:shadow-[0_10px_30px_rgba(67,160,71,0.3)]"
                  >
                    Visit Page
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ SECTION --- */}
      <section className="reveal-section py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>

          <div className="space-y-4">
            <FAQItem
              q="What does a freelance web developer do?"
              a="A freelance web developer designs and builds websites tailored to business needs, focusing on performance, user experience, and SEO."
            />
            <FAQItem
              q="Why should I hire a freelance website designer instead of an agency?"
              a="Freelancers offer more personalized attention, flexibility, and cost-effective solutions while maintaining high quality."
            />
            <FAQItem
              q="Do you provide SEO with website development?"
              a="Yes, every website is built with SEO fundamentals to improve visibility and ranking."
            />
            <FAQItem
              q="Which is better: WordPress or Next.js?"
              a="It depends on your business needs. WordPress is flexible and easy to manage, while Next.js offers high performance and scalability."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL CTA (Advanced Design) --- */}
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
                <div className="w-12 h-12 rounded-full bg-[#43A047]/20 flex items-center justify-center text-2-[#43A047]">
                  <TrendingUp className="w-6 h-6 text-[#43A047]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</p>
                  <p className="text-gray-400 text-sm">Every line of code is optimized for revenue.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
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

function CaseStudyCard({ name, industry, url, results, color, accentColor, desc, footer }) {
  return (
    <div className={`p-8 rounded-3xl border ${color} backdrop-blur-sm flex flex-col h-full group hover:bg-white/[0.03] transition-all`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-mono tracking-widest uppercase opacity-40 mb-2 block">{industry}</span>
          <h3 className="text-2xl md:text-3xl font-black mb-1 text-white">{name}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-[#43A047] transition-all group/link"
          aria-label={`Visit ${name}`}
        >
          <ArrowRight className="w-5 h-5 -rotate-45 group-hover/link:text-white" />
        </a>
      </div>

      <div className="space-y-3 mb-6 flex-grow">
        {results.map((r, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${accentColor}`} />
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{r}</p>
          </div>
        ))}
      </div>

      {desc && <p className="text-sm italic text-gray-500 mb-4 border-l-2 border-[#43A047]/40 pl-3">{desc}</p>}
      {footer && <p className="text-sm font-semibold text-gray-400 border-t border-white/5 pt-4">👉 {footer}</p>}

      <div className="mt-4 pt-4 border-t border-white/5">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-500 hover:text-[#43A047] transition-colors">
          {url.replace("https://", "").replace("www.", "")}
        </a>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc, align }) {
  const isLeft = align === "left";
  return (
    <div className={`flex items-center w-full mb-12 last:mb-0 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="hidden md:block w-1/2" />
      <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#43A047] border-4 border-black z-10 flex items-center justify-center shadow-[0_0_20px_rgba(67,160,71,0.5)]" />
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
        <span className="text-xl font-mono text-[#43A047] font-bold mb-2 block tracking-widest">{number}</span>
        <h3 className="text-2xl md:text-3xl font-black uppercase mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TechItem({ name, sub }) {
  return (
    <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-gray-200 to-transparent hover:from-[#43A047]/50 hover:to-transparent transition-all duration-500 group overflow-hidden">
      <div className="absolute inset-0 bg-[#43A047]/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
      <div className="relative h-full px-4 py-8 rounded-[11px] bg-white border border-gray-100 group-hover:border-[#43A047]/30 transition-all duration-500 flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-[0_10px_40px_rgba(67,160,71,0.15)] z-10 overflow-hidden w-full">
        {/* Abstract shape */}
        <div className="absolute top-[-20%] right-[-20%] w-24 h-24 bg-gray-50 rounded-full blur-[20px] group-hover:bg-[#43A047]/10 transition-colors duration-500 pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-20%] w-20 h-20 bg-gray-50 rounded-full blur-[20px] group-hover:bg-[#43A047]/5 transition-colors duration-500 pointer-events-none" />

        <h3 className="text-xl sm:text-2xl font-black mb-2 text-black group-hover:text-[#43A047] transition-colors relative z-10">{name}</h3>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-500 font-bold relative z-10 group-hover:text-gray-900 transition-colors">{sub}</span>
      </div>
    </div>
  );
}

function WhyMeCard({ icon, title }) {
  return (
    <div className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-5 group hover:bg-white/10 hover:border-[#43A047]/30 transition-all">
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
