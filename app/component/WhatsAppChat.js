"use client";
import { useState, useRef, useEffect } from "react";

const PHONE = "918111830647";
const PRE_FILLED = "Hi Nabeel! I visited your website and I'm interested in your digital marketing services. Can we connect?";

const CHAT_HISTORY = [
    {
        from: "nabeel",
        text: "👋 Hi there! I'm Nabeel, your digital marketing partner.",
        time: "10:00 AM",
    },
    {
        from: "nabeel",
        text: "How can I help you grow your business today? Feel free to send a message below!",
        time: "10:00 AM",
    },
];

export default function WhatsAppChat() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(PRE_FILLED);
    const [pulse, setPulse] = useState(true);
    const inputRef = useRef(null);

    // Stop the initial attention pulse after 4 seconds
    useEffect(() => {
        const t = setTimeout(() => setPulse(false), 4000);
        return () => clearTimeout(t);
    }, []);

    // Focus the textarea when chat opens
    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [open]);

    const handleSend = () => {
        if (!message.trim()) return;
        const encoded = encodeURIComponent(message.trim());
        window.open(`https://wa.me/${PHONE}?text=${encoded}`, "_blank", "noopener,noreferrer");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <style>{`
                .wa-widget-enter {
                    animation: wa-slide-up 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
                }
                @keyframes wa-slide-up {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to   { opacity: 1; transform: translateY(0)  scale(1); }
                }
                .wa-fab-pulse {
                    animation: wa-pulse 2s ease-in-out infinite;
                }
                @keyframes wa-pulse {
                    0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
                    50%      { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
                }
                .wa-send-btn:active { transform: scale(0.92); }
            `}</style>

            {/* ── Floating Action Button ── */}
            <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Open WhatsApp Chat"
                className={`fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none ${pulse ? "wa-fab-pulse" : ""}`}
                style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.4)" }}
            >
                {open ? (
                    /* Close X */
                    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                        <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                ) : (
                    /* WhatsApp icon */
                    <svg viewBox="0 0 32 32" fill="white" className="w-9 h-9">
                        <path d="M16 2.933C8.8 2.933 2.933 8.8 2.933 16c0 2.32.627 4.493 1.72 6.373L2.667 29.333l7.187-1.96A13.01 13.01 0 0016 29.067c7.2 0 13.067-5.867 13.067-13.067S23.2 2.933 16 2.933zm6.64 18.507c-.267.747-1.587 1.44-2.173 1.493-.56.053-1.093.253-3.68-.747-3.107-1.173-5.107-4.373-5.253-4.573-.147-.2-1.2-1.6-1.2-3.04s.76-2.16 1.027-2.453c.267-.293.587-.36.787-.36l.573.013c.24.013.493.027.733.573.293.68.933 2.293.933 2.453.013.16 0 .347-.107.507-.107.173-.16.267-.32.427-.16.173-.32.333-.467.493-.147.147-.307.307-.133.6.173.293.787 1.293 1.693 2.093 1.16 1.04 2.133 1.36 2.44 1.52.307.147.48.12.653-.08.173-.2.747-.893.947-1.2.2-.307.4-.253.667-.147l2.133.987c.28.133.48.213.56.333.08.107.08.627-.187 1.373z" />
                    </svg>
                )}
            </button>

            {/* ── Notification badge ── */}
            {!open && (
                <span className="fixed bottom-[74px] right-5 z-[998] bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                    1
                </span>
            )}

            {/* ── Chat Panel ── */}
            {open && (
                <div
                    className="wa-widget-enter fixed bottom-24 right-6 z-[998] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden flex flex-col"
                    style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54" }}>
                        <div className="relative flex-shrink-0">
                            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold text-white select-none">
                                N
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4CAF50] rounded-full border-2 border-[#075E54]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-sm leading-tight">Nabeel</p>
                            <p className="text-green-300 text-xs">● Online </p>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5 opacity-60 flex-shrink-0">
                            <path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Chat background — WhatsApp-like tiled */}
                    <div
                        className="flex flex-col gap-3 px-4 py-4 overflow-y-auto"
                        style={{
                            background: "#ECE5DD",
                            minHeight: 160,
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        }}
                    >
                        {CHAT_HISTORY.map((msg, i) => (
                            <div key={i} className="flex justify-start">
                                <div
                                    className="max-w-[80%] px-3 py-2 rounded-lg rounded-tl-none relative"
                                    style={{ background: "white", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
                                >
                                    <p className="text-[#303030] text-sm leading-snug">{msg.text}</p>
                                    <p className="text-[10px] text-gray-400 text-right mt-1">{msg.time}</p>
                                </div>
                            </div>
                        ))}

                        {/* Typing prompt */}
                        <p className="text-[11px] text-gray-500 text-center mt-1">
                            ✍️ Type your message below and hit Send
                        </p>
                    </div>

                    {/* Input bar */}
                    <div className="flex items-end gap-2 px-3 py-2" style={{ background: "#F0F0F0" }}>
                        <textarea
                            ref={inputRef}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            rows={2}
                            placeholder="Type a message…"
                            className="flex-1 resize-none rounded-2xl px-4 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#25D366] transition-all"
                            style={{ background: "white", maxHeight: 100, lineHeight: 1.5 }}
                        />
                        <button
                            onClick={handleSend}
                            aria-label="Send message"
                            className="wa-send-btn flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all"
                            style={{ background: "#25D366" }}
                        >
                            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" style={{ transform: "rotate(45deg) translate(-1px, 1px)" }}>
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>

                    {/* Footer note */}
                    <div className="flex items-center justify-center gap-1 py-1.5" style={{ background: "#F0F0F0", borderTop: "1px solid #ddd" }}>
                        <svg viewBox="0 0 24 24" fill="#25D366" className="w-3.5 h-3.5">
                            <path d="M16 2.933C8.8 2.933 2.933 8.8 2.933 16c0 2.32.627 4.493 1.72 6.373L2.667 29.333l7.187-1.96A13.01 13.01 0 0016 29.067c7.2 0 13.067-5.867 13.067-13.067S23.2 2.933 16 2.933z" />
                        </svg>
                        <span className="text-[10px] text-gray-400">WhatsApp · Opens in app</span>
                    </div>
                </div>
            )}
        </>
    );
}
