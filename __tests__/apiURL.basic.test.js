const functions = require("../leetcode");

describe("API URL:", () => {
  it("It must be correct", () => {
    expect(functions.getApiURL()).toMatch(
      /https:\/\/leetcode.com\/api\/problems\/all/
    );
  });
});
