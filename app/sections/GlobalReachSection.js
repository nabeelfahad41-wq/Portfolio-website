"use client";

// Fix 8: Tree-shake Three.js — import only the classes we actually use
// instead of `import * as THREE from "three"` which loads the full 580KB bundle
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BufferGeometry,
    BufferAttribute,
    ShaderMaterial,
    Points,
    Group,
    Color,
    Clock,
    AdditiveBlending,
} from "three";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Fix 9: Move locations array OUTSIDE the component so it is never
// re-created on React renders (was previously declared inside the function body)
const LOCATIONS = [
    {
        id: "01",
        title: "Signature Websites That Make You Unforgettable",
        subtitle: "Your website should feel like your brand—not a template.",
        desc: "I design and develop high-impact, animated websites with strong brand positioning, so visitors instantly recognize and remember your business.",
    },
    {
        id: "02",
        title: "SEO That Becomes a Long-Term Revenue Machine",
        subtitle: "Rank once, generate results continuously.",
        desc: "With the right strategy and execution, SEO turns your website into a consistent source of high-intent traffic and predictable revenue over time.",
    },
    {
        id: "03",
        title: "Performance Marketing That Targets the Right People",
        subtitle: "Your ads should reach future customers—not random users.",
        desc: "I build data-backed ad systems that focus on high-conversion audiences, reducing cost per result while maximizing ROI.",
    },
    {
        id: "04",
        title: "Data-Driven Decisions with User Touchpoint Analysis",
        subtitle: "Every interaction is an opportunity to improve.",
        desc: "By analyzing how users behave across your funnel, I identify drop-offs, optimize journeys, and unlock hidden conversion potential.",
    },
    {
        id: "05",
        title: "Fast Execution & Continuous Optimization",
        subtitle: "Speed is what separates growth from stagnation.",
        desc: "Rapid testing, quick implementation, and continuous improvements ensure your marketing adapts faster than your competition.",
    },
    {
        id: "06",
        title: "Direct Ownership & Clear Accountability",
        subtitle: "No layers, no confusion—just results.",
        desc: "You work directly with the person responsible for strategy and execution, ensuring clarity, faster decisions, and measurable outcomes.",
    },
];

