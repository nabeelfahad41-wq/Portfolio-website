"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WebDevFAQ({ q, a }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`border rounded-2xl bg-white/[0.03] transition-all mb-3 ${open ? "border-[#43A047]/50" : "border-white/10 hover:border-[#43A047]/30"
                }`}
        >
            <button
                className="flex justify-between items-center p-6 cursor-pointer w-full text-left focus:outline-none"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <h3 className="text-lg font-semibold text-white pr-4">{q}</h3>
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${open ? "bg-[#43A047] text-black" : "bg-white/10 text-white"
                        }`}
                >
                    <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </div>
            </button>
            {open && (
                <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed text-base">{a}</p>
                </div>
            )}
        </div>
    );
}
