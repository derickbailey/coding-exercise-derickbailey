"use strict";
const TeamParser = require("../leagueRanking/teamParser");
const dataHelpers = require("./helpers/dataHelpers");

describe("team parser", () => {
  
  describe("when receiving a 2 team names and 2 scores", () => {
    var result;

    beforeEach(async (done) => {
      const dataStream = dataHelpers.twoTeamsWithScores();
      const sparse = new TeamParser(dataStream);
      result = await sparse.getTeams();
      done();
    });
    
    it ("should produce team a with the correct score", () => {
      const team = result[0];
      expect(team.name).toBe("Team A");
      expect(team.score).toBe(3);
    });

    it ("should produce team b with the correct score", () => {
      const team = result[1];
      expect(team.name).toBe("Team B");
      expect(team.score).toBe(0);
    });
  });

});
