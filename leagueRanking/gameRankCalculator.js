"use strict";

const calculator = {
  
  rankGames: function(games){
    return games.map((game) => {
      const team1 = game.team1;
      const team2 = game.team2;

      const ranked = this.rankGame(team1, team2);

      const rankedGame = {
        team1: ranked[0],
        team2: ranked[1]
      };

      return rankedGame;
    });
  },

  rankGame: function(team1, team2){
    const t1r = {
      name: team1.name, 
      score: team1.score,
      rankPoints: 0
    };
    const t2r = {
      name: team2.name, 
      score: team2.score,
      rankPoints: 0
    };

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

module.exports = calculator;
