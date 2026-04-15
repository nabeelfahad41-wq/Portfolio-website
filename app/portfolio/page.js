"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Search, 
  Target, 
  Zap, 
  TrendingUp, 
  Linkedin, 
  Instagram, 
  ShieldCheck,
  MousePointer2,
  Code2,
  BarChart3,
  Users
} from "lucide-react";
import { League_Gothic } from "next/font/google";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400"
});

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Section reveal animation
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 92%", // Trigger sooner for better visibility
            toggleActions: "play none none none"
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // Project Cards Individually
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen font-sans selection:bg-[#43A047] selection:text-white relative">
      <Navbar />
      
      {/* Page-wide Background Enhancements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Green/Black Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,160,71,0.15),transparent_70%)]" />
        {/* Home Page Grid Design */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center px-6 pt-28 md:pt-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <div className="hero-text inline-block px-4 py-1.5 rounded-full border border-[#43A047]/30 bg-[#43A047]/10 text-[#43A047] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8">
              Portfolio
            </div>
            <h1 className={`hero-text text-[15vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] uppercase mb-8 ${leagueGothic.className}`}>
              Real Work. Real Results.<br />
              <span className="text-[#43A047]">Real Growth.</span>
            </h1>
            <p className="hero-text text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-light mb-10">
              A portfolio of websites, SEO campaigns, paid ads, and social media strategies that delivered measurable business outcomes — <span className="text-white font-medium">not just vanity metrics.</span>
            </p>
            
            {/* Scroll Indicator (Desktop Only, subtle) */}
            <div className="hidden lg:flex items-center gap-4 text-gray-500 opacity-50 mt-12">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#43A047]" />
                <span className="text-xs uppercase tracking-widest vertical-text rotate-180" style={{ writingMode: 'vertical-lr' }}>Scroll to Explore</span>
            </div>
          </div>

          {/* Right Column: Globe Image (Hidden on Mobile) */}
          <div className="hidden lg:flex relative h-[600px] xl:h-[700px] items-end">
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#43A047]/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <img 
              src="/assets/Gemini_Generated_Image_jg9o8ojg9o8ojg9o 4.png" 
              alt="Global Reach Visualization"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(67,160,71,0.2)] translate-y-12"
            />
          </div>
        </div>

        {/* Scroll Indicator (Mobile Only) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 lg:hidden">
            <ArrowRight className="rotate-90 w-6 h-6" />
        </div>
      </section>

      {/* --- WEBSITE DESIGN & DEVELOPMENT --- */}
      <section className="reveal-section py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">Execution Phase</span>
              <h2 className={`text-4xl md:text-6xl uppercase leading-[1] ${leagueGothic.className}`}>
                High-Performance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Websites Built for Growth</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-sm leading-relaxed">
              I design and develop websites that are optimized for conversion, SEO, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 projects-grid">
            <ProjectCard 
              image="/assets/trasccon.png"
              title="Trasccon.com"
              category="Industrial/Manufacturing"
              stats={["40+ SEO Landing Pages", "B2B Lead gen focused", "Strategic Keyword Mapping"]}
              tech={["WordPress", "SEO-first Arch"]}
            />
            <ProjectCard 
              image="/assets/navodaya.png"
              title="NavodayaPower.com"
              category="Industrial B2B"
              stats={["Advanced Product Filtering", "Industrial Audience Clarity", "Clean UI/UX"]}
              tech={["Custom Development", "Performance Opt"]}
            />
            <ProjectCard 
              image="/assets/rain country.png"
              title="RainCountryResorts.com"
              category="Hospitality"
              stats={["Visual Storytelling", "Conversion-driven Layout", "Hospitality UX"]}
              tech={["Visual Design", "SEO Driven"]}
            />
            <ProjectCard 
              image="/assets/leadworks.png"
              title="Leadworkz.com"
              category="Digital Marketing Agency"
              stats={["Next.js Performance", "Scroll-based Interactions", "Modern Design System"]}
              tech={["Next.js", "GSAP Animations"]}
            />
          </div>
        </div>
      </section>

      {/* --- SEO RESULTS CASE STUDY --- */}
      <section className="reveal-section py-24 md:py-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#43A047]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">SEO Case Study: Trasccon</span>
            <h2 className={`text-4xl md:text-6xl uppercase leading-[1] mb-8 ${leagueGothic.className}`}>
              From Zero to <br />
              <span className="text-[#43A047]">High-Volume</span> Organic Growth
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              I executed a complete SEO strategy focused on landing page scaling + keyword targeting + technical optimization. This wasn’t random growth — it was driven by systems.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <ResultStat label="Ranked Page 1" value="40+" sub="Keywords" />
              <ResultStat label="Organic Growth" value="7,000+" sub="New Users" />
              <ResultStat label="Impressions" value="50.1K" sub="6-Month Period" />
              <ResultStat label="Total Clicks" value="2.8K" sub="Organic Traffic" />
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Target className="w-6 h-6 text-[#43A047] shrink-0 mt-1" />
                <p className="text-gray-400 italic font-light">
                   "Execution focused on structured keyword mapping + landing page strategy + internal linking."
                </p>
            </div>
          </div>

          <div className="relative group p-4 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
            <img 
              src="/assets/seo result screenshort of trasccon.png" 
              alt="SEO growth metrics showing increase in clicks and impressions for Trasccon" 
              className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE MARKETING --- */}
      <section className="reveal-section py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Paid Media</span>
            <h2 className={`text-4xl md:text-6xl uppercase leading-[1] mb-6 ${leagueGothic.className}`}>
              Data-Driven <span className="text-white">Performance Marketing</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              I focus on low-cost, high-conversion campaigns (Meta Ads) with continuous optimization and rigorous creative testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AdResultCard 
              image="/assets/result screen short of meta ad.png"
              name="Kuruva Island Resort"
              result="352 Leads / 20 Days"
              cpr="₹22 CPR"
              strategy="Local targeting + Lead form optimization"
            />
             <AdResultCard 
              image="/assets/14 cpr result of performance marketing of wall decor company.png"
              name="Aestic Designs (Wall Decor)"
              result="235 Leads"
              cpr="₹14 CPR"
              strategy="Audience segmentation + Budget efficiency"
            />
             <AdResultCard 
              image="/assets/ab test screen short of interior design company.png"
              name="Design1Studio"
              result="High-Intent Leads"
              cpr="Optimized ROI"
              strategy="Interior Design specialized targeting"
            />
          </div>
        </div>
      </section>

      {/* --- SOCIAL MEDIA GROWTH --- */}
      <section className="reveal-section py-24 md:py-32 relative z-10">
        <div className="absolute inset-0 bg-[#43A047]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
           <div className="text-center mb-16 max-w-2xl">
              <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Social Strategy</span>
              <h2 className={`text-4xl md:text-6xl uppercase leading-[1] mb-6 ${leagueGothic.className}`}>
                Building Brands Through <span className="text-[#43A047]">Consistent Content</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              <SocialGrowthBox 
                icon={<Linkedin className="w-8 h-8 text-[#0077B5]" />}
                brand="LinkedIn (Trasccon)"
                growth="400 → 1100 Followers"
                stats="2X Growth in 6 Months"
                points={["Industry-relevant content", "Professional positioning", "Engagement strategy"]}
                image="/assets/linkedin growth proof.png"
              />
              <SocialGrowthBox 
                icon={<Instagram className="w-8 h-8 text-[#E4405F]" />}
                brand="Instagram (Adlystio)"
                growth="400+ Organic Followers"
                stats="Content First Strategy"
                points={["Niche positioning", "Visual storytelling", "Consistency systems"]}
                image="/assets/instagram marketing growth.png"
              />
           </div>
        </div>
      </section>

      {/* --- MY APPROACH --- */}
      <section className="reveal-section py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-center mb-20">
              <h2 className={`text-4xl md:text-7xl uppercase leading-[1] ${leagueGothic.className}`}>
                Execution <span className="text-[#43A047]">Over Theory</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mt-6 font-light">Most marketers focus on ideas. I focus on execution systems that scale.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              <ApproachCard icon={<Code2 />} text="SEO + Website + Ads Integration" />
              <ApproachCard icon={<BarChart3 />} text="Data-driven Decision Making" />
              <ApproachCard icon={<Users />} text="Focus on Leads, not Vanity Metrics" />
              <ApproachCard icon={<TrendingUp />} text="Scalable Growth Systems" />
           </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION (MATCHING WEBSITE PAGE) --- */}
      <section className="reveal-section py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#43A047]/20 via-black to-black z-0" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Ready to grow?</span>
            <h2 className={`text-4xl md:text-7xl uppercase tracking-tighter mb-8 leading-[0.9] ${leagueGothic.className}`}>
              Let’s Build a <br /> <span className="text-[#43A047]">Revenue machine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              Don't settle for a portfolio that just looks pretty. If you're looking for execution that drives real business outcomes — let’s connect.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#43A047]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</p>
                  <p className="text-gray-400 text-sm">Targeted results for every campaign.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Scalable Systems</p>
                  <p className="text-gray-400 text-sm">Built for long-term performance.</p>
                </div>
              </div>
            </div>
          </div>

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
                  <option className="bg-black">SEO Optimization</option>
                  <option className="bg-black">Performance Marketing</option>
                  <option className="bg-black">Social Media Management</option>
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

