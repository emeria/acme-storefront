export function createCart() {
  return { items: [] };
}

export function addItem(cart, sku, qty = 1) {
  cart.items.push({ sku, qty });
  return cart;
}
