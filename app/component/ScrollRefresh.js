"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRefresh() {
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      try {
        const triggers = ScrollTrigger.getAll();
        console.log("[ScrollRefresh] active ScrollTriggers:", triggers.length);
        ScrollTrigger.refresh(true);
      } catch (e) {
        console.warn('ScrollRefresh failed', e);
      }
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  return null;
}
