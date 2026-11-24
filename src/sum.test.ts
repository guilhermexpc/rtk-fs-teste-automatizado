import { expect, test, describe } from "@jest/globals";
import { sum } from "./server";

describe("sum function", () => {
  it("sum of 1 and 2 must be 3", () => {
    const result = sum(1, 4);

    expect(result).toBe(5);
  });

  test("sum of 10 and 4 must be 14", () => {
    const result = sum(10, 4);

    expect(result).toBe(14);
  });
});
