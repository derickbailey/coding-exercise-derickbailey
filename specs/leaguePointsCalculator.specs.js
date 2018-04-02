"use strict";

const dataHelpers = require("./helpers/dataHelpers");
const LeaguePointsCalculator = require("../leagueRanking/leaguePointsCalculator");

describe("league rank calculator", () => {
  
  describe("when a team has played a single game", () => {
    var leagueRank;

    beforeEach(() => {
      const rankedGames = dataHelpers.oneRankedGame();
      const calculator = new LeaguePointsCalculator(rankedGames);
      leagueRank = calculator.sumUp();
    });

    it("should report that game's ranked points for the team", () => {
      const team1 = leagueRank["Team A"];
      expect(team1.leaguePoints).toBe(3);
    });
  });

  describe("when three teams have played two games each", () => {
    var leagueRank;

    beforeEach(() => {
      const rankedGames = dataHelpers.threeTeamsThreeGames();
      const calculator = new LeaguePointsCalculator(rankedGames);
      leagueRank = calculator.sumUp();
    });

    it("should sum the ranked points for Team A", () => {
      const team1 = leagueRank["Team A"];
      expect(team1.leaguePoints).toBe(4);
    });

    it("should sum the ranked points for Team B", () => {
      const team1 = leagueRank["Team B"];
      expect(team1.leaguePoints).toBe(0);
    });

    it("should sum the ranked points for Team C", () => {
      const team1 = leagueRank["Team C"];
      expect(team1.leaguePoints).toBe(4);
    });
  });

});
