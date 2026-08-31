"use client";

import { useEffect, useRef } from "react";

export default function Reveal() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      items.forEach((el) => observer.observe(el));

      // Barra de progreso de scroll
      let ticking = false;
      const update = () => {
        const bar = barRef.current;
        if (bar) {
          const h =
            document.documentElement.scrollHeight - window.innerHeight;
          const p = h > 0 ? window.scrollY / h : 0;
          bar.style.transform = `scaleX(${Math.min(Math.max(p, 0), 1)})`;
        }
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);

      // Parallax sutil del hero al mover el puntero
      const hero = document.querySelector<HTMLElement>(".hero");
      const rings = document.querySelector<HTMLElement>(".hero-rings");
      const stack = document.querySelector<HTMLElement>(".hero-stack");
      let rafId = 0;
      const onPointer = (e: PointerEvent) => {
        if (!hero) return;
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          if (rings) rings.style.transform = `translate(${x * -16}px, ${y * -16}px)`;
          if (stack) stack.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
        });
      };
      const resetPointer = () => {
        cancelAnimationFrame(rafId);
        if (rings) rings.style.transform = "";
        if (stack) stack.style.transform = "";
      };
      hero?.addEventListener("pointermove", onPointer);
      hero?.addEventListener("pointerleave", resetPointer);

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        cancelAnimationFrame(rafId);
        hero?.removeEventListener("pointermove", onPointer);
        hero?.removeEventListener("pointerleave", resetPointer);
      };
    }
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}
