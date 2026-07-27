"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const cardBaseClass =
  "overflow-hidden rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out sm:p-10";

const features = [
  {
    title: "Diversification of Investment Portfolio",
    description:
      "Expanding into alternative assets, real estate, and global markets to maximize returns and minimize risks.",
  },
  {
    title: "Personalized Wealth Strategies",
    description:
      "Tailored planning that aligns your investments, goals, and risk profile with long-term growth.",
  },
  {
    title: "Expert Financial Guidance",
    description:
      "Access to seasoned advisors who help you navigate market changes with clarity and confidence.",
  },
  {
    title: "Seamless Client Experience",
    description:
      "Technology-driven support and transparent communication to keep your financial journey effortless.",
  },
];

const ChooseUsSection = () => {
  const rightRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: rightRef,
    offset: ["start end", "end start"],
  });

  const topOffset0 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const topOffset1 = useTransform(scrollYProgress, [0, 1], [220, 72]);
  const topOffset2 = useTransform(scrollYProgress, [0, 1], [440, 144]);
  const topOffset3 = useTransform(scrollYProgress, [0, 1], [660, 216]);
  const topOffsets = [topOffset0, topOffset1, topOffset2, topOffset3];

  return (
    <section className="bg-primary-light min-h-screen w-full">
      <div className="mx-auto mt-20 flex flex-col gap-0 px-4 py-20 sm:max-w-7xl sm:flex-row sm:gap-40 sm:px-0">
        <div className="left max-w-2xl">
          <p className="small-heading">Why Choose Us</p>
          <h3 className="heading">
            Maximize your wealth with strategic investments
          </h3>
          <p className="py-6 text-sm font-semibold">
            Flexibility. Expert Advisors. User Experience.
          </p>
        </div>
        <div className="right mt-10 w-full sm:min-w-[32rem]">
          <div ref={rightRef} className="relative w-full sm:min-h-140">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={`${cardBaseClass} absolute right-0 left-0 ${
                  index === 0
                    ? "z-40"
                    : index === 1
                      ? "z-30"
                      : index === 2
                        ? "z-20"
                        : "z-10"
                }`}
                style={{ top: topOffsets[index] }}
              >
                <div className="from-primary-dark/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                  <p className="mt-2.5 max-w-md text-sm leading-5.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
