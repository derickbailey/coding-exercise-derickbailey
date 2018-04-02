"use strict";
const GameParser = require("../leagueRanking/gameParser");
const dataHelpers = require("./helpers/dataHelpers");

describe("game parser", () => {
  
  describe("when receiving a game with two teams, each having a score", () => {
    var game;

    beforeEach(async (done) => {
      const dataStream = dataHelpers.twoTeamsWithScores();
      const sparse = new GameParser(dataStream);
      const games = await sparse.getGames();
      game = games[0];
      done();
    });
    
    it ("should produce 'Team A' with the correct score", () => {
      const team = game.team1;
      expect(team.name).toBe("Team A");
      expect(team.score).toBe(3);
    });

    it ("should produce 'Team B' with the correct score", () => {
      const team = game.team2;
      expect(team.name).toBe("Team B");
      expect(team.score).toBe(2);
    });
  });

});
