import { products } from "./products.js";

const index = new Map();
for (const p of products) {
  for (const word of [...p.name.toLowerCase().split(/\s+/), ...p.tags]) {
    index.set(word, [...(index.get(word) ?? []), p.sku]);
  }
}

export const lookup = (word) => index.get(word.toLowerCase()) ?? [];
