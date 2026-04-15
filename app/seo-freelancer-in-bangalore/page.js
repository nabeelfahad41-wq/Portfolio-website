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
  Briefcase,
  MessageSquare
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function SEOBangalore() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Freelancer in Bangalore",
        "item": "https://www.adlyst.in/seo-freelancer-in-bangalore"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SEO Freelancer in Bangalore",
    "url": "https://www.adlyst.in/seo-freelancer-in-bangalore",
    "jobTitle": "Freelance SEO Expert Bangalore",
    "description": "3+ years professional experience working as an SEO freelancer in Bangalore delivering execution-focused strategies.",
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "sameAs": [
      "https://www.adlyst.in/seo-freelancer-in-bangalore"
    ]
  };

  return (
    <main ref={containerRef} className="relative text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen px-6 pt-36 pb-24 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#43A047]/15 via-black to-black z-0" />
        <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          <div className="hero-fade text-left">
            <nav className="flex text-xs md:text-sm font-semibold tracking-wide text-gray-500 mb-8 z-20 relative font-mono uppercase">
              <ol className="flex items-center gap-3">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="opacity-50">/</li>
                <li><Link href="/seo-freelancer" className="hover:text-white transition-colors">SEO Freelancer</Link></li>
                <li className="opacity-50">/</li>
                <li className="text-[#43A047]">Bangalore</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-white">
              SEO Freelancer in Bangalore Who Understands <span className="text-[#43A047]">Business & Execution</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl leading-relaxed">
              If you're searching for an SEO freelancer in Bangalore, you need someone who can do more than just optimize pages — you need someone who executes with precision.
            </p>

            <div className="space-y-4 mb-10 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Fast-paced, competitive, and performance-driven results</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Clear communication and actionable strategies</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">3+ years professional experience delivering real growth</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#43A047] hover:bg-[#66BB6A] text-white font-black rounded-full text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(67,160,71,0.35)] flex items-center gap-2 group"
              >
                Hire SEO Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
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
                  3+ Years SEO Experience
                </span>
              </div>
            </div>

            {/* Quick Location Links */}
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
                  className={`text-[10px] sm:text-xs font-semibold hover:text-[#43A047] transition-all flex items-center gap-1 group whitespace-nowrap ${loc.name === 'Bangalore' ? 'text-[#43A047]' : 'text-gray-500'}`}
                >
                  {loc.name}
                  <ArrowRight className={`w-3 h-3 ${loc.name === 'Bangalore' ? '' : '-rotate-45 group-hover:rotate-0'} transition-transform opacity-70 group-hover:opacity-100`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Cascading SEO Image Stack */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="relative w-[312px] h-[422px] sm:w-[384px] sm:h-[520px] lg:w-[480px] lg:h-[650px] mx-auto">
              <div className="absolute top-0 left-0 w-[480px] h-[650px] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-top-left">

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-[#43A047]/30 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '0px', left: '20px', transform: 'rotate(3deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/keyword ranking screenshot of nabeel's work.png" alt="Google keyword rankings by a verified SEO freelancer in Bangalore" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '130px', left: '-10px', transform: 'rotate(-2deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo result of nabeel.png" alt="Google SEO results and organic traffic growth in Bangalore market" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '260px', left: '15px', transform: 'rotate(4deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo ranking proof of nabeel's work.png" alt="Demonstration of Bangalore local SEO success and growth metrics" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>

      {/* --- ABOUT ME (Bangalore Context) --- */}
      <section className="reveal-section py-20 md:py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Real Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] text-black mb-6">
              Freelance SEO Expert in Bangalore <br className="hidden sm:block" /> With Real Experience
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Working in Bangalore has shaped my approach to SEO. I've worked in environments where communication must be actionable and deadlines actually matter. 
            </p>
          </div>

          <div className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Briefcase className="text-[#43A047] w-6 h-6" /> Local Insight & Execution Readiness
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-gray-600">
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Strategies aligned strictly with your Bangalore market objectives.</p>
              </div>
              <div className="flex gap-4">
                <Search className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Keyword relevance tailored for local buyer mindsets and global outreach.</p>
              </div>
              <div className="flex gap-4">
                <Layout className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Solid infrastructure ensuring results are standard, not optional.</p>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Long-term approach focused on structured, scalable growth components.</p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#43A047]">
              <p className="text-lg font-medium italic text-gray-800">
                "Results are expected, not optional. In a market this fast-paced, I focus on practical and execution-ready SEO processes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO APPROACH (Bangalore Focus) --- */}
      <section className="reveal-section py-24 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Approach</h2>
            <p className="text-xl text-gray-400">Built for Bangalore Businesses</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <ApproachCard 
              num="1" 
              title="Objective-Driven SEO" 
              desc="Every SEO activity is tied to clear goals like lead generation, traffic growth, and keyword visibility. No random actions — only purpose-driven execution."
            />
            <ApproachCard 
              num="2" 
              title="Clear Communication" 
              desc="I ensure you understand what is being done and why. Through regular updates on performance, I effectively bridge the biggest gap in modern SEO consulting."
            />
            <ApproachCard 
              num="3" 
              title="Execution-Focused" 
              desc="Many experts stop at planning. I focus on execution — from landing page creation to technical fixes and deep on-page optimizations."
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES OFFERED --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-br from-[#0f0f0f] to-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">SEO Expert in Bangalore</h2>
            <p className="text-xl text-gray-400">Services I Offer.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 services-grid">
            <PricingCard
              icon={<Search className="w-8 h-8" />}
              title="SEO Strategy & Planning"
              items={[
                "Keyword research based on intent",
                "Competitor analysis",
                "SEO roadmap creation"
              ]}
            />
            <PricingCard
              icon={<Layout className="w-8 h-8" />}
              title="On-Page SEO"
              items={[
                "Content optimization",
                "Internal linking structure",
                "Page structure improvement"
              ]}
            />
            <PricingCard
              icon={<Zap className="w-8 h-8" />}
              title="Technical SEO"
              items={[
                "Website health audit",
                "Crawlability & indexing fixes",
                "Performance optimization"
              ]}
            />
            <PricingCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Full SEO Management"
              items={[
                "End-to-end SEO execution",
                "Continuous optimization",
                "Detailed performance tracking"
              ]}
              highlight={true}
            />
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE HIGHLIGHT --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
                Professional Background
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Experience That <br/> Builds <span className="text-[#43A047]">Trust</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With 3+ years of professional experience in Bangalore, I understand how to align high-level SEO methodologies directly with the expectations of fast-paced regional businesses and established commercial brands.
              </p>

              <h4 className="font-bold text-xl mb-4">What Sets The Standard:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> How to work effectively with cross-functional business teams.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Ability to bind SEO firmly to marketing and sales goals.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Reliable delivery of results within highly competitive digital environments.</li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-[#0a0a0a] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A047]/20 blur-[50px]"></div>
                <h3 className="text-2xl font-bold mb-8">Why Choose Me? <span className="text-gray-400 font-normal text-lg"></span></h3>
                
                <div className="flex flex-col gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-[#43A047] shrink-0" />
                    <div>
                      <p className="font-bold text-white text-base">Execution-driven Process</p>
                      <p className="text-gray-400 text-sm mt-1">Not just strategy docs—real on-page and technical configurations applied seamlessly to your business logic.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <MessageSquare className="w-8 h-8 text-[#43A047] shrink-0" />
                    <div>
                      <p className="font-bold text-white text-base">Clear Accountability</p>
                      <p className="text-gray-400 text-sm mt-1">Strong focus on clear communication so teams maintain complete visibility over ranking timelines.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-500 mb-8 -mt-6 uppercase font-mono tracking-widest text-sm">SEO Freelancer in Bangalore</p>

          <div className="space-y-4">
            <FAQItemLight
              q="Why should I hire an SEO freelancer in Bangalore instead of outsourcing?"
              a="Hiring an SEO freelancer in Bangalore gives you the advantage of working with someone who understands the local business environment, competition, and customer behavior. It also allows for better communication, faster execution, and easier collaboration."
            />
            <FAQItemLight
              q="Do you have professional experience working in Bangalore?"
              a="Yes, I have 3+ years of professional experience working in Bangalore, where I handled SEO with a strong focus on execution, performance, and clear communication. This experience helps me align strategies with real business expectations."
            />
            <FAQItemLight
              q="How do you ensure clear communication during SEO projects?"
              a="I follow a structured approach: Regular updates on progress, clear explanation of strategies, and defined deliverables and timelines. This ensures you always know what is being done and how it impacts your business."
            />
            <FAQItemLight
              q="What makes you different from other SEO experts in Bangalore?"
              a="Unlike many generic providers, I combine professional experience in Bangalore’s fast-paced work environment with transparent communication and strong focus on execution—not just high-level planning. Everything is tied to real business objectives."
            />
            <FAQItemLight
              q="Can you work with startups and growing businesses in Bangalore?"
              a="Yes. I work with startups looking for initial traction, growing businesses aiming to scale, and established companies needing structured SEO improvements."
            />
            <FAQItemLight
              q="How long does it take to see SEO results in Bangalore’s competitive market?"
              a="Bangalore is a highly competitive market, so SEO requires consistency. Initial improvements usually take 4–8 weeks, with strong results solidifying in 3–6 months. For example, my structured execution has generated 7000+ visitors within just five months on past local projects."
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
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Ready to grow?</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Let’s Build Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">Traffic Engine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              Are you a Bangalore business owner searching for SEO performance instead of promises? Let's connect and execute.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/20 flex items-center justify-center text-[#43A047]">
                  <TrendingUp className="w-6 h-6 text-[#43A047]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</p>
                  <p className="text-gray-400 text-sm">Every strategy is optimized for revenue conversion.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Local Knowledge</p>
                  <p className="text-gray-400 text-sm">Strategies custom fit for Bangalore demographics.</p>
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
                  <option className="bg-black">Full SEO Management</option>
                  <option className="bg-black">On-Page SEO</option>
                  <option className="bg-black">Technical SEO Audit</option>
                  <option className="bg-black">SEO Strategy & Mapping</option>
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
    <div className={`p-8 rounded-3xl border flex flex-col h-full relative transition-all ${highlight ? 'bg-[#1a1a1a] border-[#43A047]/50 shadow-[0_0_40px_rgba(67,160,71,0.1)] scale-105 z-10 lg:col-span-1' : 'bg-white/5 border-white/10 hover:border-[#43A047]/30 hover:bg-white/10'}`}>
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
