"use client";
import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { League_Gothic } from "next/font/google";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400"
});

export default function ClientContact() {
    const heroRef = useRef(null);

    useEffect(() => {
        // Simple fade-in animation using IntersectionObserver — no GSAP opacity bug
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                .fade-up {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .fade-up.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .fade-up:nth-child(2) { transition-delay: 0.1s; }
                .fade-up:nth-child(3) { transition-delay: 0.2s; }
                .fade-up:nth-child(4) { transition-delay: 0.3s; }
                .card-glow:hover {
                    box-shadow: 0 0 40px rgba(22,163,74,0.15);
                    border-color: rgba(22,163,74,0.5);
                }
                .whatsapp-btn:hover {
                    background: #25D366;
                    color: white;
                }
                .call-pulse {
                    animation: pulse-green 2s infinite;
                }
                @keyframes pulse-green {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.4); }
                    50% { box-shadow: 0 0 0 12px rgba(22,163,74,0); }
                }
            `}</style>

            <div className="min-h-screen bg-black pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* ─── Hero Section ─── */}
                <div ref={heroRef} className="w-full max-w-5xl mx-auto text-center mb-20 px-4">
                    <h1 className={`fade-up is-visible ${leagueGothic.className} text-[18vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tighter uppercase text-white`}>
                        Let&apos;s <span className="text-green-600">Work</span> Together
                    </h1>
                    <p className="fade-up is-visible text-[#d3d0cb] text-lg md:text-xl font-light max-w-2xl mx-auto mt-6">
                        Ready to scale your business? Choose your preferred way to reach out and let&apos;s get started on your digital strategy.
                    </p>
                </div>

                {/* ─── Contact Cards ─── */}
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">

                    {/* WhatsApp Card */}
                    <div className="fade-up is-visible bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 card-glow">
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
                            className="whatsapp-btn mt-auto w-full bg-white text-black py-4 rounded-full font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                        >
                            <MessageCircle className="w-5 h-5" /> Start Chat
                        </button>
                    </div>

                    {/* Phone Card — Highlighted */}
                    <div className="fade-up is-visible relative bg-[#0a0a0a] border-2 border-green-600 rounded-3xl p-10 flex flex-col items-center text-center md:-mt-4 md:mb-0 shadow-[0_0_60px_rgba(22,163,74,0.2)] z-10">
                        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-1 bg-green-600 rounded-full" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-green-600 blur-[100px] opacity-20 pointer-events-none" />
                        <div className="call-pulse w-20 h-20 bg-green-600/15 rounded-full flex items-center justify-center mb-5 ring-2 ring-green-600/40 relative z-10">
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
                    <div className="fade-up is-visible bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 card-glow">
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

                {/* ─── Locations Section ─── */}
                <div className="w-full max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <h2 className={`fade-up is-visible ${leagueGothic.className} text-[14vw] sm:text-[10vw] md:text-[7vw] leading-[0.85] tracking-tighter uppercase text-white`}>
                            My <span className="text-green-600">Locations</span>
                        </h2>
                        <p className="fade-up is-visible text-[#d3d0cb] text-lg mt-4">
                            I operate locally in these regions but collaborate globally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Bangalore */}
                        <div className="fade-up is-visible bg-[#111] border border-[#2a2a2a] rounded-3xl overflow-hidden flex flex-col group hover:border-green-600/30 transition-all duration-300">
                            <div className="map-wrapper relative h-72 w-full overflow-hidden bg-[#0a0a0a]">
                                <iframe
                                    title="Bangalore Location"
                                    src="https://maps.google.com/maps?q=Bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] pointer-events-none" />
                            </div>
                            <div className="p-8 flex flex-col items-start relative">
                                <div className="absolute top-0 right-8 -mt-6 bg-green-600 text-white p-3 rounded-full shadow-lg border-4 border-[#111]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="text-3xl text-white font-bold mb-2">Bangalore</h3>
                                <p className="text-gray-400 text-base mb-6">Available for strategy meetings and digital consulting across Bangalore, Karnataka.</p>
                                <a
                                    href="https://maps.app.goo.gl/5pfxUxUA1TfuCvdG8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold bg-[#222] hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300 text-sm"
                                >
                                    <MapPin className="w-4 h-4" /> Open in Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Kerala */}
                        <div className="fade-up is-visible bg-[#111] border border-[#2a2a2a] rounded-3xl overflow-hidden flex flex-col group hover:border-green-600/30 transition-all duration-300">
                            <div className="map-wrapper relative h-72 w-full overflow-hidden bg-[#0a0a0a]">
                                <iframe
                                    title="Kerala Location"
                                    src="https://maps.google.com/maps?q=Kerala,India&t=&z=7&ie=UTF8&iwloc=&output=embed"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] pointer-events-none" />
                            </div>
                            <div className="p-8 flex flex-col items-start relative">
                                <div className="absolute top-0 right-8 -mt-6 bg-white text-black p-3 rounded-full shadow-lg border-4 border-[#111]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="text-3xl text-white font-bold mb-2">Kerala</h3>
                                <p className="text-gray-400 text-base mb-6">Operating from God&apos;s Own Country, serving businesses across the state and beyond.</p>
                                <a
                                    href="https://maps.app.goo.gl/AnnUKQZcCqsh5VHd8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-bold bg-[#222] hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300 text-sm"
                                >
                                    <MapPin className="w-4 h-4" /> Open in Google Maps
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
