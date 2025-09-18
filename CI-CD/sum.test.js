import sum from "./Utils/sum";

describe("math operations", () => {
    test("2 + 2 = 4", () => {
        expect(sum(2, 2)).toBe(4);
    });
    test("12 + 24 = 36", () => {
        expect(sum(12, 24)).toBe(36);
    })
})
