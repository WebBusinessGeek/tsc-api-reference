import * as chai from "chai";
const ASSERT = chai.assert;



describe("Application", () => {
    it("should be equal", () => {
        let expected = "hello";
        let actual = "hello";
        ASSERT.equal(actual, expected, "they are equal");
    });
    it("should be true", () => {
        let actual = true;
        ASSERT.isTrue(actual);
    })
    it("should be false", () => {
        let actual = false;
        ASSERT.isFalse(actual);
    })
})