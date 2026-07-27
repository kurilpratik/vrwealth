import { marketTicks } from "../data/market";

export function MarketTicker({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const items = [...marketTicks, ...marketTicks];
  const isDark = variant === "dark";
  return (
    <div
      className={`overflow-hidden border-y ${
        isDark
          ? "bg-primary-dark border-white/10 text-white"
          : "border-border bg-background text-foreground"
      }`}
      aria-label="Live market ticker"
    >
      <div className="ticker-track flex w-max gap-10 py-3.5">
        {items.map((tick, i) => {
          const up = tick.changePct >= 0;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-2 text-sm whitespace-nowrap"
            >
              <span
                className={isDark ? "text-white/60" : "text-muted-foreground"}
              >
                {tick.symbol}
              </span>
              <span className="font-medium tabular-nums">{tick.price}</span>
              <span
                className="text-xs tabular-nums"
                style={{
                  color: up ? "#53be70" : "red",
                }}
              >
                {up ? "▲" : "▼"} {Math.abs(tick.changePct).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
