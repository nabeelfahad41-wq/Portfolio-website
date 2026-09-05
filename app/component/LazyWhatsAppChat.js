"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const WhatsAppChatComponent = dynamic(() => import("./WhatsAppChat"), {
    ssr: false,
});

export default function LazyWhatsAppChat() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let timerId;

        const handleInteraction = () => {
            setShouldLoad(true);
            if (timerId) clearTimeout(timerId);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
        };

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(() => {
                timerId = setTimeout(() => setShouldLoad(true), 3000);
            }, { timeout: 4000 });
        } else {
            timerId = setTimeout(() => setShouldLoad(true), 3500);
        }

        window.addEventListener("scroll", handleInteraction, { passive: true, once: true });
        window.addEventListener("touchstart", handleInteraction, { passive: true, once: true });
        window.addEventListener("mousemove", handleInteraction, { passive: true, once: true });

        return () => {
            if (timerId) clearTimeout(timerId);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
        };
    }, []);

    if (!shouldLoad) return null;
    return <WhatsAppChatComponent />;
}
