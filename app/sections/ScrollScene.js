"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ScrollScene() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    /* ===============================
       THREE.JS SETUP
    =============================== */
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    /* ===============================
       LIGHTING
    =============================== */
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x0088ff, 1.5, 20);
    blueLight.position.set(-5, -2, 2);
    scene.add(blueLight);

    /* ===============================
       FLUID GLOB SHADER
    =============================== */
    const vertexShader = `
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      // Simplex 3D Noise function (simplified)
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
        i = mod289(i);
        vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        // Noise displacement
        float noiseVal = snoise(position * 1.5 + uTime * 0.5);
        vec3 newPos = position + normal * (noiseVal * 0.3);

        vec4 viewPos = modelViewMatrix * vec4(newPos, 1.0);
        vViewPosition = -viewPos.xyz;
        
        gl_Position = projectionMatrix * viewPos;
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec3 viewDir = normalize(vViewPosition);
        vec3 normal = normalize(vNormal);
        
        // Fresnel
        float fresnel = pow(1.0 - dot(viewDir, normal), 3.0);
        
        // Cyber-green palette
        vec3 coreColor = vec3(0.0, 0.4, 0.2);
        vec3 glowColor = vec3(0.0, 1.0, 0.6);
        
        // Mix based on fresnel
        vec3 color = mix(coreColor, glowColor, fresnel);
        
        // Add subtle pulse
        color *= 0.8 + 0.2 * sin(uTime * 2.0);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const globGeo = new THREE.SphereGeometry(1.8, 128, 128);
    const globMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const glob = new THREE.Mesh(globGeo, globMat);
    scene.add(glob);

    /* ===============================
       PARTICLES / DEBRIS (Optional cinematic touch)
    =============================== */
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ff88,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    /* ===============================
       INITIAL POSITIONING
    =============================== */
    // Start at Top-Right
    glob.position.set(3.5, 1.5, 0);

    /* ===============================
       GSAP SCROLL INTERACTION
    =============================== */
    // Trigger based on the main container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // slightly looser scrub for smoothness
      }
    });

    // 1. Move Glob from Top-Right (Section 1) to Left-Center (Section 2)
    // Note: Since the canvas is sticky, these coordinates are relative to the viewport.

    // Initial: x: 3.5, y: 1.5 (Top Right)
    // Target: x: -3.5, y: 0.5 (Left side, centered vertically in the "green" section view)

    tl.to(glob.position, {
      x: -3.5,
      y: 0,
      ease: "power1.inOut",
    }, 0);

    // 2. Rotate Glob
    tl.to(glob.rotation, {
      y: Math.PI * 2,
      z: 0.5,
      ease: "none",
    }, 0);

    // Changing Glob Color for the Green Section? 
    // The reference implies it stays consistent, but we have a custom shader.
    // Let's keep it consistent.

    /* ===============================
       ANIMATION LOOP
    =============================== */
    let raf;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      globMat.uniforms.uTime.value = time;

      // Idle motion
      glob.position.y += Math.sin(time) * 0.002;
      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach(t => t.kill());

      globGeo.dispose();
      globMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 text-white">

      {/* STICKY CANVAS CONTAINER */}
      <div className="sticky top-0 h-screen w-full pointer-events-none z-40 overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* 
         SCROLL CONTENT 
         We pull the content UP by 100vh so it starts at the top of the container,
         overlaying the sticky canvas initially.
      */}
      <div className="relative -mt-[100vh] z-20">

        {/* SECTION 1: Transparent (Video BG shows through) */}
        <div className="h-screen w-full flex items-center px-8 md:px-24">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
              Go Global<br />or Get Left<br />Behind
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mt-8 leading-relaxed">
              Your market is no longer limited by geography — and neither should your growth.
              We help brands break boundaries.
            </p>
            <button className="mt-8 px-10 py-4 bg-[#00ff88] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,136,0.5)]">
              Get Started
            </button>
          </div>
        </div>

        {/* SECTION 2: Green Background */}
        <div className="h-screen w-full flex items-center justify-end px-8 md:px-24 bg-[#0C5920]">
          <div className="max-w-xl text-right">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Business Deserves More Than Local Visibility
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90">
              In a world where your competitors are scaling faster than ever, staying local is the fastest way to become irrelevant.
              We turn your brand into a global force.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
