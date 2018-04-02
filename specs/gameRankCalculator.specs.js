"use strict";
const calculator = require("../leagueRanking/gameRankCalculator");
const dataHelpers = require("./helpers/dataHelpers");

describe("game rank calculator", () => {

  describe("when the first team has more points than the second team", () => {
    var rankedGame;

    beforeEach(() => {
      const games = dataHelpers.team1Wins();
      const rankedGames = calculator.rankGames(games);
      rankedGame = rankedGames[0];
    });

    it("should award 3 rank points to the first team", () => {
      expect(rankedGame.team1.rankPoints).toBe(3);
    });

    it("should award 0 rank points to the second team", () => {
      expect(rankedGame.team2.rankPoints).toBe(0);
    });

  });

  describe("when the second team has more points than the first team", () => {
    var rankedGame;

    beforeEach(() => {
      const games = dataHelpers.team2Wins();
      const rankedGames = calculator.rankGames(games);
      rankedGame = rankedGames[0];
    });

    it("should award 0 rank points to the first team", () => {
      expect(rankedGame.team1.rankPoints).toBe(0);
    });

    it("should award 3 rank points to the second team", () => {
      expect(rankedGame.team2.rankPoints).toBe(3);
    });

  });

  describe("when the teams are tied", () => {
    var rankedGame;

    beforeEach(() => {
      const games = dataHelpers.tiedGame();
      const rankedGames = calculator.rankGames(games);
      rankedGame = rankedGames[0];
    });

    it("should award 1 rank points to the first team", () => {
      expect(rankedGame.team1.rankPoints).toBe(1);
    });

    it("should award 1 rank points to the second team", () => {
      expect(rankedGame.team2.rankPoints).toBe(1);
    });

  });

});
