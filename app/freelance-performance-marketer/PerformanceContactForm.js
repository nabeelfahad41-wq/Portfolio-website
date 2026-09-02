"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function PerformanceContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
    const [status, setStatus] = useState({ loading: false, success: false, error: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus({ loading: false, success: true, error: "" });
                setFormData({ name: "", email: "", service: "", message: "" });
            } else {
                const data = await res.json().catch(() => ({}));
                setStatus({ loading: false, success: false, error: data.message || "Failed to send message." });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: "Network error. Please try again." });
        }
    };

    return (
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Start Your Campaign</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="pm-name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                            Name
                        </label>
                        <input
                            id="pm-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="pm-email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                            Email
                        </label>
                        <input
                            id="pm-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors text-white"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="pm-service" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Service Needed
                    </label>
                    <select
                        id="pm-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors appearance-none text-white"
                    >
                        <option className="bg-black" value="">Select a service</option>
                        <option className="bg-black" value="Meta Ads Strategy & Execution">Meta Ads Strategy &amp; Execution</option>
                        <option className="bg-black" value="Lead Generation Campaigns">Lead Generation Campaigns</option>
                        <option className="bg-black" value="WhatsApp & Messaging Campaigns">WhatsApp &amp; Messaging Campaigns</option>
                        <option className="bg-black" value="Retargeting & Funnel Optimization">Retargeting &amp; Funnel Optimization</option>
                        <option className="bg-black" value="A/B Testing & Scaling">A/B Testing &amp; Scaling</option>
                        <option className="bg-black" value="Performance Audit & Consultation">Performance Audit &amp; Consultation</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pm-message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Message
                    </label>
                    <textarea
                        id="pm-message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your business goals and current ad spend..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#246ccc]/50 transition-colors text-white"
                    />
                </div>
                {status.success && (
                    <p className="text-emerald-400 text-sm font-semibold">Thank you! Your message has been sent successfully.</p>
                )}
                {status.error && <p className="text-rose-400 text-sm font-semibold">{status.error}</p>}
                <button
                    type="submit"
                    id="pm-submit-btn"
                    disabled={status.loading}
                    className="w-full py-5 bg-[#246ccc] hover:bg-[#3a85e0] text-white font-black rounded-xl text-xl uppercase tracking-tighter transition-all shadow-[0_10px_30px_rgba(36,108,204,0.3)] flex items-center justify-center gap-3 group disabled:opacity-50"
                >
                    {status.loading ? "Sending..." : "Send Message"}{" "}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>
    );
}
