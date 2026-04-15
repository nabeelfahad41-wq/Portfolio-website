"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/config";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[92%] sm:w-[80%] md:w-auto">
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 px-6 py-4 md:px-10 flex items-center justify-center w-full overflow-hidden">
        
        {/* Subtle nav grid background */}
        <div
            className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                backgroundSize: '16px 16px'
            }}
        />

        {/* Logo/Home Icon - Hidden on Mobile */}
        <Link href="/" className="hidden md:flex relative z-10 items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-500 rounded-[10px] transition-all flex-shrink-0 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>

        {/* Menu Items */}
        <div className="relative z-10 flex w-full justify-center items-center gap-5 sm:gap-7 md:gap-10 md:ml-8 text-sm md:text-base font-bold">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 scale-110 drop-shadow-sm' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
