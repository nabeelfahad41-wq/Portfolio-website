"use client";

import { useEffect } from "react";

export default function ScrollRefresh() {
  useEffect(() => {
    let isCancelled = false;

    const scheduleRefresh = () => {
      if (typeof window === "undefined" || isCancelled) return;

      const runRefresh = async () => {
        try {
          const hasGsapElements = typeof document !== 'undefined' && !!document.querySelector('[data-gsap], .gsap-target, [class*="gsap-"]');
          if (!hasGsapElements) return;

          const { gsap } = await import("gsap");
          const { ScrollTrigger } = await import("gsap/ScrollTrigger");
          if (isCancelled) return;
          gsap.registerPlugin(ScrollTrigger);
          const triggers = ScrollTrigger.getAll();
          if (triggers.length > 0) {
            ScrollTrigger.refresh(true);
          }
        } catch (e) {
          console.warn('ScrollRefresh failed', e);
        }
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(runRefresh, { timeout: 3000 });
      } else {
        setTimeout(runRefresh, 1000);
      }
    };

    scheduleRefresh();

    return () => {
      isCancelled = true;
    };
  }, []);

  return null;
}
