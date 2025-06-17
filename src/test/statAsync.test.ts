import * as statsAsync from "../statsAsync";

describe("stats asyncshould", () =>{
    it("calculate the sum of all elements of the array", async() => {
        const result = await statsAsync.sum([1, 2, 3, 4, 5]);
        const expected = 15;
        expect(expected).toBe(result);
    })
    it("calculates the average of all elements of the array (async)", async () => {
        const result = await statsAsync.average([1, 2, 3]);
        const expected = 2;
        expect(result).toBe(expected);
    });
})