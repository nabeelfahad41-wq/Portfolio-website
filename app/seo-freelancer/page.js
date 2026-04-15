"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Search,
  Globe,
  ArrowRight,
  Star,
  Users,
  ShieldCheck,
  Zap,
  Lock,
  ChevronDown,
  Layout,
  Briefcase
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function SEOFreelancer() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Image stack
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

  // SEO Structured Data
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
        "name": "SEO Freelancer",
        "item": "https://www.adlyst.in/seo-freelancer"
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Freelance SEO Specialist",
    "url": "https://www.adlyst.in/seo-freelancer",
    "jobTitle": "Freelance SEO Specialist & Consultant",
    "description": "Hire an SEO freelancer to grow rankings, traffic & leads. Freelance SEO specialist offering technical SEO, content strategy & complete optimization.",
    "sameAs": [
      "https://www.adlyst.in/seo-freelancer"
    ]
  };

  return (
    <main ref={containerRef} className="relative text-white">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden flex items-center">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#43A047]/15 via-black to-black z-0" />
        <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Content */}
          <div className="hero-fade text-left">
            <nav className="flex text-xs md:text-sm font-semibold tracking-wide text-gray-500 mb-8 z-20 relative font-mono uppercase">
              <ol className="flex items-center gap-3">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="opacity-50">/</li>
                <li className="text-[#43A047]">SEO Freelancer</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-white">
              SEO Freelancer Who Builds Rankings That Generate{" "}
              <span className="text-[#43A047]">Revenue</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl leading-relaxed">
              Not just traffic — I focus on qualified organic growth that converts into real business results.
            </p>

            <div className="space-y-4 mb-10 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Data-driven SEO strategies</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Technical + content + authority building</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Proven execution across competitive industries</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#43A047] hover:bg-[#66BB6A] text-white font-black rounded-full text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(67,160,71,0.35)] flex items-center gap-2 group"
              >
                Get Free SEO Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 border border-white/20 hover:border-[#43A047]/50 text-white font-black rounded-full text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform flex items-center gap-2 group"
              >
                See My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1 text-[#FFC107]">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap">
                  5.0 Rated Freelance SEO Expert
                </span>
              </div>
            </div>

            {/* Quick Location Links - Positioned under CTA button row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 py-6 border-y border-white/5 hero-fade">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#43A047]" /> Serving:
              </span>
              {[
                { name: "Bangalore", path: "/seo-freelancer-in-bangalore" },
                { name: "Kerala", path: "/seo-freelancer-in-kerala" }
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

          {/* Right Column: Cascading SEO Image Stack */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="relative w-[312px] h-[422px] sm:w-[384px] sm:h-[520px] lg:w-[480px] lg:h-[650px] mx-auto">
              <div className="absolute top-0 left-0 w-[480px] h-[650px] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-top-left">

              {/* Card 1 */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-[#43A047]/30 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '0px', left: '20px', transform: 'rotate(3deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/keyword ranking screenshot of nabeel's work.png" alt="Google Search Console keyword ranking screenshot demonstrating Nabeel's proven SEO results and high volume organic traffic" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              {/* Card 2 */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '130px', left: '-10px', transform: 'rotate(-2deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo result screenshort of trasccon.png" alt="Google SEO results and organic traffic growth graph" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              {/* Card 3 */}
              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '260px', left: '15px', transform: 'rotate(4deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo ranking proof of nabeel's work.png" alt="Data-driven SEO ranking proof showcasing significant search engine visibility improvements by freelance SEO specialist Nabeel" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* --- ABOUT ME --- */}
      <section className="reveal-section py-20 md:py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">About Me</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] text-black mb-6">
              SEO Backed by <br className="hidden sm:block" /> Real Execution
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              I’m an SEO freelancer with hands-on experience managing end-to-end digital marketing and organic growth strategies. I’ve worked on real business websites where rankings, traffic, and lead generation were directly tied to performance.
            </p>
          </div>

          <div className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Briefcase className="text-[#43A047] w-6 h-6" /> Proven Impact at Trasccon
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-gray-600">
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Complete SEO ownership from keyword strategy to execution.</p>
              </div>
              <div className="flex gap-4">
                <Search className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Built keyword-rich landing pages targeting high-intent B2B searches.</p>
              </div>
              <div className="flex gap-4">
                <Layout className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Structured content to align with Google’s search intent and ranking signals.</p>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Focused on technical SEO, internal linking, and scalable architecture.</p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#43A047]">
              <p className="text-lg font-medium italic text-gray-800">
                "Unlike generic consultants, I don’t rely on theory — I execute strategies that align with how search engines actually evaluate websites."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO APPROACH --- */}
      <section className="reveal-section py-24 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My SEO Approach</h2>
            <p className="text-xl text-gray-400">Aligned with Google’s Algorithm</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <ApproachCard 
              num="1" 
              title="Search Intent Mapping" 
              desc="Every keyword is mapped to user intent (informational, commercial, transactional) to ensure higher ranking probability and conversion rate."
            />
            <ApproachCard 
              num="2" 
              title="Topical Authority Building" 
              desc="Instead of isolated pages, I create content clusters that signal expertise and improve domain authority."
            />
            <ApproachCard 
              num="3" 
              title="Technical SEO Foundation" 
              desc="Site structure optimization, crawlability & indexation fixes, and page speed & Core Web Vitals improvements."
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#43A047]/50 transition-all flex flex-col h-full">
              <span className="text-[#43A047] text-5xl font-black opacity-20 mb-[-20px]">4</span>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Content That Meets E-E-A-T</h3>
              <p className="text-gray-400 mb-6 relative z-10">Content is designed to reflect the four pillars of quality:</p>
              <ul className="space-y-3 mt-auto relative z-10">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Experience (real execution insights)</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Expertise (industry-relevant depth)</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Authority (structured content + backlinks)</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Trust (clear, accurate, useful information)</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#43A047]/50 transition-all flex flex-col h-full">
              <span className="text-[#43A047] text-5xl font-black opacity-20 mb-[-20px]">5</span>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Scalable Link Building</h3>
              <ul className="space-y-4 mt-4 relative z-10">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Contextual backlinks</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Industry-relevant placements</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#43A047]" /> Authority signal enhancement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES OFFERED --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-br from-[#0f0f0f] to-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services I Offer</h2>
            <p className="text-xl text-gray-400">Tailored SEO solutions for long-term growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 services-grid">
            <PricingCard
              icon={<Search className="w-8 h-8" />}
              title="Freelance SEO Specialist Services"
              items={[
                "Keyword research & strategy",
                "On-page SEO optimization",
                "Content planning & execution"
              ]}
            />
            <PricingCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Full SEO Management"
              items={[
                "End-to-end SEO execution",
                "Monthly performance tracking",
                "Continuous optimization & scaling"
              ]}
              highlight={true}
            />
            <PricingCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Freelance SEO Consultant Services"
              items={[
                "SEO audits & growth roadmap",
                "Technical SEO fixes",
                "Competitor & gap analysis"
              ]}
            />
          </div>
        </div>
      </section>

      {/* --- CASE STUDY SPOTLIGHT --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
                Project Spotlight
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                B2B Industrial SEO <span className="text-[#43A047]">Growth</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                As part of my role, I took complete ownership of SEO strategy and execution, focusing on building a scalable organic growth system aligned with search intent and Google ranking signals.
              </p>

              <h4 className="font-bold text-xl mb-4">What I Executed:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Built 6 high-intent, keyword-focused landing pages.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Developed structured internal linking architecture.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Optimized pages for ranking and conversion.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Implemented search intent mapping across core pages.</li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-[#0a0a0a] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A047]/20 blur-[50px]"></div>
                <h3 className="text-2xl font-bold mb-8">Results Achieved <span className="text-gray-400 font-normal text-lg">(Within 5 Months)</span></h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-4xl font-black text-[#43A047] mb-2">40+</p>
                    <p className="text-gray-300 text-sm">High-search-volume keywords ranked</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-4xl font-black text-[#43A047] mb-2">7,000+</p>
                    <p className="text-gray-300 text-sm">New organic visitors generated</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-[#43A047]" />
                      <div>
                        <p className="font-bold text-white uppercase text-sm tracking-widest text-[#43A047]">Strong Foundation</p>
                        <p className="text-gray-400 text-sm">Improved visibility across core service pages for long-term scaling.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE ME & MBA ADVANTAGE --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-[#43A047]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Me as Your SEO Freelancer</h2>
            <p className="text-xl text-gray-400">Business outcomes over vanity metrics.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <WhyMeCard icon={<Target className="w-6 h-6" />} title="Focus on business outcomes, not vanity metrics" />
            <WhyMeCard icon={<Zap className="w-6 h-6" />} title="Combine technical SEO, content strategy, and execution" />
            <WhyMeCard icon={<Globe className="w-6 h-6" />} title="Understand how Google evaluates websites and ranks content" />
            <WhyMeCard icon={<ShieldCheck className="w-6 h-6" />} title="Build long-term SEO assets, not short-term hacks" />
          </div>

          <div className="max-w-4xl mx-auto p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-[#43A047]/20 blur-[80px]"></div>
            
            <div className="inline-block p-4 rounded-full bg-[#43A047]/10 text-[#43A047] mb-6 relative z-10">
              <Lock className="w-8 h-8" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6 text-white relative z-10">🎯 MBA-Driven Strategic Advantage</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed relative z-10">
              Backed by an MBA, I understand customer behavior, decision-making, and market positioning. I don’t just rank pages — I align SEO with business goals and customer intent.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#43A047]" /> Connect search data with buyer psychology
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#43A047]" /> Convert traffic into leads, not just visits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="reveal-section py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Testimonials</h2>
            <p className="text-[#43A047] font-bold uppercase tracking-widest text-sm">Feedback from Trasccon</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Nabeel took complete ownership of our SEO strategy and execution. His structured approach to landing pages and keyword targeting gave us a strong foundation to compete in our industry." 
            />
            <TestimonialCard 
              quote="What stood out was his ability to align SEO with real business goals, not just rankings." 
            />
            <TestimonialCard 
              quote="His understanding of technical SEO and content strategy helped us build a scalable digital presence." 
            />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <FAQItemLight
              q="What does an SEO freelancer do?"
              a="An SEO freelancer helps improve your website’s visibility on search engines by optimizing content, fixing technical issues, and building authority. The goal is to drive organic traffic that converts into leads and revenue, not just increase rankings."
            />
            <FAQItemLight
              q="How is a freelance SEO specialist different from an agency?"
              a="A freelance SEO specialist offers direct communication, faster execution, personalized strategy (not templated processes), and cost-effective solutions. Unlike agencies, you work directly with the person executing your SEO strategy."
            />
            <FAQItemLight
              q="How long does SEO take to show results?"
              a="SEO is a long-term strategy. Typically, initial improvements take 4–8 weeks, and noticeable traffic growth takes 3–6 months. For example, I generated 7,000+ organic visitors and ranked 40+ keywords within 5 months through structured SEO execution."
            />
            <FAQItemLight
              q="What industries do you work with?"
              a="I have experience working with B2B industrial businesses, service-based websites, and local business SEO. My approach adapts based on industry competition, search behavior, and customer intent."
            />
            <FAQItemLight
              q="What is included in your SEO service?"
              a="Core Services include: Keyword research & strategy, On-page optimization, Technical fixes, Content planning, and Internal linking. Advanced Support includes: SEO audits, Competitor analysis, Link building strategy, and Performance tracking."
            />
            <FAQItemLight
              q="Do you guarantee #1 rankings on Google?"
              a="No ethical SEO expert can guarantee #1 rankings. However, I focus on ranking for high-intent keywords, building sustainable organic growth, and improving traffic, visibility, and conversions."
            />
            <FAQItemLight
              q="How do you approach keyword research?"
              a="I focus on Search intent (what users actually want), Business relevance (conversion potential), and Competition level. This ensures we target keywords that drive results, not just traffic."
            />
          </div>
        </div>
      </section>

      {/* --- Final CTA (Advanced Design) --- */}
      <section id="contact" className="reveal-section py-32 px-6 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#43A047]/20 via-black to-black z-0" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Ready to dominate?</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Let’s Build a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">Revenue machine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              If you're looking for a freelance SEO expert who understands business, content strategy, and scalable growth — let’s connect.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/20 flex items-center justify-center text-[#43A047]">
                  <TrendingUp className="w-6 h-6 text-[#43A047]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</p>
                  <p className="text-gray-400 text-sm">Every strategy is optimized for revenue.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Sustainable Assets</p>
                  <p className="text-gray-400 text-sm">Building long-term SEO foundations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Start Your SEO Growth</h3>
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
                  <option className="bg-black">Full SEO Management</option>
                  <option className="bg-black">Freelance SEO Consultant Services</option>
                  <option className="bg-black">SEO Audit</option>
                  <option className="bg-black">Content Strategy</option>
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

function ApproachCard({ num, title, desc }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#43A047]/50 transition-all flex flex-col h-full relative overflow-hidden group">
      <span className="absolute top-4 right-6 text-[#43A047] text-7xl font-black opacity-10 group-hover:scale-110 transition-transform">{num}</span>
      <h3 className="text-2xl font-bold text-white mb-4 relative z-10 pt-4">{title}</h3>
      <p className="text-gray-400 relative z-10 leading-relaxed">{desc}</p>
    </div>
  );
}

function PricingCard({ icon, title, items, highlight }) {
  return (
    <div className={`p-8 rounded-3xl border flex flex-col h-full relative transition-all ${highlight ? 'bg-[#1a1a1a] border-[#43A047]/50 shadow-[0_0_40px_rgba(67,160,71,0.1)] scale-105 z-10' : 'bg-white/5 border-white/10 hover:border-[#43A047]/30 hover:bg-white/10'}`}>
      {highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#43A047] text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg">Most Popular</div>}
      <div className={`p-4 rounded-2xl mb-6 w-fit ${highlight ? 'bg-[#43A047]/20 text-[#43A047]' : 'bg-white/10 text-white'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-6 text-white leading-snug">{title}</h3>
      <ul className="space-y-4 mb-8 flex-grow">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${highlight ? 'text-[#43A047]' : 'text-gray-500'}`} />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyMeCard({ icon, title }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-4 group hover:bg-white/10 hover:border-[#43A047]/30 transition-all">
      <div className="p-4 rounded-2xl bg-[#43A047]/10 text-[#43A047] group-hover:scale-110 group-hover:bg-[#43A047] group-hover:text-black transition-all">
        {icon}
      </div>
      <p className="font-semibold text-white leading-snug">{title}</p>
    </div>
  );
}

function TestimonialCard({ quote }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative">
      <div className="text-[#43A047] text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
      <p className="text-lg text-gray-300 leading-relaxed relative z-10 pt-4 italic">
        {quote}
      </p>
      <div className="mt-8 flex items-center gap-2">
        <div className="flex text-[#FFC107]">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </div>
      </div>
    </div>
  );
}

function FAQItemLight({ q, a }) {
  return (
    <details className="group border border-gray-200 rounded-2xl bg-white hover:border-[#43A047]/50 transition-all mb-3 shadow-sm">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{q}</h3>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-open:bg-[#43A047] group-open:text-white shrink-0 transition-all">
          <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="px-6 pb-6 pt-2">
        <p className="text-gray-600 leading-relaxed text-base">{a}</p>
      </div>
    </details>
  );
}
