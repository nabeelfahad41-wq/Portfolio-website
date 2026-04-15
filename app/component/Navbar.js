"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/config";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[90%] md:w-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg px-6 py-3 md:px-8 md:py-4 flex items-center justify-between md:justify-center gap-4 md:gap-8 w-full">
        {/* Logo/Home Icon - Hidden on Mobile */}
        <Link href="/" className="hidden md:flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full transition-colors flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>

        {/* Menu Items */}
        <div className="flex gap-4 md:gap-8 text-sm font-medium">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 scale-110 font-bold' 
                    : 'text-gray-700 hover:text-green-600'
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
