"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Button from "../ui/Button";

import { heroSlides } from "@/src/data/heroSlides";
import { partnerLogos } from "@/src/data/partnerLogos";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative h-[90vh] bg-white pt-8">
      <div className="md: mx-auto flex flex-col items-center py-12 md:px-24 lg:max-w-7xl lg:flex-row lg:px-0 lg:py-24">
        <div className="px-4 lg:px-0">
          <h1 className="font-libre mb-4 text-4xl font-semibold md:text-6xl lg:text-7xl">
            Build Wealth with Confidence
          </h1>
          <p className="mb-8 max-w-[90%] font-sans text-sm leading-6 text-neutral-600 md:max-w-lg lg:mb-12 lg:text-lg">
            Personalized investment strategies, financial planning, and wealth
            management designed to help you achieve your life goals.
          </p>
          <Button path="/about" />
        </div>
        <div className="relative">
          <Image
            src={"/images/coin.png"}
            height={450}
            width={450}
            alt="Decorative Image"
            className="absolute -top-10 -right-45 z-10 scale-40 lg:-right-70 lg:scale-90"
          />
          <Image
            src={"/images/coin.png"}
            height={150}
            width={150}
            alt="Decorative Image"
            className="absolute bottom-15 -left-20 z-10 scale-65 lg:scale-100"
          />
          <Image
            src={"/images/coin.png"}
            height={250}
            width={250}
            alt="Decorative Image"
            className="absolute right-50 -bottom-10 z-10 scale-55 lg:scale-95"
          />
          <div className="relative h-100 w-100 overflow-hidden sm:h-105 sm:w-105 lg:h-140 lg:w-140">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[currentIndex].alt}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[currentIndex].src}
                  height={750}
                  width={950}
                  alt={heroSlides[currentIndex].alt}
                  className="h-full w-full scale-90 object-contain lg:scale-110"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* NOT USING ATM  */}
      <div>
        <div className="absolute -right-20 -bottom-50 hidden">
          <Image
            src={"/images/green-rise.svg"}
            height={500}
            width={950}
            alt="Decorative Image"
            className=""
          />
        </div>
      </div>

      <div className="max-w-7xl pl-4 md:mx-auto md:-mt-20 md:pl-0">
        <p className="mt-4 md:mt-0 md:mb-0">Powered by</p>
        <div className="max-w-xl overflow-hidden rounded-lg">
          <div
            className="duration-2s flex h-32 transition-transform ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {partnerLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="h-32 w-full shrink-0"
              >
                <Image
                  src={logo.src}
                  height={100}
                  width={250}
                  alt={logo.alt}
                  className="h-32 w-auto max-w-62.5 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
