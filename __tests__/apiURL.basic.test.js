const functions = require("../leetcode");

describe("API URL:", () => {
  it("It must be correct", async () => {
    let apiUrl = await functions.getApiURL();
    expect(apiUrl).toMatch(
      /https:\/\/leetcode.com\/api\/problems\/all/
    );
  });
});
