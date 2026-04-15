"use client";
import Link from "next/link";

/* ─── Services (Your Actual Services) ─────────────────────────────── */
const services = [
    { label: "Website Development", href: "/freelance-web-developer" },
    { label: "SEO", href: "/seo-freelancer" },
    { label: "Performance Marketing", href: "/freelance-performance-marketer" },
    { label: "Social Media Marketing", href: "/freelance-social-media-marketer" },
    { label: "Conversion Optimization", href: "/conversion-optimization" },
    { label: "Analytics & Tracking", href: "/analytics" }
];

const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
];

/* ─── Footer ────────────────────────────────────── */
export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0f1e] text-white">

            {/* ── Main Section ── */}
            <div className="border-b border-gray-800 px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                {/* Places We Can Meet */}
                <div>
                    <p className="text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase mb-5 flex items-center gap-3">
                        Places We Can Meet
                        <span className="flex-1 h-px bg-gray-800" />
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Bangalore<br />
                        Kerala
                    </p>
                </div>

                {/* Menu */}
                <div>
                    <p className="text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase mb-5 flex items-center gap-3">
                        Menu
                        <span className="flex-1 h-px bg-gray-800" />
                    </p>
                    <ul className="flex flex-col gap-2">
                        {menuLinks.map((l) => (
                            <li key={l.label}>
                                <Link
                                    href={l.href}
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider font-light"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <p className="text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase mb-5 flex items-center gap-3">
                        Services
                        <span className="flex-1 h-px bg-gray-800" />
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {services.map((s) => (
                            <li key={s.label}>
                                <Link 
                                    href={s.href}
                                    className="text-sm md:text-base font-mono tracking-widest text-gray-400 hover:text-white transition-colors uppercase"
                                >
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Branding Section ── */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#43A047] via-[#66BB6A] to-white px-8 md:px-16 pt-14 pb-0">

                {/* Tagline */}
                <p className="text-black/70 text-sm md:text-base font-light tracking-wide max-w-xs mb-6">
                    Building systems that turn attention into real business growth.
                </p>

                {/* Name Branding */}
                <div className="w-full opacity-20 pointer-events-none select-none flex flex-col items-start">
                    <h2
                        className="font-bebas text-black uppercase leading-none"
                        style={{ fontSize: "clamp(4rem, 15vw, 12rem)", letterSpacing: "0.02em" }}
                    >
                        Nabeel
                    </h2>
                    <p
                        className="font-bebas text-black uppercase tracking-[0.2em] mt-2 text-[clamp(0.5rem, 2vw, 1.5rem)]"
                    >
                        BUILT FOR RESULTS
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-black/20 py-4 mt-0">
                    <p className="text-black/60 text-xs">© 2026 Nabeel. All Rights Reserved.</p>
                    <Link
                        href="/privacy-policy"
                        className="text-black/60 hover:text-black text-xs transition-colors duration-200"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
