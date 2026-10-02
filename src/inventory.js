const stock = new Map([["MUG-01", 40], ["TEE-02", 25], ["BAG-03", 12]]);

export function reserve(sku, qty) {
  const left = (stock.get(sku) ?? 0) - qty;
  if (left < 0) throw new Error(`Only ${stock.get(sku) ?? 0} of ${sku} left`);
  stock.set(sku, left);
  return left;
}
