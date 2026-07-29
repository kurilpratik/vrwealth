"use client";

import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";
import Counter from "../ui/Counter";
import { figures } from "@/src/data/testimonialData";

const Figures = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const figuresRef = useRef<HTMLDivElement | null>(null);
  const [figuresVisible, setFiguresVisible] = useState(false);

  // Figures in presence

  useEffect(() => {
    const el = figuresRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFiguresVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={figuresRef} className="figures mx-auto max-w-3xl py-8 sm:py-20">
      <div className="mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center">
          <p className="py-8 text-6xl font-bold text-black sm:text-7xl">
            <Counter
              target={figures.clients}
              duration={1800}
              suffix="+"
              start={figuresVisible}
            />
          </p>
          <p className="text-secondary text-xs">HAPPY CLIENTS</p>
        </div>

        <div className="text-center">
          <p className="py-8 text-6xl font-bold text-black sm:text-7xl">
            <Counter
              target={figures.team}
              duration={2000}
              suffix="+"
              start={figuresVisible}
            />
          </p>
          <p className="text-secondary text-xs">EXPERT TEAM</p>
        </div>

        <div className="text-center">
          <p className="py-8 text-6xl font-bold text-black sm:text-7xl">
            <Counter
              target={figures.years}
              duration={1600}
              suffix="+"
              start={figuresVisible}
            />
          </p>
          <p className="text-secondary text-xs">YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default Figures;
