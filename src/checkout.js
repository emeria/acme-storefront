import { totals } from "./cart.js";
import { reserve } from "./inventory.js";

export function checkout(cart, priceOf) {
  for (const item of cart.items) reserve(item.sku, item.qty);
  return { status: "confirmed", ...totals(cart, priceOf) };
}
