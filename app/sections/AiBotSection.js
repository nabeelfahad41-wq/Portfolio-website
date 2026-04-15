"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function AiBotSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        /* ------------ CONFIG ------------ */
        const CONFIG = {
            floatSpeed: 1.5,
            floatAmp: 0.10,
            mouseSensitivity: 0.6,
            breathSpeed: 1.2,
            breathAmp: 0.05
        };

        /* ------------ SCENE SETUP ------------ */
        const scene = new THREE.Scene();
        scene.background = null;

        // Use container dimensions
        let width = containerRef.current.clientWidth;
        let height = containerRef.current.clientHeight;

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 8);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);

        /* ------------ ENVIRONMENT ------------ */
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

        /* ------------ LIGHTING ------------ */
        scene.add(new THREE.AmbientLight(0xffffff, 0.35));

        const mainLight = new THREE.DirectionalLight("#e0f8ff", 2);
        mainLight.position.set(4, 8, 6);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.set(1024, 1024);
        scene.add(mainLight);

        const rim1 = new THREE.SpotLight("#0C5920", 6, 20, Math.PI / 6);
        rim1.position.set(-5, 4, -6);
        rim1.lookAt(0, 0, 0);
        scene.add(rim1);

        const rim2 = new THREE.SpotLight("#0C5920", 4, 20, Math.PI / 6);
        rim2.position.set(6, -1, -5);
        rim2.lookAt(0, 0, 0);
        scene.add(rim2);

        /* ------------ MATERIALS ------------ */
        const whiteBodyMat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color("#f6fbff"),
            metalness: 0.25,
            roughness: 0.18,
            clearcoat: 1.0,
            clearcoatRoughness: 0.06,
            sheen: 0.6,
            sheenColor: new THREE.Color("#e4f5ff"),
            envMapIntensity: 1.4
        });

        const greenAccentMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#0C5920"),
            metalness: 0.5,
            roughness: 0.3
        });

        const gloveMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#0C5920"),
            emissive: new THREE.Color("#0C5920"),
            emissiveIntensity: 0.6,
            metalness: 0.4,
            roughness: 0.25
        });

        const metalJointMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#b0bcc8"),
            metalness: 0.9,
            roughness: 0.22
        });

        const screenMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#050910"),
            emissive: new THREE.Color("#050910"),
            emissiveIntensity: 0.8,
            roughness: 0.5,
            metalness: 0.7
        });

        const eyeMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: new THREE.Color("#c7f1ff"),
            emissiveIntensity: 3.0,
            roughness: 0.1,
            metalness: 0.0
        });

        const smileMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: new THREE.Color("#c7f1ff"),
            emissiveIntensity: 2.2,
            roughness: 0.2,
            metalness: 0.0
        });

        const chestCoreMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: new THREE.Color("#c7f1ff"),
            emissiveIntensity: 2.2,
            roughness: 0.2,
            metalness: 0.0
        });

        /* ------------ BOT HIERARCHY ------------ */
        const botGroup = new THREE.Group();
        scene.add(botGroup);

        botGroup.scale.set(0.82, 0.82, 0.82);

        const torsoGroup = new THREE.Group();
        botGroup.add(torsoGroup);

        /* ------------ HEAD + FACE ------------ */
        const headGroup = new THREE.Group();
        botGroup.add(headGroup);

        const headShellGeo = new RoundedBoxGeometry(1.9, 1.7, 1.5, 10, 0.6);
        const headShell = new THREE.Mesh(headShellGeo, whiteBodyMat);
        headShell.castShadow = true;
        headShell.receiveShadow = true;
        headGroup.add(headShell);

        const screenGeo = new RoundedBoxGeometry(1.3, 0.9, 0.12, 10, 0.35);
        const screen = new THREE.Mesh(screenGeo, screenMat);
        screen.position.set(0, 0.05, 0.82);
        headGroup.add(screen);

        const eyeGeo = new THREE.SphereGeometry(0.12, 24, 24);
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.scale.z = rightEye.scale.z = 0.6;
        leftEye.position.set(-0.35, 0.18, 0.93);
        rightEye.position.set(0.35, 0.18, 0.93);
        headGroup.add(leftEye, rightEye);

        const smileGeo = new THREE.TorusGeometry(0.32, 0.04, 16, 64, Math.PI);
        const smile = new THREE.Mesh(smileGeo, smileMat);
        smile.rotation.x = Math.PI / 2;
        smile.rotation.z = Math.PI;
        smile.position.set(0, -0.20, 0.94);
        headGroup.add(smile);

        const antennaStem = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.05, 0.35, 16),
            metalJointMat
        );
        antennaStem.position.set(0, 1.1, 0);
        const antennaBall = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 16, 16),
            greenAccentMat
        );
        antennaBall.position.set(0, 1.35, 0);
        headGroup.add(antennaStem, antennaBall);

        headGroup.position.set(0, 0.9, 0);

        /* ------------ NECK + BODY + CHEST RING ------------ */
        const neckGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.25, 24);
        const neck = new THREE.Mesh(neckGeo, metalJointMat);
        neck.position.set(0, 0.45, 0);
        torsoGroup.add(neck);

        const bodyGeo = new RoundedBoxGeometry(1.5, 1.4, 1.2, 10, 0.6);
        const body = new THREE.Mesh(bodyGeo, whiteBodyMat);
        body.position.set(0, -0.4, 0);
        body.castShadow = true;
        body.receiveShadow = true;
        torsoGroup.add(body);

        const chestOuter = new THREE.Mesh(
            new THREE.TorusGeometry(0.35, 0.05, 16, 48),
            greenAccentMat
        );
        chestOuter.rotation.x = Math.PI / 2;
        chestOuter.position.set(0, -0.25, 0.63);

        const chestCore = new THREE.Mesh(
            new THREE.CircleGeometry(0.18, 32),
            chestCoreMat
        );
        chestCore.position.set(0, -0.25, 0.65);
        chestCore.rotation.x = -Math.PI / 2;

        torsoGroup.add(chestOuter, chestCore);
        torsoGroup.position.y = -0.15;

        /* ------------ SHOULDERS ------------ */
        const shoulderGeo = new THREE.SphereGeometry(0.35, 24, 24);
        const leftShoulder = new THREE.Mesh(shoulderGeo, greenAccentMat);
        const rightShoulder = new THREE.Mesh(shoulderGeo, greenAccentMat);
        leftShoulder.position.set(-1.05, 0.1, 0);
        rightShoulder.position.set(1.05, 0.1, 0);
        torsoGroup.add(leftShoulder, rightShoulder);

        /* ------------ ARMS + GLOVES ------------ */
        const gloveMeshes = [];
        const handGroups = [];

        function createArm(side = 1) {
            const armGroup = new THREE.Group();

            const upperArm = new THREE.Mesh(
                new THREE.CylinderGeometry(0.12, 0.12, 0.7, 18),
                metalJointMat
            );
            upperArm.position.y = -0.35;

            const elbowJoint = new THREE.Mesh(
                new THREE.SphereGeometry(0.18, 18, 18),
                metalJointMat
            );
            elbowJoint.position.y = -0.7;

            const foreArm = new THREE.Mesh(
                new THREE.CylinderGeometry(0.11, 0.11, 0.55, 18),
                metalJointMat
            );
            foreArm.position.y = -1.05;

            const foreShell = new THREE.Mesh(
                new RoundedBoxGeometry(0.55, 0.7, 0.55, 8, 0.25),
                whiteBodyMat
            );
            foreShell.position.y = -1.05;
            foreShell.position.z = 0.05;

            const handBase = new THREE.Mesh(
                new RoundedBoxGeometry(0.45, 0.25, 0.35, 6, 0.15),
                gloveMat
            );
            handBase.position.y = -1.35;

            const fingerGeo = new THREE.BoxGeometry(0.08, 0.25, 0.12);
            const finger1 = new THREE.Mesh(fingerGeo, metalJointMat);
            const finger2 = new THREE.Mesh(fingerGeo, metalJointMat);
            finger1.position.set(-0.12, -1.52, 0.08);
            finger2.position.set(0.12, -1.52, -0.08);

            const handGroup = new THREE.Group();
            handGroup.add(handBase, finger1, finger2);

            armGroup.add(upperArm, elbowJoint, foreArm, foreShell, handGroup);

            armGroup.position.set(side * 1.05, 0.1, 0);
            armGroup.rotation.z = side * 0.18;

            gloveMeshes.push(handBase);
            handGroups.push(handGroup);

            return armGroup;
        }

        const leftArm = createArm(-1);
        const rightArm = createArm(1);
        torsoGroup.add(leftArm, rightArm);

        /* ------------ LEGS ------------ */
        function createLeg(side = 1) {
            const legGroup = new THREE.Group();

            const hipJoint = new THREE.Mesh(
                new THREE.SphereGeometry(0.22, 20, 20),
                metalJointMat
            );
            hipJoint.position.y = -0.05;
            legGroup.add(hipJoint);

            const upperLeg = new THREE.Mesh(
                new THREE.CylinderGeometry(0.18, 0.18, 0.42, 20),
                metalJointMat
            );
            upperLeg.position.y = -0.38;
            legGroup.add(upperLeg);

            const kneeJoint = new THREE.Mesh(
                new THREE.SphereGeometry(0.20, 20, 20),
                metalJointMat
            );
            kneeJoint.position.y = -0.68;
            legGroup.add(kneeJoint);

            const kneeCap = new THREE.Mesh(
                new RoundedBoxGeometry(0.5, 0.35, 0.45, 8, 0.18),
                whiteBodyMat
            );
            kneeCap.position.set(0, -0.68, 0.18);
            legGroup.add(kneeCap);

            const lowerShell = new THREE.Mesh(
                new RoundedBoxGeometry(0.7, 1.0, 0.7, 10, 0.35),
                whiteBodyMat
            );
            lowerShell.position.y = -1.15;
            legGroup.add(lowerShell);

            const ankleRing = new THREE.Mesh(
                new THREE.TorusGeometry(0.45, 0.05, 12, 40),
                greenAccentMat
            );
            ankleRing.rotation.x = Math.PI / 2;
            ankleRing.position.y = -1.55;
            legGroup.add(ankleRing);

            const foot = new THREE.Mesh(
                new RoundedBoxGeometry(0.95, 0.32, 1.3, 10, 0.25),
                whiteBodyMat
            );
            foot.position.set(0, -1.8, 0.15);
            legGroup.add(foot);

            const sole = new THREE.Mesh(
                new RoundedBoxGeometry(1.0, 0.12, 1.4, 8, 0.2),
                greenAccentMat
            );
            sole.position.set(0, -1.94, 0.15);
            legGroup.add(sole);

            legGroup.position.set(side * 0.55, -0.75, 0);
            return legGroup;
        }

        const leftLeg = createLeg(-1);
        const rightLeg = createLeg(1);
        torsoGroup.add(leftLeg, rightLeg);

        /* ------------ INPUT / HEAD ROTATION ------------ */
        const mouse = new THREE.Vector2();
        const clock = new THREE.Clock();

        const MAX_X = 0.35;
        const MAX_Y = 0.55;

        // Container Center helper
        function getContainerCenter() {
            if (!containerRef.current) return { x: 0, y: 0 };
            const rect = containerRef.current.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        }

        // Mouse Move Event Listener
        const handleMouseMove = (event) => {
            const center = getContainerCenter();
            // Matching prompt logic:
            mouse.x = (event.clientX - center.x) / 200;
            mouse.y = (event.clientY - center.y) / 200;
        };
        window.addEventListener("mousemove", handleMouseMove);

        /* ------------ BLINKING LOGIC ------------ */
        const eyes = [leftEye, rightEye];
        let nextBlinkTime = 1.5 + Math.random() * 3.0;
        let blinkStartTime = -1;
        const BLINK_DURATION = 0.10;

        function updateBlink(time) {
            if (time > nextBlinkTime && blinkStartTime < 0) {
                blinkStartTime = time;
                nextBlinkTime = time + 1.5 + Math.random() * 3.0;
            }

            if (blinkStartTime >= 0) {
                const t = time - blinkStartTime;
                if (t < BLINK_DURATION) {
                    const k = 1.0 - t / BLINK_DURATION;
                    const scaleY = 0.15 + 0.85 * k;
                    eyes.forEach(e => e.scale.y = scaleY);
                } else if (t < BLINK_DURATION * 2) {
                    const k = (t - BLINK_DURATION) / BLINK_DURATION;
                    const scaleY = 0.15 + 0.85 * k;
                    eyes.forEach(e => e.scale.y = scaleY);
                } else {
                    eyes.forEach(e => e.scale.y = 1.0);
                    blinkStartTime = -1;
                }
            }
        }

        /* ------------ MAIN ANIMATION LOOP ------------ */
        let raf;
        function animate() {
            raf = requestAnimationFrame(animate);

            const delta = clock.getDelta();
            const time = clock.getElapsedTime();

            botGroup.position.y = Math.sin(time * CONFIG.floatSpeed) * CONFIG.floatAmp;

            torsoGroup.position.y = -0.15 + Math.sin(time * CONFIG.breathSpeed) * CONFIG.breathAmp;

            const targetX = THREE.MathUtils.clamp(mouse.y * CONFIG.mouseSensitivity, -MAX_X, MAX_X);
            const targetY = THREE.MathUtils.clamp(mouse.x * CONFIG.mouseSensitivity, -MAX_Y, MAX_Y);
            headGroup.rotation.x += (targetX - headGroup.rotation.x) * 3 * delta;
            headGroup.rotation.y += (targetY - headGroup.rotation.y) * 3 * delta;

            const bodyTargetX = THREE.MathUtils.clamp(mouse.y * CONFIG.mouseSensitivity * 0.2, -0.2, 0.2);
            const bodyTargetY = THREE.MathUtils.clamp(mouse.x * CONFIG.mouseSensitivity * 0.2, -0.2, 0.2);
            botGroup.rotation.x += (bodyTargetX - botGroup.rotation.x) * 2 * delta;
            botGroup.rotation.y += (bodyTargetY - botGroup.rotation.y) * 2 * delta;

            const pulse = (Math.sin(time * 2.0) + 1.0) * 0.5;
            gloveMat.emissiveIntensity = 0.4 + pulse * 1.3;

            chestOuter.rotation.z += 0.5 * delta;

            headGroup.rotation.z = Math.sin(time * 1.5) * 0.05;

            const footShift = Math.sin(time * 1.2) * 0.05;
            leftLeg.position.x = -0.55 + footShift;
            rightLeg.position.x = 0.55 - footShift;

            const handWiggle = Math.sin(time * 1.8) * 0.08;
            handGroups[0].rotation.z = 0.05 + handWiggle;
            handGroups[1].rotation.z = -0.05 - handWiggle;

            updateBlink(time);

            renderer.render(scene, camera);
        }

        animate();

        /* ------------ RESIZE ------------ */
        // Re-implementing resize logic to maintain layout (Bot on Right for Desktop)
        const onResize = () => {
            if (!containerRef.current) return;
            width = containerRef.current.clientWidth;
            height = containerRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);

            // Responsive Positioning
            if (width < 768) {
                botGroup.position.x = 0;
                botGroup.scale.set(0.65, 0.65, 0.65);
            } else {
                botGroup.position.x = 2.8;
                botGroup.scale.set(0.82, 0.82, 0.82); // Matches prompt scale 0.82
            }
        };
        // Trigger once to set initial position
        onResize();
        window.addEventListener("resize", onResize);

        /* ------------ CLEANUP ------------ */
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", handleMouseMove);

            pmremGenerator.dispose();
            renderer.dispose();
            whiteBodyMat.dispose();
            greenAccentMat.dispose();
            gloveMat.dispose();
            metalJointMat.dispose();
            screenMat.dispose();
            eyeMat.dispose();
            smileMat.dispose();
            chestCoreMat.dispose();

            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };

    }, []);

    return (
        <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-transparent">
            {/* TEXT CONTENT LAYER */}
            <div className="absolute inset-0 z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center items-start pointer-events-none">
                <div className="max-w-3xl lg:max-w-4xl text-left pointer-events-auto mt-20 md:mt-0">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.15]">
                        AI Integrated <br />
                        Advanced <br />
                        Marketing Campaigns
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                        Hyper-targeted paid campaigns powered by data, creative testing, and full-funnel tracking across every major social platform.
                    </p>
                    <button className="px-8 py-3.5 bg-[#0C5920] text-white font-bold rounded hover:bg-[#0a481a] transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.4)] flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-[#FFC107] block"></span>
                        <span className="text-sm md:text-base tracking-wide">CONTACT</span>
                    </button>
                </div>
            </div>

            {/* 3D CANVAS LAYER */}
            <div ref={containerRef} className="w-full h-full absolute inset-0 z-10" />
        </section>
    );
}
