import { createServer } from "node:http";
import { products } from "./products.js";

createServer((req, res) => {
  if (req.url === "/products") return res.end(JSON.stringify(products));
  res.statusCode = 404;
  res.end();
}).listen(3000);
