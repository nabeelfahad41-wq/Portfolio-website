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
  MessageSquare,
  MapPin
} from "lucide-react";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function SEOKerala() {
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
        "name": "SEO Freelancer in Kerala",
        "item": "https://www.adlyst.in/seo-freelancer-in-kerala"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SEO Freelancer in Kerala",
    "url": "https://www.adlyst.in/seo-freelancer-in-kerala",
    "jobTitle": "Freelance SEO Expert Kerala",
    "description": "SEO freelancer in Kerala with deep local understanding and Malayalam communication. Helping businesses rank with intent-driven SEO strategies.",
    "areaServed": {
      "@type": "State",
      "name": "Kerala"
    },
    "sameAs": [
      "https://www.adlyst.in/seo-freelancer-in-kerala"
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
                <li className="text-[#43A047]">Kerala</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-white">
              SEO Freelancer in Kerala Who Understands <span className="text-[#43A047]">Local Search & Customers</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl leading-relaxed">
              If you're looking for an SEO freelancer in Kerala, the biggest advantage you can have is working with someone who truly understands local businesses, customer mindset, and search behavior.
            </p>

            <div className="space-y-4 mb-10 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Mix of English and Malayalam search queries</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Location-specific intent (city + service)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#43A047] shrink-0 mt-0.5" />
                <p className="text-gray-300">Trust-driven decision making and execution</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#43A047] hover:bg-[#66BB6A] text-white font-black rounded-full text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(67,160,71,0.35)] flex items-center gap-2 group"
              >
                Hire Local SEO Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
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
                  Leading Kerala SEO Consultant
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
                  className={`text-[10px] sm:text-xs font-semibold hover:text-[#43A047] transition-all flex items-center gap-1 group whitespace-nowrap ${loc.name === 'Kerala' ? 'text-[#43A047]' : 'text-gray-500'}`}
                >
                  {loc.name}
                  <ArrowRight className={`w-3 h-3 ${loc.name === 'Kerala' ? '' : '-rotate-45 group-hover:rotate-0'} transition-transform opacity-70 group-hover:opacity-100`} />
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
                <img src="/assets/keyword ranking screenshot of nabeel's work.png" alt="Google Search Console keyword ranking screenshot demonstrating Nabeel's proven SEO results in Kerala" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-20 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '130px', left: '-10px', transform: 'rotate(-2deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo result of nabeel.png" alt="Google SEO results and organic traffic growth in Kerala market" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

              <div
                className="hero-img-card absolute w-[460px] h-[260px] rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:z-50 hover:scale-[1.02]"
                style={{ top: '260px', left: '15px', transform: 'rotate(4deg)', transformOrigin: 'center' }}
              >
                <img src="/assets/seo ranking proof of nabeel's work.png" alt="Data-driven SEO ranking proof showcasing significant search engine visibility improvements" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>

      {/* --- ABOUT ME (Kerala Context) --- */}
      <section className="reveal-section py-20 md:py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 block">Local SEO Expert</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] text-black mb-6">
              SEO Expert in Kerala <br className="hidden sm:block" /> Who Knows Your Audience
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              SEO is not just about keywords — it’s about understanding how your audience searches in real life. Being born and brought up in Kerala, I bring a natural understanding of how people search, think, and make decisions.
            </p>
          </div>

          <div className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <MessageSquare className="text-[#43A047] w-6 h-6" /> Seamless Communication in Malayalam & English
            </h3>
            
            <p className="text-gray-600 mb-8">One of the biggest challenges businesses face with SEO is communication gaps. With me as your SEO consultant, collaboration becomes smoother:</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-gray-600">
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Communicate comfortably in Malayalam or English.</p>
              </div>
              <div className="flex gap-4">
                <Search className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>No confusion in strategy discussions and KPI tracking.</p>
              </div>
              <div className="flex gap-4">
                <Layout className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Clear understanding of your business goals tied to search intent.</p>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-[#43A047] shrink-0" />
                <p>Better execution through transparent process updates.</p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#43A047]">
              <p className="text-lg font-medium italic text-gray-800">
                "As an SEO consultant in Kerala, I don’t just focus on rankings — I focus on how SEO contributes to your business revenue."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO APPROACH (Kerala Focus) --- */}
      <section className="reveal-section py-24 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My SEO Approach</h2>
            <p className="text-xl text-gray-400">Built for Kerala Businesses</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <ApproachCard 
              num="1" 
              title="Local Search Intent" 
              desc="Understanding how users search within Kerala and optimizing content accordingly to catch local demand."
            />
            <ApproachCard 
              num="2" 
              title="Location-Focused" 
              desc="Targeting specific city-based keywords ensuring maximum reach in areas like Calicut, Kochi, and Trivandrum."
            />
            <ApproachCard 
              num="3" 
              title="Content That Connects" 
              desc="Creating engaging content that resonates specifically with the local audience mindset and builds trust factors."
            />
            <ApproachCard 
              num="4" 
              title="Technical & On-Page" 
              desc="Ensuring your website is search engine friendly, lightning fast, and perfectly structured for rapid indexing."
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES OFFERED --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-br from-[#0f0f0f] to-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Focus Driven Services</h2>
            <p className="text-xl text-gray-400">Every strategy is aligned with what actually drives revenue.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 services-grid">
            <PricingCard
              icon={<Search className="w-8 h-8" />}
              title="Generating Qualified Leads"
              items={[
                "Matching searcher intent with conversions",
                "Funnels optimized for local Kerala searches",
                "Maximizing commercial keywords"
              ]}
            />
            <PricingCard
              icon={<MapPin className="w-8 h-8" />}
              title="Improving Local Visibility"
              items={[
                "Google Business Profile optimization",
                "Top placement in regional SEO mappings",
                "Dominate city+service search strings"
              ]}
              highlight={true}
            />
            <PricingCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Long-Term Organic Growth"
              items={[
                "Sustainable scalable technical SEO setups",
                "Continuous organic rank scaling",
                "Comprehensive site health auditing"
              ]}
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
                Professional Backbone
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Experience & Skills That <span className="text-[#43A047]">Build Trust</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                You receive high-end execution with an MBA-backed understanding of customer behavior and purchasing decisions.
              </p>

              <h4 className="font-bold text-xl mb-4">Proven SEO Results:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Hands-on experience managing end-to-end SEO projects.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Strong understanding of Google ranking systems.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Ability to combine technical SEO alongside content.</li>
                <li className="flex items-start gap-2 text-gray-600"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#43A047] shrink-0" /> Built SEO systems designed explicitly for long-term scalability.</li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-[#0a0a0a] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A047]/20 blur-[50px]"></div>
                <h3 className="text-2xl font-bold mb-8">Execution Focus <span className="text-gray-400 font-normal text-lg"></span></h3>
                
                <div className="flex flex-col gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <BarChart3 className="w-8 h-8 text-[#43A047] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white text-[1.4rem]">40+ Keywords Ranked</p>
                      <p className="text-gray-400 text-sm mt-1">High-search-volume queries captured across core commercial offerings.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <Users className="w-8 h-8 text-[#43A047] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white text-[1.4rem]">7,000+ Organic Visitors</p>
                      <p className="text-gray-400 text-sm mt-1">Generated qualified inbound search traffic consistently within 5 months.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE ME --- */}
      <section className="reveal-section py-24 px-6 bg-gradient-to-b from-[#43A047]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Me as Your SEO Freelancer in Kerala</h2>
            <p className="text-xl text-gray-400">Deep local understanding meets professional execution.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <WhyMeCard icon={<Globe className="w-6 h-6" />} title="Born and brought up in Kerala" />
            <WhyMeCard icon={<MessageSquare className="w-6 h-6" />} title="Fluent in Malayalam & English" />
            <WhyMeCard icon={<Target className="w-6 h-6" />} title="Focus on business results" />
            <WhyMeCard icon={<Zap className="w-6 h-6" />} title="Execution-driven approach" />
            <WhyMeCard icon={<TrendingUp className="w-6 h-6" />} title="Proven track record in ROI" />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="reveal-section py-24 px-6 bg-white text-black border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-500 mb-8 -mt-6 uppercase font-mono tracking-widest text-sm">SEO Freelancer in Kerala</p>

          <div className="space-y-4">
            <FAQItemLight
              q="Why hire a local SEO freelancer in Kerala?"
              a="A local SEO freelancer understands regional search behavior, language preferences, and customer mindset, which helps in creating more effective, locally targeted SEO strategies."
            />
            <FAQItemLight
              q="Do you provide support in Malayalam?"
              a="Yes, I communicate fluently in Malayalam and English, making discussions easier, clear, and more effective."
            />
            <FAQItemLight
              q="How is SEO in Kerala different from other locations?"
              a="Kerala SEO involves mixed language searches (Malayalam + English), strong local intent for services, and primarily trust-based decision making. This requires a more heavily localized approach than generic SEO methods."
            />
            <FAQItemLight
              q="What results can I expect from your SEO service?"
              a="SEO is a long-term strategy, but I have a track record of achieving 40+ high-volume keyword rankings and 7,000+ organic visitors in just 5 months. Results ultimately depend on your specific industry and timeline."
            />
            <FAQItemLight
              q="Do you work with small businesses in Kerala?"
              a="Yes, I regularly work with startups, local businesses, and growing regional brands, customizing my strategies precisely based on their operational needs and budgets."
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
            <span className="text-[#43A047] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Ready for local dominance?</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Turn Search Into <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">Revenue</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              Don't settle for agencies that don't understand your local audience. Let’s connect and map out an SEO strategy custom-built for Kerala.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/20 flex items-center justify-center text-[#43A047]">
                  <TrendingUp className="w-6 h-6 text-[#43A047]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</p>
                  <p className="text-gray-400 text-sm">Targeting leads in Calicut, Kochi & Trivandrum.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Bilingual Support</p>
                  <p className="text-gray-400 text-sm">Flawless collaboration in English and Malayalam.</p>
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
                  <option className="bg-black">Local SEO Targeting</option>
                  <option className="bg-black">Technical SEO Audit</option>
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
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#43A047]/50 transition-all flex flex-col h-full relative overflow-hidden group lg:col-span-1">
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
