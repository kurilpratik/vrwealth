"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqItems = [
  {
    question: "Expansion of Investment Products",
    answer:
      "VR Wealth Creation may have expanded its offerings to include a wider range of investment products and strategies. This could involve adding new asset classes like alternative investments, real estate, or international equities to cater to diverse client needs and risk profiles.",
  },
  {
    question: "Development of Investment Strategies",
    answer:
      "The team may be designing customized investment strategies that balance growth and stability. These strategies are tailored to each client’s financial goals, time horizon, and risk tolerance.",
  },
  {
    question: "Growth in Assets Under Management (AUM)",
    answer:
      "A committed focus on portfolio performance and client acquisition often leads to steady growth in AUM, reflecting successful client outcomes and stronger market presence.",
  },
  {
    question: "Enhanced Portfolio Management",
    answer:
      "Advanced portfolio management services can include dynamic asset allocation, tax-aware investing, and regular rebalancing to keep client portfolios aligned with evolving market conditions.",
  },
  {
    question: "Client Portfolio Performance",
    answer:
      "Consistent monitoring and reporting ensure clients stay informed about portfolio performance, with clear updates on returns, risks, and any recommended adjustments.",
  },
];

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="small-heading mx-auto">Frequently Asked Questions</p>
          <h2 className="heading">
            Everything you need to know about our growth and services
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore the next phase of our investment advisory offerings,
            portfolio strategies, and client support with clarity and
            confidence.
          </p>
        </div>

        <div className="mt-14 space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-2 shadow-[0_40px_120px_rgba(15,23,42,0.35)] sm:p-4">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950 transition-all duration-300 ${
                  isActive ? "ring-primary/40 ring-1" : "hover:bg-slate-900/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-100 sm:text-lg">
                    {item.question}
                  </span>
                  <span className="text-primary text-2xl font-bold">
                    {isActive ? "×" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="px-6 pb-6 text-sm leading-7 text-slate-300 sm:px-8"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
