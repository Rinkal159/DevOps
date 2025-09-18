describe("check truthy-falsy values", () => {
    test('values to be truthy', () => {
        expect(1).toBeTruthy();
    });
    test('values to be truthy', () => {
        expect(true).toBeTruthy();
    });
    test('values to be falsy', () => {
        expect(false).toBeFalsy();
    });
    test('values to be falsy', () => {
        expect(0).toBeFalsy();
    });
})


