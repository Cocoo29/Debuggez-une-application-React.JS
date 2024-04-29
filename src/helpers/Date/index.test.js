import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function returns 'janvier' for the date 2022-01-01", () => {
            const dateTest = new Date("2022-01-01");
            expect(getMonth(dateTest)).toBe("janvier");
        });
        it("the function returns 'juillet' for the date 2022-07-08", () => {
            const dateTest = new Date("2022-07-08");
            expect(getMonth(dateTest)).toBe("juillet");
        });
    });
});
