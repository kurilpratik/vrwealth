"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../../ui/ScrollReveal";
import { Services } from "@/src/data/services";

const ServicesSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = Services[activeServiceIndex];

  return (
    <section
      id="services"
      className="mx-auto max-w-max px-4 py-20 sm:max-w-7xl sm:px-0 sm:py-40"
    >
      <ScrollReveal className="max-w-2xl">
        <p className="small-heading">What we offer</p>
        <h2 className="heading text-3xl sm:text-4xl">
          Expertise for every stage of your financial life
        </h2>
        <p className="max-w-xl pt-4 pb-12 font-sans text-sm leading-6 text-neutral-600 md:text-lg">
          A considered approach to planning, investing, and protecting the
          future you are working toward.
        </p>
      </ScrollReveal>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.82fr)] lg:gap-16">
        <div className="border-t border-neutral-200">
          {Services.map((service, index) => {
            const isActive = activeServiceIndex === index;
            const serviceNumber = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal
                key={service.slug}
                delay={index * 0.05}
                amount={0.1}
              >
                <Link
                  href={service.href}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onFocus={() => setActiveServiceIndex(index)}
                  className={`group relative grid grid-cols-[2.75rem_minmax(0,1fr)_4.75rem] gap-x-3 border-b border-neutral-200 py-5 transition-colors duration-300 lg:grid-cols-[4.5rem_1fr_auto] lg:gap-x-5 lg:py-7 ${
                    isActive ? "text-primary" : "text-primary-dark"
                  }`}
                >
                  <span className="pt-1 text-xs font-medium tracking-[0.18em] text-neutral-400">
                    {serviceNumber}
                  </span>
                  <div>
                    <p className="max-w-none text-lg leading-tight font-semibold text-current sm:text-2xl">
                      {service.title}
                    </p>
                    <p className="mt-1 max-w-none text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase">
                      {service.category}
                    </p>
                    <p
                      className={`grid overflow-hidden text-sm leading-6 text-neutral-600 transition-[grid-template-rows,margin] duration-300 ${
                        isActive
                          ? "mt-4 grid-rows-[1fr]"
                          : "mt-0 grid-rows-[0fr]"
                      }`}
                    >
                      <span className="overflow-hidden">
                        {service.description}
                      </span>
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Explore service <span aria-hidden="true">→</span>
                    </span>
                  </div>
                  <div className="bg-primary-dark relative h-20 overflow-hidden rounded-lg lg:hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="76px"
                      className="object-cover opacity-85"
                    />
                    <span className="bg-primary-dark/70 absolute right-1 bottom-1 grid size-6 place-items-center rounded-full text-white">
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </span>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={`mt-1 hidden size-5 shrink-0 transition-transform duration-300 lg:block lg:size-6 ${
                      isActive
                        ? "translate-x-0.5 -translate-y-0.5"
                        : "group-hover:text-primary text-neutral-400"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`bg-primary absolute bottom-0 left-0 h-px transition-[width] duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          className="bg-primary-dark relative hidden min-h-[38rem] overflow-hidden rounded-2xl shadow-xl lg:block"
          direction="left"
          delay={0.12}
        >
          <Image
            key={activeService.image}
            src={activeService.image}
            alt={activeService.title}
            fill
            sizes="(max-width: 1023px) 0px, (max-width: 1280px) 38vw, 480px"
            className="object-cover opacity-80 transition-opacity duration-500"
          />
          <div className="from-primary-dark via-primary-dark/35 absolute inset-0 bg-linear-to-t to-transparent" />
          <div className="absolute right-6 bottom-7 left-6 text-white">
            <p className="text-primary-light mb-3 max-w-none text-xs font-medium tracking-[0.18em] uppercase">
              {activeService.category}
            </p>
            <h3 className="font-libre text-3xl leading-tight font-semibold">
              {activeService.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-200">
              {activeService.tagline}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
