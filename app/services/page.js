"use client";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";
import { League_Gothic } from "next/font/google";
import Footer from "../component/Footer";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400"
});

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "High-converting websites and optimized funnels.",
      image: "/assets/website.jpg",
      href: "/freelance-web-developer"
    },
    {
      title: "SEO & Organic Growth",
      desc: "Global keyword targeting and sustainable rank growth.",
      image: "/assets/seo.png",
      href: "/seo-freelancer"
    },
    {
      title: "Performance Marketing",
      desc: "ROI-focused campaigns built to convert.",
      image: "/assets/performance marketing.png",
      href: "/freelance-performance-marketer"
    },
    {
      title: "Social Media Marketing",
      desc: "Scroll-stopping creative and growth-driven strategies.",
      image: "/assets/social media (1).jpg",
      href: "/freelance-social-media-marketer"
    }
  ];

  const cardColors = ["bg-neutral-900", "bg-neutral-800", "bg-neutral-700", "bg-neutral-600"];

  return (
    <>
    {/* Global Page Background */}
    <div className="fixed inset-0 z-[-1] bg-[linear-gradient(90deg,#000000,#737373)]">
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>

    <main className="relative z-10 min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ─── Hero Section ─── */}
        <div className="w-full text-center mb-24 px-4 animate-fade-in-up">
          <h1 className={`${leagueGothic.className} text-[15vw] sm:text-[11vw] md:text-[8vw] lg:text-[6vw] leading-[0.85] tracking-tight uppercase text-white max-w-5xl mx-auto`}>
            Freelance Digital Marketing Expert Driving <span className="text-green-600">Real Business Growth.</span>
          </h1>
          <p className="text-[#d3d0cb] text-lg md:text-xl font-light max-w-3xl mx-auto mt-6">
            From building high-performing websites to scaling traffic with SEO and converting it through paid ads—I create complete digital growth systems that drive revenue.
          </p>
        </div>

        {/* ─── Services Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto mb-32">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className={`group relative w-full h-[320px] md:h-[400px] rounded-[24px] md:rounded-[32px] ${cardColors[i]} border border-white/10 shadow-2xl flex flex-col items-start justify-start overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(22,163,74,0.15)] hover:border-green-600/30`}
            >
              <div className="relative w-full h-[70%] overflow-hidden bg-black/50">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Text inside Image */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/90 text-sm md:text-base font-medium">{service.desc}</p>
                </div>
              </div>

              <div className={`relative w-full h-[30%] px-5 md:px-8 flex flex-row items-center justify-between ${cardColors[i]} z-10`}>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight max-w-[70%]">
                  {service.title}
                </h3>
                <button className="text-xs md:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full group-hover:bg-green-600 transition-all shrink-0">
                  View
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* ─── CTA Cards ─── */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp Card */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(22,163,74,0.15)] hover:border-green-600/50">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-5">
                    <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">WhatsApp</span>
                <p className="text-white text-xl font-semibold mb-2">Live Chat</p>
                <p className="text-gray-500 text-sm mb-8">Pre-filled enquiry ready to send</p>
                <button
                    onClick={() => {
                        const fab = document.querySelector('button[aria-label="Open WhatsApp Chat"]');
                        if (fab) fab.click();
                    }}
                    className="mt-auto w-full bg-white text-black py-4 rounded-full font-bold hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2 text-base"
                >
                    <MessageCircle className="w-5 h-5" /> Start Chat
                </button>
            </div>

            {/* Phone Card — Highlighted */}
            <div className="relative bg-[#0a0a0a] border border-green-600 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_0_40px_rgba(22,163,74,0.1)] hover:shadow-[0_0_60px_rgba(22,163,74,0.2)] transition-all duration-300 z-10 md:scale-105">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-1 bg-green-600 rounded-full" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-green-600 blur-[100px] opacity-10 pointer-events-none" />
                <div className="w-20 h-20 bg-green-600/10 rounded-full flex items-center justify-center mb-5 ring-1 ring-green-600/30 relative z-10 transition-all duration-500 hover:ring-green-600/60 hover:bg-green-600/20">
                    <Phone className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                </div>
                <span className="text-green-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Direct Call</span>
                <p className="text-white text-3xl font-extrabold tracking-wide mb-3 relative z-10">+91 81118 30647</p>
                <p className="text-gray-400 text-sm mb-10">Tap to call instantly</p>
                <a
                    href="tel:+918111830647"
                    className="mt-auto w-full bg-green-600 text-white py-5 rounded-full font-bold text-lg hover:bg-green-500 transition-all flex items-center justify-center gap-2 relative z-10"
                >
                    <Phone className="w-5 h-5" /> Call Now
                </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(22,163,74,0.15)] hover:border-green-600/50">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-5">
                    <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Email</span>
                <p className="text-white text-xl font-semibold mb-2">Drop a Message</p>
                <p className="text-green-400 text-sm mb-8 break-all">nabeelfahad41@gmail.com</p>
                <a
                    href="mailto:nabeelfahad41@gmail.com"
                    className="mt-auto w-full bg-white text-black py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-base"
                >
                    <Mail className="w-5 h-5" /> Send Email
                </a>
            </div>
        </div>

      </div>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
    <Footer />
    </>
  );
}
