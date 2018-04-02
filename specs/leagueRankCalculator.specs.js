"use strict";

const dataHelpers = require("./helpers/dataHelpers");
const LeagueRankCalculator = require("../leagueRanking/leagueRankCalculator");

describe("league rank calculator", () => {

  describe("when one team has more league points than another", () => {
    var rankedTeams;

    beforeEach(() => {
      const teams = dataHelpers.twoTeamsWithLeaguePoints();
      const calculator = new LeagueRankCalculator(teams);
      rankedTeams = calculator.rank();
    });

    it("should rank the team with more points in first place", () => {
      const team = rankedTeams[0];
      expect(team.name).toBe("Team A");
      expect(team.rank).toBe(1);
    });

    it("shoud rank the team with fewer points in second place", () => {
      const team = rankedTeams[1];
      expect(team.name).toBe("Team B");
      expect(team.rank).toBe(2);
    });
  });

  describe("when three teams are tied in league points", () => {
    var rankedTeams;

    beforeEach(() => {
      const teams = dataHelpers.twoTeamsWithTiedLeaguePoints();
      const calculator = new LeagueRankCalculator(teams);
      rankedTeams = calculator.rank();
    });

    it("should rank the first team in first place", () => {
      const team = rankedTeams[0];
      expect(team.name).toBe("Team B");
      expect(team.rank).toBe(1);
    });

    it("shoud rank the second team as tied in first place", () => {
      const team = rankedTeams[1];
      expect(team.name).toBe("Team A");
      expect(team.rank).toBe(1);
    });

    it("shoud rank the third team as tied in first place", () => {
      const team = rankedTeams[2];
      expect(team.name).toBe("Team C");
      expect(team.rank).toBe(1);
    });
  });

  describe("when multiple teams have played multiple games", () => {
    var rankedTeams;

    beforeEach(() => {
      const teams = dataHelpers.fourTeamsWithLeaguePoints();
      const calculator = new LeagueRankCalculator(teams);
      rankedTeams = calculator.rank();
    });

    it("should rank Team D in 1st place", () => {
      const team = rankedTeams[0];
      expect(team.name).toBe("Team D");
      expect(team.rank).toBe(1);
    });

    it("should rank Team A tied 2nd place", () => {
      const team = rankedTeams[1];
      expect(team.name).toBe("Team A");
      expect(team.rank).toBe(2);
    });

    it("should rank Team B tied for 2nd place", () => {
      const team = rankedTeams[2];
      expect(team.name).toBe("Team B");
      expect(team.rank).toBe(2);
    });

    it("should rank Team C in 4th place", () => {
      const team = rankedTeams[3];
      expect(team.name).toBe("Team C");
      expect(team.rank).toBe(4);
    });

  });

});
