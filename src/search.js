import { products } from "./products.js";

const index = new Map();
for (const p of products) {
  for (const word of [...p.name.toLowerCase().split(/\s+/), ...p.tags]) {
    index.set(word, [...(index.get(word) ?? []), p.sku]);
  }
}

export const lookup = (word) => index.get(word.toLowerCase()) ?? [];

export function search(query, { page = 1, perPage = 20 } = {}) {
  const skus = [...new Set(query.split(/\s+/).flatMap(lookup))];
  return skus.slice((page - 1) * perPage, page * perPage);
}
