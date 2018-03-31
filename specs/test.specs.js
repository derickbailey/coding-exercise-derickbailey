"use strict";
var test = require("../leagueRanking");

describe("a basic test", () => {
  var result;

  beforeEach(() => {
    result = test(1, 2);
  });

  it("should work", () => {
    expect(result).toBe(3);
  });
});
