const codes = { WELCOME10: 0.1, FALL20: 0.2 };

export function applyDiscount(subtotal, code) {
  const rate = codes[code?.toUpperCase()] ?? 0;
  return Math.round(subtotal * (1 - rate));
}