export default function GlobalReachSection() {
    const [mounted, setMounted] = useState(false);
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);
    const canvasRef = useRef(null);

    const bigTextRef = useRef(null);
    const blackLayerRef = useRef(null);
    const listContainerRef = useRef(null);
    const listItemsRef = useRef([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !canvasRef.current || !sectionRef.current) return;

        /* =========================================
           DEVICE DETECTION — single declaration, used everywhere
        ========================================= */
        const isMobile = window.innerWidth < 768;

        /* =========================================
           THREE.JS SETUP
           Fix 2: antialias: false — MSAA does nothing for point particles
                  (they are already anti-aliased via fwidth in fragment shader)
                  and wastes VRAM / framebuffer allocation.
           Fix 3: pixel ratio capped at 1.5 (was 2) — saves ~44% GPU fill
                  cost on retina screens with no perceptible visual difference.
        ========================================= */
        const scene = new Scene();
        const w = window.innerWidth;
        const h = window.innerHeight;

        const camera = new PerspectiveCamera(45, w / h, 0.1, 100);
        camera.position.set(0, 0, 13);

        const renderer = new WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: false,                                    // Fix 2
            powerPreference: "high-performance",
        });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Fix 3

        /* =========================================
           PARTICLE MESH (DIGITAL SIGNAL FLOW)
           Fix 5: Particle buffer built inside requestIdleCallback so
                  the 24,000-iteration Math.random() loop never blocks
                  the main thread during first paint / TBT window.
        ========================================= */
        const particlesGroup = new Group();
        scene.add(particlesGroup);

        const PARTICLE_COUNT = isMobile ? 3000 : 8000;

        // Refs for cleanup — populated after idle callback completes
        let points = null;
        let material = null;

        const buildParticles = () => {
            const geometry = new BufferGeometry();
            const positions = new Float32Array(PARTICLE_COUNT * 3);
            const randoms = new Float32Array(PARTICLE_COUNT);

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 40;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 2.0;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
                randoms[i] = Math.random();
            }

            geometry.setAttribute("position", new BufferAttribute(positions, 3));
            geometry.setAttribute("aRandom", new BufferAttribute(randoms, 1));

            const dotOpacity = isMobile ? "0.8" : "0.5";
            material = new ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color: { value: new Color("#ffffff") },
                },
                vertexShader: `
                    uniform float time;
                    attribute float aRandom;
                    varying float vAlpha;
                    void main() {
                        vec3 pos = position;
                        float wave1 = sin(pos.x * 0.2 + time * 0.5) * 2.0;
                        float wave2 = cos(pos.z * 0.2 + time * 0.4) * 2.0;
                        float wave3 = sin((pos.x + pos.z) * 0.1 + time * 0.3) * 1.5;
                        pos.y += wave1 + wave2 + wave3;
                        pos.y += sin(time * 2.0 + aRandom * 10.0) * 0.3;
                        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                        gl_Position = projectionMatrix * mvPosition;
                        gl_PointSize = (2.0 + aRandom * 3.0) * (20.0 / -mvPosition.z);
                        float dist = length(pos.xz);
                        vAlpha = smoothstep(20.0, 0.0, dist);
                    }
                `,
                fragmentShader: `
                    precision lowp float;
                    uniform vec3 color;
                    varying float vAlpha;
                    void main() {
                        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
                        float r = dot(cxy, cxy);
                        float delta = fwidth(r);
                        float alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
                        if (alpha < 0.01) discard;
                        gl_FragColor = vec4(color, alpha * vAlpha * ${dotOpacity});
                    }
                `,
                transparent: true,
                depthTest: false,               // Fix 1: depthTest was conflicting with AdditiveBlending
                depthWrite: false,              //        causing GPU to run depth tests that had no effect
                blending: AdditiveBlending,
            });

            points = new Points(geometry, material);
            particlesGroup.add(points);
            particlesGroup.userData.points = points;
            particlesGroup.userData.material = material;

            // Add rotation to GSAP timeline now that the mesh exists
            if (isMobile) {
                // Fix: Added position 0 to start rotation along with content scroll
                tl.to(points.rotation, { y: "+=3.5", x: "+=0.3", duration: 10, ease: "none" }, 0);
            } else {
                tl.to(points.rotation, { y: "+=3.5", x: "+=0.3", duration: 12, ease: "none" }, "entry");
                // Animate material color on desktop
                const startColor = new Color("#ffffff");
                tl.fromTo(
                    material.uniforms.color.value,
                    { r: startColor.r, g: startColor.g, b: startColor.b },
                    { r: 1, g: 1, b: 1, duration: 3 },
                    "entry"
                );
            }

            ScrollTrigger.refresh();
        };

        // Defer particle building to idle time — never blocks first paint
        const idleHandle = typeof requestIdleCallback !== "undefined"
            ? requestIdleCallback(buildParticles, { timeout: 2000 })
            : setTimeout(buildParticles, 0);

        /* =========================================
           GLOBE POSITION & SCALE — set BEFORE GSAP timeline
        ========================================= */
        particlesGroup.position.set(isMobile ? -3.5 : 0, isMobile ? 0 : -4.8, 0);
        const initialScale = isMobile ? 1.2 : 1.5;
        particlesGroup.scale.set(initialScale, initialScale, initialScale);

        /* =========================================
           GSAP ANIMATIONS
        ========================================= */
        /* =========================================
           DYNAMIC MOBILE HEIGHT CALCULATION
        ========================================= */
        const getMobileScrollTarget = () => {
            if (!listContainerRef.current || !blackLayerRef.current) {
                return -(LOCATIONS.length * window.innerHeight * 0.52);
            }
            const pt = parseFloat(window.getComputedStyle(blackLayerRef.current).paddingTop) || 160;
            const h = listContainerRef.current.offsetHeight;
            const screenH = window.innerHeight;
            let needed = (pt + h) - screenH + (screenH * 0.05); // 5vh extra space at bottom
            return needed > 0 ? -needed : 0;
        };

        const updateMobileHeight = () => {
            if (!sectionRef.current) return;
            if (window.innerWidth < 768) {
                const target = getMobileScrollTarget();
                sectionRef.current.style.height = `${-target + window.innerHeight}px`;
            } else {
                sectionRef.current.style.height = "250vh";
            }
        };

        // Initialize dynamic height
        updateMobileHeight();

        const tl = gsap.timeline({
            scrollTrigger: {
                id: "global-reach-trigger",
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: isMobile ? 0 : 0.5,
                invalidateOnRefresh: true, // Re-evaluates function-based values
            },
        });

        if (isMobile) {
            // points rotation added after buildParticles completes (above)
            tl.to(listContainerRef.current, { y: () => getMobileScrollTarget(), duration: 10, ease: "none" }, 0);
        } else {
            tl.addLabel("entry");
            tl.to(blackLayerRef.current, { y: "0%", duration: 2, ease: "power2.inOut" }, "entry");
            tl.to(particlesGroup.position, { y: 0, x: 3.5, z: 0, duration: 3, ease: "power2.inOut" }, "entry");
            tl.to(particlesGroup.scale, { x: 0.9, y: 0.9, z: 0.9, duration: 3, ease: "power2.inOut" }, "entry");
            tl.to(bigTextRef.current, { y: -250, opacity: 0, duration: 2 }, "entry");
            tl.fromTo(
                listItemsRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5, stagger: 1, ease: "power2.out" },
                "entry+=0.5"
            );
            tl.to(listContainerRef.current, { y: -1220, duration: 10, ease: "none" }, "entry+=0.5");
            // points.rotation added after buildParticles completes (above)
        }

        /* =========================================
           RENDER LOOP
           Fix 4: Use requestAnimationFrame manually instead of setAnimationLoop
                  so the loop fully STOPS (cancels) when off-screen,
                  not just skips rendering while still firing at 60fps.
        ========================================= */
        let isInView = false;
        let rafId = null;
        const clock = new Clock(false); // start paused

        const renderLoop = () => {
            if (!isInView) return; // loop cancelled; observer will restart it
            if (material) {
                material.uniforms.time.value = clock.getElapsedTime();
            }
            renderer.render(scene, camera);
            rafId = requestAnimationFrame(renderLoop);
        };

        const observer = new IntersectionObserver(([entry]) => {
            isInView = entry.isIntersecting;
            if (isInView) {
                clock.start();
                rafId = requestAnimationFrame(renderLoop); // restart loop
            } else {
                clock.stop();
                if (rafId !== null) {
                    cancelAnimationFrame(rafId); // fully stop loop
                    rafId = null;
                }
            }
        }, { threshold: 0.1 });
        observer.observe(sectionRef.current);

        /* =========================================
           RESIZE
           Fix 6: Debounce resize handler — was firing on every pixel of resize,
                  calling updateProjectionMatrix() and scale recalculations at
                  maximum frequency. Now defers 150ms.
        ========================================= */
        let resizeTimer = null;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newW = window.innerWidth;
                const newH = window.innerHeight;
                renderer.setSize(newW, newH);
                camera.aspect = newW / newH;
                camera.updateProjectionMatrix();

                updateMobileHeight(); // Recalculate section height on resize

                const trigger = ScrollTrigger.getById("global-reach-trigger");
                const hasScrolled = trigger ? trigger.progress > 0 : false;

                if (newW < 768) {
                    particlesGroup.scale.set(1.2, 1.2, 1.2);
                    if (!hasScrolled) particlesGroup.position.set(-3.5, 0, 0);
                } else {
                    particlesGroup.scale.set(1.5, 1.5, 1.5);
                }
            }, 150);
        };
        window.addEventListener("resize", handleResize);

        /* =========================================
           DEFERRED SCROLL REFRESH
           Fix 7: ScrollTrigger.refresh() called synchronously was
                  forcing a full page layout reflow during mount.
                  Deferring to next animation frame removes it from
                  the critical rendering path.
        ========================================= */
        requestAnimationFrame(() => ScrollTrigger.refresh());

        /* =========================================
           CLEANUP
        ========================================= */
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
            observer.disconnect();
            if (rafId !== null) cancelAnimationFrame(rafId);
            if (typeof requestIdleCallback !== "undefined") {
                cancelIdleCallback(idleHandle);
            } else {
                clearTimeout(idleHandle);
            }
            ScrollTrigger.getAll().forEach((t) => {
                if (t.trigger === sectionRef.current) t.kill();
            });
            renderer.dispose();
            if (particlesGroup.userData.points) {
                particlesGroup.userData.points.geometry.dispose();
                particlesGroup.userData.points.material.dispose();
            }
        };
    }, [mounted]);

    if (!mounted) return <section className="relative w-full h-[412vh] md:h-[250vh] bg-black z-10" />;

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[412vh] md:h-[250vh] bg-black z-10"
            data-theme="dark"
        >
            <div
                ref={stickyRef}
                className="sticky top-0 w-full h-screen overflow-hidden"
            >
                {/* DESKTOP HEADLINE — hidden on mobile */}
                <div className="absolute inset-x-0 top-0 z-0 hidden md:flex items-start justify-center pt-32 pointer-events-none h-full overflow-hidden bg-black">
                    <div ref={bigTextRef} className="w-full text-center px-4">
                        <h2
                            className="text-[11vw] font-bold tracking-tighter leading-none select-none whitespace-nowrap"
                            style={{
                                background: "#0C5920",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Let’s Build
                        </h2>
                    </div>
                </div>

                {/* PARTICLE CANVAS */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-10 md:z-40 pointer-events-none"
                />

                {/* CONTENT PANEL */}
                <div
                    ref={blackLayerRef}
                    className="absolute inset-0 bg-black/0 md:bg-black z-20 md:z-30 flex items-start justify-end md:justify-start px-8 md:px-24 pt-40 translate-y-0 md:translate-y-full will-change-transform pointer-events-none"
                >
                    <div
                        ref={listContainerRef}
                        className="w-full md:w-1/2 flex flex-col gap-10 text-white md:pr-12 md:mt-[48vh] pointer-events-auto overflow-hidden"
                    >
                        {LOCATIONS.map((loc, i) => (
                            <div
                                key={loc.id}
                                ref={(el) => (listItemsRef.current[i] = el)}
                                className="flex flex-col gap-2 opacity-100 md:opacity-0 border-b border-gray-800 md:border-b-0 pb-6 md:pb-0 last:border-0 mb-6 md:mb-0"
                            >
                                <div className="p-6 rounded-2xl bg-[#151515] border border-white/5 md:bg-transparent md:border-0 md:p-0">
                                    <div className="flex items-center gap-4 text-gray-500 font-mono text-sm capitalize">
                                        <span>{loc.id}</span>
                                        <span className="h-[1px] w-8 bg-gray-700" />
                                        {loc.subtitle && (
                                            <span className="text-green-500 italic text-sm md:text-base leading-relaxed">
                                                {loc.subtitle}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-light mt-2 mb-2">
                                        {loc.title}
                                    </h3>
                                    <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
                                        {loc.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE IMAGE FOR DESKTOP */}
                    <div className="hidden md:flex absolute right-0 bottom-[-20px] lg:bottom-[-40px] h-screen w-1/2 items-end justify-center pointer-events-none px-12 pb-0">
                        <img 
                            src="/assets/Gemini_Generated_Image_jg9o8ojg9o8ojg9o 4.png" 
                            alt="Global Reach"
                            className="w-full h-auto max-h-[100vh] object-contain object-bottom opacity-95"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
