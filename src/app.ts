import http from "node:http";

const products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Smartphone", price: 2200 },
  { id: 3, name: "Fone de ouvido", price: 300 },
  { id: 4, name: "Teclado", price: 180 },
  { id: 5, name: "Mouse", price: 150 }
];

const app = http.createServer((req, res) => {
  if (req.url === "/products" && req.method === "GET") {
    res.end(JSON.stringify(products));
  }
});

export { app };