function ProjectCard({ image, title, category, stats, tech }) {
  return (
    <div className="project-card group bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#43A047]/50 transition-all duration-500 flex flex-col h-full">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <span className="text-[#43A047] text-xs font-bold uppercase tracking-widest">{category}</span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
        <div className="space-y-3 mb-8 flex-grow">
          {stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#43A047] shrink-0" />
                <p className="text-gray-400 text-sm md:text-base font-light">{stat}</p>
             </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
           {tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-500 font-bold uppercase tracking-wider">{t}</span>
           ))}
        </div>
      </div>
    </div>
  );
}

function ResultStat({ label, value, sub }) {
    return (
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#43A047]/30 transition-all">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
            <p className="text-3xl font-black text-[#43A047] tracking-tighter">{value}</p>
            <p className="text-[10px] text-gray-600 font-bold uppercase mt-1">{sub}</p>
        </div>
    );
}

function AdResultCard({ image, name, result, cpr, strategy }) {
    return (
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/5 transition-all group">
            <div className="rounded-2xl overflow-hidden h-48 mb-6 border border-white/5">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-2">
                <h3 className="text-xl font-bold mb-4">{name}</h3>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm">Result:</span>
                    <span className="text-white font-black text-sm">{result}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Metric:</span>
                    <span className="text-[#43A047] font-black text-sm">{cpr}</span>
                </div>
                <p className="text-xs text-gray-400 font-light border-t border-white/5 pt-4">👉 {strategy}</p>
            </div>
        </div>
    );
}

function SocialGrowthBox({ icon, brand, growth, stats, points, image }) {
    return (
        <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 w-full order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                    {icon}
                    <h3 className="text-2xl font-bold">{brand}</h3>
                </div>
                <div className="mb-6">
                    <p className="text-3xl font-black text-white tracking-tighter">{growth}</p>
                    <p className="text-[#43A047] text-sm font-bold uppercase mt-1">{stats}</p>
                </div>
                <div className="space-y-3">
                    {points.map((p, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <MousePointer2 className="w-4 h-4 text-[#43A047] shrink-0" />
                            <p className="text-gray-400 text-sm font-light">{p}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden border border-white/10">
                    <img src={image} alt={brand} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

function ApproachCard({ icon, text }) {
    return (
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center group hover:bg-[#43A047]/10 hover:border-[#43A047]/30 transition-all duration-500">
            <div className="p-4 rounded-2xl bg-[#43A047]/10 text-[#43A047] group-hover:bg-[#43A047] group-hover:text-black transition-all mb-6">
                {icon}
            </div>
            <p className="text-white font-bold leading-tight uppercase text-sm tracking-widest">{text}</p>
        </div>
    );
}
