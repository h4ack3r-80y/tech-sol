"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D tech elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Central Core Sphere with Wireframe
    const sphereGeo = new THREE.IcosahedronGeometry(70, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphere);

    // 2. Outer Ring 1 (Horizontal Orbit)
    const ring1Geo = new THREE.TorusGeometry(88, 1, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    globeGroup.add(ring1);

    // 3. Outer Ring 2 (Tilted Orbit)
    const ring2Geo = new THREE.TorusGeometry(96, 0.8, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    globeGroup.add(ring2);

    // 4. Data Nodes / Particle Points on Sphere
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 70;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 3.5,
      transparent: true,
      opacity: 0.9,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.5;
      targetY = (y / rect.height) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth inertia
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate group
      globeGroup.rotation.y += 0.004;
      globeGroup.rotation.x += 0.002;

      // Parallax with mouse
      globeGroup.rotation.y += mouseX * 0.02;
      globeGroup.rotation.x += mouseY * 0.02;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.004;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D HUD Indicators */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md border border-blue-500/30 text-[11px] font-mono text-blue-400 flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>3D_TECH_CORE // ONLINE</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono text-teal-300 shadow-lg">
          <span>INTERACTIVE_SYSTEM // DRAG_ROTATE</span>
        </div>
      </div>
    </div>
  );
}
