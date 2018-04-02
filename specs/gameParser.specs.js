"use strict";
const GameParser = require("../leagueRanking/gameParser");
const dataHelpers = require("./helpers/dataHelpers");

describe("game parser", () => {
  
  describe("when receiving a game with two teams, each having a score", () => {
    var game;

    beforeEach(async (done) => {
      const dataStream = dataHelpers.oneGame();
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

  describe("when receiving two games", () => {
    var games;

    beforeEach(async (done) => {
      const dataStream = dataHelpers.twoGames();
      const sparse = new GameParser(dataStream);
      games = await sparse.getGames();
      done();
    });
    
    it ("should produce the correct number of games", () => {
      expect(games.length).toBe(2);
    });

    it("should produce the correct data for the first game", () => {
      expect(games[0].team1.name).toBe("Team A");
      expect(games[0].team1.score).toBe(3);
      expect(games[0].team2.name).toBe("Team B");
      expect(games[0].team2.score).toBe(2);
    });

    it("should produce the correct data for the second game", () => {
      expect(games[1].team1.name).toBe("Team C");
      expect(games[1].team1.score).toBe(2);
      expect(games[1].team2.name).toBe("Team D");
      expect(games[1].team2.score).toBe(0);
    });
  });

});
