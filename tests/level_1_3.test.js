const level_1_3 = require("../level_1_3")
// "I love water!" becomes "Imus lophylumvellia wativatelliar!"

describe("", () => {
    test("it should return \"i love water!\" becomes \"imus lophylumvellia wativatelliar!\"", () => {
        const message = "i love water!";
        const plantLatin = level_1_3.translatePlantLatin(message);

        expect(plantLatin).toEqual("imus lophylumvellia wativatelliar!");        
    });

    test("it should return \"hello world\" becomes \"helliallophylum wophylumrld\"", () => {
        const message = "hello world";
        const plantLatin = level_1_3.translatePlantLatin(message);

        expect(plantLatin).toEqual("helliallophylum wophylumrld");        
    });
    
    test("it should return \"community college\" becomes \"cophylummmureanimusty cophylumllelliagellia\"", () => {
        const message = "community college";
        const plantLatin = level_1_3.translatePlantLatin(message);

        expect(plantLatin).toEqual("cophylummmureanimusty cophylumllelliagellia");        
    });

    test("it should return \"human beings\" becomes \"hureamativan beings\"", () => {
        const message = "human beings";
        const plantLatin = level_1_3.translatePlantLatin(message);

        expect(plantLatin).toEqual("hureamativan belliaimusngs");        
    });

});