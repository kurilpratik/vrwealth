export type MarketTick = {
  symbol: string;
  price: string;
  changePct: number;
};

export const marketTicks: MarketTick[] = [
  { symbol: "NIFTY 50", price: "24,318.15", changePct: 0.42 },
  { symbol: "SENSEX", price: "79,802.90", changePct: 0.51 },
  { symbol: "BANK NIFTY", price: "51,247.30", changePct: -0.18 },
  { symbol: "NIFTY IT", price: "42,910.60", changePct: 1.12 },
  { symbol: "RELIANCE", price: "2,984.25", changePct: 0.66 },
  { symbol: "TCS", price: "4,132.40", changePct: -0.24 },
  { symbol: "HDFC BANK", price: "1,712.80", changePct: 0.31 },
  { symbol: "INFY", price: "1,865.15", changePct: 1.05 },
  { symbol: "GOLD", price: "72,410", changePct: 0.22 },
  { symbol: "SILVER", price: "89,120", changePct: -0.44 },
  { symbol: "CRUDE OIL", price: "6,342", changePct: 1.87 },
  { symbol: "USD/INR", price: "83.42", changePct: -0.05 },
  { symbol: "BTC/USD", price: "68,214", changePct: 2.14 },
  { symbol: "NASDAQ", price: "18,972.30", changePct: 0.78 },
  { symbol: "S&P 500", price: "5,812.44", changePct: 0.34 },
];
