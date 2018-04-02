"use strict";
const Readable = require("stream").Readable;

function oneGame(){
  const r = new Readable();
  r.push("Team A 3, Team B 2");
  r.push(null);

  return r;
}

function twoGames(){
  const r = new Readable();
  r.push("Team A 3, Team B 2\n");
  r.push("Team C 2, Team D 0\n");
  r.push(null);

  return r;
}

function team1Wins(){
  return [{
    team1: {
      name: "Team A",
      score: 3
    },

    team2: {
      name: "Team B",
      score: 2
    }
  }];
}

function team2Wins(){
  return [{
    team1: {
      name: "Team A",
      score: 0
    },

    team2: {
      name: "Team B",
      score: 2
    }
  }];
}

function tiedGame(){
  return [{
    team1: {
      name: "Team A",
      score: 1
    },

    team2: {
      name: "Team B",
      score: 1
    }
  }];
}

function oneRankedGame(){
  return [{
    team1: {
      name: "Team A",
      score: 1,
      rankPoints: 3
    },

    team2: {
      name: "Team B",
      score: 0,
      rankPoints: 0
    }
  }];
}

function threeTeamsThreeGames(){
  return [
    {
      team1: {
        name: "Team A",
        score: 1,
        rankPoints: 3
      },

      team2: {
        name: "Team B",
        score: 0,
        rankPoints: 0
      }
    },
    {
      team1: {
        name: "Team A",
        score: 4,
        rankPoints: 1
      },

      team2: {
        name: "Team C",
        score: 4,
        rankPoints: 1
      }
    },
    {
      team1: {
        name: "Team B",
        score: 2,
        rankPoints: 0
      },

      team2: {
        name: "Team C",
        score: 4,
        rankPoints: 3
      }
    },
  ];
}

module.exports = {
  oneGame,
  twoGames,
  team1Wins,
  team2Wins,
  tiedGame,
  oneRankedGame,
  threeTeamsThreeGames
};
