const stock = new Map([["MUG-01", 40], ["TEE-02", 25], ["BAG-03", 12]]);

export function reserve(sku, qty) {
  stock.set(sku, (stock.get(sku) ?? 0) - qty);
  return stock.get(sku);
}
