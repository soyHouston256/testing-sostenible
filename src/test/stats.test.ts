import { sum, average } from "../stats";

describe("stats should", () => {
    it("calculate the sum of all elements of the array", () => {
        const result = sum([1, 2, 3, 4, 5]);
        const expected = 15;
        expect(expected).toBe(result);
    })
    it("calculates the average of all elements of the array (async)", () => {
        const result = average([1, 2, 3]);
        const expected = 2;
        expect(result).toBe(expected);
    });
})
