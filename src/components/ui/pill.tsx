import React from "react";

type PillProps = {
  label: string;
  className?: string;
};

export default function Pill({ label, className = "" }: PillProps) {
  return (
    <div
      className={`font-regular mr-4 mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs text-white shadow-sm backdrop-blur-md ${className}`}
    >
      {label}
    </div>
  );
}

export { Pill };
