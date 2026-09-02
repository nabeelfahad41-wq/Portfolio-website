"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CalicutFAQ({ q, a }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl bg-white/[0.03] hover:border-[#43A047]/30 transition-all mb-3 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-white pr-4">{q}</h3>
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-[#43A047] text-black rotate-180" : "bg-white/10 text-white"
                        }`}
                >
                    <ChevronDown className="w-5 h-5 transition-transform" />
                </div>
            </button>

            {isOpen && (
                <div className="px-6 pb-6 animate-fadeIn">
                    <p className="text-gray-400 leading-relaxed text-base">{a}</p>
                </div>
            )}
        </div>
    );
}
