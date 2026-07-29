"use client";

import { faqs } from "@/src/data/faqsData";
import { AnimatePresence, motion } from "motion/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../../ui/ScrollReveal";

const ContactFaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <ScrollReveal className="ml-auto w-full max-w-3xl py-4 pb-28 sm:py-42 sm:pb-0">
      <h2 className="heading text-primary mb-10">Frequently Asked Questions</h2>

      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {faqs.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={item.question} className="py-5 sm:py-6">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-6 text-left"
              >
                <span className="text-base font-semibold text-black decoration-blue-500 underline-offset-4 group-hover:underline sm:text-lg">
                  {item.question}
                </span>
                <span className="mt-0.5 shrink-0 text-neutral-800">
                  {isOpen ? (
                    <X className="size-5 stroke-[1.5]" aria-hidden />
                  ) : (
                    <Plus className="size-5 stroke-[1.5]" aria-hidden />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 max-w-none text-sm leading-7 text-neutral-600 sm:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
};

export default ContactFaqSection;
