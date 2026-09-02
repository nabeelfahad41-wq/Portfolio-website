"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`border rounded-2xl bg-white transition-all mb-3 shadow-sm ${open ? "border-[#246ccc]/50" : "border-gray-200 hover:border-[#246ccc]/30"
                }`}
        >
            <button
                className="flex justify-between items-center p-6 cursor-pointer w-full text-left"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{q}</h3>
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${open ? "bg-[#246ccc] text-white" : "bg-gray-100"
                        }`}
                >
                    <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </div>
            </button>
            {open && (
                <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
                </div>
            )}
        </div>
    );
}
