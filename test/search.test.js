import test from "node:test";
import assert from "node:assert";
import { search } from "../src/search.js";

test("finds the mug by tag", () => {
  assert.deepStrictEqual(search("kitchen"), ["MUG-01", "extra"]);
});
