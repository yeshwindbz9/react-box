import { sum } from "../src/components/sum";

test("testing the sum of two integers", () => {
  const res = sum(1, 1);
  //Assertions
  expect(res).toBe(2);
});
