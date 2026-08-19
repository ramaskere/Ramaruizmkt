"use client";

import { useRef } from "react";

export default function Carousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".result-card");
    const amount = (card?.offsetWidth ?? 320) + 20;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <ul className="results-grid stagger" ref={trackRef}>
        {children}
      </ul>
      <div className="carousel-nav">
        <button
          type="button"
          className="carousel-btn"
          aria-label="Ver resultado anterior"
          onClick={() => scrollByCard(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-btn"
          aria-label="Ver siguiente resultado"
          onClick={() => scrollByCard(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
