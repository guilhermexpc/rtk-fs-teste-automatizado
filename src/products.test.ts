import request from "supertest";
import { app } from "./app";
import { describe, it, expect } from "@jest/globals";

describe("products", () => {
  it("should return a list of products", async () => {
    const response = await request(app).get("/products");
    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body).toHaveLength(5);
    expect(response.body).toEqual([
      { id: 1, name: "Notebook", price: 3500 },
      { id: 2, name: "Smartphone", price: 2200 },
      { id: 3, name: "Fone de ouvido", price: 300 },
      { id: 4, name: "Teclado", price: 180 },
      { id: 5, name: "Mouse", price: 150 }
    ]);
  });
});
