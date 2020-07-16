const level_1_1 = require("../level_1_1")

describe("", () => {
    test("it should return array with [5, 4] array for 19 seeds", () => {
        const grid = level_1_1.grid(19);

        expect(grid.length).toEqual(2);
        expect(grid[0]).toEqual(4);
        expect(grid[1]).toEqual(5);
    });

    test("it should return array with [1, 1] array for 1 seeds", () => {
        const grid = level_1_1.grid(1);

        expect(grid.length).toEqual(2);
        expect(grid[0]).toEqual(1);
        expect(grid[1]).toEqual(1);
    });

    test("it should return array with [2, 2] array for 3 seeds", () => {
        const grid = level_1_1.grid(3);

        expect(grid.length).toEqual(2);
        expect(grid[0]).toEqual(2);
        expect(grid[1]).toEqual(2);
    });

    test("it should return array with [4, 4] array for 16 seeds", () => {
        const grid = level_1_1.grid(16);

        expect(grid.length).toEqual(2);
        expect(grid[0]).toEqual(4);
        expect(grid[1]).toEqual(4);
    });
});