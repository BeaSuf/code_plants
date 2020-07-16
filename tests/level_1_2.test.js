const level_1_2 = require("../level_1_2")

describe("", () => {
    test("it should return array with [[1, 1]] for [{gardenLocation: [1, 1], needsWater: true}, {gardenLocation: [1, 1], needsWater: false}]", () => {
        const plants = [{gardenLocation: [1, 1], needsWater: true}, {gardenLocation: [1, 1], needsWater: false}];
        const grid = level_1_2.whereToWater(plants);

        expect(grid.length).toEqual(1);
        expect(grid[0]).toEqual([1,1]);        
    });    
});