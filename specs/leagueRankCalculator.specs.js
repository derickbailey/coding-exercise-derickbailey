"use strict";

const dataHelpers = require("./helpers/dataHelpers");
const LeagueRankCalculator = require("../leagueRanking/leagueRankCalculator");

describe("league rank calculator", () => {
  
  describe("when a team has played a single game", () => {
    var leagueRank;

    beforeEach(() => {
      const rankedGames = dataHelpers.oneRankedGame();
      const calculator = new LeagueRankCalculator(rankedGames);
      leagueRank = calculator.rank();
    });

    it("should report that game's ranked points for the team", () => {
      const team1 = leagueRank["Team A"];
      expect(team1.leaguePoints).toBe(3);
    });
  });

  describe("when a team has played multiple games", () => {
    it("should sum the ranked points for all games");
  });

  describe("when multiple teams have played one or more games", () => {
    it("should report all ranked game points for all teams");
  });

});
