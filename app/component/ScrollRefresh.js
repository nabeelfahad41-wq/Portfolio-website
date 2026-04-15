"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRefresh() {
  useEffect(() => {
    try {
      // Debug: list active ScrollTriggers
      const triggers = ScrollTrigger.getAll();
      console.log("[ScrollRefresh] active ScrollTriggers:", triggers.length);

      // Remove any existing pin spacer nodes and let ScrollTrigger rebuild them
      // document.querySelectorAll('.gsap-pin-spacer').forEach(el => el.remove());

      ScrollTrigger.refresh(true);
    } catch (e) {
      console.warn('ScrollRefresh failed', e);
    }
  }, []);

  return null;
}
