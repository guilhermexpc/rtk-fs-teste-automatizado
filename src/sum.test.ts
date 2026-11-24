import { expect, test, describe, it, beforeAll, afterAll } from "@jest/globals";
import { sum } from "./sum";

// Test suite for sum function
describe("sum function", () => {
  let sumResult: number;
  // beforeAll hook to set up sumResult before tests run
  beforeAll(() => {
    sumResult = 5;
  });

  // Test case for sum function with it syntax
  it("sum of 1 and 2 must be 3", () => {
    const result = sum(1, 4);

    expect(result).toBe(sumResult);
  });

  // Test case for sum function
  test("sum of 10 and 4 must be 14", () => {
    const result = sum(10, 4);

    expect(result).toBe(14);
  });

  // afterAll hook to reset sumResult after all tests have run
  afterAll(() => {
    sumResult = 0;
  });
});
