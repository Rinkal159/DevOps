import getValues from "./getValues";

describe("check truthy-falsy values", () => {
    test('values to be truthy', () => {
        expect(getValues(1)).toBeTruthy();
    });
    test('values to be truthy', () => {
        expect(getValues(true)).toBeTruthy();
    });
    test('values to be falsy', () => {
        expect(getValues(false)).toBeFalsy();
    });
    test('values to be falsy', () => {
        expect(getValues(0)).toBeFalsy();
    });
})


