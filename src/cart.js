export function createCart() {
  return { items: [] };
}

export function addItem(cart, sku, qty = 1) {
  cart.items.push({ sku, qty });
  return cart;
}

export const TAX_RATE = 0.0825;

export function totals(cart, priceOf) {
  const subtotal = cart.items.reduce((sum, i) => sum + priceOf(i.sku) * i.qty, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  return { subtotal, tax, total: subtotal + tax };
}
