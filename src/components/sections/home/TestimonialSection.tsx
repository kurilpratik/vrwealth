"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { testimonials, clientele } from "@/src/data/testimonialData";
import Figures from "../../layout/Figures";
import ClienteleCard from "../../layout/ClienteleCard";

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Slider Animation

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [isMobile]);

  const goTo = (i: number) => {
    setIndex(i % testimonials.length);
  };

  return (
    <section>
      {/* FIXED IMG QUOTE  */}
      <div className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/quote-bg.jpg"
            alt="Trading and finance background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="mx-auto mb-4 text-sm font-semibold tracking-[0.35em] text-slate-300 uppercase">
              Market Insight
            </p>
            <blockquote className="text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
              “The strongest portfolios are built with discipline, patience, and
              a long-term view of opportunity.”
            </blockquote>
            <p className="small-heading mx-auto mt-6">— VR Wealth Creation</p>
          </div>
        </div>
      </div>

      <div className="pt-32 sm:mx-auto sm:max-w-7xl">
        <p className="small-heading text-center sm:max-w-7xl">Our Clients</p>
        <h3 className="heading mb-8 text-center">
          Tailored Financial
          <br />
          Solutions for Every Client
        </h3>
      </div>

      <div className="relative w-full sm:overflow-hidden">
        {/* <motion.div
          className="flex overflow-x-scroll sm:overflow-x-visible"
          style={{ width: `${testimonials.length}` }}
          animate={
            isMobile
              ? undefined
              : { x: `-${(index * 100) / testimonials.length}%` }
          }
          transition={
            isMobile
              ? undefined
              : { type: "tween", ease: "easeInOut", duration: 0.8 }
          }
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex shrink-0 justify-center px-4">
              <Testimonial
                photo={testimonial.photo}
                description={testimonial.description}
                name={testimonial.name}
                brand={testimonial.brand}
              />
            </div>
          ))}
        </motion.div>

        <div className="mt-6 hidden justify-center gap-3 sm:flex">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === index ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div> */}
      </div>

      <Figures />

      <div className="clientele w-full py-6">
        <div className="flex flex-col gap-4 px-4 sm:flex-row sm:gap-8 sm:px-0">
          {clientele.map((item, i) => (
            <ClienteleCard
              key={i}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
