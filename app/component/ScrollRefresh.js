"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRefresh() {
  useEffect(() => {
    try {
      const scheduleRefresh = () => {
        const triggers = ScrollTrigger.getAll();
        console.log("[ScrollRefresh] active ScrollTriggers:", triggers.length);
        ScrollTrigger.refresh(true);
      };

      if (typeof window !== "undefined") {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(scheduleRefresh, { timeout: 2000 });
        } else {
          setTimeout(scheduleRefresh, 200);
        }
      }
    } catch (e) {
      console.warn('ScrollRefresh failed', e);
    }
  }, []);

  return null;
}
