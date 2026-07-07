"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

import { partnerLogos } from "@/src/data/partnerLogos";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
    }, 1500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] bg-white pt-8">
      <div className="mx-auto flex flex-col items-center py-12 md:max-w-5xl lg:max-w-7xl lg:flex-row lg:py-32">
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
            className="absolute -top-20 -right-45 z-10 scale-40 lg:-right-70 lg:scale-90"
          />
          <Image
            src={"/images/coin.png"}
            height={150}
            width={150}
            alt="Decorative Image"
            className="absolute bottom-5 -left-20 z-10 scale-65 lg:scale-100"
          />
          <Image
            src={"/images/coin.png"}
            height={250}
            width={250}
            alt="Decorative Image"
            className="absolute right-50 -bottom-20 z-10 scale-55 lg:scale-95"
          />
          {/* HERO IMAGE  */}
          <Image
            src={"/images/hero-img.png"}
            height={750}
            width={950}
            alt="VR Wealth"
            className="scale-90 lg:scale-100"
          />
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

      <div className="max-w-7xl pl-4 md:mx-auto md:pl-0">
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
