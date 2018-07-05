var DetectRoot = require("nativescript-detect-root").DetectRoot;
var detectRoot = new DetectRoot();

describe("greet function", function() {
    it("exists", function() {
        expect(detectRoot.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(detectRoot.greet()).toEqual("Hello, NS");
    });
});