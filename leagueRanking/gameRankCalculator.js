"use strict";

class GameRankCalculator {

  constructor(games){
    this.games = games;
  }
  
  rankGames(){
    return this.games.map((game) => {
      const team1 = game.team1;
      const team2 = game.team2;

      const ranked = this.rankGame(team1, team2);

      const rankedGame = {
        team1: ranked[0],
        team2: ranked[1]
      };

      return rankedGame;
    });
  }

  rankGame(team1, team2){
    const t1r = { ...team1, rankPoints: 0 };
    const t2r = { ...team2, rankPoints: 0 };

    if (t1r.score > t2r.score){
      t1r.rankPoints = 3;
    }

    if (t1r.score === t2r.score){
      t1r.rankPoints = 1;
      t2r.rankPoints = 1;
    }

    if (t1r.score < t2r.score) {
      t2r.rankPoints = 3;
    }

    return [t1r, t2r];
  }

};

module.exports = GameRankCalculator;
