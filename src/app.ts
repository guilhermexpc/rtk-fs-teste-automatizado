import http from "node:http";

const products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Smartphone", price: 2200 },
  { id: 3, name: "Fone de ouvido", price: 300 },
  { id: 4, name: "Teclado", price: 180 },
  { id: 5, name: "Mouse", price: 150 }
];

const app = http.createServer((request, response) => {
  if (request.url === "/products" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(products));
  }
});

export { app };
